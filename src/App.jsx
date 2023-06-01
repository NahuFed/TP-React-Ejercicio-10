import { Container } from 'react-bootstrap'
import './App.css'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Container className='main mt-5'>
     <Formulario></Formulario>

    </Container>
    <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer>     

    </>
  )
}

export default App
