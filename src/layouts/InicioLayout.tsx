import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import Hero from "../components/Inicio/Hero/Hero";
import Servicios from "../components/Inicio/Servicios/Servicios";
import SobreNosotros from "../components/Inicio/SobreNosotros/SobreNosotros";
import ComoTrabajamos from "../components/Inicio/ComoTrabajamos/ComoTrabajamos";
import Proyectos from "../components/Inicio/Proyectos/Proyectos";
import "./InicioLayout.scss";

export const InicioLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="header">
        <Header />
      </header>

      {/* Main Body Container */}
      <main className="w-100 min-vh-100 py-5 bg-light">
        <div className="mt-4">
          <Hero />
        </div>

        <div className="mt-5">
          <Servicios />
        </div>

        <div className="mt-5">
          <Proyectos />
        </div>

        <div className="mt-5">
          <SobreNosotros />
        </div>

        <div className="mt-5">
          <ComoTrabajamos />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};
