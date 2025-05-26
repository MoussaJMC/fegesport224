import React from 'react';
import { Section } from '../components/common/Section';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe } from 'lucide-react';

function AboutPage() {
  const timelineEvents = [
    {
      year: '2009',
      title: 'Création',
      description: 'Fondation de la première communauté esport en Guinée'
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'Organisation des premiers tournois nationaux'
    },
    {
      year: '2017',
      title: 'Structuration',
      description: 'Création officielle de la FEGESPORT'
    },
    {
      year: '2020',
      title: 'Digitalisation',
      description: 'Adaptation aux compétitions en ligne pendant la pandémie'
    },
    {
      year: '2022',
      title: 'Reconnaissance',
      description: 'Première participation aux compétitions internationales'
    },
    {
      year: '2024',
      title: 'Officialisation',
      description: 'Reconnaissance officielle par le Ministère des Sports'
    },
    {
      year: 'Now',
      title: 'Innovation',
      description: 'Développement de centres d\'entraînement dans tout le pays'
    }
  ];

  return (
    <>
      {/* Key Points Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">À propos de FEGESPORT</h1>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-50 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
                  <p className="text-gray-600">
                    Développer et promouvoir l'esport en Guinée en créant un écosystème professionnel
                    et inclusif pour tous les passionnés de jeux vidéo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-50 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
                  <p className="text-gray-600">
                    Faire de la Guinée une référence de l'esport en Afrique et permettre à nos talents
                    de briller sur la scène internationale.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
                  <p className="text-gray-600">
                    Excellence, fair-play, innovation et inclusion sont au cœur de notre approche
                    pour développer l'esport guinéen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dark-50 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notre Impact</h3>
                  <p className="text-gray-600">
                    Formation de jeunes talents, création d'emplois dans le secteur du gaming et
                    rayonnement international de la Guinée.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/7862498/pexels-photo-7862498.jpeg"
              alt="L'équipe FEGESPORT"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">L'équipe FEGESPORT</p>
              <p className="text-xs opacity-75">Unis pour développer l'esport guinéen</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="light" title="Notre Histoire" subtitle="L'évolution de la FEGESPORT à travers les années">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>

          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center justify-between mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <h3 className="text-xl font-semibold text-accent mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-2/12">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="absolute -top-8 text-sm font-semibold">{event.year}</span>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="dark" className="text-center">
        <h2 className="text-white text-3xl font-bold mb-6">Rejoignez l'aventure FEGESPORT</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Ensemble, construisons l'avenir de l'esport en Guinée. Que vous soyez joueur, organisateur
          ou partenaire, il y a une place pour vous dans notre communauté.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="/register"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Devenir membre
          </motion.a>
          <motion.a
            href="/contact"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.a>
        </div>
      </Section>
    </>
  );
}

export default AboutPage;