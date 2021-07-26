import React,{ useState,useEffect } from 'react'
import { Alert, Button, Col, Container, Form, InputGroup, ListGroup, OverlayTrigger, Row, Toast, Tooltip } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { BsTrashFill,BsCheck,BsPencil,BsListCheck } from 'react-icons/bs'
import { AddTodo } from '../redux/action/todo'
import { STOP_NOTIFICATION } from '../redux/action/types'
export default function Main() {

    const dispatch = useDispatch()
    const { isLoggedIn, user } = useSelector(state => state.User)
    const { message, type } = useSelector(state => state.Notification)
    const { todolist, donelist } = useSelector(state => state.Todo)

    const [todo, setTodo] = useState()
    const [notification, setNotificationShow] = useState(false)
    const [listJob,setListJob] = useState([])

    useEffect(() => {
        setListJob(todolist)
    }, [todolist])


    const AddTodoToList = (e) => {
        e.preventDefault()

        var newTodo = todolist.slice()  
        
        newTodo.push(todo)


        dispatch(AddTodo({ todolist : newTodo },user))
        
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
    return (
        <div className='d-flex align-items-center justify-content-center min-vh-100 min-vw-100' >
           <Container className='border p-3 rounded w-75'>
               <Row>
                    <Col md='9'>
                    <Row className = 'p-2'>
                   <Col><h3>{message}</h3></Col>
                   <Col>{user.user.fullname}</Col>
               </Row>
               <Row className='p-2'>
                   <Col md={10}>
                        <InputGroup hasValidation>
                            <Form.Control type='text' placeholder='todo' name='todo' required onChange={onTodoChange} />
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
                               listJob.map((job,idx)=> (
                                    <ListGroup.Item action variant='info' key={idx} className='my-1'>
                                        <Row style={{ fontSize : '1.5rem', lineHeight:'1.5rem' }}>
                                            <Col md={9}>{job}</Col>
                                            <Col md={1}>
                                                    <OverlayTrigger
                                                        placement='bottom'
                                                        overlay={
                                                            <Tooltip id={`delete-${idx}`}>
                                                                Delete
                                                            </Tooltip>
                                                        }
                                                        >
                                                        <BsTrashFill />
                                                    </OverlayTrigger>
                                            </Col>
                                            <Col md={1}>
                                                    <OverlayTrigger
                                                        placement='bottom'
                                                        overlay={
                                                            <Tooltip id={`edit-${idx}`}>
                                                                Edit
                                                            </Tooltip>
                                                        }
                                                        >
                                                        <BsPencil />
                                                    </OverlayTrigger>
                                            </Col>
                                            <Col md={1}>
                                                    <OverlayTrigger
                                                        placement='bottom'
                                                        overlay={
                                                            <Tooltip id={`completed-${idx}`}>
                                                                Marked as completed
                                                            </Tooltip>
                                                        }
                                                        >
                                                        <BsCheck />
                                                    </OverlayTrigger>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                               ))
                            }
                       </ListGroup>
                        :
                        <Alert variant='danger' >Nothing to do </Alert>
                   }
               </Row>
               <Row className='p-2'>
                    <Col md={3}>
                        <Button>Clear All</Button>
                    </Col>
               </Row>
                    </Col>
                    <Col md={3}>
                        <Toast className="d-inline-block m-1 bg-success" bg={type} show ={notification}>
                            <Toast.Header closeButton={false}>
                            <BsListCheck style={{ fontSize: '1.5rem' }} />
                            <strong className="me-auto mx-2">Notification</strong>
                            
                            </Toast.Header>
                            <Toast.Body className={type === 'dark' && 'text-white'} style={{ backgroundColor : 'hsla(0,0%,100%,.5)' }} >
                                {message}
                            </Toast.Body>
                        </Toast>
                    </Col>
               </Row>
           </Container>
        </div>
    )
}
