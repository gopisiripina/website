import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the helper
import Home from './components/Home';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* 1. Add the ScrollToTop component here */}
      <ScrollToTop /> 
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;