import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            Every child deserves a chance to thrive
          </h2>
          <p className="about-description">
            Orphaned children face immense challenges - from lack of basic necessities to 
            limited access to education and healthcare. Without support, their futures remain uncertain.
          </p>
          <p className="about-description">
            We're building a comprehensive support system to transform lives through education, 
            healthcare, and empowerment programs.
          </p>
          <a href="#programs" className="about-btn">
            Explore Our Impact
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="about-stats">
          <p className="stats-header">Since starting our work, we've:</p>
          
          <div className="stat-item">
            <div className="stat-category">TRANSFORMED LIVES.</div>
            <div className="stat-number">500+</div>
            <div className="stat-desc">children supported through our programs</div>
          </div>

          <div className="stat-item">
            <div className="stat-category">PROVIDED NOURISHMENT.</div>
            <div className="stat-number">10,000+</div>
            <div className="stat-desc">meals served to children in need</div>
          </div>

          <div className="stat-item">
            <div className="stat-category">EXPANDED GLOBAL REACH.</div>
            <div className="stat-number">15</div>
            <div className="stat-desc">countries where we make a difference</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

