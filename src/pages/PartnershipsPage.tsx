import React from 'react';
import { Section } from '../components/common/Section';
import { Hero } from '../components/common/Hero';
import { Button } from '../components/common/Button';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target, Shield, Gift, Zap, Award } from 'lucide-react';

const PartnershipsPage: React.FC = () => {
  const currentPartners = [
    {
      name: 'Orange Guinée',
      logo: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg',
      category: 'Partenaire Principal',
      description: 'Fournisseur officiel de connectivité et sponsor majeur des compétitions nationales.'
    },
    {
      name: 'Ministère des Sports',
      logo: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg',
      category: 'Partenaire Institutionnel',
      description: 'Support officiel et reconnaissance institutionnelle de l\'esport.'
    },
    {
      name: 'RTG',
      logo: 'https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg',
      category: 'Partenaire Média',
      description: 'Diffusion des événements majeurs et couverture médiatique nationale.'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Sponsor Principal',
      icon: <Trophy className="w-8 h-8" />,
      benefits: [
        'Visibilité maximale sur tous les événements',
        'Naming rights sur les compétitions majeures',
        'Accès VIP aux événements',
        'Contenu exclusif et brand activation'
      ]
    },
    {
      title: 'Partenaire Technique',
      icon: <Zap className="w-8 h-8" />,
      benefits: [
        'Équipement des centres d\'entraînement',
        'Présence sur les événements',
        'Formation technique',
        'Co-création de contenu'
      ]
    },
    {
      title: 'Partenaire Média',
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        'Droits de diffusion exclusifs',
        'Production de contenu',
        'Interviews exclusives',
        'Couverture événementielle'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target />,
      title: 'Audience Jeune',
      description: 'Accès à une communauté dynamique de 15-35 ans passionnée de technologie et de gaming.'
    },
    {
      icon: <Users />,
      title: 'Visibilité Nationale',
      description: 'Présence sur tous nos événements et supports de communication à travers le pays.'
    },
    {
      icon: <Shield />,
      title: 'Image Innovante',
      description: 'Association avec un secteur en pleine croissance et tourné vers l\'avenir.'
    },
    {
      icon: <Gift />,
      title: 'Activation Unique',
      description: 'Opportunités d\'activation de marque originales dans l\'univers du gaming.'
    }
  ];

  return (
    <>
      <Hero 
        title="Partenariats Stratégiques"
        subtitle="Construisons ensemble l'avenir de l'esport en Guinée"
        image="https://images.pexels.com/photos/7862601/pexels-photo-7862601.jpeg"
        height="md"
      />

      {/* Current Partners */}
      <Section title="Nos Partenaires" subtitle="Ils nous font confiance et soutiennent l'esport guinéen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{partner.category}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section background="light" title="Pourquoi Devenir Partenaire ?" subtitle="Les avantages d'un partenariat avec la FEGESPORT">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partnership Types */}
      <Section title="Types de Partenariats" subtitle="Découvrez nos différentes offres de partenariat">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="text-accent">{type.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{type.title}</h3>
              <ul className="space-y-3">
                {type.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-accent mr-2" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="dark" className="text-center">
        <h2 className="text-white text-3xl font-bold mb-6">Devenez Partenaire de la FEGESPORT</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Rejoignez-nous dans notre mission de développer l'esport en Guinée et touchez une audience jeune et passionnée.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            variant="secondary" 
            size="lg"
            href="/resources"
          >
            Dossier de partenariat
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="/contact"
            className="text-white border-white hover:bg-white hover:text-gray-900"
          >
            Contactez-nous
          </Button>
        </div>
      </Section>
    </>
  );
};

export default PartnershipsPage;