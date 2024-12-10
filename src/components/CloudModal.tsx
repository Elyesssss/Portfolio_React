import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CloudModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  color: string;
  children: React.ReactNode;
}

const CloudModal: React.FC<CloudModalProps> = ({ isOpen, onClose, title, color, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Nuage principal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -10, 0],
              rotate: [-2, 2, -2],
            }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: 'spring',
              damping: 20,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="relative max-w-2xl w-full bg-white shadow-lg overflow-hidden"
            style={{
              filter: 'url(#cloud-filter)',
              WebkitFilter: 'url(#cloud-filter)',
              borderRadius: '60% 40% 50% 45% / 45% 50% 40% 60%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête coloré */}
            <motion.div
              className={`${color} p-6 flex justify-between items-center`}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>

            {/* Contenu avec animation */}
            <motion.div
              className="p-6 max-h-[70vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>

          {/* Petits nuages décoratifs */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.2 + index * 0.1, 0.4 + index * 0.1, 0.2 + index * 0.1],
                scale: [0.4, 0.6, 0.4],
                x: [10 * (index + 1), -10 * (index + 1), 10 * (index + 1)],
                y: [-5 * (index + 1), 5 * (index + 1), -5 * (index + 1)],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                filter: 'url(#cloud-filter)',
                WebkitFilter: 'url(#cloud-filter)',
                width: `${80 + index * 20}px`,
                height: `${50 + index * 10}px`,
                background: `rgba(255, 255, 255, ${0.3 - index * 0.1})`,
                borderRadius: '60% 40% 50% 45% / 45% 50% 40% 60%',
                top: `${20 + index * 10}%`,
                left: `${20 + index * 10}%`,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Filtres SVG pour l'effet nuage */}
      <svg className="hidden">
        <defs>
          <filter id="cloud-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 25 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </AnimatePresence>
  );
};

export default CloudModal;
