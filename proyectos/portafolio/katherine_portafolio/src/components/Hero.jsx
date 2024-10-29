import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/projects');
  };

  return (
    <section
      id="hero"
      className="bg-cover bg-center text-softWhite h-screen flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundImage: `url('https://img.freepik.com/foto-gratis/programador-profesional-trabajando-tarde-oscura-oficina_1098-18705.jpg?t=st=1730240624~exp=1730244224~hmac=8c90166bde38939a0613b1e283b15dd68f89cc778e9201a57bebc047b36f5f40&w=1060')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg mt-10"> {/* Ajusta el margen superior aquí */}
        <h2 className="text-6xl font-bold mb-4">Hola, Soy Katherine Esparragoza</h2> {/* Aumenta el tamaño de la fuente */}
        <p className="text-2xl mb-6"> {/* Aumenta el tamaño de la fuente */}
          Analista de calidad con 3 años de experiencia en pruebas funcionales para dispositivos móviles y web. 
          Con experiencia en automatización de pruebas con herramientas como Serenity, Cucumber, Gradle, y el patrón Screenplay. 
          Experiencia en Azure DevOps gestionando planes de pruebas.
        </p>
        <button
          onClick={handleNavigate}
          className="bg-vibrantPurple text-softWhite px-4 py-2 rounded hover:bg-pinkHover transition duration-300"
        >
          Ver Proyectos
        </button>
      </div>
    </section>
  );
};

export default Hero;
