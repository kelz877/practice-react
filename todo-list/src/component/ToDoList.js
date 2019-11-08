import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import ToDoForm from './ToDoForm'

class ToDoList extends Component{
  constructor(props){
    super(props)
    this.state = {todos: []}
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
  }
  add(newItem){
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }
  delete(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  };
 
  render(){
    const todos = this.state.todos.map(toDo => (
      <ToDoItem 
        newToDo={toDo.newToDo}
        key={toDo.id}
        id={toDo.id}
        editItem={() => this.edit(toDo.id)}
        deleteItem={this.delete}
      />
    ))
    console.log(todos)
    return (
      <div>
        <ToDoForm addItem={this.add} />
        {todos}
      </div>
    )
  }
}
export default ToDoList