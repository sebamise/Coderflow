
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Portada from './Componentes/Portada';
import Cliente from './Componentes/Clientes';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';
import { Servicios, Seccion } from './Componentes/Servicios'
function App() {

  return (
    <div className="App">
      <div className="Contenedor Overlay">
        <Navegacion Imagen="logo-header" />
        <Portada />
      </div>
      <div className="ContenedorServicios">
        <Servicios />
        <div className='Grid'>
          <Seccion Texto='Desarrollo Web' Icono={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices-pc" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5h6v14h-6z" />
            <path d="M12 9h10v7h-10z" />
            <path d="M14 19h6" />
            <path d="M17 16v3" />
            <path d="M6 13v.01" />
            <path d="M6 16v.01" />
          </svg>} />
          <Seccion Texto='E-Commerce' Icono={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
            <path d="M15 6h6m-3 -3v6" />
          </svg>} />
          <Seccion Texto='Diseño Web' Icono={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-bezier" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="14" width="4" height="4" rx="1" />
            <rect x="17" y="14" width="4" height="4" rx="1" />
            <rect x="10" y="6" width="4" height="4" rx="1" />
            <path d="M10 8.5a6 6 0 0 0 -5 5.5" />
            <path d="M14 8.5a6 6 0 0 1 5 5.5" />
            <line x1="10" y1="8" x2="4" y2="8" />
            <line x1="20" y1="8" x2="14" y2="8" />
            <circle cx="3" cy="8" r="1" />
            <circle cx="21" cy="8" r="1" />
          </svg>} />
        </div>
      </div>
      <div className='ContenedorTizamol'>
        <Cliente Cliente="Tizamol" />
      </div>
      <div className='ContenedorFormulario'>
        <Formulario />
      </div>
      <Footer Logo="logo-header" />
    </div>
  );
}

export default App;
