import React from "react";

const InputForm = ({ name, placeholder, onChange, type, required, options, value }) => {
    if (type === 'select') {
        return (
            <select
                name={name}
                required={required}
                className="d-flex mx-auto mb-4 p-2 border-0 rounded-3 fs-3"
                style={{ backgroundColor: '#6c6c6c', width: '90%', color: 'white' }}
                onChange={onChange}
                value={value}
            >
                {/* Opción no seleccionable, actúa como placeholder */}
                <option value="" disabled selected>{placeholder}</option>

                {/* Otras opciones que son seleccionables */}
                {options.map((option, index) => (
                    <option key={index} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className="d-flex mx-auto mb-4 p-2 border-0 rounded-3 fs-3"
            style={{ backgroundColor: '#6c6c6c', width: '90%', height: '1%', color: 'white' }}
        />
    );
};

export default InputForm;