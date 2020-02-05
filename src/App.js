import React, { Component } from 'react'
import Todos from './Todos/Todos'
import './App.css'


export class App extends Component {
  state = {
    todos: [],
    todo:''
  }

  getTodo = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodo = (event) => {
    event.preventDefault()
    const todos = [...this.state.todos]
    todos.push(this.state.todo)
    this.setState({todos: todos})
    this.setState({todo: ''})
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo</h1>
        <Todos todos={this.state.todos}/>
        <form onSubmit={this.addTodo}>
          <input type='text' value={this.state.todo} onChange={this.getTodo}/>
          <input type='submit' value='Submit' />
        </form>
    
      </div>
    )
  }
}



export default App
