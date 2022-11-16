import React, {useState} from 'react'
import './header.css'
import LoginModal from './modal/LoginModal'
import { Button } from 'react-bootstrap'

const Header = () => {
  
    const [loginModalShow, setloginModalShow] = useState(false)
    
    const [users, setUsers] = useState('')
    const user = {
        'nombre':'admin',
        'correo':'administrador@gmail.com',
        'clave': '1234',
        'tipo':'admin',
        };   

    localStorage.setItem("users", JSON.stringify (user)); 
    
    return (
    <div className='header_container'>
        <Button variant="secondary" onClick={() => setloginModalShow(true)}>LOGIN</Button>
    
        <LoginModal 
        show={loginModalShow} 
        setshow={setloginModalShow}
        users={users}
        setUsers={setUsers}
        />
    </div>
  )
}

export default Header