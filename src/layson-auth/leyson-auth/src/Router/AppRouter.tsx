import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Dasboard, HomePage, Login, Register } from '../Pages';

const AppRouter: React.FC = () => {
    return (
       <Routes>
            <Route path='/' element={<Navbar/>} >
                <Route path='/'  element={<HomePage/>}/>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/register'  element={<Register/>}/>
                <Route path='/dashboard'  element={<Dasboard/>}/>
            </Route>
       </Routes>
    )
}

export default AppRouter;
