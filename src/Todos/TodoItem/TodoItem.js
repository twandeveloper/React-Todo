import React from 'react'

import classes from './TodoItem.module.css'

export default function TodoItem(props) {
    return (
        <p className={classes.todoItem}>{props.todo}</p>
    )
}
