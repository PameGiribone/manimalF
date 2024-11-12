import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAnimalState } from '../Context/GlobalContext';

const Login = () => {
    const {dispatch } = useAnimalState();
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    
    const navigate = useNavigate();

  

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const response = await axios.post('https://happy-smile-production.up.railway.app/usuarios/login', { email, password },
               
            );
            const user = response.data;
            dispatch({ type: "SET_USER_ACTIVE", payload: true });
            dispatch({ type: "SET_USER_ID", payload: user.id });
            dispatch({ type: "SET_USER_EMAIL", payload: user.email });

            localStorage.setItem("userActive", true)
            
            navigate('/');
        } catch (err) {
            setError("Email o contraseña incorrectos");
        }
    };
  

    return (
         
            <div className='container-login'>
            <form className='form' onSubmit={handleSubmit}>
                <p>LOGIN</p>
                <input type="email" placeholder='Email' name="email" value={data.email} onChange={handleChange} />
                <input type="password" placeholder='Contraseña' name="password" value={data.password} onChange={handleChange} />
                <input className="login-button" type="submit" value="Ingresar" />
                {error && <span className="error-message">{error}</span>}
            </form>
        </div>
            
            
            
        
    );
};

export default Login;
