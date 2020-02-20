import React from 'react'
import { Button } from "react-bootstrap";
const DeleteButton = (props) => (
  
    <Button variant='danger' size='lg' block onClick={props.delete}>Remove</Button>
    
)
export default DeleteButton