import React,{ useState, useEffect } from 'react'
import {Alert, Container, Modal, Tab, Tabs } from 'react-bootstrap'
import LoginForm from './Login'
import RegisterForm from './RegisterForm'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { STOP_NOTIFICATION } from '../redux/action/types'
export default function Authentication() {

    const { message, type } = useSelector(state => state.Notification)
    const { isLoggedIn } = useSelector(state => state.User)
    const dispatch = useDispatch()

    const [NotificationShow,setNotificationShow] = useState(false)
    const [loginSuccess,setLoginSuccess] = useState(false) 

    useEffect(() => {
        if (message !== '' ){
            setNotificationShow(true)
            setTimeout(()=>{
                setNotificationShow(false)
                dispatch({ type : STOP_NOTIFICATION, payload: '' })
                if (isLoggedIn) {
                    setLoginSuccess(true)
                }
            }, 1000 )
            
        }
        else {
            setNotificationShow(false)
        }
    }, [message])

    const handleClose = () => {
        setNotificationShow(false)
    }
    if (loginSuccess) {
        return  <Redirect to='/dashboard' />
    }
    else {
        return (
            <div className='d-flex align-items-center justify-content-center min-vh-100 min-vw-50'>
                <Container className='border p-5 rounded w-50'>
                        <Tabs defaultActiveKey='login' id='LOGIN-REGISTER'>
                            <Tab eventKey='login' title='Login'> 
                                <LoginForm />
                            </Tab>
                            <Tab eventKey='register' title='Register'>
                                <RegisterForm />
                            </Tab>
                        </Tabs>
                </Container>
                <Modal show={NotificationShow} onHide={handleClose} style = {{ height : '87px'}} >  
                        <Alert variant={type}>
                                {message}
                        </Alert>
                </Modal>
            </div>
        )
    }
}
