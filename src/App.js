import './App.css';
import Header from './components/Header/Header';
import AboutSection from './Pages/AboutSection/AboutSection';
import HeroSection from './Pages/HeroSection/HeroSection';
import ServiceSection from './Pages/ServiceSection/ServiceSection';
import ProductSection from './Pages/ProductSection/ProductSection';
import Visionaries from './Pages/VisionariesSection/Visionaries';
import OurClientSection from './Pages/OurClientSection/OurClientSection';
import TestimonialsSection from './Pages/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProductSection/>
        <Visionaries />
        <OurClientSection/>
        <TestimonialsSection/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
