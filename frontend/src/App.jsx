import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- Importas el footer
import Inicio from './pages/Inicio';
import Animales from './pages/Animales';
import Adopciones from './pages/Adopciones';
import Donaciones from './pages/Donaciones';
import Voluntarios from './pages/Voluntarios';
import Nosotros from './pages/Nosotros';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Source Sans 3', sans-serif" }}>
        <Navbar />
        <main style={{ padding: '10px 20px', maxWidth: '1100px', margin: '0 auto', flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/animales" element={<Animales />} />
            <Route path="/adopciones" element={<Adopciones />} />
            <Route path="/donaciones" element={<Donaciones />} />
            <Route path="/voluntarios" element={<Voluntarios />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}