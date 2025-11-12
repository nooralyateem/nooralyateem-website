import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCountUp from '../../hooks/useCountUp';
import './Home.css';

function Home() {
  // Upcoming events data - get first 3 upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Field Day - Collab with Ihsan",
      date: "2025-11-09",
      time: "12:00 PM – 5:00 PM",
      location: "Maruf Dallas",
      description: "A fun field day with activities and community collaboration.",
      fullDescription: "Join us for Field Day in collaboration with Ihsan. Enjoy games, sports, and community bonding throughout the afternoon.",
      image: "/media/gallery/field-days/Mar'uf flyer.png"
    },
    {
      id: 2,
      title: "Popups 4 A Purpose",
      date: "2025-11-10",
      time: "2:00 PM – 4:00 PM",
      location: "The Plinth",
      description: "Featuring vendors, including Hot Chocolate by NaY.",
      fullDescription: "Support local vendors and community initiatives at Popups 4 A Purpose. Vendors include Hot Chocolate by NaY.",
      image: "/media/gallery/field-days/field-days-thumbnail.jpeg"
    },
    {
      id: 3,
      title: "Quran Night - Collab with MSA",
      date: "2025-11-14",
      time: "5:00 PM – 10:00 PM",
      location: "SSA Auditorium",
      description: "An evening of Quran recitation and reflection with MSA.",
      fullDescription: "Experience a special Quran Night in collaboration with MSA, featuring recitations, reflections, and community gathering.",
      image: "/media/gallery/field-days/field-days-thumbnail.jpeg"
    }
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  
  // Scroll animations
  const [heroLogoRef, heroLogoVisible] = useScrollAnimation();
  const [heroSubtitleRef, heroSubtitleVisible] = useScrollAnimation();
  const [heroButtonsRef, heroButtonsVisible] = useScrollAnimation();
  const [heroLearnMoreRef, heroLearnMoreVisible] = useScrollAnimation();
  const [eventsSectionRef, eventsVisible] = useScrollAnimation();
  const [aboutSectionRef] = useScrollAnimation();
  const [aboutContentRef, aboutContentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  // Count-up animations for stats
  const [stat1Ref, stat1Count] = useCountUp('500+', 2500);
  const [stat2Ref, stat2Count] = useCountUp('10000+', 2500);
  const [stat3Ref, stat3Count] = useCountUp(15, 2000);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const getVisibleEvents = () => {
    const visible = [];
    const total = upcomingEvents.length;
    
    // Show 5 items: -2, -1, 0, 1, 2 (or fewer if we have less than 5 events)
    const range = Math.min(2, Math.floor(total / 2));
    for (let i = -range; i <= range; i++) {
      const index = (currentEventIndex + i + total) % total;
      visible.push({ ...upcomingEvents[index], position: i, arrayIndex: index });
    }
    
    return visible;
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
          <div 
            className={`hero-logo-text slide-up ${heroLogoVisible ? 'visible' : ''}`}
            ref={heroLogoRef}
          >
            Noor Al-Yateem
          </div>
                  
          <p 
            className={`hero-subtitle slide-up delay-1 ${heroSubtitleVisible ? 'visible' : ''}`}
            ref={heroSubtitleRef}
          >
            home is where humanity is
          </p>
          
          <div 
            className={`hero-buttons slide-up delay-2 ${heroButtonsVisible ? 'visible' : ''}`}
            ref={heroButtonsRef}
          >
            <a href="https://www.zeffy.com/en-US/donation-form/support-orphans-and-refugees-in-need" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Donate</a>
          </div>
          
          <a 
            href="#about" 
            className={`hero-learn-more slide-up delay-3 ${heroLearnMoreVisible ? 'visible' : ''}`}
            ref={heroLearnMoreRef}
          >
            Learn More ↓
          </a>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section id="upcoming-event" className="upcoming-event-section" ref={eventsSectionRef}>
        <h2 className={`section-title slide-up ${eventsVisible ? 'visible' : ''}`}>Upcoming Events</h2>
        
        <div className="upcoming-event-container">
          <div className="event-carousel-wrapper">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevEvent}
              aria-label="Previous event"
            >
              ‹
            </button>
            
            <div className="event-carousel-track">
              {getVisibleEvents().map((event) => (
                <div
                  key={event.id}
                  className={`event-card-wrapper ${event.position === 0 ? 'center' : ''} ${event.position !== 0 ? 'faded' : ''}`}
                  onClick={() => {
                    if (event.position !== 0) {
                      setCurrentEventIndex(event.arrayIndex);
                    }
                  }}
                >
                  {event.image && (
                    <div className="event-image-wrapper">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="event-image"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="event-content-wrapper">
                    <div className="event-date-badge">{event.date}</div>
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-details">
                      <div className="event-detail-item">
                        <span className="event-icon">⏰</span>
                        <span className="event-detail-text">{event.time}</span>
                      </div>
                      <div className="event-detail-item">
                        <span className="event-icon">📍</span>
                        <span className="event-detail-text">{event.location}</span>
                      </div>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <Link to="/events" className="event-details-btn">
                      View Details & RSVP
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextEvent}
              aria-label="Next event"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" ref={aboutSectionRef}>
        <div className="about-container">
          <div className={`about-content slide-right ${aboutContentVisible ? 'visible' : ''}`} ref={aboutContentRef}>
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

          <div className={`about-stats slide-left ${statsVisible ? 'visible' : ''}`} ref={statsRef}>
            <p className="stats-header">Since starting our work, we've:</p>
            
            <div className="stat-item">
              <div className="stat-category">TRANSFORMED LIVES.</div>
              <div className="stat-number" ref={stat1Ref}>{stat1Count}</div>
              <div className="stat-desc">children supported through our programs</div>
            </div>

            <div className="stat-item">
              <div className="stat-category">PROVIDED NOURISHMENT.</div>
              <div className="stat-number" ref={stat2Ref}>{stat2Count}</div>
              <div className="stat-desc">meals served to children in need</div>
            </div>

            <div className="stat-item">
              <div className="stat-category">EXPANDED GLOBAL REACH.</div>
              <div className="stat-number" ref={stat3Ref}>{stat3Count}</div>
              <div className="stat-desc">countries where we make a difference</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
