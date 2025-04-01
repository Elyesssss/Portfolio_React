import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl sm:text-7xl font-light mb-8 tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500">
              Contact
            </span>
          </h2>
        </AnimatedSection>
        <div className="bg-secondary p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Première colonne */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text">
                Informations de contact
              </h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="text-text/70">📧</span>
                  <a
                    href="mailto:elyes.h77@gmail.com"
                    className="text-primary hover:underline"
                  >
                    elyes.h77@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-text/70">📍</span>
                  <span className="text-text/70">Seine-et-Marne</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-text/70">💼</span>
                  <a
                    href="https://www.linkedin.com/in/elyes-hamani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn @Elyes Hamani
                  </a>
                </p>
              </div>
            </div>

            {/* Deuxième colonne */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-text/70">Autonomie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-text/70">Travail en équipe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-text/70">Résolution de problèmes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
