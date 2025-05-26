import React from 'react';
import { Section } from '../components/common/Section';

const TermsPage: React.FC = () => {
  return (
    <Section title="Conditions d'utilisation" subtitle="Dernière mise à jour : Mars 2024">
      <div className="max-w-3xl mx-auto prose">
        <h2>1. Acceptation des conditions</h2>
        <p>En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation.</p>
        
        <h2>2. Utilisation du service</h2>
        <p>Le service est fourni "tel quel" sans garantie d'aucune sorte.</p>
        
        {/* Add more terms sections as needed */}
      </div>
    </Section>
  );
};

export default TermsPage;