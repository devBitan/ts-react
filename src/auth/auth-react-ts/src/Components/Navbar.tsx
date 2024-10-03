import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Navbar: React.FC = ({ }) => {

    const navigate = useNavigate()

    const { state } = useLocation()
    console.log(state)

    const onLogout = () => {
        navigate('/login', {
            replace: true, // Para reemplazar la ruta actual en el navegador
            state: null, // Para borrar los datos del dashboard después de logout
        }
            
        )
    }
    return (
        <>
            <header>
                <h1>
                    <Link to="/">Logo</Link>
                </h1>
                {
                    state?.logged ? (

                        <div className='user'>
                            <span className='user-name'>{state?.name}</span>
                            <button className='btn-logout' onClick={onLogout}>Logout</button>
                        </div>
                    ) : (
                        <nav>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </nav>
                    )
                }
            </header>
            <Outlet />
        </>
    )
}

