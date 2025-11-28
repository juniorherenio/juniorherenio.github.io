/**
 * darkmode.js - Dark mode toggle with localStorage persistence
 * Respects system preferences and saves user choice
 */

const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Get current theme from localStorage or system preference
 * @returns {string} 'light' or 'dark'
 */
function getCurrentTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        return storedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
}

/**
 * Set theme on document
 * @param {string} theme - 'light' or 'dark'
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update toggle button aria-label
    if (themeToggle) {
        themeToggle.setAttribute(
            'aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
    }
}

// Initialize theme on page load
const initialTheme = getCurrentTheme();
setTheme(initialTheme);

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);

        // Add rotation animation
        themeToggle.classList.add('rotating');
        setTimeout(() => {
            themeToggle.classList.remove('rotating');
        }, 500);
    });
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
