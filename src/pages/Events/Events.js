import React from 'react';
import './Events.css';

function Events() {
  const upcomingEvents = [
    {
      title: "Annual Charity Gala",
      date: "December 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom",
      description: "Join us for an evening of celebration and fundraising to support our programs."
    },
    {
      title: "Children's Day Celebration",
      date: "January 20, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Noor Al Yateem Center",
      description: "A special day dedicated to celebrating the joy and potential of every child."
    },
    {
      title: "Volunteer Orientation",
      date: "February 5, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      description: "Learn how you can make a difference by volunteering with our organization."
    }
  ];

  const pastEvents = [
    {
      title: "Back to School Drive",
      date: "September 2024",
      description: "Successfully provided school supplies to over 200 children.",
      image: "📚"
    },
    {
      title: "Summer Camp 2024",
      date: "July 2024",
      description: "A month-long camp filled with learning, fun, and personal growth.",
      image: "🏕️"
    }
  ];

  return (
    <div className="events-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Events</h1>
          <p>Join us in making a difference in children's lives</p>
        </div>
      </section>

      <section className="events-section">
        <div className="events-content">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Mark your calendars and be part of something special</p>
          </div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card upcoming">
                <div className="event-date-badge">{event.date}</div>
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p className="event-time">⏰ {event.time}</p>
                  <p className="event-location">📍 {event.location}</p>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="event-btn">Register Now</button>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: '80px' }}>
            <h2>Past Events</h2>
            <p>Celebrating our achievements together</p>
          </div>

          <div className="past-events-grid">
            {pastEvents.map((event, index) => (
              <div key={index} className="past-event-card">
                <div className="past-event-icon">{event.image}</div>
                <h3>{event.title}</h3>
                <p className="past-event-date">{event.date}</p>
                <p className="past-event-description">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;

