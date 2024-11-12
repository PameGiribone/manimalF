import React from 'react'

const CardProduct = ({item}) => {
    const {nombre, precio, imagen,descripcion} = item
  return (
    <div className='container-card-product'>
        <img className='img-product' src={imagen} alt="" />
        <p className='name-card-product'>{nombre}</p>
        <p className='description-card-product'>{descripcion}</p>
        <p className="price"><b>$ {precio}</b></p> 
    </div>
  )
}

export default CardProduct