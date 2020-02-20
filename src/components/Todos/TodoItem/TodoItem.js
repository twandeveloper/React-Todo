import React from 'react'
import {ListGroup} from 'react-bootstrap'
import DeleteButton from './DeleteButton/DeleteButton'

import classes from './TodoItem.module.css'

export default function TodoItem(props) {

    let delbutton = null;
    if (props.taskComplete) {
        delbutton = <DeleteButton delete={props.delete}/>
    } else {
        delbutton = null
    }

    return (
        <ListGroup.Item
            className={classes.todoItem}
        >
            <span>
            <p 
                style={{textDecoration: props.taskComplete ? 'line-through' : 'none'}}
                onClick={props.complete}
            >
                {props.todo.task}
            </p>
        
            {delbutton}
            </span>
        </ListGroup.Item>
    )
}
