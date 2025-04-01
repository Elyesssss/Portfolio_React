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
      title: "Mise en place d'un DNS",
      description: "Configuration et administration d'un serveur DNS en utilisant Netkit et Ubuntu, permettant la résolution de noms de domaines locaux.",
      period: "Novembre 2024",
      tech: ["Netkit", "Ubuntu", "DNS"]
    },
    {
      title: "Mise en place d'un scanner de vulnérabilité aux injections sql",
      description: "Développement un scanner de sécurité en Go permettant l'identification automatisée des vulnérabilités SQL dans les applications web.",
      period: "Février 2025",
      tech: ["Go"]
    },
    {
      title: "Travia Tour",
      description: "Développement du front-end et du back-end d'un site web pour la réservation de billets de transport intergalactique, intégrant une interface utilisateur moderne et interactive.",
      period: "Septembre 2024 - Janvier 2025",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Java", "C", "Cartographie Interactive"]
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
    <section id="projets" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl sm:text-7xl font-light mb-8 tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
              Projets
            </span>
          </h2>
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
              className="bg-secondary p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-text">{project.title}</h3>
              <p className="text-text/70 mb-2 italic">{project.period}</p>
              <p className="text-text/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-background/50 rounded-full text-sm text-text/70"
                  >
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
