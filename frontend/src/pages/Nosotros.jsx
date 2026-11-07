import './Nosotros.css';
import logoFundacion from '../assets/logo-fundacion.png';
import imgMision from '../assets/mision.jpg';
import imgVision from '../assets/vision.jpg';

import imgEmpatia from '../assets/empatia.jpg';
import imgTransparencia from '../assets/transparencia.jpg';
import imgCompromiso from '../assets/compromiso.jpg';

import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Misión y Visión arriba */}
      <div className="nosotros-grid">
        <div className="nosotros-card" style={{ '--bg-mision': `url(${imgMision})` }}>
          <div className="tarjeta-contenido">
            <h3>Nuestra Misión</h3>
            <p>
              Rescatar, rehabilitar y brindar atención médica y emocional a animales en situación de calle o maltrato,
              promoviendo activamente la adopción responsable y la educación ciudadana sobre el respeto y la tenencia consciente.
            </p>
          </div>
        </div>

        <div className="nosotros-card" style={{ '--bg-vision': `url(${imgVision})` }}>
          <div className="tarjeta-contenido">
            <h3>Nuestra Visión</h3>
            <p>
              Ser una organización líder y autosostenible en la protección y bienestar animal a nivel regional,
              consolidando una red sólida de hogares de paso, voluntarios y familias adoptantes comprometidas con el cambio.
            </p>
          </div>
        </div>
      </div>

      {/* Logo y lema abajo */}
      <header className="nosotros-header">
        <img src={logoFundacion} alt="Fundación Aurora" className="logo-centrado" />
        <p className="lema-fundacion">
          Trabajando por el rescate, la rehabilitación y la adopción responsable de animales en situación de vulnerabilidad.
        </p>
      </header>

      {/* Valores Fundamentales */}
      <section className="valores-section">
        <h2>Nuestros Valores Fundamentales</h2>
        
        <div className="valores-grid-circular">
          <div className="valor-item-circular">
            <div className="valor-img-container">
              <img src={imgEmpatia} alt="Empatía" className="valor-img-circular" />
            </div>
            <h4>Empatía</h4>
            <p>Actuamos con sensibilidad ante el sufrimiento y las necesidades de los animales.</p>
          </div>

          <div className="valor-item-circular">
            <div className="valor-img-container">
              <img src={imgTransparencia} alt="Transparencia" className="valor-img-circular" />
            </div>
            <h4>Transparencia</h4>
            <p>Manejo claro de recursos, procesos de adopción rigurosos y rendición de cuentas.</p>
          </div>

          <div className="valor-item-circular">
            <div className="valor-img-container">
              <img src={imgCompromiso} alt="Compromiso" className="valor-img-circular" />
            </div>
            <h4>Compromiso</h4>
            <p>Acompañamiento continuo antes, durante y después del proceso de adopción.</p>
          </div>
        </div>
      </section>

      {/* Sección de Contáctanos (Solo los íconos limpios) */}
      <section className="contacto-seccion-libre">
        <div className="contacto-header-centrado">
          <h2>Contáctanos</h2>
          <p>
            Si tienes dudas sobre procesos de adopción, reportes de rescate o deseas sumarte como aliado, comunícate con nosotros:
          </p>
        </div>

        <div className="contacto-lista-iconos">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/573001234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icono-enlace whatsapp"
            title="Escríbenos por WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Correo Electrónico */}
          <a 
            href="mailto:contacto@fundacionaurora.org" 
            className="icono-enlace correo"
            title="Envíanos un correo"
          >
            <FaEnvelope />
          </a>

          {/* Teléfono */}
          <a 
            href="tel:+576017890123" 
            className="icono-enlace telefono"
            title="Llámanos"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </section>
    </div>
  );
}