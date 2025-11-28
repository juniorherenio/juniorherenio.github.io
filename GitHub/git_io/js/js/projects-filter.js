/**
 * Projects-Filter.js - Project category filtering
 * Filters project cards by category with smooth animations
 */

(function() {
  'use strict';

  const filterButtons = $$('.filter-btn');
  const projectCards = $$('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  /**
   * Filter projects by category
   * @param {string} category - Category to filter by
   */
  function filterProjects(category) {
    projectCards.forEach((card, index) => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || cardCategory === category;

      if (shouldShow) {
        card.style.display = 'block';
        // Add animation delay for staggered reveal
        setTimeout(() => {
          card.classList.add('is-visible');
        }, index * 50);
      } else {
        card.classList.remove('is-visible');
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  /**
   * Handle filter button click
   */
  function handleFilterClick(e) {
    const button = e.currentTarget;
    const filter = button.dataset.filter;

    // Update active state
    filterButtons.forEach(btn => {
      btn.classList.remove('filter-btn--active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('filter-btn--active');
    button.setAttribute('aria-pressed', 'true');

    // Filter projects
    filterProjects(filter);
  }

  /**
   * Initialize
   */
  function init() {
    filterButtons.forEach(button => {
      button.addEventListener('click', handleFilterClick);
      button.setAttribute('role', 'button');
      button.setAttribute('aria-pressed', button.classList.contains('filter-btn--active'));
    });

    // Keyboard navigation
    filterButtons.forEach((button, index) => {
      button.addEventListener('keydown', (e) => {
        let targetIndex;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          targetIndex = (index + 1) % filterButtons.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          targetIndex = (index - 1 + filterButtons.length) % filterButtons.length;
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFilterClick({ currentTarget: button });
          return;
        }

        if (targetIndex !== undefined) {
          filterButtons[targetIndex].focus();
          handleFilterClick({ currentTarget: filterButtons[targetIndex] });
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
