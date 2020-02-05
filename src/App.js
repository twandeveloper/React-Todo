import React, { Component } from 'react'
import Todos from './components/Todos/Todos'
import AddTodo from './components/AddTodo/AddTodo'
import Header from './components/Header/Header'

import './App.css'


export class App extends Component {
  state = {
    todos: [
      {task: 'todo 1'}
    ]
  }

  getTodo = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodo = (event, taskIndex) => { 
    const todoObj = {task: this.state.todo}
    console.log(todoObj);
    console.log(taskIndex);
    
    
    const todos = [...this.state.todos, todoObj]
    console.log(todos);
    
    this.setState({todos: todos})
    event.preventDefault()
    event.target.reset()
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
          delete={this.deleteTodo}/>
        <br/>
        <AddTodo 
          todo={this.props.todo} 
          addTodo={(event) => this.addTodo(event)}
          getTodo={(event) => this.getTodo(event)}/>
      </div>
    )
  }
}



export default App
