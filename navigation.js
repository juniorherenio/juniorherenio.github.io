/**
 * navigation.js - Navigation menu behavior and smooth scrolling
 * Handles mobile menu toggle, smooth scrolling, and active link highlighting
 */

import { throttle } from './main.js';

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar__container')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Update URL without scrolling
        history.pushState(null, null, href);
    }
});

// ===== ACTIVE LINK HIGHLIGHTING ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

const highlightActiveLink = throttle(() => {
    const scrollY = window.pageYOffset;
    const navbarHeight = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }
    });
}, 100);

window.addEventListener('scroll', highlightActiveLink, { passive: true });
highlightActiveLink(); // Run on load

// ===== NAVBAR SCROLL BEHAVIOR =====
let lastScrollTop = 0;
const navbar = document.querySelector('header');

const handleNavbarScroll = throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
}, 100);

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
