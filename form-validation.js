/**
 * form-validation.js- Contact form validation and submission
 * Performs client-side validation with accessibility support
 */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const formInputs = contactForm.querySelectorAll('[required]');

    /**
     * Shows error message for a specific field
     * @param {HTMLElement} input - Input element
     * @param {string} message - Error message
     */
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.form-error');

        if (errorElement) {
            errorElement.textContent = message;
            input.setAttribute('aria-invalid', 'true');
            input.setAttribute('aria-describedby', errorElement.id || 'error-' + input.id);
        }
    }

    /**
     * Clears error message for a field
     * @param {HTMLElement} input - Input element
     */
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.form-error');

        if (errorElement) {
            errorElement.textContent = '';
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedby');
        }
    }

    /**
     * Validates an email address
     * @param {string} email - Email to validate
     * @returns {boolean} Whether email is valid
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validates a single field
     * @param {HTMLElement} input - Input to validate
     * @returns {boolean} Whether field is valid
     */
    function validateField(input) {
        const value = input.value.trim();
        const fieldName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

        // Clear previous error
        clearError(input);

        // Required field validation
        if (!value) {
            showError(input, `${fieldName} is required`);
            return false;
        }

        // Email validation
        if (input.type === 'email' && !isValidEmail(value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }

        // Minimum length validation
        if (input.hasAttribute('minlength')) {
            const minLength = parseInt(input.getAttribute('minlength'));
            if (value.length < minLength) {
                showError(input, `${fieldName} must be at least ${minLength} characters`);
                return false;
            }
        }

        return true;
    }

    // Real-time validation on blur
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));

        // Clear error on input
        input.addEventListener('input', () => clearError(input));
    });

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;

        // Validate all fields
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Focus first invalid field
            const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        // Collect form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('span');
        const loadingIcon = submitButton.querySelector('.btn__icon--loading');

        if (buttonText && loadingIcon) {
            buttonText.style.display = 'none';
            loadingIcon.style.display = 'block';
            submitButton.disabled = true;
        }

        try {
            // Simulate form submission (replace with actual endpoint)
            await simulateFormSubmission(data);

            // Show success message
            showFormStatus('success', 'Thank you! Your message has been sent successfully.');

            // Reset form
            contactForm.reset();

        } catch (error) {
            // Show error message
            showFormStatus('error', 'Sorry, there was an error sending your message. Please try again.');
            console.error('Form submission error:', error);

        } finally {
            // Reset button state
            if (buttonText && loadingIcon) {
                buttonText.style.display = 'inline';
                loadingIcon.style.display = 'none';
                submitButton.disabled = false;
            }
        }
    });

    /**
     * Shows form status message
     * @param {string} type - ' success' or 'error'
     * @param {string} message - Status message
     */
    function showFormStatus(type, message) {
        const statusElement = contactForm.querySelector('.form-status');

        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `form-status form-status--${type}`;
            statusElement.setAttribute('role', 'status');
            statusElement.setAttribute('aria-live', 'polite');

            // Auto-hide after 5 seconds
            setTimeout(() => {
                statusElement.textContent = '';
                statusElement.className = 'form-status';
            }, 5000);
        }
    }

    /**
     * Simulates form submission (replace with actual API call)
     * @param {Object} data - Form data
     * @returns {Promise} Promise that resolves after delay
     */
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Form data:', data);
                resolve();
            }, 1500);
        });
    }
}
