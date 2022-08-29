import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/resume';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Testmonial from './components/Testmonial';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Skills />
    <Resume />
    <Certificates />
    <Projects />
    <Testmonial />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
