/**
 * Form-Validation.js - Contact form validation and submission
 * Handles frontend form validation and user feedback
 */

(function() {
  'use strict';

  const form = $('#contactForm');
  if (!form) return;

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean}
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Get form field error element
   * @param {HTMLInputElement} field - Form field
   * @returns {HTMLElement}
   */
  function getErrorElement(field) {
    return field.parentElement.querySelector('.form-error') || field.nextElementSibling;
  }

  /**
   * Show field error
   * @param {HTMLInputElement} field - Form field
   * @param {string} message - Error message
   */
  function showError(field, message) {
    field.setAttribute('aria-invalid', 'true');
    const errorEl = getErrorElement(field);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.setAttribute('role', 'alert');
    }
  }

  /**
   * Clear field error
   * @param {HTMLInputElement} field - Form field
   */
  function clearError(field) {
    field.setAttribute('aria-invalid', 'false');
    const errorEl = getErrorElement(field);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.removeAttribute('role');
    }
  }

  /**
   * Validate form fields
   * @returns {boolean}
   */
  function validateForm() {
    let isValid = true;
    const fields = form.querySelectorAll('[required]');

    fields.forEach(field => {
      const value = field.value.trim();
      let errorMessage = '';

      if (!value) {
        errorMessage = `${field.previousElementSibling?.textContent || 'This field'} is required`;
        isValid = false;
      } else if (field.type === 'email' && !isValidEmail(value)) {
        errorMessage = 'Please enter a valid email address';
        isValid = false;
      } else if (field.type === 'text' && value.length < 2) {
        errorMessage = 'This field must be at least 2 characters';
        isValid = false;
      } else if (field.tagName === 'TEXTAREA' && value.length < 10) {
        errorMessage = 'Message must be at least 10 characters';
        isValid = false;
      }

      if (errorMessage) {
        showError(field, errorMessage);
      } else {
        clearError(field);
      }
    });

    return isValid;
  }

  /**
   * Show form message
   * @param {string} message - Message to display
   * @param {string} type - 'success' or 'error'
   */
  function showMessage(message, type = 'success') {
    const messageEl = form.querySelector('.form-message');
    if (!messageEl) return;

    messageEl.textContent = message;
    messageEl.className = `form-message form-message--${type}`;
    messageEl.setAttribute('role', 'alert');

    if (type === 'success') {
      setTimeout(() => {
        messageEl.textContent = '';
        messageEl.className = 'form-message';
      }, 5000);
    }
  }

  /**
   * Handle form submission
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      showMessage('Please correct the errors above', 'error');
      return;
    }

    // Since we have no backend, show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    // Simulate network delay
    setTimeout(() => {
      showMessage('Message received! I\'ll get back to you soon.', 'success');

      // Reset form
      form.reset();

      // Restore button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Clear errors
      $$('.form-error').forEach(el => {
        el.textContent = '';
      });

      $$('[required]').forEach(field => {
        clearError(field);
      });
    }, 1500);
  }

  /**
   * Handle field input (real-time validation)
   */
  function handleFieldInput(e) {
    const field = e.target;
    if (field.value.trim()) {
      clearError(field);
    }
  }

  /**
   * Initialize
   */
  function init() {
    // Form submission
    form.addEventListener('submit', handleSubmit);

    // Real-time validation
    const fields = form.querySelectorAll('[required]');
    fields.forEach(field => {
      field.addEventListener('blur', handleFieldInput);
      field.addEventListener('input', handleFieldInput);
    });

    // Prevent form submission on Enter in textarea
    const textarea = form.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
          form.dispatchEvent(new Event('submit'));
        }
      });
    }

    // Make form fields required
    fields.forEach(field => {
      field.setAttribute('aria-required', 'true');
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
