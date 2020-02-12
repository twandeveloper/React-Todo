import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

import TodoItem from './TodoItem/TodoItem'

import classes from './Todos.module.css'

export default function Todos(props) {

    const todos = props.todos.map((todo, index) => {
        return(
        <TodoItem 
            todo={todo}
            key={index}
            delete={() => props.delete(index)}/>)
    })

    return (
        <Jumbotron className={classes.Todos}>
            { todos }
        </Jumbotron>
    )
}
