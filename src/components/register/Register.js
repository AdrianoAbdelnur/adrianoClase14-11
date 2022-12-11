import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './register.css'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    let users;
    let navigate = useNavigate()
    
    const handleRegister = (e) => {
        e.preventDefault();
        const user = {
            'nombre': e.target[0].value,
            'apellido': e.target[1].value,
            'correo':e.target[2].value,
            'clave': e.target[3].value,
            'tipo':'user',
        }
        users = (JSON.parse(localStorage.getItem("users")));
        const userFound = users.find((each) => each.nombre === user.nombre || each.correo === user.correo )
        console.log(userFound)
        if (userFound) {
            alert('Choose another name and email')
        }else {
            users.push(user);
            localStorage.setItem("users", JSON.stringify (users));
            alert('The user was successfully registered')
            navigate('/');
            window.location.reload(true);
        }
    };
return (
    <div className='register_containar'>
        <div>
            <form className='form_container' onSubmit={handleRegister}>
                <h3>Complete the form to register</h3>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='name'>Name:</label>
                        </Col>
                        <Col sm={6}>
                            <input className='w-100' name='name'></input>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='surName'>Surname:</label>
                        </Col>
                        <Col sm={6}>
                            <input className='w-100' name='surName'></input>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='mail'>mail:</label>
                        </Col>
                        <Col sm={6}>
                            <input className='w-100' name='mail'></input>
                        </Col>  
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col sm={3}>
                            <label id='password'>password:</label>
                        </Col>
                        <Col sm={6}>
                            <input className='w-100' name='password'></input>
                        </Col>  
                    </Row>
                </div>
                <Button variant='primary' type='submit'>Register</Button>
            </form>
        </div>
    </div>
  )
}

export default Register
