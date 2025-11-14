import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Home.css';

function Home() {
  // Upcoming events data - get first 3 upcoming events (images only)
  const upcomingEvents = [
    {
      id: 1,
      title: "Quran Night - Collab with MSA",
      image: "/quran-night.jpg"
    },
    {
      id: 2,
      title: "Self Care Kit Making",
      image: "/selfcare-kit.jpg"
    },
    {
      id: 3,
      title: "Bye Bye BBQ",
      image: "/bye-bye-bbq.jpg"
    }
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRotateIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  
  // Event recap data - placeholder images and description
  const eventRecapImages = [
    "/carnival1.JPG",
    "/carnival2.JPG",
    "/carnival3.JPG",
    "/carnival5.JPG",
    "/carnival7.JPG"
  ];
  
  const [currentRecapImageIndex, setCurrentRecapImageIndex] = useState(0);
  const [isRecapPaused, setIsRecapPaused] = useState(false);
  const recapCarouselIntervalRef = useRef(null);
  const recapResumeTimeoutRef = useRef(null);
  
  const eventRecap = {
    title: "Event Recap",
    description: "Our recent event brought together members of the community for an evening of connection and purpose. Students, volunteers, and supporters gathered to participate in meaningful activities and discussions. The event featured engaging workshops, interactive sessions, and opportunities to learn more about our mission. Attendees left inspired and connected, ready to make a positive impact in their communities.",
    images: eventRecapImages
  };

  // Scroll animations
  const [heroLogoRef, heroLogoVisible] = useScrollAnimation();
  const [heroSubtitleRef, heroSubtitleVisible] = useScrollAnimation();
  const [heroButtonsRef, heroButtonsVisible] = useScrollAnimation();
  const [heroLearnMoreRef, heroLearnMoreVisible] = useScrollAnimation();
  const [eventsSectionRef, eventsVisible] = useScrollAnimation();
  const [eventRecapSectionRef] = useScrollAnimation();
  const [eventRecapContentRef, eventRecapContentVisible] = useScrollAnimation();

  const nextEvent = () => {
    // Clear any pending resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsPaused(true);
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
    // Resume auto-rotation after 6 seconds (4s delay + 2s buffer) if not hovering
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const prevEvent = () => {
    // Clear any pending resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsPaused(true);
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + upcomingEvents.length) % upcomingEvents.length);
    // Resume auto-rotation after 6 seconds (4s delay + 2s buffer) if not hovering
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
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

  // Auto-rotate carousel
  useEffect(() => {
    // Clear any existing interval
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }

    // Only set up auto-rotation if not paused
    if (!isPaused) {
      autoRotateIntervalRef.current = setInterval(() => {
        setCurrentEventIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
      }, 4000); // Rotate every 4 seconds
    }

    // Cleanup on unmount or when paused state changes
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isPaused, upcomingEvents.length]); // Re-run when paused state changes

  const nextRecapImage = () => {
    // Clear any pending resume timeout
    if (recapResumeTimeoutRef.current) {
      clearTimeout(recapResumeTimeoutRef.current);
    }
    setIsRecapPaused(true);
    setCurrentRecapImageIndex((prevIndex) => (prevIndex + 1) % eventRecapImages.length);
    // Resume auto-rotation after 5 seconds
    recapResumeTimeoutRef.current = setTimeout(() => {
      setIsRecapPaused(false);
    }, 5000);
  };

  const prevRecapImage = () => {
    // Clear any pending resume timeout
    if (recapResumeTimeoutRef.current) {
      clearTimeout(recapResumeTimeoutRef.current);
    }
    setIsRecapPaused(true);
    setCurrentRecapImageIndex((prevIndex) => (prevIndex - 1 + eventRecapImages.length) % eventRecapImages.length);
    // Resume auto-rotation after 5 seconds
    recapResumeTimeoutRef.current = setTimeout(() => {
      setIsRecapPaused(false);
    }, 5000);
  };

  // Auto-rotate event recap carousel
  useEffect(() => {
    // Clear any existing interval
    if (recapCarouselIntervalRef.current) {
      clearInterval(recapCarouselIntervalRef.current);
    }

    // Don't auto-rotate if paused
    if (isRecapPaused) {
      return;
    }

    // Rotate images every 6 seconds
    recapCarouselIntervalRef.current = setInterval(() => {
      setCurrentRecapImageIndex((prevIndex) => (prevIndex + 1) % eventRecapImages.length);
    }, 6000);

    // Cleanup on unmount
    return () => {
      if (recapCarouselIntervalRef.current) {
        clearInterval(recapCarouselIntervalRef.current);
      }
      if (recapResumeTimeoutRef.current) {
        clearTimeout(recapResumeTimeoutRef.current);
      }
    };
  }, [isRecapPaused, eventRecapImages.length]);

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
            href="#upcoming-event" 
            className={`hero-learn-more slide-up delay-3 ${heroLearnMoreVisible ? 'visible' : ''}`}
            ref={heroLearnMoreRef}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('upcoming-event');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Learn More ↓
          </a>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section id="upcoming-event" className="upcoming-event-section" ref={eventsSectionRef}>
        <div className="upcoming-events-header">
          <img src="/bowtie-element.png" alt="" className="bowtie-element bowtie-left" />
          <h2 className={`section-title slide-up ${eventsVisible ? 'visible' : ''}`}>Upcoming Events</h2>
          <img src="/bowtie-element.png" alt="" className="bowtie-element bowtie-right" />
        </div>
        
        <div className="upcoming-event-container">
          <div 
            className="event-carousel-wrapper"
            onMouseEnter={() => {
              // Clear any pending resume timeout when hovering
              if (resumeTimeoutRef.current) {
                clearTimeout(resumeTimeoutRef.current);
                resumeTimeoutRef.current = null;
              }
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevEvent}
              aria-label="Previous event"
            >
              ‹
            </button>
            
            <div className="event-carousel-track">
              {getVisibleEvents().map((event) => (
                <a
                  key={event.id}
                  href="https://www.instagram.com/nooralyateemutd?igsh=aWUxeThzcWgyNWtj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`event-image-card ${event.position === 0 ? 'center' : ''} ${event.position !== 0 ? 'faded' : ''}`}
                >
                  {event.image && (
                    <>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="event-image-only"
                        loading="lazy"
                      />
                      <div className="event-image-overlay">
                        <svg className="instagram-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="6" ry="6"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </div>
                    </>
                  )}
                </a>
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
          
          <div className="view-all-events-wrapper">
            <Link to="/events#calendar" className="view-all-events-btn">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Bow Tie Divider */}
      <div className="bowtie-divider">
        <div className="bowtie-divider-line"></div>
        <img src="/bowtie-element.png" alt="" className="bowtie-divider-bow" />
        <div className="bowtie-divider-line"></div>
      </div>

      {/* Event Recap Section */}
      <section id="event-recap" className="event-recap" ref={eventRecapSectionRef}>
        <div className="event-recap-container">
          <div className={`event-recap-content slide-up ${eventRecapContentVisible ? 'visible' : ''}`} ref={eventRecapContentRef}>
            <div className="event-recap-text">
              <h2 className="event-recap-title">
                {eventRecap.title}
              </h2>
              <p className="event-recap-description">
                {eventRecap.description}
              </p>
            </div>

            <div className="event-recap-carousel-wrapper">
              <button 
                className="recap-carousel-arrow recap-carousel-arrow-up" 
                onClick={prevRecapImage}
                aria-label="Previous image"
              >
                ↑
              </button>
              
              <div className="event-recap-gallery">
                <div 
                  key={currentRecapImageIndex}
                  className="event-recap-image-wrapper fade-in"
                >
                  <img 
                    src={eventRecap.images[currentRecapImageIndex]} 
                    alt={`Event recap ${currentRecapImageIndex + 1}`}
                    className="event-recap-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
            </div>

              <button 
                className="recap-carousel-arrow recap-carousel-arrow-down" 
                onClick={nextRecapImage}
                aria-label="Next image"
              >
                ↓
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
