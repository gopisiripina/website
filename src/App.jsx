import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext'; 
import Sales from './components/Sales';
import Community from './components/Community';
import Careers from './components/Careers';
import FactorySolutions from './components/FactorySolutions';

function App() {
  return (
    <LanguageProvider>  {/* WRAP HERE */}
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/factory-solutions" element={<FactorySolutions />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider> 
  );
}

export default App;