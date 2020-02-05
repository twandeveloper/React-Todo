import React, { Component } from 'react'
import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'
import './App.css'


export class App extends Component {
  state = {
    todos: [],
    todo:{}
  }

  getTodo = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodo = (event) => { 
    const todoObj = {task: this.state.todo}
    console.log(todoObj);
    
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
        <h1>Todo</h1>
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
