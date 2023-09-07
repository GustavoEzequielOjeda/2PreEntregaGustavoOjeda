import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/">Banco</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link><Link to="/movimientos">Movimientos</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/category/sumate">Sumate</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/prestamos">Prestamos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/seguridad">Seguridad</Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link><Link to="/faq">FAQ</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;