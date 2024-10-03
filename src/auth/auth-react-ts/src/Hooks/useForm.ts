import { useState } from "react";

// Define una interfaz para tipar el formulario si es más específico o deja un Record genérico
interface FormState {
    [key: string]: any;
  }

export const useForm = (initialForm: FormState = {}) => { // por defecto es un diccionario vacio
    const [formState, setFormState] = useState<FormState>(initialForm);

    // Tipamos el evento como React.ChangeEvent<HTMLInputElement>
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}

//https://www.youtube.com/watch?v=tqc8n3odVp0&ab_channel=Programaci%C3%B3nparaelMundo min 25