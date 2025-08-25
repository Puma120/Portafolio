// Professional Animation System
class AnimationManager {
  constructor() {
    this.isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    if (this.isReduced) return;

    this.setupScrollAnimations();
    this.setupParallax();
    this.setupHoverEffects();
    this.setupStaggerAnimations();
    this.setupCursorEffects();
  }

  // Advanced Scroll Animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add stagger delay for multiple elements
          if (entry.target.classList.contains('stagger-animation')) {
            entry.target.classList.add('animate');
          }
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-animation'
    );
    
    animatedElements.forEach(el => observer.observe(el));
  }

  // Parallax Effects
  setupParallax() {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Advanced Hover Effects
  setupHoverEffects() {
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-glow');

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        this.addMagneticEffect(e.target);
      });

      element.addEventListener('mouseleave', (e) => {
        this.removeMagneticEffect(e.target);
      });
    });
  }

  // Magnetic Effect for Cards
  addMagneticEffect(element) {
    element.addEventListener('mousemove', this.magneticMove);
  }

  removeMagneticEffect(element) {
    element.removeEventListener('mousemove', this.magneticMove);
    element.style.transform = '';
  }

  magneticMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    const rotateX = deltaY * 10;
    const rotateY = deltaX * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  }

  // Stagger Animations
  setupStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('.stagger-container');

    staggerContainers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('stagger-animation');
      });
    });
  }

  // Custom Cursor Effects
  setupCursorEffects() {
    if (window.innerWidth < 768) return; // Skip on mobile

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });
  }

  // Professional Page Transitions
  static setupPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Text Animations
  static animateText(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    typeWriter();
  }

  // Number Counter Animation
  static animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.floor(current);
      
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // Loading States
  static showLoading(element) {
    element.classList.add('skeleton');
    element.innerHTML = '<div class="skeleton-content"></div>';
  }

  static hideLoading(element, content) {
    element.classList.remove('skeleton');
    element.innerHTML = content;
  }
}

// CSS for custom cursor
const cursorStyles = `
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
  }

  .cursor-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--primary-cyan);
    position: absolute;
    top: -2px;
    left: -2px;
  }

  .cursor-ring {
    width: 24px;
    height: 24px;
    border: 1px solid var(--primary-cyan);
    border-radius: 50%;
    position: absolute;
    top: -12px;
    left: -12px;
    transition: all 0.1s ease;
  }

  .custom-cursor.cursor-hover .cursor-ring {
    transform: scale(2);
    border-color: var(--primary-magenta);
  }

  .custom-cursor.cursor-hover .cursor-dot {
    background: var(--primary-magenta);
  }
`;

// Inject cursor styles
const style = document.createElement('style');
style.textContent = cursorStyles;
document.head.appendChild(style);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AnimationManager();
  AnimationManager.setupPageTransitions();
});

// Export for use in components
export { AnimationManager };
