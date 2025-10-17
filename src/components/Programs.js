import React from 'react';
import './Programs.css';

function Programs() {
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
  );
}

export default Programs;

