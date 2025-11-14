import React, { useState } from 'react';
import '../Contact/Contact.css';

function ContactVendors() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactEmail: '',
    contactInstagram: '',
    productType: '',
    averagePriceRange: '',
    profitMargin: '',
    bestSellers: '',
    inventory: '',
    paymentMethod: '',
    profitShare: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFaqKeyDown = (index) => (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFaq(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in partnering with us. We will reach out soon!');
    setFormData({
      businessName: '',
      contactEmail: '',
      contactInstagram: '',
      productType: '',
      averagePriceRange: '',
      profitMargin: '',
      bestSellers: '',
      inventory: '',
      paymentMethod: '',
      profitShare: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Vendor Partnerships</h1>
          <p>Partner with Noor Al Yateem to make every event impactful</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <h2>Partner With Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Business Info</h3>
              <div className="form-group">
                <label htmlFor="businessName">What is your business name? *</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email *</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactInstagram">Instagram Handle</label>
                <input
                  type="text"
                  id="contactInstagram"
                  name="contactInstagram"
                  value={formData.contactInstagram}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="productType">What type of products do you plan to sell? *</label>
                <textarea
                  id="productType"
                  name="productType"
                  rows="4"
                  value={formData.productType}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <h3>Sales Info</h3>
              <div className="form-group">
                <label htmlFor="averagePriceRange">What is your average product price range? *</label>
                <textarea
                  id="averagePriceRange"
                  name="averagePriceRange"
                  rows="3"
                  value={formData.averagePriceRange}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="profitMargin">Average profit margin (%) *</label>
                <input
                  type="number"
                  id="profitMargin"
                  name="profitMargin"
                  value={formData.profitMargin}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="bestSellers">What are your best selling products? *</label>
                <textarea
                  id="bestSellers"
                  name="bestSellers"
                  rows="4"
                  value={formData.bestSellers}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="inventory">How much inventory do you usually bring to an event? *</label>
                <textarea
                  id="inventory"
                  name="inventory"
                  rows="3"
                  value={formData.inventory}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="paymentMethod">What is your main source of payment method? *</label>
                <input
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="profitShare">
                  We operate on a profit share agreement, what % would you be comfortable donating? (50%, 60%, 80%, 100%) *
                </label>
                <input
                  type="text"
                  id="profitShare"
                  name="profitShare"
                  value={formData.profitShare}
                  onChange={handleChange}
                  required
                  placeholder="Choose: 50%, 60%, 80%, or 100%"
                  pattern="^(50%|60%|80%|100%)$"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Vendor Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="ways-to-reach-section">
        <div className="ways-to-reach-content">
          <h2 className="ways-to-reach-title">Ways to Reach Us</h2>
          
          <div className="reach-cards">
            <div className="reach-card">
              <div className="reach-icon email-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M3 7L12 13L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p className="reach-description">Vendor support and partnership questions</p>
              <a href="mailto:nooralyateemutd@gmail.com" className="reach-link">nooralyateemutd@gmail.com</a>
            </div>
            
            <div className="reach-card">
              <div className="reach-icon instagram-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </div>
              <h3>Follow Us</h3>
              <p className="reach-description">Stay updated on upcoming vendor opportunities</p>
              <a
                href="https://www.instagram.com/nooralyateemutd/"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-link"
              >
                @nooralyateemutd
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-divider"></div>
        <div className="faq-content">
          <h2 className="faq-title">Vendor FAQ</h2>
          <div className="faq-items">
            <div
              className={`faq-item ${openFaq === 0 ? 'open' : ''}`}
              onClick={() => toggleFaq(0)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(0)}
            >
              <div className="faq-question">
                <h3>How do I become an approved vendor?</h3>
                <span className={`faq-arrow ${openFaq === 0 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {openFaq === 0 && (
                <div className="faq-answer">
                  <p>Complete the form on this page with information about your business and offerings. Our vendor relations team reviews submissions weekly and will connect with you to confirm availability and fit for upcoming events.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item ${openFaq === 1 ? 'open' : ''}`}
              onClick={() => toggleFaq(1)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(1)}
            >
              <div className="faq-question">
                <h3>WHAT DOCUMENTATION DO I NEED TO PROVIDE?</h3>
                <span className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {openFaq === 1 && (
                <div className="faq-answer">
                  <p>Please be prepared to share your sales tax permit, product list, and any applicable health or food handling certificates. We will outline the exact requirements once we review your inquiry.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item ${openFaq === 2 ? 'open' : ''}`}
              onClick={() => toggleFaq(2)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(2)}
            >
              <div className="faq-question">
                <h3>ARE THERE FEES ASSOCIATED WITH VENDING?</h3>
                <span className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {openFaq === 2 && (
                <div className="faq-answer">
                  <p>Event fees vary depending on the venue and scope of the program. We will share the full cost breakdown and payment schedule as part of the onboarding process for each event.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item ${openFaq === 3 ? 'open' : ''}`}
              onClick={() => toggleFaq(3)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(3)}
            >
              <div className="faq-question">
                <h3>HOW FAR IN ADVANCE SHOULD I APPLY?</h3>
                <span className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {openFaq === 3 && (
                <div className="faq-answer">
                  <p>We encourage vendors to apply at least four weeks before the event date to allow time for review, approvals, and marketing coordination. Late applications may be considered if space permits.</p>
                </div>
              )}
            </div>
            <div
              className={`faq-item ${openFaq === 4 ? 'open' : ''}`}
              onClick={() => toggleFaq(4)}
              role="button"
              tabIndex={0}
              onKeyDown={handleFaqKeyDown(4)}
            >
              <div className="faq-question">
                <h3>WHO CAN I CONTACT FOR outreach?</h3>
                <span className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {openFaq === 4 && (
                <div className="faq-answer">
                  <p>Once approved, you will receive a direct contact for the event logistics lead, who will assist with setup details, load-in times, and promotional materials.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactVendors;

