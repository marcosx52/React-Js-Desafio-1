import './App.css';
import NavBar from './components/Navbar';
import Contenido from './components/Contenido1'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return(
      <header>
        <NavBar/>
        <Contenido/>
      </header>
  )
}

export default App;
