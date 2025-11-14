import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup functionality
    console.log('Newsletter signup:', email);
    setEmail('');
    setShowNewsletterModal(false);
  };

  const closeNewsletterModal = () => {
    setShowNewsletterModal(false);
    setEmail('');
  };

  return (
    <footer id="contact" className="footer">
      {/* Upper Section - White Background */}
      <div className="footer-upper">
        <div className="footer-upper-content">
          {/* Left Column - Logo and Mission */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/NaY Logo transparent.png" alt="Noor Al Yateem" className="footer-logo-image" />
            </div>
            <img 
              src="/slogan-clear.jpg" 
              alt="home is where humanity is" 
              className="footer-mission-text"
            />
          </div>

          {/* Middle Columns - Navigation Links */}
          <div className="footer-nav-columns">
            <div className="footer-nav-column">
              <h4 className="footer-nav-header">TAKE ACTION</h4>
              <ul className="footer-nav-list">
                <li><a href="https://www.zeffy.com/en-US/donation-form/support-orphans-and-refugees-in-need" target="_blank" rel="noopener noreferrer">Donate</a></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-header">ABOUT US</h4>
              <ul className="footer-nav-list">
                <li><a href="/about#mission">Our Mission</a></li>
                <li><a href="/about#team">Meet Our Team</a></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-header">LEARN MORE</h4>
              <ul className="footer-nav-list">
                <li><a href="/contact#get-in-touch">Get in Touch</a></li>
                <li><a href="/contact#faq">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="footer-social-section">
            <h4 className="footer-social-header">FOLLOW US</h4>
            <div className="footer-social">
              <a href="https://www.tiktok.com/@nooralyateemutd" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nooralyateemutd?igsh=aWUxeThzcWgyNWtj" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@nooralyateemutd" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/noor-al-yateem/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Blue Background */}
      <div className="footer-lower">
        <div className="footer-lower-content">
          <div className="footer-legal">
            <Link to="/contact#terms">Terms and Conditions</Link>
            <span className="footer-separator">|</span>
            <Link to="/contact#privacy">Privacy Policy</Link>
            <span className="footer-separator">|</span>
            <Link to="/contact">Contact us</Link>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      {showNewsletterModal && (
        <div className="newsletter-modal-overlay" onClick={closeNewsletterModal}>
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="newsletter-modal-close" onClick={closeNewsletterModal} aria-label="Close">
              ×
            </button>
            <h3 className="newsletter-modal-title">Join Our Newsletter</h3>
            <p className="newsletter-modal-description">
              Stay updated with our latest news, events, and initiatives.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-modal-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-modal-input"
                required
                autoFocus
              />
              <button type="submit" className="newsletter-modal-submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
