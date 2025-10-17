import React, { useState } from 'react';
import './Donate.css';

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const donationAmounts = [
    { value: '25', label: '$25', impact: 'Provides school supplies for one child' },
    { value: '50', label: '$50', impact: 'Covers healthcare for one child for a month' },
    { value: '100', label: '$100', impact: 'Provides educational support for three children' },
    { value: '250', label: '$250', impact: 'Ensures safe housing for one child for a month' }
  ];

  const handleDonation = (e) => {
    e.preventDefault();
    // Payment processing would go here
    alert('Thank you for your generous donation! You will be redirected to the payment gateway.');
  };

  return (
    <div className="donate-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Make a Difference Today</h1>
          <p>Your generosity brings light and hope to orphaned children</p>
        </div>
      </section>

      <section className="donate-section">
        <div className="donate-content">
          <div className="donate-form-container">
            <div className="donation-type-selector">
              <button
                className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                onClick={() => setDonationType('one-time')}
              >
                One-Time Gift
              </button>
              <button
                className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                onClick={() => setDonationType('monthly')}
              >
                Monthly Giving
              </button>
            </div>

            <form onSubmit={handleDonation} className="donation-form">
              <h2>Choose Your Donation Amount</h2>
              
              <div className="amount-grid">
                {donationAmounts.map((amount) => (
                  <div
                    key={amount.value}
                    className={`amount-card ${selectedAmount === amount.value ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedAmount(amount.value);
                      setCustomAmount('');
                    }}
                  >
                    <div className="amount-label">{amount.label}</div>
                    <div className="amount-impact">{amount.impact}</div>
                  </div>
                ))}
              </div>

              <div className="custom-amount">
                <label htmlFor="custom">Or Enter Custom Amount</label>
                <div className="custom-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="custom"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('');
                    }}
                    min="1"
                  />
                </div>
              </div>

              <div className="donor-info">
                <h3>Your Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
              </div>

              <button type="submit" className="donate-submit-btn">
                {donationType === 'monthly' ? 'Become a Monthly Donor' : 'Donate Now'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          <div className="donate-sidebar">
            <div className="impact-box">
              <h3>Your Impact</h3>
              <p>Every donation directly supports orphaned children through:</p>
              <ul className="impact-list">
                <li>✓ Quality education and school supplies</li>
                <li>✓ Comprehensive healthcare services</li>
                <li>✓ Safe and nurturing housing</li>
                <li>✓ Nutritious meals and clothing</li>
                <li>✓ Emotional and psychological support</li>
                <li>✓ Skill development programs</li>
              </ul>
            </div>

            <div className="transparency-box">
              <h3>Financial Transparency</h3>
              <div className="transparency-stat">
                <div className="stat-circle">98%</div>
                <p>of every dollar goes directly to programs</p>
              </div>
              <div className="transparency-stat">
                <div className="stat-circle">500+</div>
                <p>children supported annually</p>
              </div>
            </div>

            <div className="other-ways-box">
              <h3>Other Ways to Give</h3>
              <div className="giving-option">
                <span className="option-icon">📦</span>
                <div>
                  <strong>In-Kind Donations</strong>
                  <p>Donate goods and supplies</p>
                </div>
              </div>
              <div className="giving-option">
                <span className="option-icon">🏢</span>
                <div>
                  <strong>Corporate Partnership</strong>
                  <p>Partner with us for impact</p>
                </div>
              </div>
              <div className="giving-option">
                <span className="option-icon">📄</span>
                <div>
                  <strong>Legacy Giving</strong>
                  <p>Include us in your will</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;

