import React, { Component } from 'react'
import uuid from 'uuid'

class ToDoForm extends Component {
  constructor(props){
    super(props)
      this.state = { newToDo: '' }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value      
    })
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {...this.state, id: uuid()}
    this.props.addItem(newItem)
    this.setState({
      newToDo: ''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newToDo">
            To Do
          </label>
          <input 
            id="newToDo"
            name="newToDo"
            type="text"
            value={this.state.newToDo}
            onChange={this.handleChange}
            placeholder="To Do Item"
            />
          <button>Add Item</button>
        </form>
      </div>
    )
  }
}

export default ToDoForm