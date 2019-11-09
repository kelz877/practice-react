import React, { Component } from 'react'

class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      newToDo: this.props.newToDo

    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleDelete(){
    this.props.deleteItem(this.props.id)
  }
  toggleEdit(){
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleUpdate(evt){
    evt.preventDefault()
    //take new data and pass it up to parent
    this.props.updateItem(this.props.id, this.state.newToDo)
    this.setState({ isEditing: false })
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value      
    })
  };
  render(){
    let results;
    if(this.state.isEditing){
      results = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.newToDo} name="NewToDo" onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </div>
      )
    }
    else{
      results =  (
      <div>
        <h3>{this.props.newToDo}</h3>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
    }
    return results
  }
}
export default ToDoItem