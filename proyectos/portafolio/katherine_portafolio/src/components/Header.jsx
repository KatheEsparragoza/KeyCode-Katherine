// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-transparent text-softWhite fixed w-full top-0 z-10 p-4 flex justify-between items-center">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-vibrantPurple to-pinkHover shadow-lg hover:scale-105 transition-transform duration-300">
        Mi Portafolio
      </h1> {}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-xl hover:text-vibrantPurple">Inicio</Link>
          </li>
          <li>
            <Link to="/experience" className="text-xl hover:text-vibrantPurple">Experiencia</Link>
          </li>
          <li>
            <Link to="/projects" className="text-xl hover:text-vibrantPurple">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl hover:text-vibrantPurple">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
