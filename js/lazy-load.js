/**
 * Lazy-Load.js - Image lazy loading optimization
 * Lazy loads images with IntersectionObserver for performance
 */

(function() {
  'use strict';

  /**
   * Initialize lazy loading for images
   */
  function initLazyLoading() {
    const images = $$('img[data-src]');
    if (images.length === 0) return;

    const imageObserverOptions = {
      threshold: 0.01,
      rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          const srcSet = img.dataset.srcset;

          // Load image
          img.src = src;
          if (srcSet) {
            img.srcset = srcSet;
          }

          // Remove data attributes
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');

          // Add loaded class for fade-in
          img.classList.add('loaded');

          imageObserver.unobserve(img);
        }
      });
    }, imageObserverOptions);

    images.forEach(img => {
      imageObserver.observe(img);
    });
  }

  /**
   * Initialize back-to-top button
   */
  function initBackToTop() {
    const backToTopBtn = $('.back-to-top');
    if (!backToTopBtn) return;

    const toggleBackToTop = window.throttle(() => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    }, 100);

    window.addEventListener('scroll', toggleBackToTop);

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Keyboard shortcut: Ctrl/Cmd + Home
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        e.preventDefault();
        backToTopBtn.click();
      }
    });
  }

  /**
   * Initialize
   */
  function init() {
    initLazyLoading();
    initBackToTop();
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
