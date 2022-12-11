import React, {useEffect, useState} from 'react'
import './header.css'
import LoginModal from './modal/LoginModal'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Brand from './breakingBadLogo.png'

const Header = () => {
    const [loginModalShow, setloginModalShow] = useState(false)    
    const [users, setUsers] = useState([1])
    const [usuario, setUsuario] = useState({})
    const [login, setLogin] = useState()
    
    let navigate = useNavigate()
    const admin = [{
        'nombre':'admin',
        'correo':'administrador@gmail.com',
        'clave': '1234',
        'tipo':'admin',
    }   
    ];

  
    

    useEffect(() => {
        const local = (JSON.parse(localStorage.getItem("users")));
        setUsuario(JSON.parse(localStorage.getItem("user")));
        if (!local) {
            localStorage.setItem("users", JSON.stringify (admin));
            setUsers(JSON.parse(localStorage.getItem("users")));
        } else {
            setUsers(JSON.parse(localStorage.getItem("users")));
        }
    }, [])
    
    const verificarUsuaio = () => {
        if (usuario) {
            return <div className='user'>
                <img className='logo' src={Brand}></img>
                    <div className='links_container'>
                        <Link to='home'>Home</Link>
                        <Link to='episodes'>Characters by episodes</Link>
                    </div>
                <div>
                    <h5>User : {usuario.nombre}</h5> 
                    <Button variant='secondary' onClick={singOut}>Sing out</Button>
                </div>
            </div> 
        } else return <div className='user'>
                <img className='logo' src={Brand}></img>
                <Button className='userLoginButton' variant='secondary' onClick={() => setloginModalShow(true)}>Sing in</Button>
            </div>
    }

    const singOut = () => {
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload(true);
    }

    return (
    <div className='header_container'>
        {
            verificarUsuaio()
        }
        <LoginModal 
            show={loginModalShow} 
            setshow={setloginModalShow}
            users={users}
            usuario={usuario}
            setUsuario={setUsuario}
        />
    </div>
)
}

export default Header
