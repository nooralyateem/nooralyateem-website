import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Gallery.css';

// Sample photo albums data - replace with your Google Drive integration
const photoAlbums = [
  {
    id: 'popups',
    title: 'Popups for a Purpose',
    description: 'Where every bite meets the perfect sip',
    thumbnail: '/media/gallery/popups/popups-thumbnail.jpg', // Local image path
    photos: [
      { id: 1, url: '/media/gallery/popups/popups-1.jpg', type: 'image' }, // Local image path
      { id: 2, url: '/media/gallery/popups/popups-2.jpg', type: 'image' }, // Local image path
      { id: 3, url: '/media/gallery/popups/popups-3.jpeg', type: 'image' },
      { id: 4, url: '/media/gallery/popups/popups-4.jpeg', type: 'image' },
      { id: 5, url: '/media/gallery/popups/popups-5.jpeg', type: 'image' },
      { id: 6, url: '/media/gallery/popups/popups-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/popups/popups-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/popups/popups-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/popups/popups-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/popups/popups-10.jpg', type: 'image' },
      { id: 11, url: '/media/gallery/popups/popups-11.jpg', type: 'image' },
      { id: 12, url: '/media/gallery/popups/popups-12.jpg', type: 'image' },
      { id: 13, url: '/media/gallery/popups/popups-13.jpg', type: 'image' },
      { id: 14, url: '/media/gallery/popups/popups-14.jpg', type: 'image' },
      { id: 15, url: '/media/gallery/popups/popups-15.jpg', type: 'image' },
      { id: 16, url: '/media/gallery/popups/popups-16.jpg', type: 'image' },
      { id: 17, url: '/media/gallery/popups/popups-17.jpg', type: 'image' },
      { id: 18, url: '/media/gallery/popups/popups-18.jpg', type: 'image' },
      { id: 19, url: '/media/gallery/popups/popups-19.jpg', type: 'image' },
      { id: 20, url: '/media/gallery/popups/popups-20.jpg', type: 'image' },
      { id: 21, url: '/media/gallery/popups/popups-21.jpg', type: 'image' },
      { id: 22, url: '/media/gallery/popups/popups-22.jpg', type: 'image' },
      { id: 23, url: '/media/gallery/popups/popups-23.jpg', type: 'image' },
      { id: 24, url: '/media/gallery/popups/popups-24.jpg', type: 'image' },
      { id: 25, url: '/media/gallery/popups/popups-25.jpg', type: 'image' },
      { id: 26, url: '/media/gallery/popups/popups-26.jpg', type: 'image' },
      { id: 27, url: '/media/gallery/popups/popups-27.jpg', type: 'image' },
      { id: 28, url: '/media/gallery/popups/popups-28.jpg', type: 'image' },
      { id: 29, url: '/media/gallery/popups/popups-29.jpg', type: 'image' },
      { id: 30, url: '/media/gallery/popups/popups-30.jpg', type: 'image' },
      { id: 31, url: '/media/gallery/popups/popups-31.jpg', type: 'image' },
      { id: 32, url: '/media/gallery/popups/popups-32.jpg', type: 'image' },
    ]
  },
  {
    id: 'field-days',
    title: 'Refugee Field Days',
    description: 'Afternoons full of fun activities for refugee children',
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
    ]
  },
  {
    id: 'gbms',
    title: 'General Body Meetings',
    description: 'Fun evenings to connect and learn more about our organization',
    thumbnail: '/media/gallery/gbms/gbms-thumbnail.jpg',
    photos: [
      { id: 1, url: '/media/gallery/gbms/gbms-1.jpg', type: 'image' },
      { id: 2, url: '/media/gallery/gbms/gbms-2.jpg', type: 'image' },
      { id: 3, url: '/media/gallery/gbms/gbms-3.jpg', type: 'image' },
      { id: 4, url: '/media/gallery/gbms/gbms-4.jpg', type: 'image' },
      { id: 5, url: '/media/gallery/gbms/gbms-5.jpg', type: 'image' },
      { id: 6, url: '/media/gallery/gbms/gbms-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/gbms/gbms-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/gbms/gbms-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/gbms/gbms-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/gbms/gbms-10.jpg', type: 'image' },
      { id: 11, url: '/media/gallery/gbms/gbms-11.jpg', type: 'image' },
      { id: 12, url: '/media/gallery/gbms/gbms-12.jpg', type: 'image' },
      { id: 13, url: '/media/gallery/gbms/gbms-13.jpg', type: 'image' },
      { id: 14, url: '/media/gallery/gbms/gbms-14.jpg', type: 'image' },
      { id: 15, url: '/media/gallery/gbms/gbms-15.jpg', type: 'image' },
      { id: 16, url: '/media/gallery/gbms/gbms-16.jpg', type: 'image' },
      { id: 17, url: '/media/gallery/gbms/gbms-17.jpg', type: 'image' },
      { id: 18, url: '/media/gallery/gbms/gbms-18.jpg', type: 'image' },
      { id: 19, url: '/media/gallery/gbms/gbms-19.jpg', type: 'image' },
      { id: 20, url: '/media/gallery/gbms/gbms-20.jpg', type: 'image' },
      { id: 21, url: '/media/gallery/gbms/gbms-21.jpg', type: 'image' },
    ]
  },
  {
    id: 'events',
    title: 'Service Events',
    description: 'Creating smiles for those in need',
    thumbnail: '/media/gallery/events/events-thumbnail.jpg',
    photos: [
      { id: 3, url: '/media/gallery/events/events-3.jpg', type: 'image' },
      { id: 4, url: '/media/gallery/events/events-4.jpg', type: 'image' },
      { id: 5, url: '/media/gallery/events/events-5.jpg', type: 'image' },
      { id: 6, url: '/media/gallery/events/events-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/events/events-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/events/events-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/events/events-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/events/events-10.jpg', type: 'image' },
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
      { id: 1, url: '/media/gallery/end-of-semester/end-of-semester-1.jpg', type: 'image' },
      { id: 2, url: '/media/gallery/end-of-semester/end-of-semester-2.jpeg', type: 'image' },
      { id: 3, url: '/media/gallery/end-of-semester/end-of-semester-3.jpg', type: 'image' },
      { id: 4, url: '/media/gallery/end-of-semester/end-of-semester-4.jpg', type: 'image' },
      { id: 5, url: '/media/gallery/end-of-semester/end-of-semester-5.jpg', type: 'image' },
      { id: 6, url: '/media/gallery/end-of-semester/end-of-semester-6.jpg', type: 'image' },
      { id: 7, url: '/media/gallery/end-of-semester/end-of-semester-7.jpg', type: 'image' },
      { id: 8, url: '/media/gallery/end-of-semester/end-of-semester-8.jpg', type: 'image' },
      { id: 9, url: '/media/gallery/end-of-semester/end-of-semester-9.jpg', type: 'image' },
      { id: 10, url: '/media/gallery/end-of-semester/end-of-semester-10.jpg', type: 'image' },
      { id: 11, url: '/media/gallery/end-of-semester/end-of-semester-11.jpg', type: 'image' },
      { id: 12, url: '/media/gallery/end-of-semester/end-of-semester-12.jpg', type: 'image' },
      { id: 13, url: '/media/gallery/end-of-semester/end-of-semester-13.jpg', type: 'image' },
      { id: 14, url: '/media/gallery/end-of-semester/end-of-semester-14.jpg', type: 'image' },
    ]
  }
];

