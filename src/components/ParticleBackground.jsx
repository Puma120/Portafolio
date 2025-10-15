import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    
    // Detectar si es móvil
    const isMobile = window.innerWidth < 768;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    // Reducir partículas en móvil
    const particleCount = isMobile ? 30 : 60;
    const connectionDistance = isMobile ? 100 : 150;
    const maxConnections = isMobile ? 2 : 3; // Limitar conexiones en móvil

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = isMobile ? 1.5 : Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity})`;
        if (!isMobile) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(0, 243, 255, 0.6)';
        }
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles (optimizado)
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (connections >= maxConnections) break;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }
    }

    // Animation loop con throttling en móvil
    let lastTime = 0;
    const fps = isMobile ? 30 : 60;
    const interval = 1000 / fps;

    function animate(currentTime) {
      animationFrameId.current = requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < interval) return;
      
      lastTime = currentTime - (deltaTime % interval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
    }

    animate(0);

    // Handle resize con debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
