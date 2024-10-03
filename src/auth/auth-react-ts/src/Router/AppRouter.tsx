import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { HomePage } from '../Pages/HomePage'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register'
import { Dashboard } from '../Pages/Dashboard'
import PrivateRouter from './PrivateRoute'

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="dashboard" element={
                    <PrivateRouter>
                        <Dashboard />
                    </PrivateRouter>
                } />
            </Route>
        </Routes>
    );
};

export default AppRouter;

