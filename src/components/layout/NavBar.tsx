import React, { useState } from 'react';
import { useFeed } from '../../context/FeedContext';
import trigoLeft from '../../assets/trigo-l.png';
import trigoRight from '../../assets/trigo-r.png';

export const NavBar: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <img src={trigoLeft} alt="Trigo decorativo" className="header-decoration-left" />
      <div className="header-content">
        <a onClick={() => changeFeed(1)}>
          <h1 className="headertitle">Panadería Gourmet</h1>
          <h1 className="text">- Desde 1945 -</h1>
        </a>
        <div className="nav-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <a
            className={feed === 1 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(1);
              setIsNavOpen(false);
            }}
          >
            Inicio
          </a>
          <a
            className={feed === 2 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(2);
              setIsNavOpen(false);
            }}
          >
            Nosotros
          </a>
          <a
            className={feed === 3 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(3);
              setIsNavOpen(false);
            }}
          >
            Productos
          </a>
          <a
            className={feed === 4 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(4);
              setIsNavOpen(false);
            }}
          >
            Clientes
          </a>
          <a
            className={feed === 5 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(5);
              setIsNavOpen(false);
            }}
          >
            Ubicación
          </a>
          <a
            className={feed === 6 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(6);
              setIsNavOpen(false);
            }}
          >
            Contacto
          </a>
          <a
            className={feed === 7 ? 'nav-item-i' : 'nav-item'}
            onClick={() => {
              changeFeed(7);
              setIsNavOpen(false);
            }}
          >
            Tienda
          </a>
        </nav>
      </div>
      <img src={trigoRight} alt="Trigo decorativo" className="header-decoration-right" />
    </header>
  );
};