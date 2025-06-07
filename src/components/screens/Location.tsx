import React from 'react';

export const Location: React.FC = () => {
  return (
    <div>
      <section className="section">
        <h2 className="title">Nuestra Ubicación</h2>
        <div className="card">
          <div style={{ width: '100%', height: '270px' }}>
            {/* Aquí iría el mapa, por ejemplo con Google Maps */}
            <img 
              src="https://images.unsplash.com/photo-1553290322-e4e8f22c4c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Ubicación de la panadería" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <button className="button">Como Llegar</button>
          <br />
          <br />
          <br />
          <div className="grid">
            <div>
              <h3>Dirección</h3>
              <p>Av. Principal #123</p>
              <p>Colonia Centro</p>
              <p>Ciudad de México, CP 12345</p>
            </div>
            <div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 7:00 AM - 8:00 PM</p>
              <p>Sábados y Domingos: 8:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3>Contacto</h3>
              <p>Teléfono: (55) 1234-5678</p>
              <p>Email: info@panaderiagourmet.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <h2 className="subtitle">Cómo Llegar</h2>
        <div className="grid">
          <div className="card">
            <h3>En Transporte Público</h3>
            <ul>
              <li>Metro: Estación Central, Línea 1</li>
              <li>Metrobús: Estación Principal, Línea 2</li>
              <li>Autobús: Rutas 123, 456</li>
            </ul>
          </div>
          <div className="card">
            <h3>En Automóvil</h3>
            <ul>
              <li>Desde el Norte: Tomar Av. Principal</li>
              <li>Desde el Sur: Tomar Blvd. Central</li>
              <li>Estacionamiento disponible</li>
            </ul>
          </div>
          <div className="card">
            <h3>Puntos de Referencia</h3>
            <ul>
              <li>Frente al Parque Central</li>
              <li>A dos cuadras del Centro Comercial</li>
              <li>Junto al Banco Nacional</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="section">
        <h2 className="subtitle">Servicio a Domicilio</h2>
        <div className="card">
          <p>Realizamos entregas en un radio de 10 km desde nuestra ubicación.</p>
          <p>Pedido mínimo: $200</p>
          <p>Tiempo estimado de entrega: 30-45 minutos</p>
          <button className="button">Ordenar ahora</button>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">¿Tienes alguna pregunta?</h2>
        <div className="card">
          <p>Nuestro equipo está disponible para ayudarte</p>
          <button className="button">Contactar</button>
        </div>
      </section>
    </div>
  );
};