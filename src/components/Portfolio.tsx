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
        title: "Niveau 2",
        description: "Partir des exigences et aller jusqu'à une application complète",
        objectives: [
          "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
          "Appliquer des principes d'accessibilité et d'ergonomie",
          "Adopter de bonnes pratiques de conception et de programmation",
          "Vérifier et valider la qualité de l'application par les tests"
        ],
        skills: [
          "AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
          "AC21.02 | Appliquer des principes d'accessibilité et d'ergonomie",
          "AC21.03 | Adopter de bonnes pratiques de conception et de programmation",
          "AC21.04 | Vérifier et valider la qualité de l'application par les tests"
        ]
      }
    },
    "Optimiser": {
      title: "Optimiser",
      description: "Appréhender et construire des algorithmes",
      sae: {
        title: "Niveau 2",
        description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
        objectives: [
          "Choisir des structures de données complexes adaptées au problème",
          "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
          "Comprendre les enjeux et moyens de sécurisation des données et du code",
          "Évaluer l'impact environnemental et sociétal des solutions proposées"
        ],
        skills: [
          "AC22.01 | Choisir des structures de données complexes adaptées au problème",
          "AC22.02 | Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
          "AC22.03 | Comprendre les enjeux et moyens de sécurisation des données et du code",
          "AC22.04 | Évaluer l'impact environnemental et sociétal des solutions proposées"
        ]
      }
    },
    "Administrer": {
      title: "Administrer",
      description: "Installation et configuration",
      sae: {
        title: "Niveau 2",
        description: "Déployer des services dans une architecture réseau",
        objectives: [
          "Concevoir et développer des applications communicantes",
          "Utiliser des serveurs et des services réseaux virtualisés",
          "Sécuriser les services et données d'un système"
        ],
        skills: [
          "AC23.01 | Concevoir et développer des applications communicantes",
          "AC23.02 | Utiliser des serveurs et des services réseaux virtualisés",
          "AC23.03 | Sécuriser les services et données d'un système"
        ]
      }
    },
    "Gérer": {
      title: "Gérer",
      description: "Concevoir et gérer des bases de données",
      sae: {
        title: "Niveau 2",
        description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
        objectives: [
          "Optimiser les modèles de données de l'entreprise",
          "Assurer la sécurité des données (intégrité et confidentialité)",
          "Organiser la restitution de données à travers la programmation et la visualisation",
          "Manipuler des données hétérogènes"
        ],
        skills: [
          "AC24.01 | Optimiser les modèles de données de l'entreprise",
          "AC24.02 | Assurer la sécurité des données (intégrité et confidentialité)",
          "AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation",
          "AC24.04 | Manipuler des données hétérogènes"
        ]
      }
    },
    "Conduire": {
      title: "Conduire",
      description: "Satisfaire les besoins des utilisateurs",
      sae: {
        title: "Niveau 2",
        description: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
        objectives: [
          "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
          "Formaliser les besoins du client et de l'utilisateur",
          "Identifier les critères de faisabilité d'un projet informatique",
          "Définir et mettre en œuvre une démarche de suivi de projet"
        ],
        skills: [
          "AC25.01 | Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
          "AC25.02 | Formaliser les besoins du client et de l'utilisateur",
          "AC25.03 | Identifier les critères de faisabilité d'un projet informatique",
          "AC25.04 | Définir et mettre en œuvre une démarche de suivi de projet"
        ]
      }
    },
    "Collaborer": {
      title: "Collaborer",
      description: "Travailler dans une équipe informatique",
      sae: {
        title: "Niveau 2",
        description: "Situer son rôle et ses missions au sein d'une équipe informatique",
        objectives: [
          "Comprendre la diversité, la situation et la dimension de l'informatique dans une organisation (ESN, DSI...)",
          "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
          "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
          "Rendre compte de son activité professionnelle"
        ],
        skills: [
          "AC26.01 | Comprendre la diversité, la situation et la dimension de l'informatique dans une organisation (ESN, DSI...)",
          "AC26.02 | Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
          "AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
          "AC26.04 | Rendre compte de son activité professionnelle"
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
<section id="portfolio" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">      <div className="max-w-6xl mx-auto px-4">
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCompetence(comp.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`${comp.color} p-4 rounded-t-lg text-white dark:text-gray-800 flex items-center justify-between`}>
                <h3 className="text-xl font-semibold">{comp.name}</h3>
                <comp.icon className="w-6 h-6" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                    {comp.niveau}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-300 mb-4">{comp.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-700 dark:text-gray-400">{comp.details}</p>
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
            {competences[selectedCompetence].sae ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">{competences[selectedCompetence].sae.title}</h4>
                  <p className="text-gray-300 dark:text-gray-500">{competences[selectedCompetence].sae.description}</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-white dark:text-gray-800">Objectifs</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {competences[selectedCompetence].sae.objectives.map((objective, index) => (
                      <li key={index} className="text-gray-300 dark:text-gray-500">{objective}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-white dark:text-gray-800">Compétences développées</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {competences[selectedCompetence].sae.skills.map((skill, index) => (
                      <li key={index} className="text-gray-300 dark:text-gray-500">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-300 dark:text-gray-500">Contenu à venir...</p>
            )}
          </CloudModal>
        )}
      </div>
    </section>
  );
};

export default Portfolio;