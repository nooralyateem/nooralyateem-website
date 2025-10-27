import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './Gallery.css';

// Sample photo albums data - replace with your Google Drive integration
const photoAlbums = [
  {
    id: 'popups',
    title: 'Popups for a Purpose',
    description: 'Where Every ___ Meets the Perfect ___',
    thumbnail: '/media/gallery/popups/popups-thumbnail.jpg', // Local image path
    photos: [
      { id: 1, url: '/media/gallery/popups/popups-1.jpg', type: 'image' }, // Local image path
      { id: 2, url: '/media/gallery/popups/popups-2.jpg', type: 'image' }, // Local image path
      { id: 3, url: '/media/gallery/popups/popups-3.jpeg', type: 'image' },
      { id: 4, url: '/media/gallery/popups/popups-4.jpeg', type: 'image' },
      { id: 5, url: '/media/gallery/popups/popups-5.jpeg', type: 'image' },
      { id: 6, url: '/media/gallery/popups/popups-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/popups/popups-7.mov', type: 'video' },
      { id: 8, url: '/media/gallery/popups/popups-8.mov', type: 'video' },
      { id: 9, url: '/media/gallery/popups/popups-9.mov', type: 'video' },
      { id: 10, url: '/media/gallery/popups/popups-10.mov', type: 'video' },
    ]
  },
  {
    id: 'field-days',
    title: 'Refugee Field Days',
    description: 'Afternoons Full of Fun Activities for Refugee Children',
    thumbnail: '/media/gallery/field-days/field-days-thumbnail.jpeg',
    photos: [
      { id: 1, url: '/media/gallery/field-days/field-days-1.jpeg', type: 'image' },
      { id: 2, url: '/media/gallery/field-days/field-days-2.jpg', type: 'image' },
      { id: 3, url: '/media/gallery/field-days/field-days-3.jpg', type: 'image' },
      { id: 4, url: '/media/gallery/field-days/field-days-4.jpg', type: 'image' },
      { id: 5, url: '/media/gallery/field-days/field-days-5.jpg', type: 'image' },
      { id: 6, url: '/media/gallery/field-days/field-days-6.jpeg', type: 'image' },
      { id: 7, url: '/media/gallery/field-days/field-days-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/field-days/field-days-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/field-days/field-days-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/field-days/field-days-10.jpg', type: 'image' },
      { id: 11, url: '/media/gallery/field-days/field-days-11.jpg', type: 'image' },
      { id: 12, url: '/media/gallery/field-days/field-days-12.mov', type: 'video' },
    ]
  },
  {
    id: 'gbms',
    title: 'General Body Meetings',
    description: 'Fun Evenings to Connect and Learn More About Our Organization',
    thumbnail: '/media/gallery/gbms/gbms-thumbnail.jpg',
    photos: [
      { id: 1, url: '/media/gallery/gbms/gbms-1.jpg', type: 'image' },
      { id: 2, url: '/media/gallery/gbms/gbms-2.jpg', type: 'image' },
      { id: 3, url: '/media/gallery/gbms/gbms-3.mov', type: 'video' },
    ]
  },
  {
    id: 'events',
    title: 'Service Events',
    description: 'Community gatherings and celebrations',
    thumbnail: '/media/gallery/events/events-thumbnail.jpg',
    photos: [
      { id: 1, url: '/media/gallery/events/events-1.mov', type: 'video' },
      { id: 2, url: '/media/gallery/events/events-2.mov', type: 'video' },
      { id: 3, url: '/media/gallery/events/events-3.jpg', type: 'image' },
      { id: 4, url: '/media/gallery/events/events-4.jpg', type: 'image' },
      { id: 5, url: '/media/gallery/events/events-5.jpg', type: 'image' },
      { id: 6, url: '/media/gallery/events/events-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/events/events-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/events/events-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/events/events-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/events/events-10.jpg', type: 'image' },
      { id: 11, url: '/media/gallery/events/events-11.mov', type: 'video' },
      { id: 12, url: '/media/gallery/events/events-12.jpg', type: 'image' },
      { id: 13, url: '/media/gallery/events/events-13.jpg', type: 'image' },
      { id: 14, url: '/media/gallery/events/events-14.jpg', type: 'image' },
      { id: 15, url: '/media/gallery/events/events-15.jpg', type: 'image' },
      { id: 16, url: '/media/gallery/events/events-16.jpg', type: 'image' },
      { id: 17, url: '/media/gallery/events/events-17.jpg', type: 'image' },
    ]
  },
  {
    id: 'end-of-semester',
    title: 'End of Semester Events',
    description: 'Wrapping up the semester with a bang!',
    thumbnail: '/media/gallery/end-of-semester/end-of-semester-thumbnail.jpeg',
    photos: [
      { id: 1, url: '/media/gallery/end-of-semester/end-of-semester-1.mov', type: 'video' },
      { id: 2, url: '/media/gallery/end-of-semester/end-of-semester-2.jpeg', type: 'image' },
    ]
  }
];

// Photo Carousel Component
function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleAlbumClick = (albumId) => {
    navigate(`/gallery/${albumId}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photoAlbums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photoAlbums.length) % photoAlbums.length);
  };

  const getVisibleAlbums = () => {
    const visible = [];
    const total = photoAlbums.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({ ...photoAlbums[index], position: i });
    }
    
    return visible;
  };

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

          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button className="carousel-btn prev" onClick={prevSlide}>
                ‹
              </button>
              
              <div className="carousel-track">
                {getVisibleAlbums().map((album) => (
                  <div
                    key={album.id}
                    className={`carousel-item ${album.position === 0 ? 'center' : ''} ${album.position !== 0 ? 'faded' : ''}`}
                    onClick={() => handleAlbumClick(album.id)}
                  >
                    <div className="album-thumbnail">
                      <img src={album.thumbnail} alt={album.title} />
                      <div className="album-overlay">
                        <h3>{album.title}</h3>
                        <p>{album.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-btn next" onClick={nextSlide}>
                ›
              </button>
            </div>
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

// Individual Album Page Component
function AlbumPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  const album = photoAlbums.find(a => a.id === albumId);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={`album-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="album-header">
        <button className="back-btn" onClick={() => navigate('/gallery')}>
          ← Back to Gallery
        </button>
        <h1>{album.title}</h1>
        <p>{album.description}</p>
      </div>

      <div className="masonry-container">
        {album.photos.map((photo, index) => (
          <div key={photo.id} className="masonry-item" style={{ animationDelay: `${index * 0.1}s` }}>
            {photo.type === 'video' ? (
              <div className="video-container">
                <video
                  src={photo.url}
                  poster={photo.poster}
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
            ) : (
              <img src={photo.url} alt={`${album.title} ${photo.id}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Gallery Component with Routing
function Gallery() {
  return (
    <Routes>
      <Route path="/" element={<PhotoCarousel />} />
      <Route path="/:albumId" element={<AlbumPage />} />
    </Routes>
  );
}

export default Gallery;

