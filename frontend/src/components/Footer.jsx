import React from 'react';
import logoBlanco from '../assets/logo-aurora-blanco.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={logoBlanco} alt="Fundación Aurora" className="footer-logo" />
        <p className="footer-copy">
          © {new Date().getFullYear()} Fundación Aurora. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}