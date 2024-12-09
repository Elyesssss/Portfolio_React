import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Database, BarChart, Users, Brain } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Portfolio = () => {
  const competences = [
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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-light mb-6 text-center">Portfolio BUT Informatique</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Auto-évaluation des compétences en 2ème année du BUT Informatique, 
            parcours Réalisation d'applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((comp, index) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`${comp.color} p-4 rounded-t-lg text-white flex items-center justify-between`}>
                <h3 className="text-xl font-semibold">{comp.name}</h3>
                <comp.icon className="w-6 h-6" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {comp.niveau}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{comp.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-700">{comp.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-light mb-6">Démarche Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Objectifs</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Valorisation des compétences développées durant la formation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Démarche de professionnalisation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Individualisation du parcours</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Caractéristiques</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Démarche réflexive et critique</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Documentation et argumentation du développement des compétences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Preuves concrètes des apprentissages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;