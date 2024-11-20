import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-16 text-center">Contact</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="text-gray-600">📧</span>
                  <a href="mailto:elyes.h77@gmail.com" className="text-blue-600 hover:underline">
                    elyes.h77@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-gray-600">📱</span>
                  <span>07 68 88 52 53</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-gray-600">📍</span>
                  <span>Seine-et-Marne</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-gray-600">💼</span>
                  <a href="www.linkedin.com/in/elyes-hamani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn @Elyes Hamani
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Autonomie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Travail en équipe</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Résolution de problèmes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;