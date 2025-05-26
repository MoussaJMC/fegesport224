import React from 'react';
import { Section } from '../components/common/Section';

const PrivacyPage: React.FC = () => {
  return (
    <Section title="Politique de confidentialité" subtitle="Dernière mise à jour : Mars 2024">
      <div className="max-w-3xl mx-auto prose">
        <h2>1. Collecte des données</h2>
        <p>Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services.</p>
        
        <h2>2. Utilisation des données</h2>
        <p>Vos données sont utilisées exclusivement pour améliorer votre expérience.</p>
        
        {/* Add more privacy policy sections as needed */}
      </div>
    </Section>
  );
};

export default PrivacyPage;