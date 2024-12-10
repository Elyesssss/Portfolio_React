import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Database, BarChart, Users, Brain } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CloudModal from './CloudModal';

interface CompetenceContent {
  title: string;
  description: string;
  sae?: {
    title: string;
    description: string;
    objectives: string[];
    skills: string[];
  };
}

const Portfolio = () => {
  const [selectedCompetence, setSelectedCompetence] = useState<string | null>(null);

  const competences: Record<string, CompetenceContent> = {
    "Réaliser": {
      title: "Réaliser",
      description: "Développer des applications informatiques simples",
      sae: {
        title: "SAÉ 3.01",
        description: "Développement d'une application complète en équipe",
        objectives: [
          "Développer une application avec une architecture complexe",
          "Mettre en œuvre une méthode de gestion de projet",
          "Utiliser des outils de gestion de projet",
          "Déployer l'application"
        ],
        skills: [
          "Programmation avancée",
          "Architecture logicielle",
          "Tests et qualité logicielle",
          "Gestion de versions",
          "Documentation technique"
        ]
      }
    },
    "Optimiser": {
      title: "Optimiser",
      description: "Appréhender et construire des algorithmes",
      sae: {
        title: "SAÉ 3.02",
        description: "Optimisation d'une application et de son architecture",
        objectives: [
          "Analyser les performances d'une application",
          "Optimiser les algorithmes existants",
          "Améliorer l'architecture logicielle",
          "Mettre en place des métriques de performance"
        ],
        skills: [
          "Analyse de complexité",
          "Profiling d'applications",
          "Optimisation de code",
          "Patterns de conception",
          "Refactoring"
        ]
      }
    },
    "Administrer": {
      title: "Administrer",
      description: "Installation et configuration de services",
      sae: {
        title: "SAÉ 3.03",
        description: "Administration et sécurisation d'un parc informatique",
        objectives: [
          "Déployer une infrastructure réseau",
          "Configurer des services réseau",
          "Sécuriser l'infrastructure",
          "Monitorer les services"
        ],
        skills: [
          "Administration système",
          "Configuration réseau",
          "Sécurité informatique",
          "Virtualisation",
          "Monitoring"
        ]
      }
    },
    "Gérer": {
      title: "Gérer",
      description: "Concevoir et gérer des bases de données",
      sae: {
        title: "SAÉ 3.04",
        description: "Conception et exploitation d'une base de données",
        objectives: [
          "Concevoir un modèle de données",
          "Optimiser les requêtes",
          "Gérer les accès concurrents",
          "Assurer la sécurité des données"
        ],
        skills: [
          "Modélisation de données",
          "Administration de BDD",
          "SQL avancé",
          "Sécurité des données",
          "Performance"
        ]
      }
    },
    "Conduire": {
      title: "Conduire",
      description: "Satisfaire les besoins des utilisateurs",
      sae: {
        title: "SAÉ 3.05",
        description: "Gestion d'un projet de développement",
        objectives: [
          "Analyser les besoins client",
          "Planifier le développement",
          "Suivre l'avancement du projet",
          "Gérer la relation client"
        ],
        skills: [
          "Gestion de projet",
          "Analyse des besoins",
          "Méthodologies agiles",
          "Communication client",
          "Reporting"
        ]
      }
    },
    "Collaborer": {
      title: "Collaborer",
      description: "Travailler dans une équipe informatique",
      sae: {
        title: "SAÉ 3.06",
        description: "Travail en équipe sur un projet complexe",
        objectives: [
          "Travailler en équipe",
          "Partager ses connaissances",
          "Utiliser des outils collaboratifs",
          "Participer à la vie de l'équipe"
        ],
        skills: [
          "Travail en équipe",
          "Outils collaboratifs",
          "Versionning",
          "Communication technique",
          "Code review"
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
      color: "bg-gray-800",
      icon: Users,
      description: "Travailler dans une équipe informatique",
      niveau: "Niveau 2",
      details: "Situer son rôle et ses missions au sein d'une équipe informatique"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background text-text">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-6 text-center">Compétences par blocs</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competenceCards.map((comp, index) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-secondary rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-text dark:text-secondary`}
              onClick={() => setSelectedCompetence(comp.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`${comp.color} p-4 rounded-t-lg text-secondary dark:text-text flex items-center justify-between`}>
                <h3 className="text-xl font-semibold">{comp.name}</h3>
                <comp.icon className="w-6 h-6" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary dark:bg-primary/40 dark:text-primary rounded-full text-sm font-medium">
                    {comp.niveau}
                  </span>
                </div>
                <p className="text-text/70 dark:text-secondary/70 mb-4">{comp.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-text/80 dark:text-secondary/80">{comp.details}</p>
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

        {/* Cloud Modal */}
        {selectedCompetence && competences[selectedCompetence] && (
  <CloudModal
    isOpen={!!selectedCompetence}
    onClose={() => setSelectedCompetence(null)}
    title={competences[selectedCompetence].title}
    color={competenceCards.find(c => c.name === selectedCompetence)?.color || 'bg-gray-800'}
  >
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div>
      <h4 className="text-xl font-semibold mb-2 text-text dark:text-secondary">
          {competences[selectedCompetence].sae.title}
        </h4>
        <p className="text-text/70 dark:text-secondary/70">
          {competences[selectedCompetence].sae.description}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
           <h5 className="font-semibold mb-2 text-text dark:text-secondary">Objectifs</h5>
                <ul className="list-disc list-inside space-y-1">
                  {competences[selectedCompetence].sae.objectives.map((objective, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-text/70 dark:text-secondary/70"
                    >
              {objective}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h5 className="font-semibold mb-2 text-text dark:text-secondary">Compétences développées</h5>
                <ul className="list-disc list-inside space-y-1">
                  {competences[selectedCompetence].sae.skills.map((skill, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-text/70 dark:text-secondary/70"
                    >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </CloudModal>
)}
      
      </div>
    </section>
  );
};

export default Portfolio;