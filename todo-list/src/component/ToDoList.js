import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import ToDoForm from './ToDoForm'

class ToDoList extends Component{
  constructor(props){
    super(props)
    this.state = {todos: []}
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
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
  update(id, updatedToDo){
    const updatedToDos = this.state.todos.map(todo => {
      if(todo.id === id){
        return{ ...todo, newToDo: updatedToDo }
      }
      return todo
    })
    this.setState({ todos: updatedToDos })
  }
 
  render(){
    const todos = this.state.todos.map(toDo => (
      <ToDoItem 
        newToDo={toDo.newToDo}
        key={toDo.id}
        id={toDo.id}
        
        deleteItem={this.delete}
        updateItem={this.update}
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