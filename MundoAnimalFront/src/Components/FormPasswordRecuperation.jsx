import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from  'react-router-dom';

const FormPasswordRecuperation = () => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        try {
            const response = await axios.put('happy-smile-production.up.railway.app/usuarios/restablecerpassword', {
                token,
                nuevaContraseña: password
            });
            setMessage('Contraseña restablecida con éxito.');
            setError('');
            navigate('/login');
        } catch (err) {
            setError("Error al restablecer la contraseña. Por favor intenta de nuevo.");
            setMessage('');
        }
    };

    return (
        <div className='container-restablecer-contraseña'>
            <form className='form' onSubmit={handleSubmit}>
                <p>Restablecer Contraseña</p>
                <input
                    type="password"
                    placeholder='Nueva Contraseña'
                    name="nuevaContraseña"
                    value={password}
                    onChange={handleChange}
                />
                <input className="restablecer-button" type="submit" value="Restablecer Contraseña" />
                {message && <span className="success-message">{message}</span>}
                {error && <span className="error-message">{error}</span>}
            </form>
        </div>
    );
}

export default FormPasswordRecuperation