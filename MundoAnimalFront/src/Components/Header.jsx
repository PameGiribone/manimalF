import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAnimalState } from '../Context/GlobalContext';
import Popover from './Popover';
import Button from './Button';


const Header = () => {
  const { state, dispatch } = useAnimalState();
  const [showPopover, setShowPopover] = useState(false);
  /* const [scrolled, setScrolled] = useState(false); */
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú
  const navigate = useNavigate();
  const menuRef = useRef(null); // Referencia para el menú

/*   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  const handleLogout = () => {
    setShowPopover(false);
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado del menú
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un elemento
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); // Cierra el menú si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToCategories = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categoriesSection = document.getElementById('categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const categoriesSection = document.getElementById('categories-section');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="header" >
      <Link to={"/"}>
        <img className='img-logo' src="/img/Logo.png" alt="logo" />
      </Link>
      <div className="menu-container" ref={menuRef}>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776; 
        </button>
        <nav className={`navbar-header ${menuOpen ? "open" : ""}`}>
          <li onClick={() => { scrollToCategories(); handleMenuItemClick(); }}>PRODUCTOS</li>
          <Link to={"/contact"}>
            <li onClick={handleMenuItemClick}>CONTACTO</li>
          </Link>
          <Link to={"/ourcompany"}>
            <li onClick={handleMenuItemClick}>QUIENES SOMOS?</li>
          </Link>
        </nav>
      </div>

      <div className="container-button">
        {state.userActive ? (
          <div className="user-avatar">
            <Button className={"btn-avatar"} onClick={togglePopover}>
              ADMIN
            </Button>
            <Popover
              email={state.userEmail}
              show={showPopover}
              onClose={togglePopover}
              onLogout={handleLogout}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;

