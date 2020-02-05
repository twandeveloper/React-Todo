import React from 'react'

import classes from './TodoItem.module.css'

export default function TodoItem(props) {
    return (
        <p 
            className={classes.todoItem}
            onClick={props.delete}>{props.todo.task}</p>
    )
}
