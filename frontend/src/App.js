import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logoaicc from './img/aicc.png';

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Cursos from './components/cursos'
import Contacto from './components/contacto'
import Peluqueria from './components/peluqueria'
import Computacion from './components/computacion'
import Ingles from './components/ingles'
import Secretariado from './components/secretariado'
import Matricula from './components/matricula'
import Profesores from './components/profesores'
import Relleno from './components/relleno'
import Horario from './components/horario'

function App() {
  //const handleSelect = (eventKey) => 
  return (
    <Router>
      <div className="App">
        <Nav activeKey='1' className="navbar navbar-light fixed-top custom-nav-container">
          <div className="navbar navbar-expand-lg custom-nav-left">
            <Nav.Item eventKey='1'>
            <Link className="navbar-brand justify-content-start"  to={'/home'}>
                <img src={logoaicc} alt='AICC' width="100" height="50"/>
              </Link>
            </Nav.Item>
            <NavDropdown title="Cursos" id="cursos-dropdown">
              <NavDropdown.Item as={Link} to="/ingles" eventKey='2.1'>Inglés</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/computacion" eventKey='2.2'>Computacion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/peluqueria" eventKey='2.3'>Peluqueria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secretariado" eventKey='2.4'>Secretariado</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as={Link} to="/profesores" eventKey='8'className='custom-nav'>Profesores</Nav.Item>
            <Nav.Item as={Link} to="/matricula" eventKey='5'className='custom-nav'>Matricula</Nav.Item>
            <Nav.Item as={Link} to="/horario" eventKey='3'className='custom-nav'>Horario</Nav.Item>
            <Nav.Item as={Link} to="/contacto" eventKey='7'className='custom-nav'>Contacto</Nav.Item>
          </div>
          <div className="custom-nav-right">
            <Nav.Item as={Link} to="/sign-in" eventKey='6'className='custom-nav' style={{float:'right'}}>Ingresar</Nav.Item>
          </div>
        </Nav>
            <Routes>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/cursos" element={<Cursos/>}/>
              <Route path="/ingles" element={<Ingles/>}/>
              <Route path="/computacion" element={<Computacion/>}/>
              <Route path="/peluqueria" element={<Peluqueria/>}/>
              <Route path="/secretariado" element={<Secretariado/>}/>
              <Route path="/matricula" element={<Matricula/>}/>
              <Route path="/relleno" element={<Relleno/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/profesores" element={<Profesores/>}/>
              <Route path="/horario" element={<Horario/>}/>
            </Routes>
      <Relleno />

      <div class="container" style={{marginTop:"860px"}}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="nav-item"><a href="#" className="nav-link white-link">Facebook</a></li>
            <li className="nav-item"><a href="#" className="nav-link white-link">Instagram</a></li>
          </ul>
        </footer>
      </div>   
      </div>
    </Router>
  )
}

export default App
