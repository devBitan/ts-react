import React from 'react';

export const Register: React.FC = () => {
    return (
        <div className='container-auth'>
            <h1>App register</h1>
            <form action="">
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label>lastName:</label>
                    <input type='text' name='lastName' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='paswword' />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

