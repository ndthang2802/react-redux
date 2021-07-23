import React,{ useState } from 'react'
import { Button, Col, Form, InputGroup, Row,  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Register } from '../redux/action/auth'
export default function RegisterForm() {

    const dispatch = useDispatch()


    const [RegisterData,setRegisterData] = useState({
        fullname:"",
        email:"",
        password:"",
        confirm:""
    })

    

    const OnRegisterChange = (e) => {
        setRegisterData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }


    const RegisterSubmit = (e) => {
        e.preventDefault()
        var _RegisterData = RegisterData
        delete _RegisterData.confirm
        dispatch(Register(_RegisterData))

    }


    return (
        <Form onSubmit={RegisterSubmit} >
            <Row>
                <Form.Group as={Col} className='p-3' controlId='REGISTER-fullname' >
                    <InputGroup hasValidation>
                        <InputGroup.Text>Full name</InputGroup.Text>
                        <Form.Control type='text' placeholder='your full name' required name='fullname'  onChange={OnRegisterChange} />
                    </InputGroup>
                </Form.Group>
            </Row> 
            <Row>
                <Form.Group as={Col} className='p-3' controlId='REGISTER-username' >
                    <InputGroup hasValidation>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control type='text' placeholder='email' required name='email' onChange={OnRegisterChange} />
                    </InputGroup>
                </Form.Group>
                <Col></Col>
            </Row>
            <Row>
            <Form.Group as={Col} className='p-3' controlId='REGISTER-password'>
                <InputGroup hasValidation>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control type='password' placeholder='password' required name='password' onChange={OnRegisterChange} />
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} className='p-3' controlId='REGISTER-confirmpassword'>
                <InputGroup hasValidation>
                    <InputGroup.Text>Confirm</InputGroup.Text>
                    <Form.Control type='password' placeholder='confirm' required name='confirm' onChange={OnRegisterChange} />
                </InputGroup>
            </Form.Group>
            </Row>
            <Form.Group className='d-flex justify-content-end px-3'>
                <Button type='submit'>
                    Register
                </Button>
            </Form.Group>
        </Form>
    )
}
