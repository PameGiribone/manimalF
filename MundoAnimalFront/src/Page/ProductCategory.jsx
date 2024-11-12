import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProduct from '../Components/CardProduct';

const ProductCategory = () => {
  
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; // Mostrar 8 productos por página
    const params = useParams();
    const urlCategories = `https://happy-smile-production.up.railway.app/categorias/${params.id}`
    const urlProducts = `https://happy-smile-production.up.railway.app/productos/categoria/${params.id}`

    useEffect(() => {
        axios(urlCategories)
        .then((res) => setCategorias(res.data))
        .catch((err) => console.log(err))
    }, [urlCategories])

    useEffect(() => {
        axios(urlProducts)
        .then((res) => setProductos(res.data))
        .catch((err) => console.log(err))
    }, [urlProducts])

     // Calcular los productos que se mostrarán en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
  return (
    <div className='container-product-categories'>
        <p className='title-product-categories'>{categorias.titulo}</p>
        <p className='description-product-categories'>{categorias.descripcion}</p>      
        <div className="container-product">
        {currentProducts
        .sort((a, b)=>a.nombre.localeCompare(b.nombre))
        .map((item, index)=>(
          <CardProduct key={index} item={item}></CardProduct>))}
      </div>

{/* Paginación */}
<div className="pagination">
        {Array.from({ length: Math.ceil(productos.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>


    </div>
  )
}

export default ProductCategory