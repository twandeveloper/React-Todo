import React from 'react'

export const TodoContext = React.createContext({
    show: true,
    todo: '',
    openModal: () => {},
    closeModal: () => {},
    getTask: (e) => {},
    addTask: (e) => {}
});


export default TodoContext;