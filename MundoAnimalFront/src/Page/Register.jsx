import React, { useEffect, useState } from 'react';
import { useAnimalState } from '../Context/GlobalContext';
import axios from 'axios';

const Register = () => {
  const { state, dispatch } = useAnimalState();
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '', // Este campo se convertirá en un objeto en handleSubmit
    imagen: ''
  });


  useEffect(()=>{
    const userOn = localStorage.getItem("userActive") === "true"
    if(userOn){
        dispatch({type: "SET_USER_ACTIVE", payload:true})
    }
   },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      // Si el campo es 'categoria', convertimos el valor a número
      [name]: name === 'categoria' ? parseInt(value, 10) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, descripcion, precio, categoria, imagen } = productData;
    const nombreExistente = state.product.find(product => product.nombre.toLowerCase() === nombre.toLowerCase());

    // Validaciones
    if (!nombre || nombre.length < 3 || nombre.length > 50 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      setError("El campo nombre es incorrecto");
      console.log("error en nombre");
      return;
    }
    if (nombreExistente) {
      setError("El nombre ingresado ya existe");
      return;
    }
    if (descripcion.length < 25 || descripcion.length > 60) {
      setError("El campo de descripción detallada es incorrecto");
      return;
    }
    if (isNaN(precio) || precio < 0) {
      setError("El campo de precio es incorrecto");
      return;
    }
    if (!categoria) {
      setError("Debe seleccionar una categoría");
      return;
    }
    if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(imagen)) {
      setError("El campo de imagen es incorrecto");
      return;
    }

    setError(null);

    // Aquí transformamos productData para enviar la estructura correcta
    const dataToSend = {
      nombre,
      descripcion,
      precio,
      categoria: { id: categoria }, // Enviamos un objeto con el id de la categoría
      imagen
    };

    // Realizamos la solicitud al backend
    axios.post('https://happy-smile-production.up.railway.app/productos/guardar', dataToSend)
      .then((res) => {
        dispatch({ type: "ADD_PRODUCTO", payload: res.data });
        alert("Producto registrado exitosamente!");
        setProductData({
          nombre: '',
          descripcion: '',
          precio: '',
          categoria: '',
          imagen: ''
        });
      })
      .catch((err) => {
        console.log('Error al registrar el producto:', err.response ? err.response.data : err.message);
        alert('Hubo un error al registrar el producto');
      });
  }

  return (
    <div className='container-register'>
      {state.userActive ? 
      <form action="" className='form-register-container' onSubmit={handleSubmit}>
        <p className='title-form'>Registrar producto</p>
        <input className='input-register' type="text" placeholder='Nombre' name='nombre' value={productData.nombre} onChange={handleChange} />
        <input className='input-register' type="text" placeholder='Descripción (mínimo 25 caracteres)' name='descripcion' value={productData.descripcion} onChange={handleChange} />
        <input className='input-register' type="text" placeholder='Precio' name='precio' value={productData.precio} onChange={handleChange} />
        <select className='input-register' name='categoria' value={productData.categoria} onChange={handleChange}>
          <option value="">Seleccionar categoría</option>
          {state.categories.map((categoria, index) => (
            <option value={categoria.id} key={index}>{categoria.nombre}</option>
          ))}
        </select>
        <input className='input-register' type="text" placeholder='URL de la imagen' name='imagen' value={productData.imagen} onChange={handleChange} />
        <button className='button-register' type='submit'>Registrar</button>
        {error && <p className="error-message" >{error}</p>}
      </form>
      
      :     <div className='error'>
      <p>Error 401 - Unauthorized: You must log in as an administrator to access this page.
      Please log in with an administrator account to continue. If you don’t have the required permissions, contact the system administrator for assistance.
      </p>
      
  </div>}
      
    </div>
  );
}

export default Register;
