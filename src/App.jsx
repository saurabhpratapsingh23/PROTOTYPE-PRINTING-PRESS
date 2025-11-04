import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-[#0F172A] text-gray-100 min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route
            path="*"
            element={
              <div className="text-center mt-20 text-red-400 text-2xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
