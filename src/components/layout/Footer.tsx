import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
          <img className='logo' src={require('../../assets/logo-000.png')} alt='Logo Panaderpia Bernal' />
          <p className='text-i' >© 2025 Panadería Bernal. Desde 1945.</p>
    </footer>
  );
};