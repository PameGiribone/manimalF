import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-footer'>
        <Link to={"/"}>
        
        <img className="img-footer" src="/img/Logo.png" alt="logo-footer" />
        </Link>
        <nav className='navbar'>
            <div className="sucursales">
                <span>SUCURSALES:</span>
            <ul>
                <li className='li-title'>Cerro - Hungría 1324</li>
                    {/* <li className='li-info'>Hungría 1324</li> */}
                    <li className='li-info'>Lunes a Viernes 10 a 22hrs</li>
                <li className='li-title'>Paso de la Arena - Cibils 5780</li>
                    {/* <li className='li-info'>Cibils 5780</li> */}
                    <li className='li-info'>Lunes a Sábado 10 a 20hrs</li>
            </ul>
            </div>
           
            
        
        <div className="sucursales">
        <span>CONTACTO</span>
            <ul className="contact">
                <li className='li-title' >Celular: <p className="li-info">091576729</p>
                    {/* <span className='li-info' ></span> */} </li>
                    {/* <li className='li-info'>091576729</li> */}
                <li className='li-title'>Email:
                    <br /> <p className="li-info">lucasrivas26@icloud.com</p>
                     {/* <span className='li-info'></span> */}</li>
                    {/* <li className='li-info'>lucasrivas26@icloud.com</li> */}
                    
                <li className='li-title ig'>Redes:<Link to={"https://www.instagram.com/petshopvalu2/"}> <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} /></Link> </li>
                    {/* <li className='li-info'><FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} /></li> */}
            </ul>
    
        </div>
        
            
        </nav>
    </div>
  )
}

export default Footer