import './Proyectos.scss'

const Proyectos = () => {
  // Datos de ejemplo para las imágenes
  const proyectos = [
    {
      id: 1,
      imagen: "src/assets/logos/maderal.webp",
      alt: "Proyecto Maderal",
    },
    {
      id: 2,
      imagen: "src/assets/logos/cuidameTech.webp",
      alt: "Proyecto Cuidamic",
    },
    {
      id: 3,
      imagen: "src/assets/logos/beneficiate.webp",
      alt: "Proyecto Beneficiate",
    },
    {
      id: 4,
      imagen: "src/assets/logos/esenciaCuerpo.webp",
      alt: "Proyecto Nygkr",
    },
    {
      id: 5,
      imagen: "src/assets/logos/brisaDeMujer.webp",
      alt: "Proyecto Brisa",
    },
    {
      id: 6,
      imagen: "src/assets/logos/monteCruz.webp",
      alt: "Proyecto Montaña",
    },
    {
      id: 7,
      imagen: "src/assets/logos/SEGGU.webp",
      alt: "Proyecto Seggu",
    },
    {
      id: 8,
      imagen: "src/assets/logos/eSmart.webp",
      alt: "Proyecto Smart Tek",
    },
    {
      id: 9,
      imagen: "src/assets/logos/brisaDeMujer2.webp",
      alt: "Proyecto Brisa 2",
    },
    {
      id: 10,
      imagen: "src/assets/logos/hyska.webp",
      alt: "Proyecto Brisa 2",
    },
  ];

  return (
    <>
      <div className="container proyectos-container py-5">
        <div className="row g-4">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="col-12 col-sm-6 col-md-4 col-lg-2-5"
            >
              <div className="card h-100 shadow-sm border-0">
                <div
                  className="card-img-wrapper"
                  style={{ height: "200px", overflow: "hidden" }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.alt}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyectos;
