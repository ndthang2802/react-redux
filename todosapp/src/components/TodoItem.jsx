import React,{ useState} from 'react'
import { Button, Col, Form, ListGroup, OverlayTrigger, Row, Tooltip,InputGroup } from 'react-bootstrap'
import { BsTrashFill,BsCheck,BsPencil } from 'react-icons/bs'

export default function TodoItem(props) {

    const { job, idx, DeleteTodoFromList, MarkTodoCompleted} = props

    const [isEdit, setIsEdit] = useState(false)
    const [edit, setEdit] = useState('')

    const EditChange = (e) => {
        setEdit(e.target.value)
        console.log(edit)
    }



    // EDIT

    const OpenEdit = () => {
        setIsEdit(true)
    }

    

    const ExitEdit = () => {
        setIsEdit(false)
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
                        <InputGroup className="mb-3" onBlur={ExitEdit}  >
                            <Form.Control autoFocus 
                            placeholder={job.title}
                            aria-label="Recipient's edittodo"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
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