// In the NAYborhood Vlogs - YouTube videos
const vlogs = [
  { id: 'v1', title: 'Vlog #1', youtubeId: 'IieUssQ73Qk' },
  { id: 'v2', title: 'Vlog #2', youtubeId: 'vHzWmwjOlRo' },
  { id: 'v3', title: 'Vlog #3', youtubeId: '1RTZyMzFk-s' },
  { id: 'v4', title: 'Vlog #4', youtubeId: 'G2GPRYeG3LU' },
];

// Photo Carousel Component
function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const autoplayRef = useRef(null);
  
  // Scroll animations
  const [galleryIntroRef, galleryIntroVisible] = useScrollAnimation();

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photoAlbums.length);
    }, 3000);
  }, [stopAutoplay]);

  const handleAlbumClick = (albumId) => {
    // Save current scroll position before navigating
    sessionStorage.setItem('galleryScrollPosition', window.scrollY.toString());
    navigate(`/gallery/${albumId}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photoAlbums.length);
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photoAlbums.length) % photoAlbums.length);
    startAutoplay();
  };

  // Restore scroll position when returning from album page
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('galleryScrollPosition');
    if (savedScrollPosition !== null) {
      // Use a small delay to ensure the page has rendered
      const scrollPosition = parseInt(savedScrollPosition, 10);
      const restoreScroll = () => {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'auto' // Instant scroll, not smooth
        });
        // Clear the saved position after restoring
        sessionStorage.removeItem('galleryScrollPosition');
      };
      
      // Try immediate restore, then fallback with delay
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          restoreScroll();
        });
      });
    }
  }, []);

  // Autoplay carousel
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Force reflow to ensure transitions are triggered when currentIndex changes
  const trackRef = useRef(null);
  useLayoutEffect(() => {
    if (trackRef.current) {
      // Force a reflow by reading a layout property after DOM updates
      // This ensures the browser recognizes class changes and applies transitions
      void trackRef.current.offsetHeight;
    }
  }, [currentIndex]);

  const getVisibleAlbums = () => {
    const visible = [];
    const total = photoAlbums.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({ ...photoAlbums[index], position: i, arrayIndex: index });
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
          <div className={`gallery-intro slide-up ${galleryIntroVisible ? 'visible' : ''}`} ref={galleryIntroRef}>
            <h2>Our Photo Gallery</h2>
            <p>
              Our gallery shows the moments of joy, growth, and hope that we create at our events. 
            </p>
          </div>

          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button className="carousel-btn prev" onClick={prevSlide}>
                ‹
              </button>
              
              <div className="carousel-track" ref={trackRef}>
                {getVisibleAlbums().map((album) => (
                  <div
                    key={album.id}
                    className={`carousel-item ${album.position === 0 ? 'center' : ''} ${album.position !== 0 ? 'faded' : ''}`}
                    onClick={() => {
                      if (album.position === 0) {
                        handleAlbumClick(album.id);
                      } else {
                        setCurrentIndex(album.arrayIndex);
                      }
                    }}
                  >
                    <div className="album-thumbnail">
                      <img src={album.thumbnail} alt={album.title} loading="lazy" />
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

          <VlogsCarousel />
        </div>
      </section>
    </div>
  );
}

// Vlogs Carousel Component (Video)
function VlogsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Scroll animation for vlogs section
  const [vlogsSectionRef] = useScrollAnimation();
  const [vlogsIntroRef, vlogsIntroVisible] = useScrollAnimation();

  const next = () => {
    setCurrentIndex((p) => (p + 1) % vlogs.length);
  };

  const prev = () => {
    setCurrentIndex((p) => (p - 1 + vlogs.length) % vlogs.length);
  };

  const getVisible = () => {
    const visible = [];
    const total = vlogs.length;
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({ ...vlogs[index], position: i, arrayIndex: index });
    }
    return visible;
  };

  // Force reflow to ensure transitions are triggered when currentIndex changes
  const trackRef = useRef(null);
  useLayoutEffect(() => {
    if (trackRef.current) {
      // Force a reflow by reading a layout property after DOM updates
      // This ensures the browser recognizes class changes and applies transitions
      void trackRef.current.offsetHeight;
    }
  }, [currentIndex]);

  return (
    <div className="vlogs-section" ref={vlogsSectionRef}>
      <div className={`gallery-intro slide-up ${vlogsIntroVisible ? 'visible' : ''}`} ref={vlogsIntroRef}>
        <h2>
          In the NAYborhood Vlogs
          <a 
            href="https://www.youtube.com/@nooralyateemutd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-channel-link"
            aria-label="Visit Noor Al Yateem YouTube Channel"
          >
            <span className="youtube-logo-placeholder">
              <img 
                src="/media/gallery/nay-circular-logo.png" 
                alt="Noor Al Yateem Logo" 
                className="youtube-logo-img"
                loading="lazy"
              />
            </span>
          </a>
        </h2>
        <p>
          Our "In the NAYborhood" vlog series captures the funniest moments at our events.
        </p>
      </div>

      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prev}>‹</button>

          <div className="carousel-track vlog-carousel-track" ref={trackRef}>
            {getVisible().map((item) => {
              // Only autoplay and mute the center video (position === 0)
              const isCenter = item.position === 0;
              const iframeSrc = isCenter
                ? `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}&controls=1&modestbranding=1&rel=0`
                : `https://www.youtube.com/embed/${item.youtubeId}?loop=1&playlist=${item.youtubeId}&controls=1&modestbranding=1&rel=0`;

              // Calculate offset from center in pixels
              let offsetX = 0;
              
              if (item.position === -2) {
                offsetX = -649.5;
              } else if (item.position === -1) {
                offsetX = -364.5;
              } else if (item.position === 0) {
                offsetX = 0;
              } else if (item.position === 1) {
                offsetX = 364.5;
              } else if (item.position === 2) {
                offsetX = 649.5;
              }

              // Build transform string for smooth transitions
              const transform = item.position === 0
                ? 'translate(-50%, -50%) translateZ(50px)'
                : `translate(calc(-50% + ${offsetX}px), -50%)`;

              // Calculate z-index based on position to ensure proper stacking order
              // Center item has highest z-index (5), items further from center have lower z-index
              // Position -2: z-index 2, Position -1: z-index 3, Position 0: z-index 5, Position 1: z-index 3, Position 2: z-index 2
              const zIndex = item.position === 0 ? 5 : Math.max(1, 4 - Math.abs(item.position));

              // CRITICAL: Use position in key to prevent duplicate vlogs from stacking
              // Since we have 4 vlogs but show 5 positions, the same vlog can appear twice
              // Including position in the key ensures each position slot has a unique element
              const itemKey = `${item.arrayIndex}-pos${item.position}`;

              return (
                <div
                  key={itemKey}
                  className={`carousel-item vlog-carousel-item ${item.position === 0 ? 'center' : ''} ${item.position !== 0 ? 'faded' : ''}`}
                  data-position={item.position}
                  data-array-index={item.arrayIndex}
                  style={{
                    transform: transform,
                    zIndex: zIndex
                  }}
                  onClick={() => {
                    // Clicking non-center items moves them to center
                    if (item.position !== 0) {
                      setCurrentIndex(item.arrayIndex);
                    }
                    // Center items are clickable through the iframe for video controls
                  }}
                >
                  <div className="vlog-thumbnail">
                    <iframe
                      src={iframeSrc}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn next" onClick={next}>›</button>
        </div>
      </div>
    </div>
  );
}

// Individual Album Page Component
function AlbumPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(null);

  const album = photoAlbums.find(a => a.id === albumId);

  useEffect(() => {
    setFadeIn(true);
    // Scroll to top when album page loads
    window.scrollTo(0, 0);
  }, []);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={`album-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="album-header">
        <button className="back-btn" onClick={() => {
          // Navigate back - scroll position will be restored by PhotoCarousel useEffect
          navigate('/gallery');
        }}>
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
              <img
                src={photo.url}
                alt={`${album.title} ${photo.id}`}
                onClick={() => setSelectedPhotoUrl(photo.url)}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {selectedPhotoUrl && (
        <div className="image-modal-overlay" onClick={() => setSelectedPhotoUrl(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" aria-label="Close" onClick={() => setSelectedPhotoUrl(null)}>
              ×
            </button>
            <img src={selectedPhotoUrl} alt="Selected" loading="lazy" />
          </div>
        </div>
      )}
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
