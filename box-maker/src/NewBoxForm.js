import React, { Component } from 'react'
import uuid from 'uuid'


class NewBoxForm extends Component{
  constructor(props){
    super(props)
    this.state = { width: "", height: "", bkgrdcolor: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
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
          <input 
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            placeholder="Width"
          />
          <input 
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            placeholder="Height"
          />
          <input 
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