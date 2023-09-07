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
            <Nav.Link> <Link to="/">Inicio</Link> </Nav.Link>
            <Nav.Link href="#features">Movimientos</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Targetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Prestamos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Moneda Extranjera</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;