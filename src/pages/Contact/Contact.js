import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

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
      name: '',
      email: '',
      phone: '',
      subject: '',
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

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Whether you have questions, want to volunteer, or are interested in 
                supporting our mission, we're here to help.
              </p>

              <div className="info-items">
                {/* --- Removed Address Info Item --- */}
                {/* --- Removed Phone Info Item --- */}

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@nooralyateem.org<br />support@nooralyateem.org</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-text">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      {/* Updated Instagram link with the provided URL */}
                      <a href="https://www.instagram.com/nooralyateemutd/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
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
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FAQ Section Added Here --- */}
      <section className="faq-section">
        <div className="faq-divider"></div>
        <div className="faq-content">
          <h2 className="faq-title">FAQ</h2>
          <div className="faq-items">
            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
              <div className="faq-question">
                <h3>WHAT IS YOUR MISSION?</h3>
                <span className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`}>+</span>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>Our mission is to provide support, love, and a nurturing environment for orphaned and refugee children, empowering them to thrive despite their circumstances. Through comprehensive care, education, and mentorship, we aim to instill confidence, skills, and hope for a brighter future.</p>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
              <div className="faq-question">
                <h3>WHEN AND WHY WAS NOOR AL YATEEM FOUNDED?</h3>
                <span className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`}>+</span>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>Noor Al Yateem was founded in August 2024 with the goal of creating a compassionate community dedicated to uplifting and empowering orphaned and displaced children affected by conflict and poverty.</p>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
              <div className="faq-question">
                <h3>WHERE DO YOU OPERATE AND PROVIDE AID?</h3>
                <span className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`}>+</span>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>We operate locally in Richardson, Texas, in collaboration with Helping Hands. Together, we extend our support to conflict-affected areas across the Middle East and Asia.</p>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
              <div className="faq-question">
                <h3>ARE YOU A REGISTERED ORGANIZATION?</h3>
                <span className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`}>+</span>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>Yes! Noor Al Yateem is a registered organization under UTD! Your donation may be eligible for tax-deduction.</p>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
              <div className="faq-question">
                <h3>HOW CAN I VOLUNTEER WITH YOUR ORGANIZATION?</h3>
                <span className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`}>+</span>
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
      {/* ---------------------------------- */}
    </div>
  );
}

export default Contact;
