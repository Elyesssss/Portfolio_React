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
      title: "Programmation d'un Jeu Zelda en JavaFx",
      location: "IUT de Montreuil",
      period: "Février 2024 - Juin 2024",
      type: "project"
    },
    {
      title: "Création et administration d'un Serveur web",
      location: "IUT Montreuil",
      period: "Février 2024 - Mars 2024",
      description: "Gestion de sites web et de bases de données via Apache 2",
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
    <section id="parcours" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-16 text-center">Parcours</h2>
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
              <div className="w-24 flex-shrink-0 text-right text-gray-500">
                {exp.period}
              </div>
              <div className="flex-grow">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600 mt-2">{exp.location}</p>
                  {exp.description && (
                    <p className="text-gray-600 mt-2">{exp.description}</p>
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