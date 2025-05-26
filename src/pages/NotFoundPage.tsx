import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/common/Section';

function NotFoundPage() {
  return (
    <Section>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
        <p className="mb-8">La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Retour à l'accueil
        </Link>
      </div>
    </Section>
  );
}

export default NotFoundPage;