import { Container, Row, Col } from 'react-bootstrap';
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero-section pt-5">
      <Container>
        <Col className="px-5 align-items-center">
          <Row lg={2}>
            <h4 className="text-end p-3 mr-5 fw-semibold">
              Soluciones digitales que impulsan tu <span className="text-danger">negocio</span><br />
              Desarrollamos software a medida, páginas web modernas y tecnología de alto impacto para hacer crecer tu <span className="text-danger">empresa</span>.
            </h4>
            <p className="text-start mt-3">
              Diseñamos e implementamos soluciones digitales que se adaptan a las necesidades específicas de cada cliente. Ya sea que necesites una página web profesional, una app personalizada o automatizar tus procesos, nosotros lo hacemos posible.
            </p>
          </Row>
        </Col>
      </Container>
    </section>
  );
}
