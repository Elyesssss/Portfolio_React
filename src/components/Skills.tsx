import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skills = {
    'Programmation': [
      'HTML/CSS',
      'React/JavaScript/TypeScript',
      'Java/JavaFX',
      'C',
      'PHP/SQL',
      'Go'
    ],
    'Sécurité': [
      'John The Ripper',
      'Nmap',
      'Wireshark',
      'Cryptographie'
    ],
    'Réseaux': [
      'Protocoles TCP/IP',
      'HTTP/HTTPS',
      'DHCP/DNS',
      'Firewall',
    ],
    'Scripting ': [
      'Bash',
      'Shell'
    ],
    'Base de données': [
      'MySQL/MariaDB',
      'PostgreSQL',
      'MongoDB'
    ],
    'Outils & Environnements': [
      'Cisco Packet Tracer',
      'Marionnet',
      'Git/GitHub',
      'Kali Linux/Windows',
      'VS Code/Eclipse/IntelliJ'
    ]
  };

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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="compétences" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-16 text-center text-text">Compétences</h2>
        </AnimatedSection>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={item}
              className="bg-secondary p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-text">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-text/70">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;