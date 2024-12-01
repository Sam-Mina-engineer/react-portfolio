import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Routes between pages.

const App = () => {
  return (
   
    <Router>
     
      <Header />

      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} /> {/* Default route */}
          <Route path="*" element={<About />} />
        </Routes> 
      </main>
      <Footer />
    </Router>
  );
};

export default App;

