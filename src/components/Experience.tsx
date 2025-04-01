import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      title: "BUT Informatique parcours réalisation d'applications",
      location: "IUT Gustave Eiffel - Champs-sur-Marne",
      period: "2024 - 2026",
      type: "education"
    },
    {
      title: "BUT Informatique",
      location: "IUT de Montreuil - Paris 8",
      period: "2023-2024",
      type: "education"
    },
    {
      title: "Bac STI2D spécialité Systèmes d'Information et Numérique",
      location: "Lycée Simone Veil Noisiel",
      period: "2022-2023",
      description: "Mention Assez bien",
      type: "project"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <section id="parcours" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl sm:text-7xl font-light mb-8 tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
              Parcours
            </span>
          </h2>
        </AnimatedSection>
        <motion.div 
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="flex gap-8"
              variants={item}
            >
              <div className="w-24 flex-shrink-0 text-right text-text/70">
                {exp.period}
              </div>
              <div className="flex-grow">
                <motion.div 
                  className="bg-secondary p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-text">{exp.title}</h3>
                  <p className="text-text/70 mt-2">{exp.location}</p>
                  {exp.description && (
                    <p className="text-text/70 mt-2">{exp.description}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;