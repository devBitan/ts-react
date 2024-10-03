import React from 'react';
import { userForm } from '../Hooks/userForm';

export const Login: React.FC = () => {

const {formState, onInputChange, onResetForm} = userForm({
  
})

const onLogin =(e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("valores del formulario", formState)

    onResetForm()
}

    return (
        <div className='container-auth'>
            <h1>App login</h1>
            <form onSubmit={onLogin}>
                <div>
                    <label>name:</label>
                    <input 
                        type='text' 
                        name='userName' 
                        value ={formState.userName}
                        onChange = {onInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type='password' 
                        name='password'  
                        value={formState.password}
                        onChange = {onInputChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

