import { Container, Row, Col } from "react-bootstrap";
import "./SobreNosotros.scss";

export default function SobreNosotros() {
  return (
    <section className="sobre-nosotros-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/src/assets/img/sobreNosotros.webp"
              alt="Equipo trabajando"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <p className="text-muted small fw-semibold">Acerca de Nosotros</p>
            <h2 className="fw-bold text-start">
              Descubre por qué somos tu mejor aliado en{" "}
              <span className="text-info">tecnología</span>
            </h2>
            <p className="text-start mt-3">
              Creamos soluciones digitales a la medida, combinando tecnología y
              diseño para potenciar tu proyecto. Nuestro equipo experto en
              desarrollo de software, diseño web y UX/UI te acompaña en cada
              paso del proceso.
            </p>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h5 className="fw-bold fs-4">
              <span className="d-block">
                Tecnología con sentido{" "}
                <span className="text-danger">humano</span>,
              </span>
              <span className="d-block">
                diseñada para conectar, cuidar y avanzar
              </span>
            </h5>
          </Col>
        </Row>

        <Row className="text-center mt-4  justify-content-center">
          <Col xs={6} md={2} className="mb-6">
            <h4 className="fw-bold text-dark">
             <small className="text-secondary"> 3 países</small>
            </h4>
            <p className="text-danger fs-5 m-0">en operación</p>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <h4 className="fw-bold text-dark">
              <small className="text-secondary">+100 clientes</small>
            </h4>
            <p className="text-danger fs-5 m-0">clientes</p>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <h4 className="fw-bold text-dark">
             <small className="text-secondary">+7 apps</small>
            </h4>
            <p className="text-danger fs-5 m-0">desarrolladas</p>
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <h4 className="fw-bold text-dark">
              <small className="text-secondary">+50 webs</small>
            </h4>
            <p className="text-danger fs-5 m-0">diseñadas</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
