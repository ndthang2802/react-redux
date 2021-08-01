import React,{ useState} from 'react'
import { Button, Col, Form, ListGroup, OverlayTrigger, Row, Tooltip,InputGroup } from 'react-bootstrap'
import { BsTrashFill,BsCheck,BsPencil } from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux'
import { DeleteTodo, MarkCompleted, EditTodoTitle } from '../redux/action/todo'
import { EMPTY_ADD_WARNING } from '../redux/action/types'

export default function TodoItem(props) {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.User)
    const { todolist } = useSelector(state => state.Todo)

    const { job, idx} = props

    const [isEdit, setIsEdit] = useState(false)
    const [edit, setEdit] = useState('')

    const EditChange = (e) => {
        setEdit(e.target.value)
    }


    const OpenEdit = () => {
        setIsEdit(true)
    } 

    const ExitEdit = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            
            setIsEdit(false)
            setEdit('')
          }
    }

    const DeleteTodoFromList = (jobId) => {

        var newTodo = todolist.filter(todo => todo.id !== jobId)
        
        dispatch(DeleteTodo({ todolist : newTodo },user))
    }

    const MarkTodoCompleted = (jobId) => {

            var newTodo = todolist.slice()  
            
            var item_index = newTodo.findIndex(todo=>todo.id === jobId)
            
            newTodo[item_index].done = true
    
            dispatch(MarkCompleted({ todolist : newTodo },user))

    }

    const EditTodo = (jobId) => {
        
        if (edit === '') {
            dispatch({ type: EMPTY_ADD_WARNING })
        }

        else {

            var newTodo = todolist.slice()  
            
            var item_index = newTodo.findIndex(todo=>todo.id === jobId)
            
            newTodo[item_index].title = edit

            dispatch(EditTodoTitle({ todolist : newTodo },user))
        }
    }

    return (
        <ListGroup.Item as='li' action key={idx} className='my-1' variant='flush'>
            <Row style={{ fontSize : '1.5rem', lineHeight:'1.5rem' }}>
                {
                job.done ?    
                    <Col md={9} className='text-decoration-line-through' >{job.title}</Col>
                :<Col md={9}>
                    {
                        isEdit ? 
                        <InputGroup className="mb-3" onBlur={ExitEdit} >
                            <Form.Control 
                            autoFocus 
                            placeholder={job.title}
                            aria-label="Recipient's edittodo"
                            aria-describedby="basic-addon2"
                            value = {edit}
                            onChange= {EditChange}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={()=>EditTodo(job.id)}  >
                                Change
                            </Button>
                        </InputGroup>
                        : job.title
                    }
                </Col>
                } 
                <Col md={1}>
                        <OverlayTrigger
                            placement='bottom'
                            overlay={
                                <Tooltip id={`delete-${idx}`}>
                                    Delete
                                </Tooltip>
                            }
                            >
                            <BsTrashFill onClick={()=>DeleteTodoFromList(job.id)} />
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
                            <BsPencil onClick={OpenEdit} />
                        </OverlayTrigger>
                </Col>
                <Col md={1}>
                        <OverlayTrigger
                            placement='bottom'
                            overlay={
                                <Tooltip id={`completed-${idx}`} >
                                    Marked as completed
                                </Tooltip>
                            }
                            >
                            <BsCheck onClick={()=>MarkTodoCompleted(job.id)} />
                        </OverlayTrigger>
                </Col>
            </Row>
        </ListGroup.Item>
                               
    )
}
