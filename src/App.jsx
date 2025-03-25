import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Seccion1 from './components/views/Seccion1';
import Seccion2 from './components/views/Seccion2';
import Seccion3 from './components/views/Seccion3';
import PreguntasFrecuentes from './components/views/PreguntasFrecuentes';
import Footer from './components/common/Footer';

function App() {
  

  return (
    <>
    
    <Seccion1></Seccion1>
    <Seccion2></Seccion2>
    <Seccion3></Seccion3>
    <PreguntasFrecuentes></PreguntasFrecuentes>
    <Footer></Footer>
     
    </>
  )
}

export default App
