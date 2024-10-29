/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        softWhite: '#f9fafb', // Blanco suave para el texto
        vibrantPurple: '#a855f7', // Púrpura vibrante para detalles y botones
        pinkHover: '#d5006d', // Rosa para efectos hover
        darkGray: '#2d2d2d', // Gris oscuro para fondos
        darkBlue: '#0f172a', // Azul oscuro para secciones sin imagen
      },
    },
  },
  plugins: [],
};
