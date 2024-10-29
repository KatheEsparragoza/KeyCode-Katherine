// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  const images = [
    'https://i0.wp.com/automatenow.io/wp-content/uploads/2023/11/serenity-bdd-and-cucumber.png?fit=1200%2C675&ssl=1',
    'https://media.licdn.com/dms/image/D4D12AQEbTVVJNPni9w/article-cover_image-shrink_720_1280/0/1686216154084?e=2147483647&v=beta&t=fFS3Z5dNEeubxCU3KjoO59xyAbksok2Kw5QddyMLzqU',
    'https://beecrowd.com/wp-content/uploads/2024/04/2023-06-01-Java.jpg',
    'https://terminalroot.com.br/assets/img/java/gradle.jpg',
  ];

  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-softWhite"
      style={{
        backgroundImage: `url('https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?t=st=1730239606~exp=1730243206~hmac=2493c1f5e118dd07ee007d262ebdb2d58f9270647fc7b0280d6c7586ef332a06&w=826')`,
      }}
    >
      <h2 className="text-6xl font-bold mb-4 text-center">Mi Experiencia</h2>
      <p className="text-2xl text-center max-w-2xl mb-8">
        Profesional con amplia experiencia en el análisis, diseño, consolidación, propuesta y ejecución de estrategias de pruebas eficaces,
        centradas en las necesidades del cliente. Me destaco en todo el proceso, desde la recopilación de requisitos hasta la planificación y 
        control de pruebas. Además, tengo experiencia en el diseño, implementación y ejecución de casos de prueba, así como en la automatización 
        de pruebas end-to-end, lo que ha permitido optimizar los procesos de calidad y mejorar la eficiencia en el desarrollo de software.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Experience ${index + 1}`}
            className="rounded shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
