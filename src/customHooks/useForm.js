import { useState } from 'react';

export default function useForm (initialState) {
    const [form, setForm] = useState(initialState);

    const handleForm = (name, value) => {
        const newForm = { ...form, [name]: value };
        setForm(newForm)
    }
    
    return { form, handleForm};
}