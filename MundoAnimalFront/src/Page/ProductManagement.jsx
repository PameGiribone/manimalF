import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { useAnimalState } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductManagement = () => {
  const { state, dispatch } = useAnimalState();
  const [editingId, setEditingId] = useState(null);
  const [editedPrice, setEditedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(()=>{
    const userOn = localStorage.getItem("userActive") === "true"
    if(userOn){
        dispatch({type: "SET_USER_ACTIVE", payload:true})
    }
   },[])

  const handleDelete = (id) => {
    const email = "admin@example.com";
    const password = "pamepame123"; 
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      axios
        .delete(`https://happy-smile-production.up.railway.app/productos/eliminar/${id}?email=${email}&password=${password}`)
        .then((res) => {
          dispatch({ type: "DELETE_PRODUCTO", payload: id });
          alert("Producto eliminado exitosamente!");
        })
        .catch((err) => {
          console.log(
            "Error al eliminar el producto:",
            err.response ? err.response.data : err.message
          );
          alert("Hubo un error al eliminar el producto");
        });
    }
  };

  const handleEditPrice = (id) => {
    setEditingId(id);
    const product = state.product.find((prod) => prod.id === id);
    if (product) {
      setEditedPrice(product.precio); // Cargar el precio actual
    }
  };

  const handleSavePrice = (id) => {
    if (isNaN(editedPrice) || editedPrice === "") {
      alert("Por favor, ingresa un precio válido.");
      return;
    }

    const email = "admin@example.com"; // Sustituye con el email del administrador
    const password = "pamepame123"; // Sustituye con la contraseña del administrador
    const productToUpdate = state.product.find((prod) => prod.id === id);

    if (!productToUpdate) {
      console.log("Producto no encontrado");
      return;
    }

    const updatedProduct = {
      id: productToUpdate.id,
      nombre: productToUpdate.nombre,
      categoriaId: productToUpdate.categoria.id ? productToUpdate.categoria.id : null, // Asegúrate de obtener la categoría
      descripcion: productToUpdate.descripcion,
      precio: parseFloat(editedPrice), // Convertir a número
      imagen: productToUpdate.imagen,
      email,
      password
    };

    console.log("Datos enviados al backend:", updatedProduct); // Para verificar los datos

    axios
      .put(`https://happy-smile-production.up.railway.app/productos/editarProducto`, updatedProduct)
      .then((res) => {
        dispatch({ type: "UPDATE_PRODUCTO", payload: res.data });
        setEditingId(null);
        alert("Producto actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(
          "Error al actualizar el producto:",
          err.response ? err.response.data : err.message
        );
        alert("Hubo un error al actualizar el producto");
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Filtrar y ordenar productos
  const filteredProducts = state.product
    .filter((product) =>
      product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Obtener productos actuales para la página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    (state.userActive ? 
      <div className="container-edit">
      
      <p className="title-product-edit">Gestión de Productos</p>
      <div className="search-product-edit">
        <input
          className="input-search-product-edit"
          type="text"
          placeholder="Buscar por nombre"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Link to={"/register"}>
        <Button className={"btn-search-product-edit"}>Agregar Producto</Button>
      </Link>
      <div className="table-edit-product">
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>PRECIO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>
                  {editingId === producto.id ? (
                    <input
                      className="input-edit"
                      type="number"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                    />
                  ) : (
                    <span>$ {producto.precio}</span>
                  )}
                </td>
                <td className="btns">
                  {editingId === producto.id ? (
                    <Button
                      className={"btn-save"}
                      onClick={() => handleSavePrice(producto.id)}
                    >
                      Guardar
                    </Button>
                  ) : (
                    <Button
                      className={"btn-edit"}
                      onClick={() => handleEditPrice(producto.id)}
                    >
                      Editar
                    </Button>
                  )}
                  <Button
                    className={"btn-delete"}
                    onClick={() => handleDelete(producto.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className="page-link"
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
      : <div className="container-edit">
          <div className='error'>
                <p>Error 401 - Unauthorized: You must log in as an administrator to access this page.
                Please log in with an administrator account to continue. If you don’t have the required permissions, contact the system administrator for assistance.
                </p>
                
            </div>
      </div>)

  );
};

export default ProductManagement