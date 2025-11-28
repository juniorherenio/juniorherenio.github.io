/**
 * lazy-load.js - Image lazy loading fallback
 * Provides lazy loading support for browsers without native support
 */

/**
 * Check if native lazy loading is supported
 */
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
        }
    });
} else {
    // Fallback to IntersectionObserver for older browsers
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Load image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }

                // Remove data attributes
                delete img.dataset.src;
                delete img.dataset.srcset;

                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Progressive image loading with blur-up effect (optional)
 */
function applyBlurUpEffect() {
    const images = document.querySelectorAll('.blur-up');

    images.forEach(container => {
        const img = container.querySelector('img');
        const placeholder = container.querySelector('.placeholder');

        if (img && placeholder) {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                placeholder.classList.add('hidden');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', applyBlurUpEffect);
