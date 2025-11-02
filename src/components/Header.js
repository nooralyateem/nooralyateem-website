import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/NaY Logo transparent.png" alt="Noor Al Yateem" className="logo-image" />
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/events" onClick={closeMobileMenu}>Events</Link>
          <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
        </nav>

        <div className="header-actions">
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <Link to="/donate" className="btn-donate">
            Donate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

