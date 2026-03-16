import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import BackToTop3D from './components/BackToTop3D';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programi" element={<Programs />} />
            <Route path="/urnik" element={<Schedule />} />
            <Route path="/ceniki" element={<Pricing />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop3D />
      </div>
    </Router>
  );
}

export default App;
