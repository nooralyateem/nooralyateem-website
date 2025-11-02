import React, { useState } from 'react';
import './Events.css';

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpForm, setRsvpForm] = useState({ name: '', email: '', phone: '', guests: 1 });

  const eventsData = [
    {
      id: 1,
      title: "Field Day - Collab with Ihsan",
      date: "2025-11-09",
      time: "12:00 PM - 5:00 PM",
      location: "Maruf Dallas",
      description: "A fun field day with activities and community collaboration.",
      fullDescription: "Join us for Field Day in collaboration with Ihsan. Enjoy games, sports, and community bonding throughout the afternoon.",
      price: "Free"
    },
    {
      id: 2,
      title: "Popups 4 A Purpose",
      date: "2025-11-10",
      time: "2:00 PM - 4:00 PM",
      location: "The Plinth",
      description: "Featuring vendors, including Hot Chocolate by NaY.",
      fullDescription: "Support local vendors and community initiatives at Popups 4 A Purpose. Vendors include Hot Chocolate by NaY.",
      price: "Free"
    },
    {
      id: 3,
      title: "Quran Night - Collab with MSA",
      date: "2025-11-14",
      time: "5:00 PM - 10:00 PM",
      location: "SSA Auditorium",
      description: "An evening of Quran recitation and reflection with MSA.",
      fullDescription: "Experience a special Quran Night in collaboration with MSA, featuring recitations, reflections, and community gathering.",
      price: "Free"
    },
    {
      id: 4,
      title: "Hygiene Kit Packing",
      date: "2025-11-19",
      time: "5:00 PM - 7:00 PM",
      location: "ECSN 2.102",
      description: "Volunteer to pack and prepare hygiene kits for those in need.",
      fullDescription: "Join us for a hands-on service event assembling hygiene kits to support community members in need.",
      rsvpLink: "https://forms.example.com/hygiene-kit-packing-rsvp",
      price: "Free"
    },
    {
      id: 5,
      title: "Bonfire BBQ",
      date: "2025-12-04",
      time: "5:00 PM - 7:00 PM",
      location: "Helix Hall or bonfire pit",
      description: "Cozy bonfire BBQ evening with food and friends.",
      fullDescription: "Warm up with a Bonfire BBQ. Bring friends and enjoy good food and great company. Location will be Helix Hall or the bonfire pit depending on conditions.",
      price: "Free"
    }
  ];

  const upcomingEvents = eventsData.filter(event => new Date(event.date) >= new Date());

  const pastEvents = [
    {
      title: "Field Day",
      date: "September 2024",
      description: "A fun field day with activities and community collaboration.",
      image: "📚"
    },
  ];

  // Calendar functionality
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(2025); // Default to 2025
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Generate years from 2025 to current year + 2
  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = 2025; year <= currentYear + 2; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYears();

  const handleMonthYearChange = (month, year) => {
    setCurrentMonth(month);
    setCurrentYear(year);
    setShowMonthPicker(false);
  };

  // Close month picker when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMonthPicker && !event.target.closest('.calendar-month-year-container')) {
        setShowMonthPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMonthPicker]);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return eventsData.filter(event => event.date === dateStr);
  };

  const handleDateClick = (date) => {
    const events = getEventsForDate(date);
    if (events.length > 0) {
      setSelectedDate(date);
      setSelectedEvent(events[0]);
      setShowEventModal(true);
    }
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the RSVP data to your backend
    alert(`Thank you ${rsvpForm.name}! Your RSVP has been submitted.`);
    setRsvpForm({ name: '', email: '', phone: '', guests: 1 });
    setShowEventModal(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const events = getEventsForDate(date);
      const hasEvents = events.length > 0;
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`calendar-day ${hasEvents ? 'has-events' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => hasEvents && handleDateClick(date)}
        >
          <span className="day-number">{day}</span>
          {hasEvents && <div className="event-indicator"></div>}
        </div>
      );
    }

    return days;
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return getEventsForDate(selectedDate);
  };

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
            <h2>Interactive Calendar</h2>
            <p>Click on any date with events to see details and RSVP</p>
          </div>

          <div className="calendar-container">
            <div className="calendar-header">
              <button 
                className="calendar-nav-btn"
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(currentYear - 1);
                  } else {
                    setCurrentMonth(currentMonth - 1);
                  }
                }}
              >
                ‹
              </button>
              
              <div className="calendar-month-year-container">
                <button 
                  className="calendar-month-year-btn"
                  onClick={() => setShowMonthPicker(!showMonthPicker)}
                >
                  {monthNames[currentMonth]} {currentYear}
                </button>
                
                {showMonthPicker && (
                  <div className="month-year-picker">
                    <div className="picker-section">
                      <h4>Select Month</h4>
                      <div className="month-grid">
                        {monthNames.map((month, index) => (
                          <button
                            key={index}
                            className={`month-option ${index === currentMonth ? 'selected' : ''}`}
                            onClick={() => handleMonthYearChange(index, currentYear)}
                          >
                            {month}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="picker-section">
                      <h4>Select Year</h4>
                      <div className="year-list">
                        {years.map((year) => (
                          <button
                            key={year}
                            className={`year-option ${year === currentYear ? 'selected' : ''}`}
                            onClick={() => handleMonthYearChange(currentMonth, year)}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="calendar-nav-btn"
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(currentYear + 1);
                  } else {
                    setCurrentMonth(currentMonth + 1);
                  }
                }}
              >
                ›
              </button>
            </div>
            
            <div className="calendar-grid">
              <div className="calendar-weekdays">
                <div className="weekday">Sun</div>
                <div className="weekday">Mon</div>
                <div className="weekday">Tue</div>
                <div className="weekday">Wed</div>
                <div className="weekday">Thu</div>
                <div className="weekday">Fri</div>
                <div className="weekday">Sat</div>
              </div>
              <div className="calendar-days">
                {renderCalendar()}
              </div>
            </div>
          </div>

          {selectedDate && (
            <div className="selected-date-events">
              <h3>Events on {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</h3>
              <div className="events-grid">
                {getEventsForSelectedDate().map((event) => (
                  <div key={event.id} className="event-card upcoming">
                    <div className="event-date-badge">{event.date}</div>
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <p className="event-time">⏰ {event.time}</p>
                      <p className="event-location">📍 {event.location}</p>
                      <p className="event-price">💰 {event.price || "Free"}</p>
                      {event.capacity && (
                        <p className="event-capacity">👥 Capacity: {event.capacity}</p>
                      )}
                    </div>
                    <p className="event-description">{event.description}</p>
                    <button 
                      className="event-btn"
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowEventModal(true);
                      }}
                    >
                      View Details & RSVP
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="section-header" style={{ marginTop: '80px' }}>
            <h2>All Upcoming Events</h2>
            <p>Browse all our upcoming events</p>
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
                <button 
                  className="event-btn"
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowEventModal(true);
                  }}
                >
                  View Details & RSVP
                </button>
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

      {/* Event Details Modal */}
      {showEventModal && selectedEvent && (
        <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowEventModal(false)}
            >
              ×
            </button>
            
            <div className="event-modal-header">
              <h2>{selectedEvent.title}</h2>
              <div className="event-modal-date">
                {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            <div className="event-modal-details">
              <div className="detail-item">
                <span className="detail-label">⏰ Time:</span>
                <span className="detail-value">{selectedEvent.time}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Location:</span>
                <span className="detail-value">{selectedEvent.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💰 Price:</span>
                <span className="detail-value">{selectedEvent.price || "Free"}</span>
              </div>
              {selectedEvent.capacity && (
                <div className="detail-item">
                  <span className="detail-label">👥 Capacity:</span>
                  <span className="detail-value">{selectedEvent.capacity} people</span>
                </div>
              )}
            </div>

            <div className="event-modal-description">
              <h3>About This Event</h3>
              <p>{selectedEvent.fullDescription}</p>
            </div>

            <div className="rsvp-section">
              <h3>RSVP</h3>
              <form onSubmit={handleRsvpSubmit} className="rsvp-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={rsvpForm.name}
                    onChange={(e) => setRsvpForm({...rsvpForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={rsvpForm.email}
                    onChange={(e) => setRsvpForm({...rsvpForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={rsvpForm.phone}
                    onChange={(e) => setRsvpForm({...rsvpForm, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="10"
                    value={rsvpForm.guests}
                    onChange={(e) => {
                      const value = e.target.value === '' ? 1 : parseInt(e.target.value) || 1;
                      setRsvpForm({...rsvpForm, guests: Math.max(1, Math.min(10, value))});
                    }}
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="rsvp-submit-btn">
                    Submit RSVP
                  </button>
                  {selectedEvent.rsvpLink && (
                    <a 
                      href={selectedEvent.rsvpLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="external-rsvp-btn"
                    >
                      External RSVP Link
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;

