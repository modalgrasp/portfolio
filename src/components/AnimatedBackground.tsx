'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect touch device
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Track mouse/touch position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];
      mouseRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
    };

    // Add event listeners based on device type
    if (isTouchDevice.current) {
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = '';
      opacity: number = 0;
      baseSpeedX: number = 0;
      baseSpeedY: number = 0;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1.5;
        this.baseSpeedX = (Math.random() - 0.5) * 0.2;
        this.baseSpeedY = (Math.random() - 0.5) * 0.2;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.opacity = Math.random() * 0.3 + 0.4;
        this.color = `rgba(147, 51, 234, ${this.opacity})`;
      }

      update() {
        if (!canvas) return;

        // Calculate distance to mouse/touch
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Magnetic effect parameters
        const maxDistance = 200;
        const maxForce = 0.15;
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * maxForce;
          this.speedX = this.baseSpeedX + (dx / distance) * force;
          this.speedY = this.baseSpeedY + (dy / distance) * force;
        } else {
          this.speedX = this.baseSpeedX;
          this.speedY = this.baseSpeedY;
        }

        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 200;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.2 * (1 - distance / 120);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (isTouchDevice.current) {
        canvas.removeEventListener('touchmove', handleTouchMove);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #000000, #1a1a1a)' }}
    />
  );
};

export default AnimatedBackground; 