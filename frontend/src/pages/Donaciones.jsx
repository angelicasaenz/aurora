import { useState } from 'react';
import './Donaciones.css';
import imgPerroComiendo from '../assets/perro-comiendo.jpg';

export default function Donaciones() {
  const [copiado, setCopiado] = useState(null);

  const copiarTexto = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiado(tipo);
    setTimeout(() => setCopiado(null), 3000);
  };

  return (
    <div className="donaciones-container">
      <header className="donaciones-header">
        <h1>Apoye Nuestra Labor</h1>
        <p>
          Fundación Aurora opera gracias a la generosidad de la comunidad.
          Cada aporte monetario o en especie se destina directamente a la alimentación,
          atención veterinaria y bienestar de nuestros animales rescatados.
        </p>
      </header>

      <div className="donaciones-grid">
        {/* Tarjeta Nequi / DaviPlata */}
        <div className="donacion-card">
          <div className="card-header-tipo">Billeteras Digitales</div>
          <h3>Nequi / DaviPlata</h3>
          <p className="instruccion">Escanee el código o transfiera directamente a la cuenta autorizada de la fundación:</p>
          <div className="dato-caja">
            <span className="numero">300 123 4567</span>
            <button
              onClick={() => copiarTexto('3001234567', 'nequi')}
              className="btn-copiar"
            >
              {copiado === 'nequi' ? '¡Copiado!' : 'Copiar número'}
            </button>
          </div>
          <span className="titular-cuenta">Titular: Fundación Aurora (Nit: 900.123.456-1)</span>
        </div>

        {/* Tarjeta Cuenta Bancaria */}
        <div className="donacion-card">
          <div className="card-header-tipo">Cuenta Bancaria</div>
          <h3>Cuenta de Ahorros Bancolombia</h3>
          <p className="instruccion">Para transferencias bancarias nacionales regulares:</p>
          <div className="dato-caja">
            <span className="numero">031-987654-21</span>
            <button
              onClick={() => copiarTexto('03198765421', 'banco')}
              className="btn-copiar"
            >
              {copiado === 'banco' ? '¡Copiado!' : 'Copiar cuenta'}
            </button>
          </div>
          <span className="titular-cuenta">Ahorros • Nit: 900.123.456-1</span>
        </div>
      </div>

      {/* Sección Donaciones en Especie con la foto del perro comiendo */}
      <section 
        className="especie-section"
        style={{ '--bg-especie': `url(${imgPerroComiendo})` }}
      >
        <div className="especie-contenido-interno">
          <h2>Donaciones en Especie (Alimento, Insumos y Medicamentos)</h2>
          <p>
            Si prefieres donar concentrado, cobijas en buen estado, arena para gatos o suministros médicos,
            puedes hacer llegar tu aporte directamente a nuestra sede principal o contactarnos para coordinar la recogida:
          </p>
          <div className="especie-detalles">
            <div className="detalle-item">
              <strong>Dirección de Acopio:</strong> Calle 45 # 20-30, Bogotá
            </div>
            <div className="detalle-item">
              <strong>Horario de Recepción:</strong> Lunes a Sábado de 9:00 a.m. a 5:00 p.m.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}