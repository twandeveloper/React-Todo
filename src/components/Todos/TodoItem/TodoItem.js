import React from 'react'
import {ListGroup} from 'react-bootstrap'

import classes from './TodoItem.module.css'

export default function TodoItem(props) {
    return (
        <ListGroup.Item
            className={classes.todoItem}
            onClick={props.delete}
        >
                {props.todo.task}
        </ListGroup.Item>
    )
}
