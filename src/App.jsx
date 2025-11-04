import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio"
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#1F2937] min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20 space-y-28">
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
