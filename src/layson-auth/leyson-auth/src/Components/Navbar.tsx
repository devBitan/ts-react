import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">Logo</Link>
                </h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
                <div className='user'>
                    <span className='user-name'>Leyson</span>
                    <button className='btn-logout'>logout</button>
                </div>
            </header>
            <Outlet />
        </>
    )
}
