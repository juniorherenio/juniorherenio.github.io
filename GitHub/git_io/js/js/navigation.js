/**
 * Navigation.js - Navigation menu, smooth scrolling, active link states
 * Handles mobile menu toggle, smooth scroll to sections, and nav link highlighting
 */

(function() {
  'use strict';

  const navbar = $('[role="navigation"]');
  const navToggle = $('.navbar__menu-toggle');
  const navMenu = $('.navbar__nav');
  const navLinks = $$('.navbar__link');

  if (!navbar) return;

  /**
   * Toggle mobile menu
   */
  function toggleMenu() {
    const isOpen = navMenu.classList.contains('active');
    navMenu.classList.toggle('active', !isOpen);
    navToggle.classList.toggle('active', !isOpen);
    navToggle.setAttribute('aria-expanded', !isOpen);
  }

  /**
   * Close mobile menu
   */
  function closeMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  /**
   * Update active nav link based on scroll position
   */
  function updateActiveLink() {
    const sections = $$('section[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Handle smooth scroll on nav link click
   */
  function handleNavClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href.startsWith('#')) return;

    e.preventDefault();
    const target = $(href);
    if (!target) return;

    closeMenu();
    window.scrollToElement(target, 80);
    target.focus();
  }

  /**
   * Initialize navigation
   */
  function init() {
    // Menu toggle
    if (navToggle) {
      navToggle.addEventListener('click', toggleMenu);
    }

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Close menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Update active link on scroll
    const debouncedUpdate = window.debounce(updateActiveLink, 100);
    window.addEventListener('scroll', debouncedUpdate);

    // Initial update
    updateActiveLink();

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
