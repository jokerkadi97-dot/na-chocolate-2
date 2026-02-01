
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brandBlack/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.2em] text-luxuryGold group-hover:text-white transition-colors">
            NA CHOCOLATE
          </span>
          <span className="text-[10px] md:text-xs font-light tracking-[0.3em] uppercase text-luxuryGold/60">
            Le coin du chocolat
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase hover:text-luxuryGold transition-colors ${location.pathname === link.path ? 'text-luxuryGold' : 'text-white/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/products"
            className="px-6 py-2 bg-luxuryGold text-brandBlack text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 rounded-sm"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-luxuryGold p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brandBlack z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          className="absolute top-8 right-8 text-luxuryGold"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-2xl font-serif text-white hover:text-luxuryGold tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
