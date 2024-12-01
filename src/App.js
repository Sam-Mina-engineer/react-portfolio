import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Corrected import to include Header component
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
          <Route path="/" element={<About />} /> {/* Default route */}
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<About />} /> {/* Fallback route */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
