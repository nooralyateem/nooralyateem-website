import React, { useState } from 'react';
import './Events.css';

const normalizeDate = (date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

const getDateKey = (date) => {
  const normalized = normalizeDate(date);
  const year = normalized.getFullYear();
  const month = String(normalized.getMonth() + 1).padStart(2, '0');
  const day = String(normalized.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatFullDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const eventsData = [
    {
      id: 1,
      title: "Field Day - Collab with Ihsan",
      date: "2025-11-09",
      time: "12:00 PM - 5:00 PM",
      location: "Maruf Dallas",
      description: "A fun field day with activities and community collaboration.",
      fullDescription: "Join us for Field Day in collaboration with Ihsan. Enjoy games, sports, and community bonding throughout the afternoon.",
      price: "Free",
      type: "Off campus",
      rsvpLink: "https://docs.google.com/forms/d/1yA7k_a-DAP5BqaVtXATMTGxUFPCyV2o9DuU4_MnkRGE/viewform?edit_requested=true&edit_requested=true"
    },
    {
      id: 2,
      title: "Popups 4 A Purpose",
      date: "2025-11-10",
      time: "2:00 PM - 4:00 PM",
      location: "The Plinth",
      description: "Featuring vendors, including Hot Chocolate by NaY.",
      fullDescription: "Support local vendors and community initiatives at Popups 4 A Purpose. Vendors include Hot Chocolate by NaY.",
      price: "Free",
      type: "Social"
    },
    {
      id: 3,
      title: "Quran Night - Collab with MSA",
      date: "2025-11-14",
      time: "5:00 PM - 10:00 PM",
      location: "SSA Auditorium",
      description: "An evening of Quran recitation and reflection with MSA.",
      fullDescription: "Experience a special Quran Night in collaboration with MSA, featuring recitations, reflections, and community gathering.",
      price: "Free",
      type: "Social",
      rsvpLink: "https://docs.google.com/forms/d/e/1FAIpQLScoUl3OPQ1QzCnGByK61xf2vXaUVcK4cAcRwUX-_wwqbGZFuw/viewform"
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
      price: "Free",
      type: "Service"
    },
    {
      id: 5,
      title: "Bonfire BBQ",
      date: "2025-12-04",
      time: "5:00 PM - 7:00 PM",
      location: "Helix Hall or bonfire pit",
      description: "Cozy bonfire BBQ evening with food and friends.",
      fullDescription: "Warm up with a Bonfire BBQ. Bring friends and enjoy good food and great company. Location will be Helix Hall or the bonfire pit depending on conditions.",
      price: "Free",
      type: "Social"
    }
  ];

  const eventTypes = ['All', 'Social', 'Service', 'Off campus'];
  
  const filteredUpcomingEvents = eventsData.filter(event => {
    const isUpcoming = new Date(event.date) >= new Date();
    const matchesFilter = selectedFilter === 'All' || event.type === selectedFilter;
    return isUpcoming && matchesFilter;
  });

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
    const dateKey = getDateKey(date);
    return eventsData.filter(event => event.date === dateKey);
  };

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'Social':
        return '#7da1e2'; //  Blue
      case 'Service':
        return '#d94a3a'; //  Red
      case 'Off campus':
        return '#b17853'; // brown
      default:
        return '#55b9e0';
    }
  };

  const handleDateClick = (date) => {
    const normalizedDate = normalizeDate(date);
    const events = getEventsForDate(normalizedDate);
    setSelectedDate(normalizedDate);
    setSelectedEvent(events[0] || null);
    setShowEventModal(false);
  };

  const today = normalizeDate(new Date());
  const todayKey = getDateKey(today);
  const todaysEvents = getEventsForDate(today);
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];
  const isSelectedDateToday = selectedDate ? getDateKey(selectedDate) === todayKey : false;

  const renderEventGrid = (events) => (
    <div className="events-grid">
      {events.map((event) => (
        <div 
          key={event.id}
          className="event-card upcoming"
          style={{
            borderColor: getEventTypeColor(event.type),
            borderWidth: '3px'
          }}
        >
          <div 
            className="event-date-badge"
            style={{ backgroundColor: getEventTypeColor(event.type) }}
          >
            {event.date}
          </div>
          <div 
            className="event-type-badge"
            style={{ 
              backgroundColor: getEventTypeColor(event.type),
              color: 'white'
            }}
          >
            {event.type}
          </div>
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
            {event.rsvpLink ? 'View Details & RSVP Link' : 'View Details'}
          </button>
        </div>
      ))}
    </div>
  );

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
      const dateKey = getDateKey(date);
      const isToday = dateKey === todayKey;
      const isSelected = selectedDate ? getDateKey(selectedDate) === dateKey : false;
      
      // Get the primary event type for this date (use first event's type if multiple)
      const primaryEventType = hasEvents ? events[0].type : null;
      const indicatorColor = primaryEventType ? getEventTypeColor(primaryEventType) : '#55b9e0';

      days.push(
        <div
          key={day}
          className={`calendar-day ${hasEvents ? 'has-events' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <span className="day-number">{day}</span>
          {hasEvents && (
            <div 
              className="event-indicator" 
              style={{ backgroundColor: indicatorColor }}
            ></div>
          )}
        </div>
      );
    }

    return days;
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
          </div>

          <div className="calendar-events-wrapper">
            <div className="calendar-today-wrapper">
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

              <div className="calendar-side-panel">
                {selectedDate && !isSelectedDateToday ? (
                  <div className="selected-day-section">
                    <h2>Selected Day</h2>
                    <div className="selected-date-events">
                      <h3>Events on {formatFullDate(selectedDate)}</h3>
                      {selectedDateEvents.length > 0 ? (
                        renderEventGrid(selectedDateEvents)
                      ) : (
                        <div className="no-events-message">
                          <p>No events on this day.</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="events-today-section">
                    <h2>Events Today</h2>
                    <div className="selected-date-events">
                      <h3>Events on {formatFullDate(today)}</h3>
                      {todaysEvents.length > 0 ? (
                        renderEventGrid(todaysEvents)
                      ) : (
                        <div className="no-events-message">
                          <p>No events today.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="upcoming-events-section">
              <h2>Upcoming Events</h2>
              <div className="event-filters">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    className={`filter-btn ${selectedFilter === type ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(type)}
                    style={selectedFilter === type ? { 
                      backgroundColor: type === 'All' ? '#55b9e0' : getEventTypeColor(type),
                      borderColor: type === 'All' ? '#55b9e0' : getEventTypeColor(type),
                      color: 'white'
                    } : {}}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {filteredUpcomingEvents.length > 0 ? (
                renderEventGrid(filteredUpcomingEvents)
              ) : (
                <div className="no-events-message">
                  <p>No upcoming events found for the selected filter.</p>
                </div>
              )}
            </div>
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

            {selectedEvent.rsvpLink && (
              <div className="rsvp-section">
                <h3>RSVP</h3>
                <p>Please RSVP using the external form below:</p>
                <p>
                  <a
                    href={selectedEvent.rsvpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-rsvp-link"
                  >
                    @{selectedEvent.rsvpLink}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;

