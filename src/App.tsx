
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        <Hero />
        <Solutions />
        <Stats />
        <Certifications />
        <Awards />
        <Testimonials />
        <Partners />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
