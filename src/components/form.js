import React, { useState } from 'react';
import InputForm from './inputForm';
import FooterForm from './footerForm';
import styles from '@/styles/Home.module.css';

const Form = ({ title, inputs, btn, footer, onSubmit, onClick, className }) => {
    const [formData, setFormData] = useState({});  // Cambiado a objeto para almacenar los datos del formulario

    // Actualizar datos en formData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Enviar datos al padre
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit({ ...formData, code: generateRandomCode() });  // Genera el código aleatorio aquí
    };

    // Función para generar un código aleatorio
    const generateRandomCode = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let code = '';
        for (let i = 0; i < 3; i++) {
            code += letters.charAt(Math.floor(Math.random() * letters.length));  // 3 letras
        }
        for (let i = 0; i < 3; i++) {
            code += numbers.charAt(Math.floor(Math.random() * numbers.length));  // 3 números
        }
        return code;
    };

    return (
        <form className={`mx-auto rounded-3 p-3 mb-5 ${styles.formW} ${className}`}  onSubmit={handleSubmit} style={{ boxShadow: '0 0 20px black', backgroundColor:'#3c3c3c' }}>
            <h2 className='mb-5 fs-1' style={{ color: '#ffd05a'}}>{title}</h2>
            {inputs.map((input, index) => (
                <InputForm
                    key={index}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                    onChange={handleChange}
                    options={input.options}
                />
            ))}
            <button
                type="submit"
                className={`d-flex position-relative m-auto border-0 rounded-3 fs-3 ${styles.laserButton}`}
                style={{ padding: '1% 10%', backgroundColor: '#333', color: '#ffd05a'}}
                onClick={onClick}
            >
                {btn}
            </button>
            <FooterForm {...footer} />
        </form>
    );
};

export default Form;