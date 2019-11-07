import React, { Component } from 'react'
import uuid from 'uuid'


class NewBoxForm extends Component{
  //internal state in this component that manages the individual inputs
  constructor(props){
    super(props)
    this.state = { width: "", height: "", bkgrdcolor: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      //anytime there is a change we look for the name and set the state of the name to the new value in the form
      [evt.target.name]: evt.target.value
    })
  }

  //need to take the data that is in the form and pass it up to the boxlist component. when the form is submitted, we call addBox from th parent and are passing newBox (this.state etc.) from the form state upo to the parent that is managing all the boxes state
  handleSubmit(evt){
    evt.preventDefault();
    //creaet newBox variable which takes the existing height, width and color of box and adds a unique id to it
    const newBox = { ...this.state, id: uuid() }
    this.props.addBox(newBox);
    //refresh state
    this.setState({
      width: '',
      height: '',
      bkgrdcolor: ''
    })

  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            id="width" 
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            placeholder="Width"
          />
          <label htmlFor="height">Height</label>
          <input
            id="height" 
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            placeholder="Height"
          />
          <label htmlFor="bkgrdcolor">Background Color</label>
          <input
            id="bkgrdcolor" 
            type="text"
            name="bkgrdcolor"
            value={this.state.bkgrdcolor}
            onChange={this.handleChange}
            placeholder="Background Color"
          />
          <button>Make Box!</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm