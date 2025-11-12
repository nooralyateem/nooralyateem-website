import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <section className="full-page-hero">
        <div className="hero-image-wrapper">
          <img src="board-pic.JPG" alt="Full Board" className="hero-background-image" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Learn more about our mission and the impact we're making</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="about-detail-content">
          <h2>Mission</h2>
          <p>
            Inspired by the values of compassion and charity in Islam, We're committed to uplifting orphaned and refugee children by offering love, support, and a nurturing space to help them thrive. Our organization strives to equip these children with the tools and opportunities needed to spread kindness, empower resilience, and inspire a spirit of giving throughout the community.
          </p>

          <h2>Meet the Team</h2>

          {/* Leads Section */}
          <div className="leads-grid">
            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/president.JPG" alt="Taha - President" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Taha Ahmed</h3>
                <p className="lead-title">President</p>
                <p className="lead-description">Assalamu Alaykum! My name is Taha, and I'm honored to serve as the President of Noor Al-Yateem this year. I'm a senior majoring in Neuroscience at UT Dallas on the pre-medical track. I'm incredibly grateful to be part of the NaY team and look forward to meeting, hosting, and serving all of our members. Through NaY, I hope to continue building a community grounded in compassion, service, and connection, and I'm so excited to work alongside everyone who joins us this year, insha'Allah!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/ExternalVP.JPG" alt="Saad - External Vice President" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Saad Syed</h3>
                <p className="lead-title">External Vice President</p>
                <p className="lead-description">Salaam! My name is Saad, and I serve as the External Vice President for Noor Al-Yateem. I'm a senior here at UTD on the pre-law track. Alhamdulillah, being part of NaY has been a meaningful journey, serving orphan and refugee communities while learning compassion, mercy, and service. I look forward to continuing this mission alongside our team and making a stronger impact, inshaAllah!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/InternalVP.JPG" alt="Saniyya - Internal Vice President" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Saniyya Sharif</h3>
                <p className="lead-title">Internal Vice President</p>
                <p className="lead-description">salam, i'm saniyya! I'm a junior studying political science in the hopes to go to law school. Through Noor Al-Yateem,  I am able to give back and make a difference to the children in need alhumdulillah. I can't wait to see what the year holds!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/Secretary.JPG" alt="Nabeeha - Secretary" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Nabeeha Rehman</h3>
                <p className="lead-title">Secretary</p>
                <p className="lead-description">AssalamuAlaiykum, my name is Nabeeha! I'm a sophomore at UTD studying psychology and business. I'm passionate about bringing hope and opportunity to children in need, and I'm so excited to be part of a team that's making a real change every day!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/Treasurer.jpeg" alt="Labeebah Altaf - Treasurer" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Labeebah Altaf</h3>
                <p className="lead-title">Treasurer</p>
                <p className="lead-description">Assalamualaikum! My name is Labeebah Altaf, and I serve as the Treasurer for Noor Al-Yateem. I'm a junior at UTD majoring in Finance. Being a part of NaY has strengthened my passion for helping others. I truly enjoy having the opportunity to support orphans and refugees, and it's rewarding to see how our efforts make a real difference. I'm excited to continue working with such a dedicated team and to keep supporting those in need!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/ProgramsLead.JPG" alt="Naheel - Programs Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Naheel Abdeljaber</h3>
                <p className="lead-title">Programs Lead</p>
                <p className="lead-description">Hello, I'm Naheel. I'm majoring in Psychology and Speech, Language, and Hearing Sciences, and I'm committed to advocating for vulnerable children and refugee communities. I'm honored to support this organization's mission of providing care, dignity, and opportunity to those in need.</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img 
                  src="/media/leads/ExternalOutreachLead.JPG" 
                  alt="Sameeha - External Outreach Lead" 
                  className="lead-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Q5ZDlkOSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Sameeha Syed</h3>
                <p className="lead-title">External Outreach Lead</p>
                <p className="lead-description">Assalamu Alaykum! I'm Sameeha, and I'm so excited to be part of the Board this year! I'm passionate about the Islamic tradition of community and uplifting kids in need, and what better way than putting a smile on their face? Hope to see you at the next Field Day :)</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/InternalOutreach.JPG" alt="Maryam - Internal Outreach Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Maryam Ali</h3>
                <p className="lead-title">Internal Outreach Lead</p>
                <p className="lead-description">AssalamuAlaykum! My name is Maryam, and I'm a sophomore at UTD studying Psychology on the pre-med track. I'm devoted to helping children and making a meaningful difference in their lives. I'm so excited to be part of this team and to see all that we can accomplish!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/Fundraising.JPG" alt="Sana - Fundraising Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Sana Sawani</h3>
                <p className="lead-title">Fundraising Lead</p>
                <p className="lead-description">Salam! I'm Sana, and I am this year's Fundraising Lead for Noor Al-Yateem! Alhamdulillah for the blessing to give back and make a difference for the sake of Allah!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/EventsLead.JPG" alt="Rameen - Events Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Rameen Raza</h3>
                <p className="lead-title">Events Lead</p>
                <p className="lead-description">Assalamualaikum! I'm Rameen and I'm the events lead. I'm so proud to have the opportunity to be a part of this organization Alhamdulillah! This club gives us the opportunity to help children in need and make meaningful relationships.</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/Marketing.JPG" alt="Ahmed - Marketing Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Ahmed Khan</h3>
                <p className="lead-title">Marketing Lead</p>
                <p className="lead-description">Salam! My name is Ahmed. I am one of the marketing leads. I am a junior psychology major on the pre-med track. I love all that we do for the orphans and refugees and am looking forwards to being with a cause that helps people in need!</p>
              </div>
            </div>

            <div className="lead-card">
              <div className="lead-image-container">
                <img src="/media/leads/Marketing2.JPG" alt="Zuhaab - Marketing Lead" className="lead-image" />
              </div>
              <div className="lead-info">
                <h3 className="lead-name">Zuhaab Agha</h3>
                <p className="lead-title">Marketing Lead</p>
                <p className="lead-description">Salam! I'm Zuhaab and I am one of the marketing leads. I am a junior and biology major on the pre-health track InshaAllah. I am beyond grateful to be apart of Noor-Al-Yateem to help these children in any way that we can!</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default AboutUs;







