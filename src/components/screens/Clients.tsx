import React from 'react';

export const Clients: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Chef Restaurante El Jardín',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      text: 'La calidad de sus productos es excepcional. Llevamos más de 5 años trabajando con ellos para nuestro restaurante y nunca nos han decepcionado.'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Cliente Frecuente',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      text: 'El mejor pan artesanal que he probado. Sus baguettes son increíbles y el servicio siempre es excelente.'
    },
    {
      name: 'Ana Martínez',
      role: 'Organizadora de Eventos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      text: 'Sus pasteles para eventos son obras de arte. Siempre sorprenden a nuestros clientes con diseños únicos y sabores extraordinarios.'
    }
  ];

  const reviews = [
    {
      title: 'Pan de Masa Madre',
      rating: 5,
      comment: 'Increíble textura y sabor. Se nota la fermentación natural.',
      author: 'Laura P.'
    },
    {
      title: 'Croissants de Almendra',
      rating: 5,
      comment: 'Los mejores croissants que he probado fuera de Francia.',
      author: 'Miguel S.'
    },
    {
      title: 'Tarta de Frutas',
      rating: 5,
      comment: 'Fresca, ligera y perfectamente equilibrada.',
      author: 'Isabel M.'
    }
  ];

  return (
    <div>
      <section className="section">
        <h2 className="title">Testimonios de Clientes</h2>
        <div className="grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="product-image" 
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
              />
              <h3>{testimonial.name}</h3>
              <p className="subtitle">{testimonial.role}</p>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Reseñas de Productos</h2>
        <div className="grid">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <h3>{review.title}</h3>
              <div style={{ color: '#FFD700', fontSize: '24px' }}>
                {'★'.repeat(review.rating)}
              </div>
              <p>"{review.comment}"</p>
              <p className="subtitle">- {review.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Clientes Corporativos</h2>
        <div className="card">
          <p>Trabajamos con los mejores restaurantes, hoteles y establecimientos de la ciudad:</p>
          <ul>
            <li className='text-i' >Restaurante El Jardín</li>
            <li className='text-i' >Hotel Grand Plaza</li>
            <li className='text-i' >Tierra Prometida</li>
            <li className='text-i' >Las Milanesas</li>
          </ul>
          <button className="button">Consultar servicios corporativos</button>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Comparte tu Experiencia</h2>
        <div className="card">
          <p>Nos encantaría escuchar sobre tu experiencia con nuestros productos.</p>
          <button className="button">Escribir una reseña</button>
        </div>
      </section>
    </div>
  );
};