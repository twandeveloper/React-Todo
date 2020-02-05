import React from 'react'
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
        <div className={classes.Todos}>
            {todos}
        </div>
    )
}
