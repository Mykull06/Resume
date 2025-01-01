import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
