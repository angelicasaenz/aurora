import { useState } from 'react';
import './Animales.css';

import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';
import foto7 from '../assets/foto7.jpg';
import foto8 from '../assets/foto8.jpg';
import foto9 from '../assets/foto9.jpg';
import foto10 from '../assets/foto10.jpg';
import foto11 from '../assets/foto11.jpg';
import foto12 from '../assets/foto12.jpg';
import foto13 from '../assets/foto13.jpg';
import foto14 from '../assets/foto14.jpg';
import foto15 from '../assets/foto15.jpg';

const listaMascotas = [
  { id: 1, nombre: 'Luna', especie: 'Perro', edad: '2 años', estado: 'DISPONIBLE', imagen: foto1 },
  { id: 2, nombre: 'Michi', especie: 'Gato', edad: '1 año', estado: 'DISPONIBLE', imagen: foto2 },
  { id: 3, nombre: 'Thor', especie: 'Perro', edad: '6 años', estado: 'NO DISPONIBLE', imagen: foto3 },
  { id: 4, nombre: 'Simba', especie: 'Gato', edad: '4 meses', estado: 'DISPONIBLE', imagen: foto4 },
  { id: 5, nombre: 'Kira', especie: 'Perro', edad: '1 año y medio', estado: 'DISPONIBLE', imagen: foto5 },
  { id: 6, nombre: 'Nala', especie: 'Gato', edad: '2 años', estado: 'DISPONIBLE', imagen: foto6 },
  { id: 7, nombre: 'Rocky', especie: 'Perro', edad: '5 años', estado: 'NO DISPONIBLE', imagen: foto7 },
  { id: 8, nombre: 'Manchas', especie: 'Gato', edad: '3 años', estado: 'DISPONIBLE', imagen: foto8 },
  { id: 9, nombre: 'Coco', especie: 'Perro', edad: '4 meses', estado: 'DISPONIBLE', imagen: foto9 },
  { id: 10, nombre: 'Princesa', especie: 'Gato', edad: '1 año', estado: 'NO DISPONIBLE', imagen: foto10 },
  { id: 11, nombre: 'Zeus', especie: 'Perro', edad: '8 años', estado: 'DISPONIBLE', imagen: foto11 },
  { id: 12, nombre: 'Oliver', especie: 'Gato', edad: '6 meses', estado: 'DISPONIBLE', imagen: foto12 },
  { id: 13, nombre: 'Canela', especie: 'Perro', edad: '2 años', estado: 'DISPONIBLE', imagen: foto13 },
  { id: 14, nombre: 'Felix', especie: 'Gato', edad: '3 años', estado: 'NO DISPONIBLE', imagen: foto14 },
  { id: 15, nombre: 'Bruno', especie: 'Perro', edad: '7 años', estado: 'DISPONIBLE', imagen: foto15 },
];

export default function Animales() {
  const [busqueda, setBusqueda] = useState('');
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todos');

  const mascotasFiltradas = listaMascotas.filter((mascota) => {
    const coincideNombre = mascota.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEspecie = especieSeleccionada === 'Todos' || mascota.especie.toLowerCase() === especieSeleccionada.toLowerCase();
    return coincideNombre && coincideEspecie;
  });

  return (
    <div className="catalogo-container">
      <header className="catalogo-header">
        <h1>Nuestras patitas rescatadas</h1>
        
        {/* Barra de búsqueda y filtros */}
        <div className="filtros-container">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="input-busqueda"
          />
          <select
            value={especieSeleccionada}
            onChange={(e) => setEspecieSeleccionada(e.target.value)}
            className="select-especie"
          >
            <option value="Todos">Especie: Todos</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
      </header>

      {/* Explicación del proceso de adopción debajo del título */}
      <div className="proceso-adopcion-banner">
        <p>
          <strong>¿Cómo adoptar?</strong> Mira nuestro catálogo, encuentra la mascota que te robe el corazón y ve a la sección de <strong>Adopciones</strong> para llenar el formulario indicando el <strong>nombre de la mascota</strong> que te interesó. ¡Ellos esperan un hogar lleno de amor!
        </p>
      </div>

      {/* Grid de tarjetas sin botón de detalle */}
      <div className="mascotas-grid">
        {mascotasFiltradas.length > 0 ? (
          mascotasFiltradas.map((mascota) => (
            <div key={mascota.id} className="mascota-card">
              <div className="imagen-wrapper">
                <img src={mascota.imagen} alt={mascota.nombre} />
                <span className={`badge-estado ${mascota.estado === 'DISPONIBLE' ? 'disponible' : 'no-disponible'}`}>
                  {mascota.estado}
                </span>
              </div>
              <div className="mascota-info">
                <h3>{mascota.nombre}</h3>
                <p>{mascota.especie} • {mascota.edad}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-encontrado">No se encontraron peluditos con esos criterios.</p>
        )}
      </div>
    </div>
  );
}