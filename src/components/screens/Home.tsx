import React from 'react';
import { useFeed } from '../../context/FeedContext';

export const Home: React.FC = () => {
  const { changeFeed } = useFeed();

  return (
    <div>
      <section className="section">
        <div className="card">
        <h2 className="subtitle">Bienvenido</h2>
        <h1 className="title">Panadería Bernal</h1>
        <img className='feedimage' src={require('../../assets/logo-000.png')} alt='Logo Panaderpia Bernal' />
        <p className="paragraph">Panadería Gourmet Orgullosamente Mexicana.</p>
        <button onClick={()=>changeFeed(6)} className="button">Hacer un pedido</button>
        </div>
      </section>

      <section className="section">
      <div className="card">
      <div className="grid">
          <div className="card">
            <img 
              src="https://media.istockphoto.com/id/1283247428/es/foto/mesa-decorada-con-varios-panes-artesanales-producidos-con-luz-de-estudio.jpg?s=612x612&w=0&k=20&c=tNkgYJT4bartuR_-UFeIqJW4oRI6qjmUEHNrqzEdCDM=" 
              alt="Pan artesanal" 
              className="product-image"
            />
            <h3>Sabor y Tradición</h3>
            <p>Nuestros productos son elaborados con ingredientes selectos y técnicas tradicionales.</p>
          </div>
          <div className="card">
            <img 
              src="https://www.bettycrocker.lat/mx/wp-content/uploads/sites/2/2021/04/BCL-Tiramisu_Recipe_770x514.jpg" 
              alt="Pasteles gourmet" 
              className="product-image"
            />
            <h3>Sabores únicos</h3>
            <p>Descubre nuestra selección de pasteles y postres gourmet.</p>
          </div>
          <div className="card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIEKptTs24YPSQQuoVK74o2zysiIuqri36g&s" 
              alt="Pan recién horneado" 
              className="product-image"
            />
            <h3>Frescura garantizada</h3>
            <p>Horneamos nuestros productos varias veces al día para garantizar la máxima frescura.</p>
          </div>
        </div>
        <button onClick={()=>changeFeed(3)} className="button">Ver Productos</button>

        </div>
      </section>

      {/* <section className="section">
        <h2 className="subtitle">Nuestras especialidades</h2>
        <div className="grid">
          <div className="card">
            <h3>Panes Artesanales</h3>
            <ul>
              <li className='text-i'>Baguettes tradicionales</li>
              <li className='text-i'>Pan de masa madre</li>
              <li className='text-i'>Pan de centeno</li>
              <li className='text-i'>Focaccia italiana</li>
            </ul>
            <button className="button">Ver más</button>
          </div>
          <div className="card">
            <h3>Pasteles Gourmet</h3>
            <ul>
              <li className='text-i'>Tartas de frutas</li>
              <li className='text-i'>Pasteles de chocolate</li>
              <li className='text-i'>Cheesecakes</li>
              <li className='text-i'>Macarons</li>
            </ul>
            <button className="button">Ver más</button>
          </div>
          <div className="card">
            <h3>Productos Especiales</h3>
            <ul>
              <li className='text-i'>Pan sin gluten</li>
              <li className='text-i'>Opciones veganas</li>
              <li className='text-i'>Pasteles personalizados</li>
              <li className='text-i'>Catering para eventos</li>
            </ul>
            <button className="button">Ver más</button>
          </div>
        </div>
      </section> */}

      <section className="section">
        <h2 className="subtitle">Horario de Atención</h2>
        <div className="card">
          <p>Lunes a Viernes: 7:00 AM - 8:00 PM</p>
          <p>Sábados y Domingos: 8:00 AM - 6:00 PM</p>
          <button onClick={()=>changeFeed(6)} className="button">Hacer un pedido</button>
        </div>
      </section>
    </div>
  );
};