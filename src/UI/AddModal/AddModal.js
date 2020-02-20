import React, { useContext } from 'react'
import { Button, Modal, Form, FormControl, InputGroup} from "react-bootstrap";
import Aux from '../../Hoc/Aux/Aux'
import TodoContext from '../../contexts/TodoContext';
import classes from './AddModal.module.css'


const AddModal = (props) => {

  const todo = useContext(TodoContext);

  return(
        <Aux>
          
            <Modal className={classes.AddModal} show={todo.show} onHide={todo.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <Form onSubmit={todo.addTask}>
                <InputGroup>
                  <FormControl placeholder='Enter Task' value={todo.todo} onChange={todo.getTask} />
                </InputGroup>
              </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={todo.closeModal} >
                  Close
                </Button>
                <Button variant="primary" onClick={todo.addTask}>
                  Add 
                </Button>
              </Modal.Footer>
            </Modal>
          
      </Aux>


  )

}


export default AddModal;