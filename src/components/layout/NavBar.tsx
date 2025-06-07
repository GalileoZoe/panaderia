import React from 'react';
import { useFeed } from '../../context/FeedContext';
import trigoLeft from '../../assets/trigo-l.png';
import trigoRight from '../../assets/trigo-r.png';

export const NavBar: React.FC = () => {
  const {feed, changeFeed } = useFeed();

  return (
    <header className="header">
      <img src={trigoLeft} alt="Trigo decorativo" className="header-decoration-left" />
      <div className="header-content">
        <a onClick={()=>changeFeed(1)}>
        <h1 className="headertitle">Panadería Gourmet</h1>
        <h1 className="text" style={{marginTop:'-20px'}}>- Desde 1945 -</h1>
        </a>
        <nav className="nav-menu">
          <a className={feed=== 1?'nav-item-i':'nav-item'} onClick={() => changeFeed(1)}>Inicio</a>
          <a className={feed=== 2?'nav-item-i':'nav-item'} onClick={() => changeFeed(2)}>Nosotros</a>
          <a className={feed=== 3?'nav-item-i':'nav-item'} onClick={() => changeFeed(3)}>Productos</a>
          <a className={feed=== 4?'nav-item-i':'nav-item'} onClick={() => changeFeed(4)}>Clientes</a>
          <a className={feed=== 5?'nav-item-i':'nav-item'} onClick={() => changeFeed(5)}>Ubicación</a>
          <a className={feed=== 6?'nav-item-i':'nav-item'} onClick={() => changeFeed(6)}>Contacto</a>
          <a className={feed=== 7?'nav-item-i':'nav-item'} onClick={() => changeFeed(7)}>Tienda</a>
        </nav>
      </div>
      <img src={trigoRight} alt="Trigo decorativo" className="header-decoration-right" />
    </header>
  );
};