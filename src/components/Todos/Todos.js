import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import TodoItem from './TodoItem/TodoItem'
import AddTodo from '../AddTodo/AddTodo'
import AddButton from '../AddButton/AddButton'
import AddModal from '../../UI/AddModal/AddModal'

import classes from './Todos.module.css'

export default function Todos(props) {

    const todos = props.todos.map((todo) => {
        return(
        <TodoItem
            todo={todo}
            key={todo.id}
            taskComplete={todo.isCompleted}
            delete={() => props.delete(todo.id)}
            complete={() => props.complete(todo.id, todo.isCompleted)}/>)
    })

    return (
        <Jumbotron className={classes.Todos}>
            { todos }
            <AddTodo
                addTodo={props.addTodo}
                getTodo={props.getTodo}
                clearInput={props.clearInput}/>

            <AddButton handleShow={props.handleShow}/>
            <AddModal show={props.show} setShow={props.setShow} handleClose={props.handleClose}
          handleShow={props.handleShow}/>
        </Jumbotron>
    )
}
