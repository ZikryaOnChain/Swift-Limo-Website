import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Locations from './pages/Locations';
import CityPage from './pages/Locations/CityPage';
import Events from './pages/Events';
import Support from './pages/Support';
import Quote from './pages/Quote';
import ThankYou from './pages/ThankYou';

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-midnight via-midnight-light to-midnight text-copper-lightest">
        {/* Top Contact Bar */}
        <div className="bg-midnight-dark/70 backdrop-blur-sm py-2 px-4 text-center border-b border-copper/20">
          <a href="tel:+16473895380" className="inline-flex items-center gap-2 hover:text-copper transition-colors">
            <Phone size={18} className="text-copper" />
            <span className="font-garamond">+1 (647) 389-5380</span>
          </a>
        </div>

        <Navbar />

        <main className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-copper/5 via-transparent to-transparent pointer-events-none"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:city" element={<CityPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/support" element={<Support />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        <footer className="bg-midnight-dark/70 backdrop-blur-sm border-t border-copper/20 py-8 px-4 mt-16">
          <div className="container mx-auto text-center">
            <p className="font-garamond text-copper-light/80">&copy; {new Date().getFullYear()} Swift Airport Limousines. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App