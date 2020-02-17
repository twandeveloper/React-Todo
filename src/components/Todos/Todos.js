import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import TodoItem from './TodoItem/TodoItem'
import AddTodo from '../AddTodo/AddTodo'

import classes from './Todos.module.css'

export default function Todos(props) {

    const todos = props.todos.map((todo) => {
        return(
        <TodoItem 
            todo={todo}
            key={todo.id}
            delete={() => props.delete(todo.id)}/>)
    })

    return (
        <Jumbotron className={classes.Todos}>
            { todos }
            <AddTodo
                addTodo={props.addTodo}
                getTodo={props.getTodo}
                clearInput={props.clearInput}/>
        </Jumbotron>
    )
}
