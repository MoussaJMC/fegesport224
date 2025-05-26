import React from 'react';
import { ChevronRight, Trophy, Gamepad2, Users, Newspaper } from 'lucide-react';
import { Hero } from '../components/common/Hero';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { FeaturedEvents } from '../components/home/FeaturedEvents';
import { FeaturedNews } from '../components/home/FeaturedNews';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Fédération de Esport de Guinée"
        subtitle="Développer et promouvoir l'esport en Guinée pour faire briller nos talents sur la scène internationale"
        image="https://images.pexels.com/photos/2883060/pexels-photo-2883060.jpeg"
        height="xl"
        cta={{
          text: "Rejoignez-nous",
          link: "/register"
        }}
      />
      
      {/* Intro Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Bienvenue à la FEGESPORT</h2>
            <p className="text-gray-700 mb-6">
              La Fédération de Esport de Guinée (FEGESPORT) est l'organisation officielle en charge du développement, 
              de la promotion et de la réglementation des sports électroniques en République de Guinée.
            </p>
            <p className="text-gray-700 mb-8">
              Notre mission est de structurer l'écosystème esport guinéen, de former les talents de demain et 
              de représenter dignement notre pays dans les compétitions internationales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/about" variant="primary" rightIcon={<ChevronRight size={16} />}>
                En savoir plus
              </Button>
              <Button href="/register" variant="outline">
                Devenir membre
              </Button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" 
              alt="Joueurs d'esport guinéens" 
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Key Features */}
      <Section background="light">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-12">Notre Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Trophy size={40} className="text-primary" />,
              title: "Compétitions",
              description: "Organisation de tournois nationaux et participation aux événements internationaux."
            },
            {
              icon: <Gamepad2 size={40} className="text-primary" />,
              title: "Développement",
              description: "Centres d'entraînement, formations et détection de talents dans tout le pays."
            },
            {
              icon: <Users size={40} className="text-primary" />,
              title: "Communauté",
              description: "Rassemblement de tous les acteurs de l'écosystème esport guinéen."
            },
            {
              icon: <Newspaper size={40} className="text-primary" />,
              title: "Reconnaissance",
              description: "Promotion de l'esport comme discipline légitime auprès des institutions."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Events Section */}
      <Section 
        title="Événements à venir" 
        subtitle="Participez aux prochaines compétitions organisées par la FEGESPORT"
      >
        <FeaturedEvents />
      </Section>
      
      {/* CTA Join */}
      <Section className="py-20 bg-gaming bg-opacity-95 text-white" background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Rejoignez la communauté esport guinéenne</h2>
          <p className="text-gray-300 mb-8">
            Que vous soyez joueur amateur, professionnel ou simple passionné, la FEGESPORT vous accueille.
            Rejoignez-nous pour participer à des tournois, recevoir des formations et faire partie d'une communauté dynamique.
          </p>
          <Button 
            href="/register" 
            variant="secondary" 
            size="lg"
          >
            Devenez membre
          </Button>
        </div>
      </Section>
      
      {/* News Section */}
      <Section 
        title="Dernières actualités" 
        subtitle="Restez informé des dernières nouvelles de l'esport guinéen" 
        background="light"
      >
        <FeaturedNews />
      </Section>
      
      {/* Partners */}
      <Section title="Nos partenaires">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="font-heading text-gray-400">Orange</span>
          </div>
          <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="font-heading text-gray-400">PlayStation</span>
          </div>
          <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="font-heading text-gray-400">Min. Sports</span>
          </div>
          <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="font-heading text-gray-400">MTN</span>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;