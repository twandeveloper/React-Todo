import React from 'react'
import {InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import classes from './AddTodo.module.css'

export default function AddTodo(props) {
    return (
      <Form className={classes.AddTodo} onSubmit={props.addTodo} >
           <InputGroup>
        <FormControl placeholder='Enter Task' value={props.todo} onChange={props.getTodo}/>
          {/* <input type='text' value={props.todo} onChange={props.getTodo}/>
          <input type='submit' value='Submit' /> */}
       
            <InputGroup.Append >
              <Button variant='outline-secondary' type='reset' onClick={props.clearInput}>Clear</Button>
              <Button variant='outline-secondary' type='submit' >Add Task</Button>
            </InputGroup.Append>
        </InputGroup>
      </Form>
    )
}
