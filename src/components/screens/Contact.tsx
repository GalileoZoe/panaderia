import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="section">
        <h2 className="title">Contáctanos</h2>
        <div className="grid">


          <div className="card">

<h1 className="title">Panadería Bernal</h1>
        <img className='feedimage' src={require('../../assets/logo-000.png')} alt='Logo Panaderpia Bernal' />
        <p className="paragraph">Panadería Gourmet Orgullosamente Mexicana.</p>

       </div>
       <div className="card">
            <h3>Información de Contacto</h3>
            <p><strong>Teléfono:</strong> (55) 1234-5678</p>
            <p><strong>Email:</strong> info@panaderiagourmet.com</p>
            <p><strong>WhatsApp:</strong> +52 55 1234 5678</p>
            <p><strong>Dirección:</strong> Av. Principal #123, Colonia Centro</p>
            <div style={{ marginTop: '1rem' }}>
              <h4 >Síguenos en redes sociales:</h4>
              <div className='card'>
                <a href="#" className="button">Facebook</a>
                <a href="#" className="button">WhatsApp</a>
                <a href="#" className="button">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle">Preguntas Frecuentes</h2>
        <div className="card">
          <h3>¿Cuál es el tiempo de entrega para pedidos especiales?</h3>
          <p>Los pedidos especiales requieren un mínimo de 48 horas de anticipación.</p>

          <h3>¿Hacen entregas a domicilio?</h3>
          <p>Sí, realizamos entregas en un radio de 10 km desde nuestra ubicación.</p>

          <h3>¿Tienen opciones sin gluten?</h3>
          <p>Sí, contamos con una línea completa de productos sin gluten elaborados en un área dedicada.</p>

          <h3>¿Cómo puedo hacer un pedido para eventos?</h3>
          <p>Puedes contactarnos a través de WhatsApp o llamarnos directamente para discutir los detalles de tu evento.</p>

          <a href="#" className="button">Hacer Pedido</a>

        </div>
      </section>
    </div>
  );
};