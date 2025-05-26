import React from 'react';
import { Section } from '../components/common/Section';
import { Hero } from '../components/common/Hero';
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  BookOpen, 
  MessageSquare, 
  Globe, 
  Shield, 
  Briefcase,
  HeartHandshake
} from 'lucide-react';

const GovernancePage: React.FC = () => {
  const positions = [
    {
      title: 'Président',
      name: 'Ibrahim Diallo',
      description: 'Direction stratégique et représentation de la fédération',
      icon: <Users />,
      color: 'primary',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      title: 'Secrétaire Général',
      name: 'Mariama Camara',
      description: 'Administration et coordination des activités',
      icon: <BookOpen />,
      color: 'secondary',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
    },
    {
      title: 'Directeur Technique',
      name: 'Moussa Touré',
      description: 'Supervision des compétitions et formation',
      icon: <Trophy />,
      color: 'accent',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    },
    {
      title: 'Directeur Communication',
      name: 'Fatou Barry',
      description: 'Relations publiques et stratégie médiatique',
      icon: <MessageSquare />,
      color: 'primary',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg'
    },
    {
      title: 'Directeur International',
      name: 'Amadou Sow',
      description: 'Relations avec les fédérations étrangères',
      icon: <Globe />,
      color: 'secondary',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      title: 'Directeur Juridique',
      name: 'Aissatou Bah',
      description: 'Affaires légales et réglementation',
      icon: <Shield />,
      color: 'accent',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    {
      title: 'Directeur Financier',
      name: 'Mamadou Baldé',
      description: 'Gestion financière et comptabilité',
      icon: <Briefcase />,
      color: 'primary',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
    },
    {
      title: 'Directeur Partenariats',
      name: 'Kadiatou Diallo',
      description: 'Développement des partenariats stratégiques',
      icon: <HeartHandshake />,
      color: 'secondary',
      image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 text-primary border-primary';
      case 'secondary':
        return 'bg-secondary-50 text-secondary border-secondary';
      case 'accent':
        return 'bg-accent-50 text-accent border-accent';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-300';
    }
  };

  return (
    <>
      <Hero 
        title="Gouvernance"
        subtitle="Une équipe dévouée au développement de l'esport guinéen"
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        height="md"
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Structure Organisationnelle</h2>
          <p className="text-gray-600">
            Notre équipe dirigeante est composée de professionnels passionnés qui œuvrent 
            quotidiennement pour le développement de l'esport en Guinée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-lg border-2 ${
                getColorClasses(position.color)
              }`}
            >
              <div className="p-6">
                <div className="mb-4 relative">
                  <img
                    src={position.image}
                    alt={position.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className={`absolute bottom-0 right-1/3 w-8 h-8 rounded-full flex items-center justify-center ${
                    getColorClasses(position.color)
                  }`}>
                    {position.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-center">{position.title}</h3>
                <p className="font-medium mb-2 text-center">{position.name}</p>
                <p className="text-gray-600 text-sm text-center">{position.description}</p>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-2 right-2"
              >
                <div className={`w-2 h-2 rounded-full ${
                  position.color === 'primary' ? 'bg-primary' :
                  position.color === 'secondary' ? 'bg-secondary' :
                  'bg-accent'
                }`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Promouvoir l'excellence dans toutes nos activités et compétitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-secondary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusion</h3>
              <p className="text-gray-600">
                Garantir l'accès à l'esport pour tous les Guinéens passionnés.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-accent-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Adopter les meilleures pratiques pour développer l'esport guinéen.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section background="dark" className="text-center">
        <h2 className="text-white text-3xl font-bold mb-6">Rejoignez Notre Équipe</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Nous sommes toujours à la recherche de talents passionnés pour contribuer au 
          développement de l'esport en Guinée.
        </p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Postuler
        </motion.a>
      </Section>
    </>
  );
};

export default GovernancePage;