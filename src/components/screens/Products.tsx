import React from 'react';

export const Products: React.FC = () => {
  const products = [
    {
      category: 'Panes Artesanales',
      items: [
        {
          name: 'Baguette Tradicional',
          price: '$45',
          description: 'Pan crujiente con miga suave y alveolada',
          image: 'https://www.schaer-foodservice.com/wp-content/uploads/Baguette-800-x-450-px-1-576x324.png'
        },
        {
          name: 'Telera Tradicional',
          price: '$65',
          description: 'Fermentación natural, sabor único',
          image: 'https://polvillo.es/wp-content/uploads/2023/05/telera-mexicana.jpg'
        },
        {
          name: 'Croissant',
          price: '$55',
          description: 'Rico en fibra y sabor intenso',
          image: 'https://d2jnzwd77blap.cloudfront.net/wp-content/uploads/2021/09/10100200/croissant.jpg'
        }
      ]
    },
    {
      category: 'Pasteles Gourmet',
      items: [
        {
          name: 'Tarta de Frutas',
          price: '$380',
          description: 'Tarta de frutas frescas de temporada',
          image: 'https://png.pngtree.com/png-clipart/20240928/original/pngtree-french-fruit-tart-png-image_16112362.png'
        },
        {
          name: 'Pastel de Chocolate',
          price: '$420',
          description: 'Chocolate belga de primera calidad',
          image: 'https://consola.lazarza.com.mx//storage/178/choco.png'
        },
        {
          name: 'Cheesecake',
          price: '$350',
          description: 'Cremoso con base de galleta artesanal',
          image: 'https://kuchenaltareposteria.com/cdn/shop/files/CheesecakeNewYorksemicompleto_1000x.png?v=1684375540'
        }
      ]
    },
    {
      category: 'Especialidades',
      items: [
        {
          name: 'Pan de Muerto',
          price: '$20',
          description: 'Mantequilla francesa, almendras tostadas',
          image: 'https://neufeldresources.blob.core.windows.net/catalogos/content/catalogo-ecommerce/Postres/PanDeMuerto.png'
        },
        {
          name: 'Pan Dulce',
          price: '$10',
          description: 'Pan Dulce Mexicano Tradicional',
          image: 'https://superalfred.com/wp-content/uploads/panes1.png'
        },
        {
          name: 'Roles',
          price: '$25',
          description: 'Variedad de sabores únicos',
          image: 'https://listonic.com/phimageproxy/listonic/products/cinnamon_rolls.webp'
        }
      ]
    }
  ];

  return (
    <div>
      <section className="section">
        <h2 className="title">Nuestros Productos</h2>
        {/* <p className="subtitle">Descubre nuestra selección de productos artesanales</p> */}

        
        {products.map((category, index) => (
          <div key={index} className="section">
            <h3 className="subtitle">{category.category}</h3>
            <div className="grid">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="card">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="product-image"
                  />
                  <h3 className='text-i' >{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="subtitle">{item.price}</p>
                  <button className="button">Agregar al carrito</button>
                </div>
              ))}
            </div>
          </div>
        ))}
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