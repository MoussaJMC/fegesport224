import React from 'react';
import { Section } from '../components/common/Section';

const FaqPage: React.FC = () => {
  return (
    <Section title="FAQ" subtitle="Questions fréquemment posées">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Comment devenir membre de la FEGESPORT ?</h3>
            <p className="text-gray-600">Pour devenir membre, inscrivez-vous sur notre plateforme et suivez les étapes indiquées.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Comment participer aux compétitions ?</h3>
            <p className="text-gray-600">Consultez notre calendrier d'événements et inscrivez-vous aux compétitions qui vous intéressent.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </Section>
  );
};

export default FaqPage;