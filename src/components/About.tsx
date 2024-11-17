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
    <section id="à-propos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-4xl font-light mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À Propos
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image-container bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Code size={40} className="text-blue-600" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Terminal size={40} className="text-blue-600" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Database size={40} className="text-blue-600" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Network size={40} className="text-blue-600" />
                </motion.div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Étudiant en BUT Informatique parcours réalisation d'applications, je suis à la recherche 
                d'un stage de 2 mois à partir d'avril. Passionné par la cybersécurité, le réseaux et le développement web et logiciel, 
                je combine créativité et compétences techniques pour créer des solutions innovantes.
              </p>
              <div className="space-y-2">
                <p className="text-gray-800"><strong>Email:</strong> elyes.h77@gmail.com</p>
                <p className="text-gray-800"><strong>Localisation:</strong> Collégien (77090)</p>
                <p className="text-gray-800"><strong>Disponibilité:</strong> Stage de 2 mois à partir d'avril</p>
                <p className="text-gray-800"><strong>Permis:</strong> Permis B</p>
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
              href="https://cvdesignr.com/p/66f17ba3d1020"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center space-y-4">
                <motion.div
                  className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Terminal size={32} className="text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">Mon CV</h3>
                <p className="text-gray-600">Cliquez pour consulter mon CV complet</p>
              </div>
            </motion.a>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Objectifs de Stage</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Développer mes compétences en programmation, en réseau et sécurité</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Participer à des projets innovants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Acquérir de l'expérience en environnement professionnel</span>
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