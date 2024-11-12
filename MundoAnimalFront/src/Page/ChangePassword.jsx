import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAnimalState } from '../Context/GlobalContext';

const ChangePassword = () => {
    const { state, dispatch } = useAnimalState();
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        contraseñaAnterior: "",
        nuevaContraseña: "",
        confirmarContraseña: ""
    });
    const navigate = useNavigate();
    const userId = state.userId; // Obtener el ID del usuario desde el estado

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { contraseñaAnterior, nuevaContraseña, confirmarContraseña } = data;
        if (nuevaContraseña !== confirmarContraseña) {
            setError("Las nuevas contraseñas no coinciden. Por favor intenta de nuevo.");
            return;
        }
        if(nuevaContraseña.length < 8){
            setError("La nueva contraseña debe tener al menos 8 caracteres. Por favor intenta de nuevo.");
            return;
        }
        try {
            await axios.put(`https://happy-smile-production.up.railway.app/usuarios/changePassword/2`, {
                contraseñaAnterior,
                nuevaContraseña
            });
            console.log("Contraseña cambiada exitosamente");
            navigate('/'); // Redirigir a la página de inicio u otra página después del éxito
        } catch (err) {
            console.error("Error al cambiar la contraseña:", err);
            setError("Error al cambiar la contraseña. Por favor intenta de nuevo.");
        }
    };

    return (
        <div className='container-change-password'>
            {state.userActive ?
            <form className='form' onSubmit={handleSubmit}>
                <p>Cambiar Contraseña</p>
                <input
                    type="password"
                    placeholder='Contraseña Anterior'
                    name="contraseñaAnterior"
                    value={data.contraseñaAnterior}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder='Nueva Contraseña (al menos 8 caracteres)'
                    name="nuevaContraseña"
                    value={data.nuevaContraseña}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder='Confirmar Nueva Contraseña'
                    name="confirmarContraseña"
                    value={data.confirmarContraseña}
                    onChange={handleChange}
                />
                <input className="change-password-button" type="submit" value="Cambiar Contraseña" />
                {error && <span className="error-message">{error}</span>}
            </form>
            : 
            <div className='error'>
                <p>Error 401 - Unauthorized: You must log in as an administrator to access this page.
                Please log in with an administrator account to continue. If you don’t have the required permissions, contact the system administrator for assistance.
                </p>
            </div>}
        </div>
    );
};

export default ChangePassword;
