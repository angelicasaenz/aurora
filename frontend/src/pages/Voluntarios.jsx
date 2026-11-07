import { useState, useEffect } from 'react';
import './Voluntarios.css';

import voluntario1 from '../assets/voluntario1.jpg';
import voluntario2 from '../assets/voluntario2.jpg';
import voluntario3 from '../assets/voluntario3.jpg';

const imagenesVoluntarios = [voluntario1, voluntario2, voluntario3];

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correo: '',
    telefono: '',
    disponibilidad: 'Fines de semana',
    areaInterop: 'Apoyo en eventos y adopciones',
    experienciaPrevia: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenesVoluntarios.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Postulación de voluntariado:', formData);
    setEnviado(true);
  };

  return (
    <div className="voluntarios-container">
      <header className="voluntarios-header">
        <h1>Programa de Voluntariado</h1>
        <p>
          Los voluntarios son el motor de Fundación Aurora. Si dispones de tiempo,
          vocación de servicio y amor por los animales, únete a nuestro equipo operativo.
        </p>
      </header>

      {/* Carrusel automático de imágenes */}
      <div className="carrusel-voluntarios">
        {imagenesVoluntarios.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Voluntarios Fundación Aurora"
            className={`imagen-carrusel ${index === indiceActual ? 'activa' : ''}`}
          />
        ))}
      </div>

      {enviado ? (
        <div className="mensaje-exito">
          <h3>¡Postulación enviada con éxito!</h3>
          <p>Gracias por querer sumar tu esfuerzo a nuestra causa. El coordinador de voluntarios se pondrá en contacto contigo pronto.</p>
          <button onClick={() => setEnviado(false)} className="btn-secundario">Registrar otra postulación</button>
        </div>
      ) : (
        <div className="formulario-wrapper">
          {/* Texto de invitación que pediste */}
          <div className="invitacion-formulario">
            <h3>¿Quieres ser parte de nuestro equipo?</h3>
            <p>
              Llena el siguiente formulario con tus datos y nos estaremos comunicando contigo muy pronto para darte la bienvenida.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="voluntarios-form">
            <div className="form-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
                placeholder="Ej. Carlos Mendoza"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="form-group">
                <label>Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="3001234567"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Disponibilidad de Tiempo</label>
                <select
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleChange}
                  className="select-filtro"
                >
                  <option value="Fines de semana">Fines de semana</option>
                  <option value="Entre semana parcial">Entre semana (Medio tiempo)</option>
                  <option value="Tiempo flexible">Tiempo flexible / Según convocatorias</option>
                </select>
              </div>
              <div className="form-group">
                <label>Área de Interés Principal</label>
                <select
                  name="areaInterop"
                  value={formData.areaInterop}
                  onChange={handleChange}
                  className="select-filtro"
                >
                  <option value="Apoyo en eventos y adopciones">Apoyo en jornadas de adopción</option>
                  <option value="Hogar de paso">Hogar de paso temporal</option>
                  <option value="Logística y transporte">Logística y transporte de rescates</option>
                  <option value="Comunicaciones y redes">Comunicaciones y diseño</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>¿Tienes experiencia previa apoyando fundaciones o manejo de animales?</label>
              <textarea
                name="experienciaPrevia"
                rows="3"
                value={formData.experienciaPrevia}
                onChange={handleChange}
                required
                placeholder="Cuéntanos brevemente si has participado en actividades similares..."
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Postulación de Voluntariado</button>
          </form>
        </div>
      )}
    </div>
  );
}