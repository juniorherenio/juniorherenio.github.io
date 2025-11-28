/**
 * projects-filter.js - Project category filtering functionality
 * Filters projects by category with smooth animations
 */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
            button.classList.add('filter-btn--active');

            // Filter projects with animation
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filterValue === 'all' || category === filterValue;

                if (shouldShow) {
                    // Show card with staggered animation
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('is-visible');
                    }, index * 50);
                } else {
                    // Hide card
                    card.classList.remove('is-visible');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            // Update URL parameter (optional)
            const url = new URL(window.location);
            if (filterValue === 'all') {
                url.searchParams.delete('filter');
            } else {
                url.searchParams.set('filter', filterValue);
            }
            window.history.replaceState({}, '', url);
        });
    });

    // Apply filter from URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter');

    if (filterFromUrl) {
        const targetButton = document.querySelector(`.filter-btn[data-filter="${filterFromUrl}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }
}
