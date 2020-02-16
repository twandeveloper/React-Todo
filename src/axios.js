import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-todo-7fc87.firebaseio.com/'
})

export default instance;