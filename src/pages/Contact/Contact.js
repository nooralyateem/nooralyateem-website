import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);
  
  // Scroll animations
  const [formSectionRef, formSectionVisible] = useScrollAnimation();
  const [reachSectionRef, reachSectionVisible] = useScrollAnimation();
  const [faqSectionRef, faqSectionVisible] = useScrollAnimation();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFaqKeyDown = (index) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(index);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // In a real application, you would send formData to your server/backend here.
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch - we'd love to hear from you</p>
        </div>
      </section>

      <section id="get-in-touch" className="contact-section">
        <div className="contact-content">
          <div className={`contact-form-wrapper slide-up ${formSectionVisible ? 'visible' : ''}`} ref={formSectionRef}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">LAST NAME *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="ways-to-reach-section" ref={reachSectionRef}>
        <div className="ways-to-reach-content">
          <h2 className={`ways-to-reach-title slide-up ${reachSectionVisible ? 'visible' : ''}`}>Ways to Reach Us</h2>
          
          <div className="reach-cards">
            <div className={`reach-card slide-up delay-1 ${reachSectionVisible ? 'visible' : ''}`}>
              <div className="reach-icon email-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M3 7L12 13L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p className="reach-description">Primary contact for all inquiries</p>
              <a href="mailto:nooralyateemutd@gmail.com" className="reach-link">nooralyateemutd@gmail.com</a>
            </div>
            
            <div className={`reach-card slide-up delay-2 ${reachSectionVisible ? 'visible' : ''}`}>
              <div className="reach-icon instagram-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </div>
              <h3>Follow Us</h3>
              <p className="reach-description">Stay updated with our latest activities</p>
              <a href="https://www.instagram.com/nooralyateemutd/" target="_blank" rel="noopener noreferrer" className="reach-link">@nooralyateemutd</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="faq" className="faq-section" ref={faqSectionRef}>
        <div className="faq-content">
          <h2 className={`faq-title slide-up ${faqSectionVisible ? 'visible' : ''}`}>Frequently Asked Questions</h2>
          <div className="faq-items">
            <div
              className={`faq-item slide-up delay-1 ${openFaq === 0 ? 'open' : ''} ${faqSectionVisible ? 'visible' : ''}`}
              onClick={() => toggleFaq(0)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(0)}
            >
              <div className="faq-question">
                <h3>WHAT IS YOUR MISSION?</h3>
                <span className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>Our mission is to provide support, love, and a nurturing environment for orphaned and refugee children, empowering them to thrive despite their circumstances. Through comprehensive care, education, and mentorship, we aim to instill confidence, skills, and hope for a brighter future.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item slide-up delay-2 ${openFaq === 1 ? 'open' : ''} ${faqSectionVisible ? 'visible' : ''}`}
              onClick={() => toggleFaq(1)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(1)}
            >
              <div className="faq-question">
                <h3>WHEN AND WHY WAS NOOR AL YATEEM FOUNDED?</h3>
                <span className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>Noor Al Yateem was founded in August 2024 with the goal of creating a compassionate community dedicated to uplifting and empowering orphaned and displaced children affected by conflict and poverty.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item slide-up delay-3 ${openFaq === 2 ? 'open' : ''} ${faqSectionVisible ? 'visible' : ''}`}
              onClick={() => toggleFaq(2)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(2)}
            >
              <div className="faq-question">
                <h3>WHERE DO YOU OPERATE AND PROVIDE AID?</h3>
                <span className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>We operate locally in Richardson, Texas, in collaboration with Helping Hands. Together, we extend our support to conflict-affected areas across the Middle East and Asia.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item slide-up delay-4 ${openFaq === 3 ? 'open' : ''} ${faqSectionVisible ? 'visible' : ''}`}
              onClick={() => toggleFaq(3)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(3)}
            >
              <div className="faq-question">
                <h3>ARE YOU A REGISTERED ORGANIZATION?</h3>
                <span className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>Yes! Noor Al Yateem is a registered organization under UTD! Your donation may be eligible for tax-deduction.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item slide-up delay-5 ${openFaq === 4 ? 'open' : ''} ${faqSectionVisible ? 'visible' : ''}`}
              onClick={() => toggleFaq(4)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(4)}
            >
              <div className="faq-question">
                <h3>HOW CAN I VOLUNTEER WITH YOUR ORGANIZATION?</h3>
                <span className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer">
                  <p>Follow our <a href="https://www.instagram.com/nooralyateemutd/" target="_blank" rel="noopener noreferrer">Instagram</a> and join our WhatsApp to get involved!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
