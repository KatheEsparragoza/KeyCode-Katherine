import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('https://tu-api.com/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Hubo un problema al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la conexión. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section
      id="contact"
      className="bg-darkBlue bg-opacity-70 text-softWhite p-12 text-center"
      style={{
        backgroundImage: 'url(https://img.freepik.com/vector-gratis/fondo-galaxia-estrellas-realistas_23-2148964715.jpg?t=st=1730241069~exp=1730244669~hmac=cc4d289598285cde257dc1f1f9040a2223318d84c74ca4f92ebcca3974702e48&w=1060)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2 className="text-5xl font-bold mb-6">Contacto</h2>
      <p className="text-lg mb-4">
        Me apasiona ayudar a las empresas a mejorar sus procesos de calidad y optimizar sus pruebas automatizadas. ¡Estoy aquí para ayudarte a alcanzar tus objetivos!
      </p>
      <p className="text-lg mb-4">
        Estoy disponible para consultas de lunes a viernes, de 9 AM a 5 PM.
      </p>
      <ul className="list-none space-y-4">
        <li className="flex items-center justify-center text-lg">
          <FaPhoneAlt className="text-vibrantPurple mr-2" />
          Teléfono: <span className="ml-2">+57 312 587 1095</span>
        </li>
        <li className="flex items-center justify-center text-lg">
          <FaEnvelope className="text-vibrantPurple mr-2" />
          Email:
          <a href="mailto:caterinevillalba@gmail.com" className="text-vibrantPurple hover:text-pinkHover underline ml-2">
            caterinevillalba@gmail.com
          </a>
        </li>
        <li className="flex items-center justify-center text-lg">
          <FaLinkedin className="text-vibrantPurple mr-2" />
          LinkedIn:
          <a href="https://www.linkedin.com/in/katherineev/" className="text-vibrantPurple hover:text-pinkHover underline ml-2">
            linkedin.com/in/katherineev
          </a>
        </li>
        <li className="flex items-center justify-center text-lg">
          <FaGithub className="text-vibrantPurple mr-2" />
          GitHub:
          <a href="https://github.com/KatheEsparragoza" className="text-vibrantPurple hover:text-pinkHover underline ml-2">
            github.com/KatheEsparragoza
          </a>
        </li>
        <li className="flex items-center justify-center text-lg">
          <FaWhatsapp className="text-vibrantPurple mr-2" />
          WhatsApp:
          <a
            href="https://wa.me/573125871095?text=¡Hola%20Katherine!%20Me%20gustaría%20contactarte%20y%20ampliar%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!"
            target="_blank"
            rel="noreferrer"
            className="text-vibrantPurple hover:text-pinkHover underline ml-2"
          >
            ¡Háblame por WhatsApp!
          </a>
        </li>
      </ul>

      <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-2 rounded bg-darkGray text-softWhite placeholder:text-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu email"
          className="p-2 rounded bg-darkGray text-softWhite placeholder:text-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          className="p-2 rounded bg-darkGray text-softWhite placeholder:text-gray-400"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-vibrantPurple text-softWhite p-2 rounded hover:bg-pinkHover transition-colors duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;
