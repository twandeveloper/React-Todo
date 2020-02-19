import React from 'react'
import {ListGroup} from 'react-bootstrap'

import classes from './TodoItem.module.css'

export default function TodoItem(props) {
    return (
        <ListGroup.Item
            className={classes.todoItem}
            onClick={props.complete}
        >
            <p style={{textDecoration: props.taskComplete ? 'line-through' : 'none'}}>{props.todo.task}</p>
        </ListGroup.Item>
    )
}
