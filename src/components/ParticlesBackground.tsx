import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration des particules
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const PARTICLE_COUNT = 100;
    const PARTICLE_SIZE_RANGE = [1, 3];
    const SPEED_RANGE = [-0.5, 0.5];
    const INTERACTION_DISTANCE = 100;
    const CONNECTION_OPACITY = 0.15;

    // Fonction pour créer une particule
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: PARTICLE_SIZE_RANGE[0] + Math.random() * (PARTICLE_SIZE_RANGE[1] - PARTICLE_SIZE_RANGE[0]),
        speedX: SPEED_RANGE[0] + Math.random() * (SPEED_RANGE[1] - SPEED_RANGE[0]),
        speedY: SPEED_RANGE[0] + Math.random() * (SPEED_RANGE[1] - SPEED_RANGE[0]),
        opacity: 0.1 + Math.random() * 0.3
      };
    };

    // Initialisation des particules
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    // Gestion du redimensionnement
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Gestion du mouvement de la souris
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    // Animation des particules
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Mise à jour de la position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebond sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Dessin de la particule
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Connexions entre particules
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < INTERACTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${CONNECTION_OPACITY * (1 - distance / INTERACTION_DISTANCE)})`;
            ctx.stroke();
          }
        });

        // Interaction avec la souris
        const dx = particle.x - mousePosition.current.x;
        const dy = particle.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < INTERACTION_DISTANCE * 2) {
          const angle = Math.atan2(dy, dx);
          const force = (INTERACTION_DISTANCE * 2 - distance) / (INTERACTION_DISTANCE * 2);
          particle.x += Math.cos(angle) * force;
          particle.y += Math.sin(angle) * force;
        }
      });

      requestAnimationFrame(animate);
    };

    // Initialisation
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default ParticlesBackground; 