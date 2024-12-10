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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-2xl w-full bg-gray-900 dark:bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${color} p-6 flex justify-between items-center`}>
              <h3 className="text-2xl font-semibold text-white dark:text-gray-900">{title}</h3>
              <button
                onClick={onClose}
                className="text-white dark:text-gray-900 hover:bg-white/20 dark:hover:bg-gray-900/20 rounded-full p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-300 dark:text-gray-700">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CloudModal;