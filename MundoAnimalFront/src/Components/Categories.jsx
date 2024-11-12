import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({item}) => {
    const {imagen,nombre,id} = item
    return (
        <div>
            <Link to={`/product/categories/${id}`}>
            <img className='img-categories' /* onClick={onClick} */ src={imagen} alt="categories" />
            <p className='name-categories'>{nombre}</p>
            </Link>
        </div>
    )
}

export default Categories