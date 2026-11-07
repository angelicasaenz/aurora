import React, { useState } from 'react';
import './Adopciones.css';

export default function Adopciones() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correo: '',
    telefono: '',
    direccion: '',
    ocupacion: '',
    tipoVivienda: 'Casa propia',
    permisoArrendador: 'No aplica',
    personasHogar: '',
    tieneNinos: 'No',
    alergicosHogar: 'No',
    nombreMascota: '',
    experiencia: '',
    veterinarioFrecuente: 'No',
    presupuestoMensual: '',
    motivoViaje: '',
    motivo: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cuestionario completo de adopción:', formData);
    setEnviado(true);
  };

  return (
    <div className="adopciones-container">
      <header className="adopciones-header">
        <h1>Formulario de Solicitud de Adopción</h1>
        <p>
          Sabemos que pedimos bastante información (casi que el tipo de sangre),
          pero queremos asegurarnos de encontrar el hogar perfecto y definitivo
          para nuestros rescatados. ¡Gracias por tu paciencia y por adoptar!
        </p>
      </header>

      {enviado ? (
        <div className="mensaje-exito">
          <h3>Solicitud enviada exitosamente</h3>
          <p>Se ha enviado su información de manera correcta y muy pronto nuestros colaboradores se estarán comunicando luego de analizar la información pedida.</p>
          <button onClick={() => setEnviado(false)} className="btn-secundario">Realizar otra solicitud</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="adopciones-form">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
              placeholder="Ej. Angélica Gómez"
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
              <label>Teléfono de Contacto</label>
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
              <label>Dirección de Residencia y Barrio</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                placeholder="Ej. Calle 100 # 15-20, Chico"
              />
            </div>
            <div className="form-group">
              <label>Ocupación / ¿En qué trabaja?</label>
              <input
                type="text"
                name="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
                required
                placeholder="Ej. Independiente / Empleada"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tipo de Vivienda y Tenencia</label>
              <select
                name="tipoVivienda"
                value={formData.tipoVivienda}
                onChange={handleChange}
                className="select-filtro"
              >
                <option value="Casa propia">Casa propia</option>
                <option value="Casa alquilada">Casa alquilada</option>
                <option value="Apartamento propio">Apartamento propio</option>
                <option value="Apartamento alquilado">Apartamento alquilado</option>
              </select>
            </div>
            <div className="form-group">
              <label>Si es alquilada, ¿cuenta con permiso para mascotas?</label>
              <select
                name="permisoArrendador"
                value={formData.permisoArrendador}
                onChange={handleChange}
                className="select-filtro"
              >
                <option value="No aplica">No aplica (Es propia)</option>
                <option value="Sí, por escrito">Sí, por escrito</option>
                <option value="De palabra">De palabra con el propietario</option>
                <option value="No estoy seguro">No estoy seguro / Aún no pregunto</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>¿Cuántas personas viven en el hogar?</label>
              <input
                type="number"
                name="personasHogar"
                value={formData.personasHogar}
                onChange={handleChange}
                required
                placeholder="Ej. 3"
              />
            </div>
            <div className="form-group">
              <label>¿Hay niños pequeños en casa?</label>
              <select
                name="tieneNinos"
                value={formData.tieneNinos}
                onChange={handleChange}
                className="select-filtro"
              >
                <option value="No">No</option>
                <option value="Sí, menores de 5 años">Sí, menores de 5 años</option>
                <option value="Sí, mayores de 5 años">Sí, mayores de 5 años</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>¿Alguien en la familia sufre de alergias a animales?</label>
              <select
                name="alergicosHogar"
                value={formData.alergicosHogar}
                onChange={handleChange}
                className="select-filtro"
              >
                <option value="No">No, ninguno</option>
                <option value="Sí, leve">Sí, pero leve</option>
                <option value="No estamos seguros">No estamos seguros</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nombre de la Mascota de Interés</label>
              <input
                type="text"
                name="nombreMascota"
                value={formData.nombreMascota}
                onChange={handleChange}
                required
                placeholder="Ej. Loki"
              />
            </div>
          </div>

          <div className="form-group">
            <label>¿Tiene experiencia previa con animales domésticos? ¿Qué pasó con ellos?</label>
            <textarea
              name="experiencia"
              rows="2"
              value={formData.experiencia}
              onChange={handleChange}
              required
              placeholder="Describa brevemente si ha tenido mascotas antes y su situación actual..."
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>¿Tiene un veterinario de confianza asignado?</label>
              <select
                name="veterinarioFrecuente"
                value={formData.veterinarioFrecuente}
                onChange={handleChange}
                className="select-filtro"
              >
                <option value="Sí">Sí, ya conozco uno</option>
                <option value="No">No, buscaría uno cercano</option>
              </select>
            </div>
            <div className="form-group">
              <label>Presupuesto mensual estimado para alimentación y salud</label>
              <input
                type="text"
                name="presupuestoMensual"
                value={formData.presupuestoMensual}
                onChange={handleChange}
                required
                placeholder="Ej. $150,000 - $200,000"
              />
            </div>
          </div>

          <div className="form-group">
            <label>¿Qué sucedería con la mascota en caso de un viaje largo o una mudanza?</label>
            <textarea
              name="motivoViaje"
              rows="2"
              value={formData.motivoViaje}
              onChange={handleChange}
              required
              placeholder="Explique cómo resolvería estas situaciones..."
            ></textarea>
          </div>

          <div className="form-group">
            <label>¿Cuáles son los motivos principales para adoptar a este animal?</label>
            <textarea
              name="motivo"
              rows="3"
              value={formData.motivo}
              onChange={handleChange}
              required
              placeholder="Explique las razones de su postulación y el tiempo diario que pasaría acompañado..."
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">Enviar Solicitud de Adopción</button>
        </form>
      )}
    </div>
  );
}