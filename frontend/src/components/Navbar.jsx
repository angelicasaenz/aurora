import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoFundacion from '../assets/logo-fundacion.png';
import './Navbar.css';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo con el diseño elegante de Aurora */}
        <Link to="/" className="navbar-logo" onClick={cerrarMenu}>
          <img src={logoFundacion} alt="Fundación Aurora" className="logo-img" />
          <div className="aurora-container">
            <span className="aurora-subtitle">Fundación</span>
            <span className="aurora-title">Aurora</span>
          </div>
        </Link>

        {/* Menú hamburguesa para móviles */}
        <div className="menu-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </div>

        {/* Enlaces de navegación */}
        <ul className={`navbar-links ${menuAbierto ? 'activo' : ''}`}>
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/animales" onClick={cerrarMenu}>Animales</Link></li>
          <li><Link to="/adopciones" onClick={cerrarMenu}>Adopciones</Link></li>
          <li><Link to="/donaciones" onClick={cerrarMenu}>Donaciones</Link></li>
          <li><Link to="/voluntarios" onClick={cerrarMenu}>Voluntarios</Link></li>
          <li><Link to="/nosotros" onClick={cerrarMenu}>Sobre Nosotros</Link></li>
        </ul>
      </div>
    </nav>
  );
}