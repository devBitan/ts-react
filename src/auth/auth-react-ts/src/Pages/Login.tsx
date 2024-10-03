import React from 'react';
import { useForm } from '../Hooks/useForm';  // Asegúrate de importar el hook desde donde lo definiste
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {

    const navigate = useNavigate()

  // Usamos el hook `useForm` para controlar los campos del formulario
  const { formState, onInputChange, onResetForm } = useForm({
    userName: '',
    password: ''
  });

  // Manejo de envío del formulario
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Muestra los valores actuales en la consola
    console.log('Valores del formulario:', formState);
    // Aquí podrías hacer otras operaciones como enviar a una API
    navigate('/dashboard', {
      replace: true, // Para reemplazar la ruta actual en el navegador
      state: { 
        logged:true,
          name: formState.userName, // Obtener el nombre del usuario del formulario
          // Aquí podrías obtener más datos del usuario si es necesario
        
      }, // Para pasar datos al dashboard después de login (por ejemplo obtener el nombre)
    })
    onResetForm();  // Si quieres resetear el formulario después de enviarlo
  };

  return (
    <div className='container-auth'>
      <h1>App Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>name:</label>
          <input
            type="text"
            name="userName"
            value={formState.userName}
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
