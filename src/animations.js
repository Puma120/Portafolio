// Cyberpunk Animation Engine & Interaction Manager

export class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________010101';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText || '';
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end, char: '' });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

class AnimationManager {
  constructor() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.isReduced = prefersReducedMotion;
    this.isMobile = isMobile;

    this.init();
  }

  init() {
    this.setupSectionGlitchAnimations();
    this.setupScrollAnimations();
    this.setupTiltAndSpotlight();
    this.setupHoverEffects();
    this.setupStaggerAnimations();

    if (!this.isMobile) {
      this.setupCursorEffects();
    }
  }

  // Full-Zone Cyber Glitch Entrance across entire section
  setupSectionGlitchAnimations() {
    const sections = document.querySelectorAll('section');

    // Create & inject the holographic glitch overlay into every section
    sections.forEach(section => {
      section.style.position = 'relative';
      if (!section.querySelector('.section-glitch-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'section-glitch-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
          <div class="glitch-scanlines"></div>
          <div class="glitch-chroma-slice chroma-1"></div>
          <div class="glitch-chroma-slice chroma-2"></div>
          <div class="glitch-chroma-slice chroma-3"></div>
          <div class="glitch-laser-bar"></div>
        `;
        section.appendChild(overlay);
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          AnimationManager.triggerSectionGlitch(section);
        } else {
          entry.target.classList.remove('section-glitched-settled');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }

  // Trigger full-zone glitch on a target section
  static triggerSectionGlitch(section) {
    if (!section) return;

    const overlay = section.querySelector('.section-glitch-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      // Force DOM reflow to re-trigger CSS keyframe animations
      void overlay.offsetWidth;
      overlay.classList.add('active');

      setTimeout(() => {
        overlay.classList.remove('active');
      }, 700);
    }

    // Scramble section titles inside this section
    const titles = section.querySelectorAll('.section-title[data-scramble]');
    titles.forEach(title => {
      const original = title.dataset.originalText || title.innerText;
      if (!title.dataset.originalText) {
        title.dataset.originalText = original;
      }
      const scrambler = new TextScramble(title);
      scrambler.setText(original);
    });

    section.classList.add('section-glitched-settled');
  }

  // Scroll reveals with IntersectionObserver
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.classList.contains('stagger-container') || entry.target.classList.contains('stagger-animation')) {
            entry.target.classList.add('animate');
          }

          // Activate child stagger items with cascade
          if (entry.target.classList.contains('section-header')) {
            const subtitle = entry.target.querySelector('.section-subtitle');
            if (subtitle) {
              subtitle.style.animationPlayState = 'running';
            }
          }
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-animation, .stagger-container, .cyber-reveal, .section-header'
    );

    animatedElements.forEach(el => observer.observe(el));
  }

  // Dynamic 3D Card Tilt + Mouse Spotlight illumination
  setupTiltAndSpotlight() {
    if (this.isMobile) return;

    const cards = document.querySelectorAll(
      '.floating-card, .achievement, .stat-card, .skill-category, .certificate-card, .contact-method, .project-card, .project-info-section, [data-tilt]'
    );

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight custom properties
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // 3D perspective calculation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = deltaY * -7;
        const rotateY = deltaX * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
        card.style.transition = 'box-shadow 0.2s ease, border-color 0.2s ease';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = '';
      });
    });
  }

  // Interactive Hover Effects
  setupHoverEffects() {
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-glow');

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('is-hovered');
      });

      element.addEventListener('mouseleave', () => {
        element.classList.remove('is-hovered');
      });
    });
  }

  // Stagger cascading
  setupStaggerAnimations() {
    const containers = document.querySelectorAll('.stagger-container');

    containers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.08 + 0.05}s`;
      });
    });
  }

  // Cyberpunk HUD Cursor
  setupCursorEffects() {
    if (document.querySelector('.custom-cursor')) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = `
      <div class="cursor-dot"></div>
      <div class="cursor-ring"></div>
      <div class="cursor-crosshair ch-t"></div>
      <div class="cursor-crosshair ch-r"></div>
      <div class="cursor-crosshair ch-b"></div>
      <div class="cursor-crosshair ch-l"></div>
    `;
    document.body.appendChild(cursor);

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    // Click pulse
    window.addEventListener('mousedown', () => cursor.classList.add('cursor-click'));
    window.addEventListener('mouseup', () => cursor.classList.remove('cursor-click'));

    // Target hover interactions
    const interactiveSelectors = 'a, button, .interactive, .tab-nav-item, input, textarea, .certificate-card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove('cursor-hover');
      }
    });
  }

  // Smooth Section Navigation
  static setupPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"], .nav-btn, .logo');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || link.dataset.target;
        let targetId = '';
        if (href && href.startsWith('#')) {
          targetId = href.substring(1);
        }

        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            AnimationManager.triggerSectionGlitch(targetElement);
          }
        }
      });
    });
  }

  // Smooth Easing Counter
  static animateCounter(element, target, duration = 1800) {
    const start = 0;
    const startTime = performance.now();

    const easeOutQuad = (t) => t * (2 - t);

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (target - start) * easeOutQuad(progress));

      element.textContent = `${current}+`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = `${target}+`;
      }
    };

    requestAnimationFrame(update);
  }
}

// Global Cursor Styles
const cursorStyles = `
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999;
    mix-blend-mode: screen;
    will-change: transform;
  }

  .cursor-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00f0ff;
    position: absolute;
    top: -3px;
    left: -3px;
    box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
    transition: transform 0.1s ease;
  }

  .cursor-ring {
    width: 28px;
    height: 28px;
    border: 1px solid rgba(0, 240, 255, 0.4);
    border-radius: 50%;
    position: absolute;
    top: -14px;
    left: -14px;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
  }

  .cursor-crosshair {
    position: absolute;
    background: rgba(0, 240, 255, 0.6);
    pointer-events: none;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .ch-t { width: 1px; height: 5px; top: -19px; left: 0; }
  .ch-b { width: 1px; height: 5px; top: 14px; left: 0; }
  .ch-l { width: 5px; height: 1px; top: 0; left: -19px; }
  .ch-r { width: 5px; height: 1px; top: 0; left: 14px; }

  .custom-cursor.cursor-hover .cursor-ring {
    transform: scale(1.6);
    border-color: #ff2251;
    background: rgba(255, 34, 81, 0.08);
  }

  .custom-cursor.cursor-hover .cursor-dot {
    background: #ff2251;
    box-shadow: 0 0 12px #ff2251;
    transform: scale(1.4);
  }

  .custom-cursor.cursor-click .cursor-ring {
    transform: scale(0.85);
    border-color: #00ff88;
  }

  .scramble-char {
    color: var(--neon-cyan, #00e5ff);
    opacity: 0.9;
    font-family: var(--mono, monospace);
  }
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = cursorStyles;
  document.head.appendChild(style);
}

// Auto-initialize
export function initAnimations() {
  const manager = new AnimationManager();
  AnimationManager.setupPageTransitions();
  return manager;
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    setTimeout(initAnimations, 80);
  }
}

export { AnimationManager };
