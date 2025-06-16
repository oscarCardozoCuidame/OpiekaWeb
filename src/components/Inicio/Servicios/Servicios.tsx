import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Servicios.scss';

const slides = [
  {
    image: 'src/assets/img/carrusel/BrisaDeMujer.webp',
    title: 'OPIEKA WEB DESIGN',
    desc1: 'Creamos sitios web modernos, funcionales y alineados con la identidad de tu marca. Combinamos diseño visual impactante con tecnología de alto rendimiento para ofrecer páginas web responsivas, rápidas y enfocadas en conversiones.',
    desc2: 'Además, si tu empresa aún no tiene una identidad visual definida, te ayudamos a construirla desde cero. Diseñamos logotipos, paletas de color, tipografías y estilos visuales coherentes que reflejan la esencia de tu negocio y te diferencian en el mercado.'
  },
  {
    image: 'src/assets/img/carrusel/CuidameHealth.webp',
    title: 'CUIDAME HEALTH',
    desc1: 'Desarrollamos apps y software personalizados para la gestión médica, ideales para clínicas y profesionales de la salud. Nuestras soluciones permiten agendar citas fácilmente, gestionar historias clínicas digitales y acceder a la información del paciente de forma rápida y segura.',
    desc2: 'Incluimos funciones de facturación automatizada, control administrativo y reportes financieros, todo en una plataforma intuitiva y adaptable. Optimiza tu consulta, mejora la atención y ahorra tiempo con tecnología hecha a tu medida.'
  },
  {
    image: 'src/assets/img/carrusel/CuidamePets.webp',
    title: 'CUIDAME PETS',
    desc1: 'Creamos soluciones digitales personalizadas para clínicas veterinarias y profesionales del cuidado animal. Nuestro software permite agendar citas, llevar el control completo de historias clínicas de mascotas, registrar vacunas, tratamientos y evolución médica de forma organizada y segura.',
    desc2: 'Además, ofrecemos un sistema de identificación QR para perros, que facilita el acceso a su información médica desde cualquier dispositivo, mejorando la atención en casos de emergencia o pérdida. También incluye herramientas de facturación y control administrativo para optimizar la gestión de tu centro veterinario.'
  },
  {
    image: 'src/assets/img/carrusel/CuidamePets.webp',
    title: 'CUIDAME PETS',
    desc1: 'Contamos con un equipo multidisciplinario de desarrolladores, diseñadores y especialistas en tecnología enfocados en crear soluciones innovadoras y funcionales. Nos apasiona construir software que realmente resuelva necesidades, combinando eficiencia, seguridad y una experiencia de usuario intuitiva.',
    desc2: 'Trabajamos con metodologías ágiles, lo que nos permite adaptarnos rápidamente a los cambios, colaborar estrechamente con nuestros clientes y garantizar resultados de alta calidad. Nuestro compromiso es claro: desarrollar tecnología que genere impacto y mejore la vida de las personas y sus comunidades.'
  },
  {
    image: 'src/assets/img/carrusel/CuidamePets.webp',
    title: 'CUIDAME PETS',
    desc1: 'Acompañamos a empresas y profesionales en la toma de decisiones clave para digitalizar procesos, optimizar recursos y alcanzar sus objetivos con soluciones a la medida.',
    desc2: 'Con un enfoque integral, combinamos experiencia en salud, tecnología y gestión empresarial para ofrecer asesoría personalizada, desde la planificación hasta la implementación de sistemas digitales. Estamos aquí para guiarte, impulsarte y ayudarte a crecer con el respaldo de la innovación.'
  }
];

export default function Servicios() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToSlide = (i: number) => {
    if (i !== index) {
      setAnimating(true);
      setTimeout(() => {
        setIndex(i);
        setAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  const { image, title, desc1, desc2 } = slides[index];

  return (
    <section className="servicio-web-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className={`web-title d-flex align-items-start text-start ${animating ? 'exit' : 'enter'}`}>
              <img src="/public/Icon.svg" className="logo" alt="logo" width={75} />
              <h1 className="fw-bold m-0">
                <span className="text-info h2">{title.split(' ')[0]}</span>
                <br />
                <span className="text-dark">{title.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>
            <div className={`web-text ${animating ? 'exit' : 'enter'}`}>
              <p className="text-dark fw-semibold">{desc1}</p>
              <p>{desc2}</p>
            </div>
          </Col>

          <Col lg={6}>
            <div className={`web-image ${animating ? 'exit' : 'enter'}`}>
              <img src={image} alt={title} className="img img-fluid rounded" />
            </div>
          </Col>
        </Row>

        {/* Dots */}
        <div className="carousel-dots mt-4 d-flex justify-content-center">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
