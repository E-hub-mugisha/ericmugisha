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

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
