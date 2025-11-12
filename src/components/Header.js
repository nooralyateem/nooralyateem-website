import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsContactDropdownOpen(false);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsContactDropdownOpen(false);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down and past threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/NaY Logo transparent.png" alt="Noor Al Yateem" className="logo-image" />
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/events" className="nav-link" onClick={closeMobileMenu}>Events</Link>
          <Link to="/gallery" className="nav-link" onClick={closeMobileMenu}>Gallery</Link>
          <div
            className={`nav-item dropdown ${isContactDropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleContactDropdown();
              }}
              aria-haspopup="true"
              aria-expanded={isContactDropdownOpen}
            >
              Contact Us
              <span className="dropdown-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" focusable="false" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className="dropdown-menu">
              <Link to="/contact" className="dropdown-link" onClick={closeMobileMenu}>
                General
              </Link>
              <Link to="/contact/vendors" className="dropdown-link" onClick={closeMobileMenu}>
                Vendors
              </Link>
            </div>
          </div>
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
          
          <a href="https://www.zeffy.com/en-US/donation-form/support-orphans-and-refugees-in-need" target="_blank" rel="noopener noreferrer" className="btn-donate">
            Donate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
