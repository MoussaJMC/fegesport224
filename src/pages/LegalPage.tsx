import React from 'react';
import { Section } from '../components/common/Section';

const LegalPage: React.FC = () => {
  return (
    <Section title="Mentions légales" subtitle="Informations légales de la FEGESPORT">
      <div className="max-w-3xl mx-auto prose">
        <h2>Éditeur du site</h2>
        <p>FEGESPORT - Fédération de Esport de Guinée</p>
        <p>Siège social : Conakry, Guinée</p>
        
        <h2>Hébergement</h2>
        <p>Le site est hébergé par [Nom de l'hébergeur]</p>
        
        {/* Add more legal sections as needed */}
      </div>
    </Section>
  );
};

export default LegalPage;