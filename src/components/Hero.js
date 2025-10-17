import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo-text">
          Noor Al-Yateem
        </div>
                
        <p className="hero-subtitle">
          home is where humanity is
        </p>
        
        <div className="hero-buttons">
          <a href="#donate" className="btn btn-primary">Donate</a>
        </div>
        
        <a href="#about" className="hero-learn-more">Learn More ↓</a>
      </div>
    </section>
  );
}

export default Hero;

