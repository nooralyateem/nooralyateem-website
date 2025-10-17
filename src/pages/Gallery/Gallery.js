import React from 'react';
import './Gallery.css';

function Gallery() {
  const galleryItems = [
    { category: "Education", description: "Children engaged in learning activities", emoji: "📚" },
    { category: "Sports", description: "Sports and recreation programs", emoji: "⚽" },
    { category: "Arts", description: "Creative expression through arts", emoji: "🎨" },
    { category: "Events", description: "Community gatherings and celebrations", emoji: "🎉" },
    { category: "Healthcare", description: "Health checkups and wellness programs", emoji: "🏥" },
    { category: "Field Trips", description: "Educational outdoor experiences", emoji: "🚌" },
    { category: "Celebrations", description: "Birthday parties and special occasions", emoji: "🎂" },
    { category: "Volunteers", description: "Our amazing volunteers in action", emoji: "🤝" },
    { category: "Meals", description: "Nutritious meals and cooking activities", emoji: "🍽️" }
  ];

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Gallery</h1>
          <p>Moments of joy, growth, and hope</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-content">
          <div className="gallery-intro">
            <h2>Capturing Special Moments</h2>
            <p>
              Every photo tells a story of transformation, resilience, and hope. 
              Browse through our gallery to see the impact of your support and the 
              smiles you help create every day.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-item-image">
                  <span className="gallery-emoji">{item.emoji}</span>
                </div>
                <div className="gallery-item-content">
                  <h3>{item.category}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <h3>Share Your Photos</h3>
            <p>Have photos from our events? We'd love to feature them in our gallery!</p>
            <button className="cta-btn">Submit Photos</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

