import './App.css';
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Presentacion from "./components/Presentacion";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";
import fotoPerfil from './Images/imagenSena.jpg'


function App() {
  const programa = "Analisis y Desarrollo de Software";
  const usuario = {
  nombre: 'Juan Jose',
  apellido: 'Martinez',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
  correo: 'jmartinezmompotes@gmail.com',
  barrio: 'Nuevo Amanecer',
  telefono: '3173293721'
}
  return (
    <div className="app-padre">
      <Encabezado usuario={usuario} />
      <div className="app-layout">
          <Sidebar usuario={usuario} />

        <main className="contenido">
          <h2>Bienvenido al programa {programa}</h2>
          <Presentacion usuario={usuario}/>
          <section className="tarjetas">
            <Tarjeta
             icono="⚛️"
             titulo= "React"
             descripcion= "Herramienta de JavaScript para construir interfaces con componentes"
             horas={120}
             destacada= {true}
             />
            <Tarjeta
             icono="⚡"
             titulo= "Vite"
             descripcion= "Herramienta que crea, ejecuta y empaqueta el proyecto"
             horas={60}
             destacada= {false}
             />
            <Tarjeta
             icono="🔍"
             titulo= "ESLint"
             descripcion= "Herramienta de JavaScript para construir in"
             horas={20}
             destacada= {true}
             />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;