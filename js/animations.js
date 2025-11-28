/**
 * Animations.js - Scroll-triggered animations, IntersectionObserver setup
 * Handles fade-in animations and parallax effects
 */

(function() {
  'use strict';

  /**
   * Setup Intersection Observer for scroll-triggered animations
   */
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class to trigger animation
          entry.target.classList.add('is-visible');

          // Optionally unobserve for performance after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    $$('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * Initialize parallax effect (optional, advanced)
   */
  function initParallax() {
    const parallaxElements = $$('.parallax');
    if (parallaxElements.length === 0) return;

    const handleScroll = window.throttle(() => {
      parallaxElements.forEach(element => {
        const scrollY = window.scrollY;
        const elementOffset = element.offsetTop;
        const distance = scrollY - elementOffset;
        const percentage = (distance / window.innerHeight) * 0.5;

        element.style.backgroundPosition = `center ${percentage * 100}px`;
      });
    }, 50);

    window.addEventListener('scroll', handleScroll);
  }

  /**
   * Initialize page transitions (fade-in on load)
   */
  function initPageTransition() {
    const main = document.querySelector('main');
    if (main) {
      main.style.animation = 'fadeIn 0.6s ease-out';
    }
  }

  /**
   * Initialize
   */
  function init() {
    initScrollAnimations();
    initParallax();
    initPageTransition();
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
