import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  // Upcoming event data - get first upcoming event
  const upcomingEvent = {
    id: 1,
    title: "Field Day - Collab with Ihsan",
    date: "2025-11-09",
    time: "12:00 PM – 5:00 PM",
    location: "Maruf Dallas",
    description: "A fun field day with activities and community collaboration.",
    fullDescription: "Join us for Field Day in collaboration with Ihsan. Enjoy games, sports, and community bonding throughout the afternoon.",
    image: "/media/gallery/field-days/Mar'uf flyer.png"
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/NaY Field Day.mp4" type="video/mp4" />
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
            <Link to="/donate" className="btn btn-primary">Donate</Link>
          </div>
          
          <a href="#about" className="hero-learn-more">Learn More ↓</a>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section id="upcoming-event" className="upcoming-event-section">
        <h2 className="section-title">Upcoming Event</h2>
        
        <div className="upcoming-event-container">
          <div className="upcoming-event-card">
            {upcomingEvent.image && (
              <div className="event-image-wrapper">
                <img 
                  src={upcomingEvent.image} 
                  alt={upcomingEvent.title}
                  className="event-image"
                />
              </div>
            )}
            
            <div className="event-content-wrapper">
              <div className="event-date-badge">{upcomingEvent.date}</div>
              
              <h3 className="event-title">{upcomingEvent.title}</h3>
              
              <div className="event-details">
                <div className="event-detail-item">
                  <span className="event-icon">⏰</span>
                  <span className="event-detail-text">{upcomingEvent.time}</span>
                </div>
                <div className="event-detail-item">
                  <span className="event-icon">📍</span>
                  <span className="event-detail-text">{upcomingEvent.location}</span>
                </div>
              </div>
              
              <p className="event-description">{upcomingEvent.description}</p>
              
              <Link to="/events" className="event-details-btn">
                View Details & RSVP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
            <a href="#upcoming-event" className="about-btn">
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
    </>
  );
}

export default Home;
