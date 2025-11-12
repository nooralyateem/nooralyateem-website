import { useEffect, useRef, useState } from 'react';

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, '')) : end;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - start) + start);

      if (progress < 1) {
        setCount(currentCount);
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, start]);

  const displayValue = typeof end === 'string' && end.includes('+') 
    ? `${count.toLocaleString()}+` 
    : count.toLocaleString();

  return [elementRef, displayValue];
};

export default useCountUp;

