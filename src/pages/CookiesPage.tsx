import React from 'react';
import { Section } from '../components/common/Section';

const CookiesPage: React.FC = () => {
  return (
    <Section title="Politique de cookies" subtitle="Utilisation des cookies sur notre site">
      <div className="max-w-3xl mx-auto prose">
        <h2>Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site web.</p>
        
        <h2>Notre utilisation des cookies</h2>
        <p>Nous utilisons des cookies pour améliorer votre expérience de navigation.</p>
        
        {/* Add more cookie policy sections as needed */}
      </div>
    </Section>
  );
};

export default CookiesPage;