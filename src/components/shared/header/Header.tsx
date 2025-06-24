// header.jsx
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Header.scss';

export default function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="Logo.svg"
            width="175"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Toggle para móviles */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Collapse del menú */}
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#inicio" className="active-link">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>

          <div className="text-center mt-3 mt-lg-0">
            <Button variant="danger" className="rounded-pill px-4 py-2 fw-semibold">
              Hablemos
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
