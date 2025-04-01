import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Settings, Database, BarChart, Users, Brain, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CloudModal from './CloudModal';
import { useNavigate } from 'react-router-dom';
import { competenceCards } from '../data/competenceCards';
import { competences } from '../data/competences';

interface CompetenceContent {
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
}

const normalizeCompetenceName = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z]/g, ""); // Remove special characters
};

const Blocs = () => {
  const navigate = useNavigate();
  const [selectedCompetence, setSelectedCompetence] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCompetenceClick = (competenceName: string) => {
    const normalizedName = normalizeCompetenceName(competenceName);
    navigate(`/competence/${normalizedName}`);
  };

  return (
    <div id="blocs" className="max-w-7xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl sm:text-7xl font-light mb-8 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
            Blocs de Compétences
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
          Un ensemble de compétences techniques et humaines acquises au fil des projets
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {competenceCards.map((comp, index) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1
            }}
            onClick={() => handleCompetenceClick(comp.name)}
            className="group cursor-pointer"
          >
            <div className="relative">
              {/* Fond avec effet de glassmorphisme */}
              <div className="absolute inset-0 bg-white/80 dark:bg-white/5 backdrop-blur-lg rounded-3xl transform transition-transform duration-500 group-hover:scale-95" />
              
              {/* Bordure lumineuse */}
              <div className={`absolute inset-0 rounded-3xl ${comp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Contenu */}
              <div className="relative p-8 rounded-3xl h-[280px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-white/50 transition-all duration-500">
                    {comp.name}
                  </h3>
                  <comp.icon className="w-6 h-6 text-gray-600 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs tracking-wide font-medium bg-gray-100 dark:bg-white/10 rounded-full text-gray-600 dark:text-white/70">
                      {comp.niveau}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white/80 transition-colors duration-500 line-clamp-3">
                    {comp.description}
                  </p>
                  <div className="pt-4 mt-auto border-t border-gray-200 dark:border-white/10">
                    <p className="text-xs text-gray-500 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/60 transition-colors duration-500 line-clamp-2">
                      {comp.details}
                    </p>
                  </div>
                </div>

                {/* Flèche qui apparaît au hover */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blocs;