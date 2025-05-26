import React from 'react';
import { Section } from '../components/common/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <Section title="Contactez-nous" subtitle="Nous sommes à votre écoute">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-gray-600">Conakry, Guinée</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+224666777888" className="hover:text-primary">+224 666 777 888</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@fegesport.gn" className="hover:text-primary">contact@fegesport.gn</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;