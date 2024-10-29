import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black bg-opacity-60 text-softWhite p-12"
      style={{
        backgroundImage: 'url(https://img.freepik.com/foto-gratis/fondo-espacial-polvo-estrellas-estrellas-brillantes-cosmos-colorido-realista-nebulosa-via-lactea_1258-150925.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Añade 'text-center' para centrar el título */}
      <h2 className="text-6xl font-bold mb-4 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto 1 */}
        <div className="bg-darkGray bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Proyecto 1</h3>
          <img
            src="https://www.pagatodo.com.co/sites/default/files/960x450_Mesa%20de%20trabajo%201_0.jpg"
            alt="Proyecto 1"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>Participé en el proceso de automatización de las pruebas end to end para la plataforma BackOffice de Paga Todo.Donde se manejan todos 
            los procesos de gestión y creacion de empresas, configuración de productos, vendedores, clientes, horarios de ventas entre otras configuraciones.
          </p>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-darkGray bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Proyecto 2</h3>
          <img
            src="https://play-lh.googleusercontent.com/2jtXOAoU_lEhsElS7PWDLo0teB0GIAbp47qZ2EgkZ1ASwq1JFuyAXDf3GLXwLWYBouP_"
            alt="Proyecto 2"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>Participé en el desarrollo de la página web KACN, un proyecto diseñado para poner en práctica los conocimientos adquiridos en el bootcamp
             de Mujeres Digitales, en convenio con el SENA. En este proyecto, implementé funcionalidades relacionadas con la creación de Rutas 
             y apliqué estilos utilizando Tailwind CSS, lo que permitió crear una interfaz atractiva y responsiva.
          </p>
        </div>

        {/* Proyecto 3 */}
        <div className="bg-darkGray bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Proyecto 3</h3>
          <img
            src="https://pagatodo.com.co/sites/default/files/PTV_NAVIDAD_Mesa%20de%20trabajo%201.jpg"
            alt="Proyecto 3"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>Participé en el proceso de automatización de los casos de pruebas Funcionales para la plataforma WEB VENTAS de Paga Todo. Donde se realiza todo el proceso de ventas
          ya sea de productos propios o de terceros</p>
        </div>

        {/* Proyecto 4 */}
        <div className="bg-darkGray bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Proyecto 4</h3>
          <img
            src=""
            alt="Proyecto 4"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>Descripción
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
