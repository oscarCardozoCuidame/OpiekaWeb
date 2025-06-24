import { Container, Row, Col } from 'react-bootstrap';
import './ComoTrabajamos.scss';

export default function ComoTrabajamos() {
  return (
    <section className="como-trabajamos-section py-5">
      <Container>
        <Row className="text-white mb-4">
          <Col md={6}>
            <p className="text-muted small">Paso a paso</p>
            <h2 className="fw-bold">
              ¿Cómo <span className="text-info">trabajamos</span>?
            </h2>
          </Col>
          <Col md={6} className='text-md-start'>
            <p>
              Tenemos un estructurado proceso de trabajo que asegura que los proyectos
              sean completados de según lo planeado y acorde a tus necesidades.
            </p>
            <p>
              Nuestro proceso lo podemos resumir en estos pasos
            </p>
          </Col>
        </Row>

        <Row className="text-center text-white justify-content-between mt-5 proceso-pasos">
          {[
            { icon: 'src/assets/icons/breafing.svg', label: 'BREAFING' },
            { icon: 'src/assets/icons/design.svg', label: 'DISEÑO' },
            { icon: 'src/assets/icons/develop.svg', label: 'DESARROLLO' },
            { icon: 'src/assets/icons/deploy.svg', label: 'DESPLIEGUE' },
          ].map((step, index) => (
            <Col key={index} xs={6} md={3} className="mb-4 d-flex flex-column align-items-center">
              <div className="paso-icono">
                {/* Reemplazar por íconos SVG en producción */}
                <span role="img" aria-label={step.label} className="icono-emoji">
                  <img src={step.icon} alt={step.label} className='icons'/>
                </span>
              </div>
              <p className="mt-3 fw-semibold text-info">{step.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
