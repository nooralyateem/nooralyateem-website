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
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h3>What is your mission?</h3>
              <p>Our mission is to provide support and resources to orphans and vulnerable children, ensuring they have access to education, care, and a brighter future.</p>
            </div>
            <div className="faq-item">
              <h3>How can I volunteer?</h3>
              <p>Please reach out to us using the contact form above with the subject "Volunteer Inquiry," and a team member will follow up with you shortly!</p>
            </div>
            <div className="faq-item">
              <h3>Are my donations tax-deductible?</h3>
              <p>Yes, we are a registered non-profit organization, and all donations are tax-deductible to the full extent of the law. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------- */}
    </div>
  );
}

export default Contact;