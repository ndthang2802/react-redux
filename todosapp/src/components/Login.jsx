import React,{ useState } from 'react'
import { Button, Form, InputGroup, } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Login } from '../redux/action/auth'
export default function LoginForm() {

    const dispatch = useDispatch()

    const [LoginData,setLoginData] = useState({
        email:'' , 
        password: ''
    })


    const OnLoginChange = (e) => {
        setLoginData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const LoginSubmit = (e) => {
        e.preventDefault()
        dispatch(Login(LoginData))
        
    }

    return (
        
        <Form onSubmit={LoginSubmit}>
            <Form.Group className='p-3' controlId='LOGIN-username' >
                <InputGroup hasValidation>
                    <InputGroup.Text>Email</InputGroup.Text>
                    <Form.Control type='text' placeholder='email' name='email' required onChange={OnLoginChange} />
                </InputGroup>
            </Form.Group>
            <Form.Group className='p-3' controlId='LOGIN-password'>
                <InputGroup hasValidation>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control type='password' placeholder='password' name='password'  required onChange={OnLoginChange}/>
                </InputGroup>
            </Form.Group>
            <Form.Group className='d-flex justify-content-end px-3'>
                <Button type='submit'>
                    Login
                </Button>
            </Form.Group>
        </Form>
                        
    )
}
