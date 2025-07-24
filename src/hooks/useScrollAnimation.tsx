import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  duration?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = '0.6s',
    animation = 'fadeIn',
    once = true
  } = options;

  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-[${duration}]`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'slideUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-16`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-16`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-16`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'rotateIn':
          return `${baseClasses} ${durationClass} opacity-0 rotate-6 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    } else {
      return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
    }
  };

  return {
    ref,
    className: getAnimationClasses(),
    isVisible
  };
};

export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  return Array.from({ length: itemCount }, (_, index) => 
    useScrollAnimation({ 
      delay: index * baseDelay,
      animation: 'fadeIn'
    })
  );
};