import React from 'react'
import classes from './AddButton.module.css'


const AddButton = (props) => {
    return(
        <button className={classes.Btn} onClick={props.handleShow}>Add</button>
    )
}

export default AddButton