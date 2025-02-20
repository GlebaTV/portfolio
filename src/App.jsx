import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./sections/Header/Header.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Work from "./components/ProjectCard/ProjectsList.jsx";
import About from "./sections/About/About.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import "./App.css";
import Footer from "./sections/Footer/Footer.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/portfolio" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div className="mainContent">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
