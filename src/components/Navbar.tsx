import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/fleet', label: 'Fleet' },
    { to: '/locations', label: 'Locations' },
    { to: '/events', label: 'Events' },
    { to: '/support', label: 'Support' },
  ];

  return (
    <nav className="bg-midnight-dark/70 backdrop-blur-sm border-b border-copper/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-center -mt-2">
            <img 
              src="/images/logo.png" 
              alt="Swift Airport Limousines" 
              className="h-8 w-auto object-contain"
            />
            <h1 className="font-garamond text-copper text-lg mt-1">Swift Airport Limousines</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-garamond text-lg hover:text-copper transition-colors whitespace-nowrap ${
                  location.pathname === link.to ? 'text-copper' : 'text-copper-light/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-gradient-to-r from-copper to-copper-dark text-midnight px-8 py-2.5 rounded-full 
                       font-garamond hover:shadow-copper-glow transition-all whitespace-nowrap transform 
                       hover:scale-105 active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-copper"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block font-garamond text-lg hover:text-copper transition-colors ${
                  location.pathname === link.to ? 'text-copper' : 'text-copper-light/60'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="block bg-gradient-to-r from-copper to-copper-dark text-midnight px-6 py-2.5 
                       rounded-full font-garamond hover:shadow-copper-glow transition-all text-center 
                       transform hover:scale-105 active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;