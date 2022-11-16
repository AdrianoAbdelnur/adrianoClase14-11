import React, {useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import './login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginModal = ({show, setshow, users, setUsers}) => {

  const traerUser = () => {
    setUsers(JSON.parse(localStorage.getItem("users")));
    console.log(users)
}


  return (
    <Modal show={show} onHide={()=>(setshow(false))}>
          <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='container'>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='nombre'>Nombre:</label>
                        </Col>
                        <Col sm={9}>
                            <input className='w-100' name='nombre'></input>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='password'>Contraseña:</label>
                        </Col>
                        <Col sm={9}>
                            <input className='w-100' name='password'></input>
                        </Col>  
                    </Row>
                </div>
                <Button variant='primary' onClick={traerUser}>login</Button>
            </form>
        </Modal.Body>
    </Modal>
  )
}

export default LoginModal