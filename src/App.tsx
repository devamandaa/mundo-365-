import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyMundo365 from "./components/WhyMundo365";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";

import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* CONTEÚDO PRINCIPAL */}
      <main>
        <Hero />
        <Solutions />
        <WhyMundo365 />
        <Certifications />
        <Testimonials />
       
      </main>
        

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
