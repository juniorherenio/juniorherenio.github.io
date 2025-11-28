/**
 * Main.js - Core initialization and utility functions
 * Initializes the application and provides reusable utilities
 */

(function() {
  'use strict';

  /**
   * Utility: querySelector wrapper
   * @param {string} selector - CSS selector
   * @param {Element} context - Context element (default: document)
   * @returns {Element|null}
   */
  window.$ = (selector, context = document) => context.querySelector(selector);

  /**
   * Utility: querySelectorAll wrapper
   * @param {string} selector - CSS selector
   * @param {context} context - Context element (default: document)
   * @returns {Array}
   */
  window.$$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  /**
   * Debounce function - delays execution until after N ms of inactivity
   * @param {Function} func - Function to debounce
   * @param {number} delay - Delay in milliseconds
   * @returns {Function}
   */
  window.debounce = (func, delay = 300) => {
    let timeoutId;
    return function debounced(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  /**
   * Throttle function - limits function execution to once every N ms
   * @param {Function} func - Function to throttle
   * @param {number} limit - Limit in milliseconds
   * @returns {Function}
   */
  window.throttle = (func, limit = 300) => {
    let inThrottle;
    return function throttled(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  /**
   * Smoothly scroll to element
   * @param {string|Element} target - Target selector or element
   * @param {number} offset - Offset in pixels
   */
  window.scrollToElement = (target, offset = 0) => {
    const element = typeof target === 'string' ? $(target) : target;
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  };

  /**
   * Add event listener with cleanup
   * @param {Element} element - Target element
   * @param {string} event - Event type
   * @param {Function} callback - Callback function
   * @returns {Function} Cleanup function
   */
  window.on = (element, event, callback) => {
    if (!element) return () => {};
    element.addEventListener(event, callback);
    return () => element.removeEventListener(event, callback);
  };

  /**
   * Check if element is in viewport
   * @param {Element} element - Element to check
   * @returns {boolean}
   */
  window.isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  };

  /**
   * Add/remove class utility
   * @param {Element} element - Target element
   * @param {string} className - Class name
   * @param {boolean} force - Force add (true) or remove (false)
   */
  window.toggleClass = (element, className, force) => {
    element.classList.toggle(className, force);
  };

  /**
   * Initialize application
   */
  function init() {
    // Polyfill for older browsers
    if (!Element.prototype.scrollIntoView) {
      console.warn('ScrollIntoView not supported');
    }

    // Remove no-js class if present
    document.documentElement.classList.remove('no-js');

    // Log initialization
    if (process.env.NODE_ENV === 'development') {
      console.log('Application initialized');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
