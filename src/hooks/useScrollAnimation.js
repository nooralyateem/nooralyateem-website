import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Uses Intersection Observer API for performance
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - When to trigger (0-1, default: 0.1)
 * @param {string} options.rootMargin - Margin around root (default: '0px 0px -100px 0px')
 * @param {boolean} options.triggerOnce - Only animate once (default: true)
 * @returns {Array} [ref, isVisible] - ref to attach to element, visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already animated and triggerOnce is true, don't observe again
    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;

