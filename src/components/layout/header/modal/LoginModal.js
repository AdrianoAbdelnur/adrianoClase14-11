import React, {useEffect, useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import './login.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

const LoginModal = ({show, setshow, users ,usuario, setUsuario}) => {
let navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = users.find((user)=>user.nombre === e.target[0].value);
    if(userFound && userFound.clave === e.target[1].value) {
        setUsuario(userFound);
        localStorage.setItem("user", JSON.stringify(userFound));
        navigate('/home');
    } else {
        alert('Wrong username or password');
    }
    setshow(false);
};

return (
    <Modal show={show} onHide={()=>(setshow(false))}>
        <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='form_container' onSubmit={handleSubmit}>
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
                <Button variant='primary' type='submit'>login</Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Link to='register' onClick={()=>(setshow(false))}>Register</Link>    
        </Modal.Footer>
    </Modal>
)
}

export default LoginModal
