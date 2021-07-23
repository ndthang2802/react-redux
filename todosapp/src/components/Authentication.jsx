import React,{ useState, useEffect } from 'react'
import {Alert, Container, Modal, Tab, Tabs } from 'react-bootstrap'
import LoginForm from './Login'
import RegisterForm from './RegisterForm'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
export default function Authentication() {

    const { message, type } = useSelector(state => state.Notification)
    const [NotificationShow,setNotificationShow] = useState(false)
    
    const history = useHistory()

    useEffect(() => {
        if (message !== '' ){
            setNotificationShow(true)
            setTimeout(()=>{
                setNotificationShow(false)
                history.push('/dashboard')
            }, 1000 )
            
        }
        else {
            setNotificationShow(false)
        }
    }, [message])

    const handleClose = () => {
        setNotificationShow(false)
    }

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
