import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Settings, Database, BarChart, Users, Brain, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CloudModal from './CloudModal';

interface CompetenceContent {
  title: string;
  description: string;
  sae?: {
    title: string;
    description: string;
    skills: string[];
  };
  project?: {
    title: string;
    period: string;
    description: string;
    technologies: string[];
    images?: string[];
    image?: string;
  };
}

const Blocs = () => {
  const [selectedCompetence, setSelectedCompetence] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const competences: Record<string, CompetenceContent> = {
    "Réaliser": {
      title: "Réaliser",
      description: "Développer des applications informatiques simples",
      sae: {
        title: "Niveau 2",
        description: "Partir des exigences et aller jusqu'à une application complète",
        skills: [
          "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
          "Appliquer des principes d'accessibilité et d'ergonomie",
          "Adopter de bonnes pratiques de conception et de programmation",
          "Vérifier et valider la qualité de l'application par les tests"
        ]
      },
      project: {
        title: "Portail Bancaire",
        period: "Septembre 2024 - Janvier 2025",
        description: "Création d'un portail bancaire programmé en HTML/CSS/PHP/SQL. L'application met en œuvre une interface utilisateur ergonomique, des fonctionnalités de sécurité robustes, et une architecture modulaire suivant les bonnes pratiques de développement. L'application répond aux exigences fonctionnelles spécifiques du secteur bancaire tout en respectant les normes d'accessibilité.",
        technologies: ["HTML", "CSS", "PHP", "SQL"],
        image: "/images/portail-bancaire.png"
      }
    },
    "Optimiser": {
      title: "Optimiser",
      description: "Appréhender et construire des algorithmes",
      sae: {
        title: "Niveau 2",
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        skills: [
          "Choisir des structures de données complexes adaptées au problème",
          "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
          "Comprendre les enjeux et moyens de sécurisation des données et du code",
          "Évaluer l'impact environnemental et sociétal des solutions proposées"
        ]
      },
      project: {
        title: "Scanner de vulnérabilité SQL",
        period: "Février 2025",
        description: "Développement d'un scanner de vulnérabilités SQL open source en Go. L'outil permet de détecter automatiquement les vulnérabilités d'injection SQL dans les applications web. Il utilise des patterns de détection basés sur les erreurs SQL, des tests de temps de réponse et l'analyse des changements dans la structure de la page. Une analyse récursive des pages et une gestion efficace des scans concurrents permettent une couverture complète du site. Des mécanismes de rate limiting permettent d'éviter les impacts sur les systèmes cibles lors des tests de pénétration.",
        technologies: ["Go"],
        image: "/images/scanner-sql.jpg"
      }
    },
    "Administrer": {
      title: "Administrer",
      description: "Installation et configuration",
      sae: {
        title: "Niveau 2",
        description: "Déployer des services dans une architecture réseau",
        skills: [
          "Concevoir et développer des applications communicantes",
          "Utiliser des serveurs et des services réseaux virtualisés",
          "Sécuriser les services et données d'un système"
        ]
      },
      project: {
        title: "Serveur Web",
        period: "Février 2024 - Mars 2024",
        description: "Configuration et administration d'un serveur web Apache. Mise en place d'une infrastructure web complète avec gestion des certificats SSL, configuration des virtual hosts, mise en place de règles de pare-feu, et optimisation des performances. L'administration inclut également la gestion des utilisateurs, la configuration des logs, et la mise en place de sauvegardes automatisées.",
        technologies: ["Apache", "Linux", "PHP"],
        image: "/images/serveur-web.png"
      }
    },
    "Gérer": {
      title: "Gérer",
      description: "Concevoir et gérer des bases de données",
      sae: {
        title: "Niveau 2",
        description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        skills: [
          "Optimiser les modèles de données de l'entreprise",
          "Assurer la sécurité des données (intégrité et confidentialité)",
          "Organiser la restitution de données à travers la programmation et la visualisation",
          "Manipuler des données hétérogènes"
        ]
      },
      project: {
        title: "Système de Réservation de Billets de Train",
        period: "Janvier 2025 - Mars 2025",
        description: "Développement d'un système de réservation de billets de train avec MongoDB. Conception d'une base de données optimisée pour les trajets, réservations et utilisateurs. L'application inclut un système de panier dynamique, une gestion des sessions et un processus de paiement sécurisé avec timeout.",
        technologies: ["JavaScript", "MongoDB", "Node.js", "Express"],
        images: [
          "/images/train1.png",
          "/images/train2.png",
          "/images/train3.png",
          "/images/train4.png"
        ]
      }
    },
    "Conduire": {
      title: "Conduire",
      description: "Satisfaire les besoins des utilisateurs",
      sae: {
        title: "Niveau 2",
        description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        skills: [
          "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
          "Formaliser les besoins du client et de l'utilisateur",
          "Identifier les critères de faisabilité d'un projet informatique",
          "Définir et mettre en œuvre une démarche de suivi de projet"
        ]
      },
      project: {
        title: "Jeu Zelda",
        period: "Février 2024 - Juin 2024",
        description: "Développement d'un jeu sur le thème de Zelda en JavaFX. Analyse approfondie des processus de jeu et des besoins utilisateurs. L'identification des processus a permis d'améliorer l'expérience de jeu, tandis que la formalisation des besoins via des user stories a guidé le développement. Les critères de faisabilité ont été évalués en termes de performance et de complexité technique. La méthode Scrum a été mise en œuvre avec des sprints de deux semaines, des revues régulières et une adaptation continue aux retours utilisateurs.",
        technologies: ["Java", "JavaFX"],
        image: "/images/zelda.png"
      }
    },
    "Collaborer": {
      title: "Collaborer",
      description: "Travailler dans une équipe informatique",
      sae: {
        title: "Niveau 2",
        description: "Situer son rôle et ses missions au sein d'une équipe informatique",
        skills: [
          "Comprendre la diversité, la situation et la dimension de l'informatique dans une organisation (ESN, DSI...)",
          "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
          "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
          "Rendre compte de son activité professionnelle"
        ]
      },
      project: {
        title: "Travia Tour",
        period: "Septembre 2024 - Janvier 2025",
        description: "Développement d'un système de recherche de parcours dans une base de données de plus de 150 000 planètes de l'univers Star Wars. L'application permet de trouver les meilleurs itinéraires intergalactiques avec une interface utilisateur intuitive. Le projet met en œuvre des algorithmes de recherche efficaces pour gérer cette masse de données, tout en assurant une expérience utilisateur fluide. Le développement s'est fait en équipe avec une répartition claire des rôles, l'utilisation de Git pour la gestion collaborative du code, et l'organisation de réunions régulières pour la coordination. L'intégration continue et le code review systématique assurent la cohérence du développement.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java", "C"],
        images: [
          "/images/traviaRecherche1.png",
          "/images/traviaRecherche2.png",
          "/images/traviaRecherche3.png"
        ]
      }
    }
  };

  const competenceCards = [
    {
      name: "Réaliser",
      color: "bg-red-600",
      icon: Code2,
      description: "Développer des applications informatiques simples",
      niveau: "Niveau 2",
      details: "Partir des exigences et aller jusqu'à une application complète"
    },
    {
      name: "Optimiser",
      color: "bg-orange-500",
      icon: Settings,
      description: "Appréhender et construire des algorithmes",
      niveau: "Niveau 2",
      details: "Sélectionner les algorithmes adéquats pour répondre à un problème donné"
    },
    {
      name: "Administrer",
      color: "bg-yellow-500",
      icon: Database,
      description: "Installation et configuration",
      niveau: "Niveau 2",
      details: "Déployer des services dans une architecture réseau"
    },
    {
      name: "Gérer",
      color: "bg-green-500",
      icon: BarChart,
      description: "Concevoir et gérer des bases de données",
      niveau: "Niveau 2",
      details: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité"
    },
    {
      name: "Conduire",
      color: "bg-blue-700",
      icon: Brain,
      description: "Satisfaire les besoins des utilisateurs",
      niveau: "Niveau 2",
      details: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs"
    },
    {
      name: "Collaborer",
      color: "bg-black",
      icon: Users,
      description: "Travailler dans une équipe informatique",
      niveau: "Niveau 2",
      details: "Situer son rôle et ses missions au sein d'une équipe informatique"
    }
  ];

  return (
    <section id="portfolio" className="py-10 sm:py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-light mb-4 sm:mb-6 text-center">Compétences par blocs</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {competenceCards.map((comp, index) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCompetence(comp.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`${comp.color} p-3 sm:p-4 rounded-t-lg text-white flex items-center justify-between`}>
                <h3 className="text-lg sm:text-xl font-semibold">{comp.name}</h3>
                <comp.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 sm:mb-4">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white rounded-full text-xs sm:text-sm font-medium">
                    {comp.niveau}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">{comp.description}</p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-gray-900 dark:text-white">{comp.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud SVG Filter */}
        <svg className="hidden">
          <defs>
            <filter id="cloud-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -15"
              />
              <feComposite in="SourceGraphic" operator="atop" />
            </filter>
          </defs>
        </svg>

        {/* Image Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedImage && selectedCompetence && competences[selectedCompetence]?.project && (
            <motion.div 
              className="fixed inset-0 z-[100] flex flex-col items-center justify-start bg-black bg-opacity-90 p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedImage(null);
                }
              }}
            >
              <motion.div 
                className="w-full max-w-6xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={() => setSelectedImage(null)}
                    className="text-white hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={32} />
                  </motion.button>
                </div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  exit={{ y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.img
                    src={selectedImage}
                    alt="Image en grand format"
                    className="w-full h-auto object-contain"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <div className="p-6">
                    <motion.h5 
                      className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                    >
                      {competences[selectedCompetence].project.title}
                    </motion.h5>
                    <motion.p 
                      className="text-sm text-gray-600 dark:text-gray-300 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2 }}
                    >
                      {competences[selectedCompetence].project.period}
                    </motion.p>
                    <motion.p 
                      className="text-gray-900 dark:text-white mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.3 }}
                    >
                      {competences[selectedCompetence].project.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.4 }}
                    >
                      {competences[selectedCompetence].project.technologies.map((tech: string, index: number) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cloud Modal */}
        {selectedCompetence && competences[selectedCompetence] && (
          <CloudModal
            isOpen={!!selectedCompetence}
            onClose={() => setSelectedCompetence(null)}
            title={competences[selectedCompetence].title}
            color={competenceCards.find(c => c.name === selectedCompetence)?.color || 'bg-gray-800'}
          >
            {competences[selectedCompetence].sae ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {competences[selectedCompetence].sae.title}
                  </h4>
                  <p className="text-gray-900 dark:text-white">
                    {competences[selectedCompetence].sae.description}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Compétences développées</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {competences[selectedCompetence].sae.skills.map((skill, index) => (
                      <li key={index} className="text-gray-900 dark:text-white">{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {competences[selectedCompetence].project && (
                  <div className="mt-8 border-t pt-6">
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Projet associé</h4>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                      <div className="relative">
                        {competences[selectedCompetence].project.images ? (
                          <CarouselImages 
                            images={competences[selectedCompetence].project.images} 
                            title={competences[selectedCompetence].project.title}
                            period={competences[selectedCompetence].project.period}
                            description={competences[selectedCompetence].project.description}
                            technologies={competences[selectedCompetence].project.technologies}
                          />
                        ) : (
                          <div 
                            className="relative cursor-pointer group"
                            onClick={() => competences[selectedCompetence].project?.image && setSelectedImage(competences[selectedCompetence].project.image)}
                          >
                            <img 
                              src={competences[selectedCompetence].project?.image} 
                              alt={competences[selectedCompetence].project?.title}
                              className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-700 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Cliquez pour agrandir
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                          {competences[selectedCompetence].project?.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {competences[selectedCompetence].project?.period}
                        </p>
                        <p className="text-gray-900 dark:text-white mb-4">
                          {competences[selectedCompetence].project?.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {competences[selectedCompetence].project?.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-900 dark:text-white">Contenu à venir...</p>
            )}
          </CloudModal>
        )}
      </div>
    </section>
  );
};

const CarouselImages = ({ images, title, period, description, technologies }: { 
  images: string[];
  title: string;
  period: string;
  description: string;
  technologies: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-48 sm:h-64 bg-gray-100 dark:bg-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full cursor-pointer group"
            onClick={() => setSelectedImage(images[currentIndex])}
          >
            <motion.img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cliquez pour agrandir
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal pour l'image agrandie */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-start bg-black bg-opacity-90 p-2 sm:p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="w-full max-w-6xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-end mb-2 sm:mb-4">
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="text-white hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} className="sm:hidden" />
                  <X size={32} className="hidden sm:block" />
                </motion.button>
              </div>
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={images[currentIndex]}
                      alt="Image en grand format"
                      className="w-full h-auto object-contain"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Image précédente"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Image suivante"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-4 sm:p-6">
                  <motion.h5 
                    className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                  >
                    {title}
                  </motion.h5>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                  >
                    {period}
                  </motion.p>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                  >
                    {description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-1.5 sm:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.4 }}
                  >
                    {technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white rounded-full text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blocs;