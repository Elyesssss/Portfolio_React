import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: "Portail Bancaire",
      description: "Création d'un portail bancaire programmé en HTML/CSS/PHP/SQL",
      period: "Septembre 2024 - Janvier 2025",
      tech: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
      title: "Jeu Zelda",
      description: "Développement d'un jeu sur le thème de Zelda en JavaFX",
      period: "Février 2024 - Juin 2024",
      tech: ["Java", "JavaFX"]
    },
    {
      title: "Serveur Web",
      description: "Configuration et administration d'un serveur web Apache",
      period: "Février 2024 - Mars 2024",
      tech: ["Apache", "Linux", "PHP"]
    },
    {
      title: "Travia Tour",
      description: "Développement du front-end et du back-end d'un site web pour la réservation de billets de transport intergalactique, intégrant une interface utilisateur moderne et interactive.",
      period: "septembre 2024 - Janvier 2025",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "java","C","Cartographie Interactive"],
    }
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { scale: 0.95, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <section id="projets" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-16 text-center">Projets</h2>
        </AnimatedSection>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-2 italic">{project.period}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;