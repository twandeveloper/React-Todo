import React, { Component } from 'react'
import axios from './axios'
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
          author: todos[todo].author
        })
      }
      console.log(newTodos);
      
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

  addTodoHandler = (event, taskIndex) => { 
    const todoRef = firebase.database().ref('todos');

    event.preventDefault()

    const newTodo = {
      id: this.state.todos.length + 1,
      task: this.state.todo,
      user: 'Antoine'
    }

    todoRef.push(newTodo)

    this.setState({todo: ''})

    
    event.target.reset()
  }

  clearTodoInputHandler = () => {
    this.setState({todo: ''})
    
  }

  deleteTodo = (todoId) => {

    const todoRef = firebase.database().ref(`/todos/${todoId}`);

    todoRef.remove();
    

    // const test = this.state.todos[taskId - 1];
    // console.log(typeof test);
    
    

    // axios.get('/todos.json/' + test)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
        
    //   })

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
