import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Todos from './components/Todos/Todos'
import Header from './components/Header/Header'
import './App.css'
import firebase from './firebase'


export class App extends Component {
  state = {
    todos: [],
    todo: ''
  }

  componentDidMount() {

    const todosRef = firebase.database().ref('todos');

    todosRef.on('value', (snapshot) => {
      let todos = snapshot.val();
      let newTodos = [];

      for(let todo in todos) {
        newTodos.push({
          id: todo,
          task: todos[todo].task,
          author: todos[todo].author,
          isCompleted: todos[todo].isCompleted
        })
      }
      
      this.setState({todos: newTodos})
    })
      
      
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.todos === this.state.todos) {
  //     return false
  //   }
  //   console.log('fired off');
  //   this.setState({todos: nextState.todos})
  //   return true
  // }

  getTodoHandler = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodoHandler = (event) => {

    event.preventDefault()
    const todoRef = firebase.database().ref('todos');

    const newTodo = {
      task: this.state.todo,
      user: 'Antoine',
      isCompleted: false
    }

    if (this.state.todo) {

      todoRef.push(newTodo)
      this.setState({todo: ''})
      event.target.reset()
    }


  }
  clearTodoInputHandler = () => {
    this.setState({todo: ''})
  }

  completedHandler = (todoId, todoTask) => {
    const todoRef = firebase.database().ref(`/todos/${todoId}`);
    todoRef.update({
      isCompleted: (todoTask === true ? false : true)
    })
    
    
  }

  deleteTodo = (todoId) => {
    const todoRef = firebase.database().ref(`/todos/${todoId}`);
    
    todoRef.remove();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Todos 
          todos={this.state.todos}
          delete={this.deleteTodo}
          complete={this.completedHandler}
          addTodo={(event) => this.addTodoHandler(event)}
          getTodo={(event) => this.getTodoHandler(event)}
          clearInput={this.clearTodoInputHandler}/>
      </div>
    )
  }
}



export default App
