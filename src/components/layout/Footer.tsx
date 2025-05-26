import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 19.5 19 5M6.5 15H17M7 15l-1.5 4.5M17.5 8.5c-.83.83-2.17.83-3 0 0-1-1.5-2-2.5-2 .83-.83 2.17-.83 3 0 0 1 1.5 2 2.5 2Z" 
                  stroke="#009639" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8.5c-.55.55-1.45.55-2 0 0-.66-1-1.33-1.67-1.33.55-.55 1.45-.55 2 0 0 .66 1 1.33 1.67 1.33Z"
                  stroke="#009639" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-heading text-xl font-bold">FEGESPORT</span>
            </div>
            <p className="text-gray-400 mb-4">
              La Fédération de Esport de Guinée promeut et développe les sports électroniques en Guinée.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/fegesport" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/fegesport" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/fegesport" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/fegesport" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/governance" className="text-gray-400 hover:text-primary transition-colors">Gouvernance</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-primary transition-colors">Actualités</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary transition-colors">Événements</Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-primary transition-colors">Partenariats</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary transition-colors">Ressources</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">Politique de confidentialité</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Conakry, Guinée</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+224666777888" className="text-gray-400 hover:text-primary transition-colors">+224 666 777 888</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:contact@fegesport.gn" className="text-gray-400 hover:text-primary transition-colors">contact@fegesport.gn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} FEGESPORT - Tous droits réservés
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/legal" className="text-gray-500 hover:text-primary transition-colors">Mentions légales</Link>
            <span className="text-gray-700">|</span>
            <Link to="/cookies" className="text-gray-500 hover:text-primary transition-colors">Politique de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};