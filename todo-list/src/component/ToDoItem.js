import React, { Component } from 'react'

class ToDoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    this.props.deleteItem(this.props.id)
  }
  render(){
    return (
      <div>
        <h3>{this.props.newToDo}</h3>
        <button onClick={this.props.editItem}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}
export default ToDoItem