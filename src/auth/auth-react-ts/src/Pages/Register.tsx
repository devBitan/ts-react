import React from 'react';
import { useForm } from '../Hooks/useForm';  // Asegúrate de importar el hook desde donde lo definiste
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
    const navigate = useNavigate()
  // Usamos el hook `useForm` para controlar los campos del formulario
  const { formState, onInputChange, onResetForm } = useForm({
    userName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Manejo de envío del formulario
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Muestra los valores actuales en la consola
    console.log('Valores del formulario:', formState);
    navigate('/dashboard', {
      replace: true, // Para reemplazar la ruta actual en el navegador
      state: { 
        logged:true,
        name: formState.userName,
      }, // Para pasar datos al dashboard después de login (por ejemplo obtener el nombre)
    })
    
    // Aquí podrías hacer otras operaciones como enviar a una API
    onResetForm();  // Si quieres resetear el formulario después de enviarlo
  };

  return (
    <div className='container-auth'>
      <h1>App Register</h1>
      <form onSubmit={onSubmit}>
      <div>
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            value={formState.userName}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
