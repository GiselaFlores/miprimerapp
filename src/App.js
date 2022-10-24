import './App.css';
import Usuarios from "./componentes/Usuarios";
import Boton from './componentes/Boton';
import Cont from './componentes/Cont';


function App() {
  return (
    <div className="App carlos">

    <h1 className="text-white pt-4">Hola Components</h1>
    
    <Usuarios nombre="Gisela" edad="40" localidad="CABA" color="yellow"/>
    <Usuarios nombre="Rodrigo" edad="35" localidad="CABA" color="green"/>

    {/*A react no le importa el orden de las props ni si falta alguna, solo muestra lo que tiene y no da error*/}
    <Usuarios nombre="Laura" edad="20" color="red" localidad="CABA"/>
    
    {/*Buscar la forma de pasar el link por props */}
    {/*<Boton/>*/}
    <Cont/>
    </div>
    
  );
}

export default App;
