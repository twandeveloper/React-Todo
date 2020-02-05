import React from 'react'
import CurrentDate from '../CurrentDate/CurrentDate'
import classes from './Header.module.css'

export default function Header() {
    return (
        <div className={classes.Header}>
            <h1>Todo List</h1>
            <CurrentDate/>
        </div>
    )
}
