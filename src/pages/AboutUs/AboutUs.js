import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p>Learn more about our mission and the impact we're making</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="about-detail-content">
          <h2>Our Story</h2>
          <p>
            Noor Al Yateem was founded with a simple yet powerful mission: to bring light 
            and hope to the lives of orphaned children. Since our inception, we have been 
            dedicated to providing comprehensive support that goes beyond basic needs.
          </p>
          <p>
            We believe every child deserves access to quality education, healthcare, 
            emotional support, and opportunities to thrive. Through our programs and 
            dedicated team, we work tirelessly to create a brighter future for the 
            children in our care.
          </p>

          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>We approach every child with empathy, understanding, and unconditional support.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We maintain transparency and accountability in all our operations and partnerships.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in care, education, and program delivery.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We build strong relationships and foster a sense of belonging for every child.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

