import React, { Component } from 'react'
import axios from './axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import Todos from './components/Todos/Todos'
import Header from './components/Header/Header'

import './App.css'


export class App extends Component {
  state = {
    todos: [],
    todo: ''
  }

  componentDidMount() {
    axios.get('/todos.json')
      .then(res => {
        const fireTodo  = res.data
        console.log(res.data);
        
        const todoArr = []

        for(let key in fireTodo) {
          todoArr.push(fireTodo[key])
        }
        console.log(todoArr);
        this.setState({todos: todoArr})
      })

      
      
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.todos === this.state.todos) {
      return false
    }
    console.log('fired off');
    this.setState({todos: nextState.todos})
    return true
  }

  getTodoHandler = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodoHandler = (event, taskIndex) => { 

    const newTodo = {
      task: this.state.todo,
      user: 'Antoine'
    }

    axios.post('/todos.json', newTodo)
      .then(response => {
        console.log(response);
        const updateTodos = [...this.state.todos, newTodo]
        this.setState({todos: updateTodos})
        this.setState({todo: ''})
      })

    
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
