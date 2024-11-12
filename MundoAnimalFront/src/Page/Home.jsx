import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from "../Components/Button";
import Categories from "../Components/Categories";
import { useAnimalState } from "../Context/GlobalContext";
import CardProduct from "../Components/CardProduct";
import Carrusel from "../Components/Carrusel";
// import Tips from "../Components/Tips";
// import CardTips from "../Components/CardTips";

const Home = () => {
  const { state } = useAnimalState();
  const [productSearch, setProductSearch] = useState({
    nombre: "",
  });
  const [productFound, setProductFound] = useState(null);
  const [suggestions, setSuggestions] = useState([]);



  const handleChange = async (e) => {
    const value = e.target.value;
    setProductSearch({ ...productSearch, [e.target.name]: value });

    if (value.length > 2) {
      try {
        const response = await axios.get(`https://happy-smile-production.up.railway.app/productos/buscar?nombre=${value}`);
        setSuggestions(response.data);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre } = productSearch;
    const productoEncontrado = state.product.find(
      (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (productoEncontrado) {
      setProductFound(productoEncontrado);
      setSuggestions([]);
    } else {
      setProductFound(null);
    }
  };

  const handleSuggestionClick = (producto) => {
    setProductFound(producto);
    setProductSearch({ nombre: producto.nombre });
    setSuggestions([]);
  };

  return (
    <div className="main">
      <div className="backroung-video">
        <video 
        className="video-fondo"
        autoPlay
        muted
        loop
        playsInline
        controls={false}>
        <source className="video-portada" src="/img/PortadaMundoAnimal.mp4" type="video/mp4"/>
      </video>
      </div>
      
      {/* <img className="portada" src="/public/img/Portada.png" alt="portada" /> */}
      {/* ------------------------------------- SEARCH ------------------------------------ */}
      <div className="search" id="categories-section">
        <p>Encontrá el producto indicado para tu mascota</p>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              className="input-search"
              type="text"
              name="nombre"
              value={productSearch.nombre}
              onChange={handleChange}
            />
            <Button className="btn-search">Buscar</Button>
          </form>
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((producto, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(producto)}
                >
                  {producto.nombre}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {productFound && (
        <div className="product-found">
          <p>Resultado de busqueda:</p>
          <CardProduct item={productFound} />
        </div>
      )}
      {/* ------------------------------------- CATEGORIAS ------------------------------------ */}
      <div className="categories">
        {state.categories
          .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar alfabéticamente por 'nombre'
          .map((item, index) => (
            <Categories key={index} item={item}></Categories>
          ))}
      </div>
      {/* ---------------------------------------- CONSEJOS --------------------- */}
      <div className="tips">
          <Carrusel/>
      </div>
     
      {/* ------------------------ MARCAS ------------------------------ */}
      <span className="title-brands">NUESTRAS MARCAS</span>
      <div className="slider">
        <div className="move">
          <div className="box">
            <img src="/img/astro-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/dominal-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/equilibrio-log.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/frost-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/lager-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="public/img/matisse-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/primogato-logo.png" alt="" />
          </div>
          {/* 2da vuelta */}
          <div className="box">
            <img src="/img/astro-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/dominal-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/equilibrio-log.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/frost-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/lager-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/matisse-logo.avif" alt="" />
          </div>
          <div className="box">
            <img src="/img/primogato-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
