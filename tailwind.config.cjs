/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html","*.css",   "./node_modules/flowbite/**/*.js",
  darkMode = 'class'// Esta linea se agrega para que tailwind cargue el modo oscuro
  

 ], // Esta linea se agrega para que tailwind cargue la paquete Flowbite
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}
