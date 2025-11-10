import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p> learn more about our mission and the impact we're making</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="about-detail-content">
          <h2>Mission</h2>
          <p>
            Inspired by the values of compassion and charity in Islam, We're committed to uplifting orphaned and refugee children by offering love, support, and a nurturing space to help them thrive. Our organization strives to equip these children with the tools and opportunities needed to spread kindness, empower resilience, and inspire a spirit of giving throughout the community.
          </p>

          <h2>Meet the Team</h2>

          <div className="board-picture">
            <img src="board-pic.JPG" alt="Full Board" className="board-img" />
          </div> 


          {/* Team Photos Section */}
          <div className="team-photos-grid">
            <div className="team-photo-container">
              <img src="executives.jpg" alt="Executive Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Executive Team</span>
              </div>
            </div>
            <div className="team-photo-container">
              <img src="marketing.JPG" alt="Marketing Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Marketing Team</span>
              </div>
            </div>
            <div className="team-photo-container">
              <img src="fundraising.PNG" alt="Fundraising Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Fundraising Team</span>
              </div>
            </div>
            <div className="team-photo-container">
              <img src="outreach.JPG" alt="Outreach Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Outreach Team</span>
              </div>
            </div>
            <div className="team-photo-container">
              <img src="programs.jpg" alt="Programs Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Programs Team</span>
              </div>
            </div>
            <div className="team-photo-container">
              <img src="events.jpg" alt="Events Team" className="team-photo" />
              <div className="team-photo-overlay">
                <span className="team-name">Events Team</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default AboutUs;

