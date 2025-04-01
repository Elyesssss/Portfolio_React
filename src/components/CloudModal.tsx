import React, { useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

interface CloudModalProps {
  title: string;
  color: string;
  onClose: () => void;
  content: {
    title: string;
    description: string;
    definition: string;
    importance: string;
    aptitudes: string[];
    apprentissages: {
      techniques: string[];
      outils: string[];
      methodologies: string[];
    };
    projets: {
      title: string;
      description: string;
      competences: string[];
      technologies: string[];
      images?: string[];
      image?: string;
      repository?: string;
    }[];
    reflexion: string;
    evaluation: {
      niveau: number;
      progression: {
        semestre: string;
        description: string;
      }[];
      axes: string[];
    };
  };
}

const CloudModal: React.FC<CloudModalProps> = ({ title, color, onClose, content }) => {
  const { scrollYProgress } = useScroll();
  
  // Transformations pour les nuages
  const cloud1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    content.projets.forEach(projet => {
      if (projet.images) {
        console.log('Projet:', projet.title);
        console.log('Nombre d\'images:', projet.images.length);
        console.log('Images:', projet.images);
        console.log('Utilisation du carousel:', projet.images.length > 1);
        console.log('Type de projet.images:', typeof projet.images);
        console.log('Est-ce un tableau?', Array.isArray(projet.images));
      }
    });
  }, [content.projets]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 overflow-hidden"
    >
      {/* Nuages flottants en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-white/20 backdrop-blur-2xl"
          initial={{ x: -400, y: -400 }}
          style={{ y: cloud1Y }}
          animate={{ 
            x: [0, 200, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-white/20 backdrop-blur-2xl"
          initial={{ x: 400, y: 400 }}
          style={{ y: cloud2Y }}
          animate={{ 
            x: [0, -200, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-white/20 backdrop-blur-2xl"
          initial={{ x: 0, y: 0 }}
          style={{ y: cloud3Y }}
          animate={{ 
            x: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="relative w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white/5 backdrop-blur-xl p-8 sm:p-12"
      >
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-light text-white/90 mb-4">Définition</h3>
            <p className="text-lg text-white/70 leading-relaxed">{content.definition}</p>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-4">Importance</h3>
            <p className="text-lg text-white/70 leading-relaxed">{content.importance}</p>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-6">Aptitudes développées</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.aptitudes.map((aptitude, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm"
                >
                  <p className="text-white/80">{aptitude}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-6">Apprentissages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-light text-white/90 mb-4">Techniques</h4>
                <ul className="space-y-3">
                  {content.apprentissages.techniques.map((tech, index) => (
                    <li key={index} className="text-white/70">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-light text-white/90 mb-4">Outils</h4>
                <ul className="space-y-3">
                  {content.apprentissages.outils.map((outil, index) => (
                    <li key={index} className="text-white/70">{outil}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-light text-white/90 mb-4">Méthodologies</h4>
                <ul className="space-y-3">
                  {content.apprentissages.methodologies.map((methode, index) => (
                    <li key={index} className="text-white/70">{methode}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-6">Projets</h3>
            <div className="space-y-6">
              {content.projets.map((projet, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-xl font-light text-white/90 mb-4">{projet.title}</h4>
                  <p className="text-white/70 mb-6 leading-relaxed">{projet.description}</p>
                  
                  {(projet.images || projet.image) && (
                    <div className="mb-6 space-y-4">
                      {projet.images ? (
                        projet.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${projet.title} - Image ${index + 1}`}
                            className="w-full rounded-lg shadow-sm"
                          />
                        ))
                      ) : projet.image ? (
                        <img
                          src={projet.image}
                          alt={projet.title}
                          className="w-full rounded-lg shadow-sm"
                        />
                      ) : null}
                    </div>
                  )}
                  
                  {projet.technologies && projet.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      {projet.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {projet.repository && (
                    <a
                      href={projet.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    >
                      <span>Voir le projet</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-4">Réflexion personnelle</h3>
            <p className="text-lg text-white/70 leading-relaxed">{content.reflexion}</p>
          </section>

          <section>
            <h3 className="text-2xl font-light text-white/90 mb-6">Évaluation de la maîtrise</h3>
            <div className="space-y-8">
              <div className="relative pt-8">
                <div className="absolute top-0 left-0 text-4xl font-light text-white/90">
                  {content.evaluation.niveau}%
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${content.evaluation.niveau}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-xl font-light text-white/90 mb-4">Progression</h4>
                  <div className="space-y-4">
                    {content.evaluation.progression.map((prog, index) => (
                      <div key={index} className="space-y-1">
                        <div className="text-white/90 font-light">{prog.semestre}</div>
                        <div className="text-white/70">{prog.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-xl font-light text-white/90 mb-4">Axes d'amélioration</h4>
                  <ul className="space-y-3">
                    {content.evaluation.axes.map((axe, index) => (
                      <li key={index} className="text-white/70">{axe}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CloudModal;