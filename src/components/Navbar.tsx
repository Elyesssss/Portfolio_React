import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id], div[id]');
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
    { name: 'À Propos', id: 'à-propos', path: '/#à-propos' },
    { name: 'Compétences', id: 'compétences', path: '/#compétences' },
    { name: 'Parcours', id: 'parcours', path: '/#parcours' },
    { name: 'Projets', id: 'projets', path: '/#projets' },
    { name: 'Blocs', id: 'blocs', path: '/#blocs' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      if (location.pathname.startsWith('/competence/')) {
        navigate('/');
        setTimeout(() => {
          const sectionId = path.substring(2);
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
        }, 100);
      } else {
        const sectionId = path.substring(2);
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
      }
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed w-full z-50 px-4 sm:px-8 py-4 sm:py-6 transition-colors duration-300 ${
          scrolled 
            ? 'bg-secondary/80 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="/"
            className="text-2xl font-bold text-text dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavClick(e, '/')}
          >
            Elyes.
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.path}
                className={`nav-link relative ${
                  location.pathname === item.path || activeSection === item.id
                    ? 'text-primary dark:text-white' 
                    : 'text-text/70 dark:text-white/70'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.name}
                {(location.pathname === item.path || activeSection === item.id) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-text/10 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-text/70 dark:text-white/70" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="#contact"
              className={`border border-text dark:border-white px-6 py-2 rounded-full transition-colors ${
                activeSection === 'contact' 
                  ? 'bg-text text-background dark:bg-white dark:text-gray-900' 
                  : 'hover:bg-text hover:text-background dark:hover:bg-white dark:hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={(e) => handleNavClick(e, '/#contact')}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-text/10 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-text/70 dark:text-white/70" />
              )}
            </motion.button>

            <button
              className="text-text dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-secondary shadow-lg md:hidden dark:bg-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col p-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`py-2 px-4 hover:bg-text/10 dark:hover:bg-white/10 rounded transition-colors ${
                      location.pathname === item.path || activeSection === item.id
                        ? 'text-primary dark:text-white' 
                        : 'text-text/70 dark:text-white/70'
                    }`}
                    onClick={(e) => handleNavClick(e, item.path)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className={`py-2 px-4 mt-2 rounded-full text-center transition-colors ${
                    activeSection === 'contact'
                      ? 'bg-text text-background dark:bg-white dark:text-gray-900' 
                      : 'hover:bg-text hover:text-background dark:hover:bg-white dark:hover:text-gray-900'
                  }`}
                  onClick={(e) => handleNavClick(e, '/#contact')}
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