import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Todos from './components/Todos/Todos'
import Header from './components/Header/Header'
import Aux from './Hoc/Aux/Aux'
import './App.css'
import firebase from './firebase'
import TodoContext from './contexts/TodoContext'


export class App extends Component {
  state = {
    todos: [],
    todo: '',
    show: false,
    setShow: true
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

  getTodoHandler = (event) => {
    this.setState({todo: event.target.value })
    console.log(this.state.todo);
    
  }

  addTodoHandler = (event) => {

    event.preventDefault()
    this.closeModalHandler();
    const todoRef = firebase.database().ref('todos');

    const newTodo = {
      task: this.state.todo.toUpperCase(),
      user: 'Antoine',
      isCompleted: false
    }

    if (this.state.todo) {

      todoRef.push(newTodo)
      this.setState({todo: ''})

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
    console.log(todoRef);
    // console.log(todoId);
    
    todoRef.remove();
  }

  showModalHandler = () => {
    console.log('clicked');
    
    this.setState({show: true})
  }

  closeModalHandler = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <div className='App'>
        <TodoContext.Provider 
          value={{
            show:this.state.show,
            todo: this.state.todo,
            openModal: this.showModalHandler, 
            closeModal: this.closeModalHandler,
            getTask: (e) => this.getTodoHandler(e),
            addTask: (e) => this.addTodoHandler(e)
          }}
        >
        <Header/>
        
          <Todos 
            todos={this.state.todos}
            delete={(event) => this.deleteTodo(event)}
            complete={this.completedHandler}
            clearInput={this.clearTodoInputHandler}
          />
        </TodoContext.Provider>
        </div>
    )
  }
}



export default App
