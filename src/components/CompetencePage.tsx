import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { competences } from '../data/competences';
import { ArrowLeft } from 'lucide-react';

const normalizeCompetenceName = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z]/g, ""); // Remove special characters
};

const CompetencePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const normalizedName = name ? normalizeCompetenceName(name) : '';
  const competence = competences[normalizedName];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    // Attendre que la navigation soit terminée avant de faire défiler
    setTimeout(() => {
      const blocsSection = document.getElementById('blocs');
      if (blocsSection) {
        const offset = 80;
        const elementPosition = blocsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  if (!competence) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-text">Compétence non trouvée</h2>
          <button
            onClick={handleBackClick}
            className="text-primary hover:underline"
          >
            Retourner aux compétences
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fond avec effet de glassmorphisme */}
      <div className="fixed inset-0 bg-white/80 dark:bg-white/5 backdrop-blur-lg" />
      
      {/* Contenu principal */}
      <div className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Bouton retour */}
            <motion.button
              onClick={handleBackClick}
              className="flex items-center text-text/70 hover:text-primary transition-colors mb-8"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux compétences
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl sm:text-6xl font-light mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  {competence.title}
                </span>
              </h1>
              <p className="text-xl text-text/70">{competence.description}</p>
            </motion.div>

            {/* Contenu principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Colonne de gauche */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Définition et importance */}
                <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 shadow-sm backdrop-blur-sm">
                  <h2 className="text-2xl font-light mb-6">Définition & Importance</h2>
                  <div className="space-y-4">
                    <p className="text-text/80">{competence.definition}</p>
                    <p className="text-text/80">{competence.importance}</p>
                  </div>
                </div>

                {/* Projets */}
                <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 shadow-sm backdrop-blur-sm">
                  <h2 className="text-2xl font-light mb-6">Projets</h2>
                  <div className="space-y-8">
                    {competence.projets.map((projet, index) => (
                      <motion.div
                        key={projet.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-text/10 last:border-0 pb-8 last:pb-0"
                      >
                        <h3 className="text-xl font-medium mb-4">{projet.title}</h3>
                        <p className="text-text/70 mb-4">{projet.description}</p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {projet.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-sm text-text/70 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Images du projet */}
                        {(projet.images || [projet.image]).filter(Boolean).map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${projet.title} screenshot ${imgIndex + 1}`}
                            className="rounded-lg shadow-sm w-full object-cover mb-4 last:mb-0"
                          />
                        ))}

                        {/* Lien vers le repository */}
                        {projet.repository && (
                          <a
                            href={projet.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center space-x-2"
                          >
                            <span>Voir le code source</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 3h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Colonne de droite */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Aptitudes */}
                <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 shadow-sm backdrop-blur-sm">
                  <h2 className="text-2xl font-light mb-6">Aptitudes</h2>
                  <ul className="space-y-3">
                    {competence.aptitudes.map((aptitude, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text/70">{aptitude}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Apprentissages */}
                <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 shadow-sm backdrop-blur-sm">
                  <h2 className="text-2xl font-light mb-6">Apprentissages</h2>
                  
                  {/* Techniques */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {competence.apprentissages.techniques.map((technique, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-sm text-text/70 backdrop-blur-sm"
                        >
                          {technique}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Outils */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Outils</h3>
                    <div className="flex flex-wrap gap-2">
                      {competence.apprentissages.outils.map((outil, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-sm text-text/70 backdrop-blur-sm"
                        >
                          {outil}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Méthodologies */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Méthodologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {competence.apprentissages.methodologies.map((methodologie, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-sm text-text/70 backdrop-blur-sm"
                        >
                          {methodologie}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompetencePage; 