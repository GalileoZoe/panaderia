import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const Store: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [filter, setFilter] = useState('todos');

  const products: Product[] = [
    {
      id: 1,
      name: 'Baguette Tradicional',
      price: 45,
      image: 'https://www.schaer-foodservice.com/wp-content/uploads/Baguette-800-x-450-px-1-576x324.png',
      description: 'Pan crujiente con miga suave y alveolada',
      category: 'panes'
    },
    {
      id: 2,
      name: 'Croissant',
      price: 48,
      image: 'https://d2jnzwd77blap.cloudfront.net/wp-content/uploads/2021/09/10100200/croissant.jpg',
      description: 'Mantequilla francesa, almendras tostadas',
      category: 'dulces'
    },
    {
      id: 3,
      name: 'Tarta de Frutas',
      price: 380,
      image: 'https://i0.wp.com/postresoriginales.com/wp-content/uploads/2017/02/Tarta-de-Frutas-Frescas-06.jpg?fit=4928%2C3264&ssl=1',
      description: 'Tarta de frutas frescas de temporada',
      category: 'pasteles'
    },
    {
      id: 4,
      name: 'Telera Tradicional',
      price: 65,
      image: 'https://polvillo.es/wp-content/uploads/2023/05/telera-mexicana.jpg',
      description: 'Fermentación natural, sabor único',
      category: 'panes'
    },
    {
      id: 5,
      name: 'Macarons',
      price: 25,
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Variedad de sabores únicos',
      category: 'dulces'
    },
    {
      id: 6,
      name: 'Pastel de Chocolate',
      price: 420,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Chocolate belga de primera calidad',
      category: 'pasteles'
    }
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(product => product.category === filter);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <section className="section">
        <h2 className="title">Tienda en Línea</h2>
        
        <div className="card">
          <div style={{ display: 'flex', gap: '1rem'}}>

            <button 
              className={`button ${filter === 'todos' ? 'active' : ''}`}
              onClick={() => setFilter('todos')}
            >
              Todos
            </button>
            <button 
              className={`button ${filter === 'panes' ? 'active' : ''}`}
              onClick={() => setFilter('panes')}
            >
              Panes
            </button>
            <button 
              className={`button ${filter === 'pasteles' ? 'active' : ''}`}
              onClick={() => setFilter('pasteles')}
            >
              Pasteles
            </button>
            <button 
              className={`button ${filter === 'dulces' ? 'active' : ''}`}
              onClick={() => setFilter('dulces')}
            >
              Dulces
            </button>
            
          </div>
        </div>

        <div className="grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="subtitle">${product.price}</p>
              <button 
                className="button"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Tu Carrito</h2>
        <div className="card">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '0.5rem',
                  borderBottom: '1px solid var(--secondary-color)'
                }}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <button 
                    className="button"
                    onClick={() => removeFromCart(item.id)}
                    style={{ backgroundColor: '#ff4444' }}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              <div style={{ 
                marginTop: '2rem', 
                padding: '1rem', 
                borderTop: '2px solid var(--primary-color)'
              }}>
                <h3>Total: ${total}</h3>
                <button 
                  className="button"
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={() => alert('¡Gracias por tu compra!')}
                >
                  Proceder al pago
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Información de Envío</h2>
        <div className="card">
          <h3>Políticas de envío</h3>
          <ul>
            <li className='text-i' >Envío gratuito en pedidos mayores a $500</li>
            <li className='text-i' >Entrega el mismo día para pedidos antes de las 12 PM</li>
            <li className='text-i' >Área de entrega: 10 km a la redonda</li>
            <li className='text-i' >Tiempo estimado de entrega: 30-45 minutos</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Pedidos Especiales</h2>
        <div className="card">
          <p>¿Buscas algo específico? Hacemos pedidos personalizados para eventos y ocasiones especiales.</p>
          <button className="button">Contactar para pedido especial</button>
        </div>
      </section>
    </div>
  );
};