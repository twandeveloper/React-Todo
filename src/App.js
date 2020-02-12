import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Todos from './components/Todos/Todos'

import Header from './components/Header/Header'

import './App.css'


export class App extends Component {
  state = {
    todos: [
      {task: 'todo 1'}
    ],
    todo: ''
  }

  getTodoHandler = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodoHandler = (event, taskIndex) => { 
    const todoObj = {task: this.state.todo}
    console.log(todoObj);
    console.log(taskIndex);
    
    
    const todos = [...this.state.todos, todoObj]
    console.log(todos);
    
    this.setState({todos: todos})
    this.setState({todo: ''})
    event.preventDefault()
    event.target.reset()
  }

  clearTodoInputHandler = () => {
    this.setState({todo: ''})
    
  }

  deleteTodo = (taskIndex) => {
    const todos = [...this.state.todos]
    todos.splice(taskIndex, 1)
    this.setState({todos: todos}) 
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Todos 
          todos={this.state.todos}
          delete={this.deleteTodo}
          addTodo={(event) => this.addTodoHandler(event)}
          getTodo={(event) => this.getTodoHandler(event)}
          clearInput={this.clearTodoInputHandler}/>
      </div>
    )
  }
}



export default App
