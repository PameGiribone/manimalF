import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimalState } from '../Context/GlobalContext'; // Asegúrate de importar el contexto
import FormPasswordRecuperation from './FormPasswordRecuperation';

const Popover = ({ show, onClose, email }) => {
    const { dispatch } = useAnimalState(); // Usar el contexto para la gestión del estado global
  const navigate = useNavigate();

    if (!show) return null;



    const handleNavigation = (path) => {
        onClose(); 
        navigate(path);
    };

     const handleLogout = () => {
        localStorage.removeItem("userActive")
       
        dispatch({ type: "SET_USER_ACTIVE", payload: false });
        dispatch({ type: "SET_USER_ID", payload: null });
        dispatch({ type: "SET_USER_EMAIL", payload: null });
        
        navigate('/login');
    }; 

    return (
        <div className="popover">
            <div className="popover-content">
                <p>{email}</p>
                <hr className="hr-custom"/>
                <button onClick={() => handleNavigation('/productManagement')}>Gestión de Productos</button>
                <hr className="hr-custom"/>
                <button onClick={() => handleNavigation('/changePassword')}>Password</button>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
            <div className="popover-overlay" onClick={onClose}></div>
        </div>
    );
};

export default Popover;
