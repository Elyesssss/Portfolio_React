import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Network } from 'lucide-react';

const About = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  return (
    <section id="à-propos" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-5xl sm:text-7xl font-light mb-8 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
            À Propos
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image-container bg-gradient-to-br from-secondary to-background flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Code size={40} className="text-primary" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Terminal size={40} className="text-primary" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Database size={40} className="text-primary" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Network size={40} className="text-primary" />
                </motion.div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-text/70 leading-relaxed">
                Étudiant en BUT Informatique parcours réalisation d'applications, je suis à la recherche 
                d'un stage de 2 à 3 mois à partir d'avril 2025. Passionné par la cybersécurité, le réseaux et le développement web et logiciel, 
                je combine créativité et compétences techniques pour créer des solutions innovantes.
              </p>
              <div className="space-y-2">
                <p className="text-text"><strong>Email:</strong> elyes.h77@gmail.com</p>
                <p className="text-text"><strong>Localisation:</strong> Ile de France</p>
                <p className="text-text"><strong>Disponibilité:</strong> Stage de 2 à 3 mois à partir d'avril 2025</p>
                <p className="text-text"><strong>Permis:</strong> Permis B</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://cvdesignr.com/p/673d9d8835b7c"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-secondary p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center space-y-4">
                <motion.div
                  className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Terminal size={32} className="text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-text">Mon CV</h3>
                <p className="text-text/70">Cliquez pour consulter mon CV complet</p>
              </div>
            </motion.a>

            <div className="bg-secondary p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-text">Objectifs de Stage</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-text/70">Développer mes compétences en programmation, en réseau et sécurité</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-text/70">Participer à des projets innovants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-text/70">Acquérir de l'expérience en environnement professionnel</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;