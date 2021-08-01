import React,{ useState,useEffect } from 'react'
import { Alert, Button, Col, Container, Form, InputGroup, ListGroup, Row, Toast } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { AddTodo, LoadTodo, DeleteTodo } from '../redux/action/todo'
import { STOP_NOTIFICATION,EMPTY_DELETE_WARNING, EMPTY_ADD_WARNING } from '../redux/action/types'
import { v4 as uuidv4 } from 'uuid'
import { Redirect } from 'react-router-dom'
import TodoItem from './TodoItem' 
export default function Main() {

    const dispatch = useDispatch()
    const { isLoggedIn, user } = useSelector(state => state.User)
    const { message, type } = useSelector(state => state.Notification)
    const { todolist } = useSelector(state => state.Todo)

    const [todo, setTodo] = useState('')
    const [notification, setNotificationShow] = useState(false)
    const [listJob,setListJob] = useState([])

    useEffect(()=>{
        if (isLoggedIn)
            dispatch(LoadTodo(user))
    },[])

    useEffect(() => {
        setListJob(todolist)
    }, [todolist])


    const AddTodoToList = (e) => {
        e.preventDefault()

        if (todo === ''){
            dispatch({ type: EMPTY_ADD_WARNING })
        }

        else {

            var newTodo = todolist.slice()  
            
            var todo_item = {
                id : uuidv4(),
                title : todo,
                done  : false
            }
    
            newTodo.push(todo_item)
    
            setTodo('')
    
            dispatch(AddTodo({ todolist : newTodo },user))
        }
        
    }

    const clearAllFinishedTodo = () => {

        if (todolist.length === 0) {
            dispatch({type : EMPTY_DELETE_WARNING})
        }
        else {

            var newTodo = todolist.filter(todo => todo.done === false )
    
            dispatch(DeleteTodo({ todolist : newTodo },user))

        }
    }

    const clearAllTodo = () => {

        if (todolist.length === 0) {
            dispatch({type : EMPTY_DELETE_WARNING})
        }

        else {

            var newTodo = []
    
            dispatch(DeleteTodo({ todolist : newTodo },user))
        }

    }

    useEffect(()=>{
        if (message) {
            setNotificationShow(true)
            setTimeout(()=>{
                setNotificationShow(false)
                dispatch({ type : STOP_NOTIFICATION, payload: '' })
            }, 1500 )
        }
        else {
            setNotificationShow(false)
        }
    },[message])

    const onTodoChange = (e) => {
        setTodo(e.target.value)
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    if ( ! isLoggedIn) {
        return <Redirect to='auth'/>
    }
    return (
        <div className='d-flex align-items-center justify-content-center min-vh-100 min-vw-100' >
           <Container className='border p-3 rounded w-75'>
               <Row>
                    <Col md='9'>
                    <Row className = 'p-2'>
                   <Col><b>{capitalizeFirstLetter(user.user.fullname)}</b></Col>
               </Row>
               <Row className='p-2'>
                   <Col md={10}>
                        <InputGroup hasValidation>
                            <Form.Control type='text' placeholder='todo' name='todo' value={todo} required onChange={onTodoChange} />
                        </InputGroup>
                   </Col>
                   <Col md={2} className='d-flex align-items-center justify-content-center'>
                        <Button onClick={AddTodoToList}>Add</Button>
                   </Col>
               </Row>
               <Row className='my-2 mx-4'>
                   {
                    listJob.length !== 0 ? 
                       <ListGroup>
                           {
                               listJob.map((job,idx)=> {
                                   return < TodoItem key={idx} job = {job} idx = {idx} />
                               })
                            }
                       </ListGroup>
                        :
                        <Alert variant='warning' >Nothing to do </Alert>
                   }
               </Row>
               <Row className='p-2'>
                    <Col md={3}>
                        <Button variant = 'danger' onClick={clearAllTodo} >Clear All</Button>
                    </Col>
                    <Col md={3}>
                        <Button onClick = {clearAllFinishedTodo} >Clear finished</Button>
                    </Col>
               </Row>
                    </Col>
                    <Col md={3}>
                        <Toast className={`d-inline-block m-1 bg-${type}`}  show ={notification}>
                            <Toast.Body className={type === 'dark' && 'text-white'} style={{ backgroundColor : 'hsla(0,0%,100%,.8)' }} >
                                {message}
                            </Toast.Body>
                        </Toast>
                    </Col>
               </Row>
           </Container>
        </div>
    )
}
