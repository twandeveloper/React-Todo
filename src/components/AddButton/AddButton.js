import React, {useContext} from 'react'
import classes from './AddButton.module.css'
import TodoContext from '../../contexts/TodoContext'


const AddButton = (props) => {
    const todo = useContext(TodoContext)
    return(
        <button className={classes.Btn} onClick={todo.openModal}>Add</button>
    )
}

export default AddButton