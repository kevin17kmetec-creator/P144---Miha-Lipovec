import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Domov', path: '/' },
    { name: 'Programi', path: '/programi' },
    { name: 'Urnik', path: '/urnik' },
    { name: 'Ceniki', path: '/ceniki' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl md:text-4xl font-bold tracking-wider flex items-center uppercase group">
          <span className="text-orange-500 group-hover:scale-110 transition-transform">[</span>
          <span className="text-white px-0.5">P144</span>
          <span className="text-orange-500 group-hover:scale-110 transition-transform">]</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors hover:text-orange-500 ${location.pathname === link.path ? 'text-orange-500' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/kontakt" className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-orange-500/20">
          Pridruži se
        </Link>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 px-6 py-8 flex flex-col space-y-6 absolute top-full left-0 w-full shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`text-xl font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-orange-500' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/kontakt" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-center"
          >
            Pridruži se
          </Link>
        </div>
      )}
    </nav>
  );
}
