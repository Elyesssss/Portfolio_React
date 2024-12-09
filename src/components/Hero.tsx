import React from 'react';
import { motion } from 'framer-motion';
import Blob from './Blob';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-background">
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Blob />
      </motion.div>
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 sm:mb-8 text-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span>Elyes Hamani</span>
          <br />
          <motion.span 
            className="text-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Stage Informatique
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-text/70 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Programmation • Sécurité • Réseaux
        </motion.p>
        <motion.a 
          href="#contact" 
          className="inline-block bg-text text-background px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-text/90 transition-colors"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            const contact = document.getElementById('contact');
            if (contact) {
              const offset = 80;
              const elementPosition = contact.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }}
        >
          Me Contacter
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Hero;