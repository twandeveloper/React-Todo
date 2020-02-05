import React from 'react'

export default function AddTodo(props) {
    return (
        <form onSubmit={props.addTodo}>
          <input type='text' value={props.todo} onChange={props.getTodo}/>
          <input type='submit' value='Submit' />
        </form>
    )
}
