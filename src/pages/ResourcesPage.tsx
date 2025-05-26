import React, { useState } from 'react';
import { FileText, Download, Book, Users, Trophy, Gamepad2, Upload, CreditCard } from 'lucide-react';
import { Hero } from '../components/common/Hero';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { useForm } from 'react-hook-form';

type FormType = 'club' | 'event' | 'partnership' | null;

type ClubFormData = {
  name: string;
  president: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  acceptTerms: boolean;
};

type EventFormData = {
  name: string;
  organizer: string;
  email: string;
  phone: string;
  eventType: 'local' | 'regional' | 'national' | 'international';
  startDate: string;
  endDate: string;
  venue: string;
  description: string;
  acceptTerms: boolean;
};

type PartnershipFormData = {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  partnershipType: 'sponsor' | 'technical' | 'media' | 'other';
  description: string;
  documents: FileList;
  acceptTerms: boolean;
};

const ResourcesPage: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [loading, setLoading] = useState(false);
  
  const {
    register: registerClub,
    handleSubmit: handleClubSubmit,
    formState: { errors: clubErrors }
  } = useForm<ClubFormData>();
  
  const {
    register: registerEvent,
    handleSubmit: handleEventSubmit,
    formState: { errors: eventErrors }
  } = useForm<EventFormData>();
  
  const {
    register: registerPartnership,
    handleSubmit: handlePartnershipSubmit,
    formState: { errors: partnershipErrors }
  } = useForm<PartnershipFormData>();

  const onClubSubmit = async (data: ClubFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Club form submitted:', data);
      alert('Votre demande de création de club a été envoyée avec succès !');
      setActiveForm(null);
    } catch (error) {
      console.error('Error submitting club form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const onEventSubmit = async (data: EventFormData) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Event form submitted:', data);
      alert('Votre demande d\'organisation d\'événement a été envoyée avec succès !');
      setActiveForm(null);
    } catch (error) {
      console.error('Error submitting event form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const onPartnershipSubmit = async (data: PartnershipFormData) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Partnership form submitted:', data);
      alert('Votre demande de partenariat a été envoyée avec succès !');
      setActiveForm(null);
    } catch (error) {
      console.error('Error submitting partnership form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const getEventFee = (type: string) => {
    switch (type) {
      case 'local':
        return '500,000';
      case 'regional':
        return '1,000,000';
      case 'national':
        return '2,500,000';
      case 'international':
        return '5,000,000';
      default:
        return '0';
    }
  };

  return (
    <>
      <Hero 
        title="Ressources"
        subtitle="Documents, formulaires et guides pour la communauté esport guinéenne"
        image="https://images.pexels.com/photos/7862498/pexels-photo-7862498.jpeg"
        height="md"
      />
      
      {/* Documents Section */}
      <Section title="Documents Officiels" background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Book size={24} />,
              title: "Règlement Intérieur",
              description: "Le règlement intérieur de la FEGESPORT",
              link: "#"
            },
            {
              icon: <FileText size={24} />,
              title: "Statuts",
              description: "Les statuts officiels de la fédération",
              link: "#"
            },
            {
              icon: <Trophy size={24} />,
              title: "Règlement des Compétitions",
              description: "Règles et procédures pour les compétitions",
              link: "#"
            },
            {
              icon: <Users size={24} />,
              title: "Guide des Clubs",
              description: "Comment créer et gérer un club esport",
              link: "#"
            },
            {
              icon: <Gamepad2 size={24} />,
              title: "Charte du Joueur",
              description: "Code de conduite des joueurs",
              link: "#"
            },
            {
              icon: <Download size={24} />,
              title: "Logos et Assets",
              description: "Ressources graphiques officielles",
              link: "#"
            }
          ].map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="p-3 bg-primary-50 rounded-lg text-primary">
                  {doc.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-2">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  <Button variant="outline" size="sm" href={doc.link}>
                    Télécharger
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Forms Section */}
      <Section title="Formulaires" subtitle="Remplissez les formulaires en ligne pour vos démarches">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Club Creation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-accent mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Création de Club</h3>
            <p className="text-gray-600 mb-4">
              Créez votre club esport officiel et rejoignez la FEGESPORT.
              Cotisation annuelle : 1,000,000 GNF
            </p>
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => setActiveForm('club')}
            >
              Commencer
            </Button>
          </div>
          
          {/* Event Organization Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary mb-4">
              <Trophy size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Organisation d'Événement</h3>
            <p className="text-gray-600 mb-4">
              Organisez un événement esport officiel sous l'égide de la FEGESPORT.
              Frais selon le type d'événement.
            </p>
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => setActiveForm('event')}
            >
              Commencer
            </Button>
          </div>
          
          {/* Partnership Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary mb-4">
              <Gamepad2 size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Partenariat</h3>
            <p className="text-gray-600 mb-4">
              Devenez partenaire officiel de la FEGESPORT et soutenez l'esport guinéen.
            </p>
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => setActiveForm('partnership')}
            >
              Commencer
            </Button>
          </div>
        </div>
        
        {/* Club Creation Form */}
        {activeForm === 'club' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Création de Club</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveForm(null)}
              >
                Fermer
              </Button>
            </div>
            
            <form onSubmit={handleClubSubmit(onClubSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du club
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("name", { required: "Le nom du club est requis" })}
                  />
                  {clubErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Président du club
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("president", { required: "Le nom du président est requis" })}
                  />
                  {clubErrors.president && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.president.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("email", { 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    })}
                  />
                  {clubErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("phone", { required: "Le numéro de téléphone est requis" })}
                  />
                  {clubErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.phone.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("address", { required: "L'adresse est requise" })}
                  />
                  {clubErrors.address && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.address.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description du club
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerClub("description", { required: "La description est requise" })}
                  />
                  {clubErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{clubErrors.description.message}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  {...registerClub("acceptTerms", { 
                    required: "Vous devez accepter les conditions" 
                  })}
                />
                <label className="ml-2 text-sm text-gray-600">
                  J'accepte les conditions et je m'engage à payer la cotisation annuelle de 1,000,000 GNF
                </label>
              </div>
              {clubErrors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{clubErrors.acceptTerms.message}</p>
              )}
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={loading}
                >
                  Soumettre la demande
                </Button>
              </div>
            </form>
          </div>
        )}
        
        {/* Event Organization Form */}
        {activeForm === 'event' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Organisation d'Événement</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveForm(null)}
              >
                Fermer
              </Button>
            </div>
            
            <form onSubmit={handleEventSubmit(onEventSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de l'événement
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("name", { required: "Le nom de l'événement est requis" })}
                  />
                  {eventErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organisateur
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("organizer", { required: "Le nom de l'organisateur est requis" })}
                  />
                  {eventErrors.organizer && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.organizer.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("email", { 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    })}
                  />
                  {eventErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("phone", { required: "Le numéro de téléphone est requis" })}
                  />
                  {eventErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type d'événement
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("eventType", { required: "Le type d'événement est requis" })}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="local">Local (500,000 GNF)</option>
                    <option value="regional">Régional (1,000,000 GNF)</option>
                    <option value="national">National (2,500,000 GNF)</option>
                    <option value="international">International (5,000,000 GNF)</option>
                  </select>
                  {eventErrors.eventType && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.eventType.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lieu
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("venue", { required: "Le lieu est requis" })}
                  />
                  {eventErrors.venue && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.venue.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("startDate", { required: "La date de début est requise" })}
                  />
                  {eventErrors.startDate && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.startDate.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de fin
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("endDate", { required: "La date de fin est requise" })}
                  />
                  {eventErrors.endDate && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.endDate.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description de l'événement
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerEvent("description", { required: "La description est requise" })}
                  />
                  {eventErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{eventErrors.description.message}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  {...registerEvent("acceptTerms", { 
                    required: "Vous devez accepter les conditions" 
                  })}
                />
                <label className="ml-2 text-sm text-gray-600">
                  J'accepte les conditions et je m'engage à payer les frais d'organisation
                </label>
              </div>
              {eventErrors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{eventErrors.acceptTerms.message}</p>
              )}
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={loading}
                >
                  Soumettre la demande
                </Button>
              </div>
            </form>
          </div>
        )}
        
        {/* Partnership Form */}
        {activeForm === 'partnership' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Demande de Partenariat</h3>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveForm(null)}
              >
                Fermer
              </Button>
            </div>
            
            <form onSubmit={handlePartnershipSubmit(onPartnershipSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de l'organisation
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("organizationName", { required: "Le nom de l'organisation est requis" })}
                  />
                  {partnershipErrors.organizationName && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.organizationName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personne de contact
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("contactPerson", { required: "Le nom de la personne de contact est requis" })}
                  />
                  {partnershipErrors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.contactPerson.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("email", { 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    })}
                  />
                  {partnershipErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("phone", { required: "Le numéro de téléphone est requis" })}
                  />
                  {partnershipErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Site web
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("website")}
                  />
                  {partnershipErrors.website && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.website.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type de partenariat
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("partnershipType", { required: "Le type de partenariat est requis" })}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="technical">Partenaire technique</option>
                    <option value="media">Partenaire média</option>
                    <option value="other">Autre</option>
                  </select>
                  {partnershipErrors.partnershipType && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.partnershipType.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description du partenariat proposé
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    {...registerPartnership("description", { required: "La description est requise" })}
                  />
                  {partnershipErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.description.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Documents (Reçu de création, statuts, etc.)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="documents"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                        >
                          <span>Téléverser des fichiers</span>
                          <input
                            id="documents"
                            type="file"
                            className="sr-only"
                            multiple
                            {...registerPartnership("documents", { required: "Les documents sont requis" })}
                          />
                        </label>
                        <p className="pl-1">ou gl
isser-déposer</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC jusqu'à 10MB
                      </p>
                    </div>
                  </div>
                  {partnershipErrors.documents && (
                    <p className="mt-1 text-sm text-red-600">{partnershipErrors.documents.message}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  {...registerPartnership("acceptTerms", { 
                    required: "Vous devez accepter les conditions" 
                  })}
                />
                <label className="ml-2 text-sm text-gray-600">
                  J'accepte les conditions et je certifie que les informations fournies sont exactes
                </label>
              </div>
              {partnershipErrors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{partnershipErrors.acceptTerms.message}</p>
              )}
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={loading}
                >
                  Soumettre la demande
                </Button>
              </div>
            </form>
          </div>
        )}
      </Section>
    </>
  );
};

export default ResourcesPage;