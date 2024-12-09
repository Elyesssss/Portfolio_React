import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'À Propos', id: 'à-propos' },
    { name: 'Compétences', id: 'compétences' },
    { name: 'Parcours', id: 'parcours' },
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'portfolio' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed w-full z-50 px-4 sm:px-8 py-4 sm:py-6 transition-colors duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="/"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            Elyes.
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                className={`nav-link relative ${activeSection === item.id ? 'text-blue-600' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={`border border-gray-900 px-6 py-2 rounded-full transition-colors ${
                activeSection === 'contact' 
                  ? 'bg-gray-900 text-white' 
                  : 'hover:bg-gray-900 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col p-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.id}`}
                    className={`py-2 px-4 hover:bg-gray-50 rounded transition-colors ${
                      activeSection === item.id ? 'text-blue-600' : ''
                    }`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className={`py-2 px-4 mt-2 rounded-full text-center transition-colors ${
                    activeSection === 'contact'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;