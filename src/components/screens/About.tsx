import React from 'react';
import { useFeed } from '../../context/FeedContext';

export const About: React.FC = () => {

  const {changeFeed}=useFeed();

  return (
    <div>
      <section className="section">
        <h2 className="title">Nuestra Historia</h2>
        <div className="card">
          <img 
            src="https://gentleman.com.mx/wp-content/uploads/2020/02/panaderia-portada.jpg" 
            alt="Panadería tradicional" 
            className="product-image"
          />
          <img className='minilogo' src={require('../../assets/logo-000.png')} alt='Logo Panaderpia Bernal' />
          <p className='text-ii'>Panadería Bernal <br/> - Desde 1945 -</p>
          <br />
          <button onClick={()=>changeFeed(7)} className="button">Tienda</button>
          <br />
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Nuestros Valores</h2>
        <div className="grid">
          <div className="card">
            <h3>Calidad Gourmet</h3>
            <p>Seleccionamos solo los mejores ingredientes y métodos artesanales para garantizar productos excepcionales.</p>
          </div>
          <div className="card">
            <h3>Innovación</h3>
            <p>Constantemente experimentamos con nuevos sabores y técnicas para ofrecer experiencias únicas.</p>
          </div>
          <div className="card">
            <h3>Sostenibilidad</h3>
            <p>Nos comprometemos con prácticas sostenibles y el uso de ingredientes locales cuando es posible.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Nuestro Equipo</h2>
        <div className="grid">
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Maestro panadero" 
              className="product-image"
            />
            <h3>Maestros Panaderos</h3>
            <p>Nuestro equipo de panaderos expertos combina años de experiencia con pasión por la excelencia.</p>
          </div>
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Pasteleros" 
              className="product-image"
            />
            <h3>Pasteleros Creativos</h3>
            <p>Artistas culinarios dedicados a crear postres únicos y memorables.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Certificaciones</h2>
        <div className="card">
          <ul>
            <li className='text-i'>Certificación de Excelencia Gastronómica 2023</li>
            <li className='text-i'>Premio al Mejor Pan Artesanal de la Ciudad</li>
            <li className='text-i'>Certificación de Prácticas Sostenibles</li>
            <li className='text-i'>Reconocimiento por Innovación en Panadería</li>
          </ul>
        </div>
      </section>
    </div>
  );
};