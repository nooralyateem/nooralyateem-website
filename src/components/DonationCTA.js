import React from 'react';
import './DonationCTA.css';

function DonationCTA() {
  return (
    <section id="donate" className="donation-cta">
      <div className="donation-content">
        <h2 className="donation-title">Make a Difference Today</h2>
        <p className="donation-subtitle">
          Your generosity can transform a child's life. Every donation brings hope, 
          education, and opportunities to orphaned children who need it most.
        </p>

        <div className="donation-options">
          <div className="donation-option">
            <div className="option-amount">$25</div>
            <p>School supplies for one month</p>
          </div>
          <div className="donation-option">
            <div className="option-amount">$50</div>
            <p>Nutritious meals for one week</p>
          </div>
          <div className="donation-option">
            <div className="option-amount">$100</div>
            <p>Educational tutoring for one month</p>
          </div>
          <div className="donation-option">
            <div className="option-amount">$250</div>
            <p>Healthcare for three months</p>
          </div>
        </div>

        <div className="donation-actions">
          <a href="#donate-now" className="btn-donate-primary">Donate Now</a>
          <a href="#monthly" className="btn-donate-secondary">Become a Monthly Donor</a>
        </div>

        <div className="donation-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Children Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Goes to Programs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Countries Reached</div>
          </div>
        </div>

        <div className="other-ways">
          <h3>Other Ways to Help</h3>
          <div className="ways-grid">
            <a href="#volunteer" className="way-card">
              <span className="way-icon">🙋</span>
              <span className="way-text">Volunteer</span>
            </a>
            <a href="#partner" className="way-card">
              <span className="way-icon">🤝</span>
              <span className="way-text">Partner</span>
            </a>
            <a href="#sponsor" className="way-card">
              <span className="way-icon">❤️</span>
              <span className="way-text">Sponsor a Child</span>
            </a>
            <a href="#share" className="way-card">
              <span className="way-icon">📢</span>
              <span className="way-text">Share Our Story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationCTA;

