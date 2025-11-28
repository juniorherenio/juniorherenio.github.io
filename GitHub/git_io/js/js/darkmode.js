/**
 * Darkmode.js - Theme toggle with localStorage persistence
 * Handles light/dark mode switching with system preference detection
 */

(function() {
  'use strict';

  const themeToggle = $('.theme-toggle');
  const html = document.documentElement;
  const STORAGE_KEY = 'theme-preference';
  const LIGHT_MODE = 'light';
  const DARK_MODE = 'dark';

  if (!themeToggle) return;

  /**
   * Get user's color scheme preference
   */
  function getColorSchemePreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_MODE : LIGHT_MODE;
  }

  /**
   * Set theme
   * @param {string} theme - 'light' or 'dark'
   */
  function setTheme(theme) {
    const validTheme = [LIGHT_MODE, DARK_MODE].includes(theme) ? theme : LIGHT_MODE;
    html.setAttribute('data-theme', validTheme);
    localStorage.setItem(STORAGE_KEY, validTheme);

    // Animate icon
    themeToggle.classList.add('rotating');
    setTimeout(() => {
      themeToggle.classList.remove('rotating');
    }, 500);

    // Update aria-label
    const label = validTheme === DARK_MODE ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
  }

  /**
   * Toggle theme
   */
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setTheme(newTheme);
  }

  /**
   * Handle system preference change
   */
  function handleSystemThemeChange(e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? DARK_MODE : LIGHT_MODE);
    }
  }

  /**
   * Initialize
   */
  function init() {
    // Set initial theme
    const preference = getColorSchemePreference();
    setTheme(preference);

    // Listen for toggle button clicks
    themeToggle.addEventListener('click', toggleTheme);

    // Listen for system preference changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleSystemThemeChange);

    // Keyboard shortcut: Ctrl/Cmd + Shift + T
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
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
