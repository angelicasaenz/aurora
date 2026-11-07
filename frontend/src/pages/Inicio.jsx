import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

import imgRescatados from '../assets/rescatados.jpg';
import imgAdopta from '../assets/adopta.jpg';
import imgVoluntario from '../assets/voluntario.jpg';
import imgFundacion from '../assets/fundacion.jpg';

export default function Inicio() {
  return (
    <div className="inicio-completo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Damos una segunda oportunidad</h1>
          <p>
            Rescatamos, cuidamos y buscamos un hogar lleno de amor para perros y gatos en situación de abandono.
          </p>
        </div>
      </div>

      <div className="inicio-container">
        <div className="accesos-rapidos">

          {/* Tarjeta 1 */}
          <div className="acceso-card" style={{ '--bg-img': `url(${imgRescatados})` }}>
            <h3>Conoce a nuestros rescatados</h3>
            <p>Ellos también merecen una oportunidad y esperan por ti.</p>
            <Link to="/animales" className="link-card">Ver rescatados →</Link>
          </div>

          {/* Tarjeta 2 */}
          <div className="acceso-card" style={{ '--bg-img': `url(${imgAdopta})` }}>
            <h3>Adopta</h3>
            <p>Brinda un hogar y cambia una vida para siempre.</p>
            <Link to="/adopciones" className="link-card">Iniciar proceso →</Link>
          </div>

          {/* Tarjeta 3 */}
          <div className="acceso-card" style={{ '--bg-img': `url(${imgVoluntario})` }}>
            <h3>Sé voluntario</h3>
            <p>Suma tu tiempo y talento para transformar su realidad.</p>
            <Link to="/voluntarios" className="link-card">Unirme →</Link>
          </div>

        </div>

        {/* Sección inferior con la imagen de fondo inyectada limpiamente */}
        <div
          className="seccion-nosotros-home"
          style={{ '--bg-fundacion': `url(${imgFundacion})` }}
        >
          <div className="seccion-nosotros-contenido">
            <h3>Porque ellos también merecen una oportunidad</h3>
            <p>
              En Fundación Aurora trabajamos con amor y compromiso para rescatar, rehabilitar y encontrar hogares responsables para animales en situación de abandono.
            </p>
            <Link to="/nosotros" className="btn-nosotros-home">Conoce nuestra labor →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}