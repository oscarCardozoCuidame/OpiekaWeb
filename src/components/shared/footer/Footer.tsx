import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="footer-section py-5 bg-light text-dark">
      <Container>
        <Row className="text-center mb-4">
          <Col lg={12}>
            <p className="lead fw-semibold">
              Expertos en desarrollo de software, diseño web, soluciones
              tecnológicas y automatización empresarial. Creamos plataformas
              digitales adaptadas a tu negocio.
              <span className="text-danger"> Solicita una consultoría</span>
            </p>
            <div className="divider mx-auto my-3"></div>
          </Col>
        </Row>

        <Row className="align-items-start text-center text-lg-start">
          <Col lg={4} className="mb-4">
            <img
              src="Logo.svg"
              alt="Logo Opieka"
              width={150}
              className="mb-3"
            />
            <div className="social-icons d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>

          <Col lg={2} className="mb-4">
            <h6 className="fw-bold text-uppercase">Acceso Rápido</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} className="mb-4">
            <h6 className="fw-bold text-uppercase">Como Empresa</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Trabaja con nosotros</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} className="mb-4">
            <h6 className="fw-bold text-uppercase">Ubicación</h6>
            <p className="mb-1">Cota, Cundinamarca</p>
            <p className="mb-0">Tunja, Boyacá</p>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col>
            <small className="text-muted">
              © OPIEKA 2025 TODOS LOS DERECHOS RESERVADOS
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
