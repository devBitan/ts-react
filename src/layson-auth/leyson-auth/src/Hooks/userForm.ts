import { useState } from "react";

interface FormState { 
    [key: string]: any;
}

export const userForm = (initialForm: FormState = {}) => { 
    const [formState, setFormState] = useState<FormState>(initialForm) 
    //capture datos del formulario
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = e.target; 
        setFormState(
            { 
                ...formState,
                [name]: value
            }
        )
    };

    //resetear el formulario
    const onResetForm = () => {
        setFormState(initialForm) 
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm, 
    }
};



