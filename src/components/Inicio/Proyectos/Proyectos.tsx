import './Proyectos.scss'

import brisaDeMujer from '@/assets/logos/brisaDeMujer.webp';
import maderal from '@/assets/logos/maderal.webp';
import cuidameTech from '@/assets/logos/cuidameTech.webp';
import beneficiate from '@/assets/logos/beneficiate.webp';
import esenciaCuerpo from '@/assets/logos/esenciaCuerpo.webp';
import monteCruz from '@/assets/logos/monteCruz.webp';
import SEGGU from '@/assets/logos/SEGGU.webp';
import eSmart from '@/assets/logos/eSmart.webp';
import brisaDeMujer2 from '@/assets/logos/brisaDeMujer2.webp';
import hyska from '@/assets/logos/hyska.webp';

const Proyectos = () => {
  // Datos de ejemplo para las imágenes
  const proyectos = [
    {
      id: 1,
      imagen: maderal,
      alt: "Proyecto Maderal",
    },
    {
      id: 2,
      imagen: cuidameTech,
      alt: "Proyecto Cuidamic",
    },
    {
      id: 3,
      imagen: beneficiate,
      alt: "Proyecto Beneficiate",
    },
    {
      id: 4,
      imagen: esenciaCuerpo,
      alt: "Proyecto Esencia y Cuerpo",
    },
    {
      id: 5,
      imagen: brisaDeMujer,
      alt: "Proyecto Brisa",
    },
    {
      id: 6,
      imagen: monteCruz,
      alt: "Proyecto Montaña",
    },
    {
      id: 7,
      imagen: SEGGU,
      alt: "Proyecto Seggu",
    },
    {
      id: 8,
      imagen: eSmart,
      alt: "Proyecto Smart Tek",
    },
    {
      id: 9,
      imagen: brisaDeMujer2,
      alt: "Proyecto Brisa 2",
    },
    {
      id: 10,
      imagen: hyska,
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
