import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const programs = [
    {
      title: "Education Support",
      icon: "📚",
      description: "Providing access to quality education, school supplies, tutoring, and scholarship opportunities to ensure every child can pursue their dreams.",
      highlights: ["School Supplies", "Tutoring", "Scholarships", "Digital Learning"]
    },
    {
      title: "Healthcare Services",
      icon: "🏥",
      description: "Comprehensive healthcare including regular check-ups, vaccinations, dental care, and mental health support for holistic well-being.",
      highlights: ["Medical Care", "Dental Services", "Mental Health", "Nutrition"]
    },
    {
      title: "Safe Housing",
      icon: "🏠",
      description: "Providing safe, nurturing homes where children feel loved, protected, and supported by caring staff and foster families.",
      highlights: ["Foster Care", "Group Homes", "Family Support", "Safety Programs"]
    },
    {
      title: "Skill Development",
      icon: "💼",
      description: "Vocational training, mentorship programs, and life skills workshops to prepare youth for successful, independent futures.",
      highlights: ["Vocational Training", "Mentorship", "Life Skills", "Career Guidance"]
    },
    {
      title: "Recreational Activities",
      icon: "⚽",
      description: "Sports, arts, music, and cultural programs that promote creativity, teamwork, and healthy physical and emotional development.",
      highlights: ["Sports Programs", "Arts & Crafts", "Music Classes", "Cultural Events"]
    },
    {
      title: "Emergency Relief",
      icon: "🆘",
      description: "Rapid response support for children in crisis situations, providing immediate shelter, food, medical care, and emotional support.",
      highlights: ["Crisis Response", "Emergency Shelter", "Food Security", "Trauma Support"]
    }
  ];

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

      {/* Programs Section */}
      <section id="programs" className="programs">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Comprehensive support designed to nurture every aspect of a child's growth and development
        </p>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-highlights">
                {program.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-badge">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
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
    </>
  );
}

export default Home;
