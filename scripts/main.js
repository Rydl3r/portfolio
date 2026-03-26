/**
 * Ivan Mukoied - Frontend Developer Portfolio
 * Terminal Theme JavaScript
 */

(function () {
  'use strict';

  // Matrix rain effect
  function createMatrixRain() {
    const matrixBg = document.getElementById('matrix-bg');
    if (!matrixBg) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columnCount = Math.floor(window.innerWidth / 25);
    
    // Clear existing columns
    matrixBg.innerHTML = '';
    
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${(i / columnCount) * 100}%`;
      column.style.animationDuration = `${Math.random() * 10 + 10}s`;
      column.style.animationDelay = `${Math.random() * 10}s`;
      column.setAttribute('aria-hidden', 'true');
      
      let text = '';
      const length = Math.floor(Math.random() * 20 + 10);
      for (let j = 0; j < length; j++) {
        text += characters[Math.floor(Math.random() * characters.length)];
      }
      column.textContent = text;
      
      matrixBg.appendChild(column);
    }
  }

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.section, .project-card, .experience-item, .skill-category'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Handle resize for matrix rain
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      createMatrixRain();
    }, 250);
  }

  // Update current year in footer if element exists
  function updateYear() {
    const yearElement = document.querySelector('[data-current-year]');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Initialize
  function init() {
    createMatrixRain();
    initScrollAnimations();
    updateYear();

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Handle reduced motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        // Remove matrix rain if user prefers reduced motion
        const matrixBg = document.getElementById('matrix-bg');
        if (matrixBg) {
          matrixBg.innerHTML = '';
        }
      } else {
        createMatrixRain();
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
