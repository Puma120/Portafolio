import React, { useEffect, useRef } from 'react';

/**
 * DataStreams - Matrix-style falling hex/binary characters
 * GPU-composited via canvas. Respects prefers-reduced-motion.
 */
const DataStreams = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedMultiplier = prefersReducedMotion ? 0.35 : 1;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let columns = [];

    const CHARS = '0123456789ABCDEF<>{}[]|/\\+-=*^?#@!~';
    const FONT_SIZE = 13;
    const COLORS = [
      'rgba(0, 240, 255, ',
      'rgba(255, 34, 81, ',
      'rgba(0, 255, 136, ',
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const numCols = Math.floor(canvas.width / (FONT_SIZE * 2.5));
      columns = Array.from({ length: numCols }, (_, i) => ({
        x: i * (FONT_SIZE * 2.5) + Math.random() * FONT_SIZE,
        y: Math.random() * -canvas.height,
        speed: 0.4 + Math.random() * 0.8,
        opacity: 0.04 + Math.random() * 0.08,
        length: 6 + Math.floor(Math.random() * 10),
        colorIdx: Math.floor(Math.random() * COLORS.length),
        chars: Array.from({ length: 20 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
        frame: Math.floor(Math.random() * 30),
      }));
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "Share Tech Mono", monospace`;

      columns.forEach(col => {
        col.frame++;

        if (col.frame % 8 === 0) {
          const idx = Math.floor(Math.random() * col.chars.length);
          col.chars[idx] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        const color = COLORS[col.colorIdx];

        for (let i = 0; i < col.length; i++) {
          const charY = col.y - i * FONT_SIZE;
          if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue;

          const alpha = i === 0
            ? col.opacity * 6
            : col.opacity * (1 - i / col.length);

          ctx.fillStyle = `${color}${Math.min(alpha, 0.45)})`;
          ctx.fillText(col.chars[i % col.chars.length], col.x, charY);
        }

        col.y += col.speed * speedMultiplier;

        if (col.y - col.length * FONT_SIZE > canvas.height) {
          col.y = Math.random() * -200;
          col.speed = 0.4 + Math.random() * 0.8;
          col.opacity = 0.04 + Math.random() * 0.08;
          col.colorIdx = Math.floor(Math.random() * COLORS.length);
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default DataStreams;
