import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Trophy, Users, Clock, CreditCard, ChevronLeft } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { mockedEvents } from '../data/events';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [event, setEvent] = useState(mockedEvents.find(e => e.id === id));
  const [loading, setLoading] = useState(false);
  
  // Redirect if event not found
  useEffect(() => {
    if (!event) {
      navigate('/events', { replace: true });
    }
  }, [event, navigate]);
  
  if (!event) return null;
  
  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < new Date();
  const isRegistrationOpen = event.registrationDeadline && new Date(event.registrationDeadline) > new Date();
  const isFull = event.maxParticipants && event.participants >= event.maxParticipants;
  
  const handleRegister = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=events/' + id);
      return;
    }
    
    setLoading(true);
    // Simulating API call for registration
    setTimeout(() => {
      setLoading(false);
      // In a real app, we would update the event data through an API
      alert('Inscription réussie ! Vous recevrez un email de confirmation.');
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-white text-center">
            <motion.h1 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {event.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mt-6"
            >
              <div className="flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full">
                <Calendar size={18} className="mr-2 text-primary" />
                <span>{eventDate.toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long',
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full">
                <MapPin size={18} className="mr-2 text-primary" />
                <span>{event.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Button 
            variant="text" 
            href="/events" 
            leftIcon={<ChevronLeft size={20} />}
            className="bg-black bg-opacity-50 text-white hover:bg-opacity-70"
          >
            Retour aux événements
          </Button>
        </div>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">À propos de l'événement</h2>
              
              {/* Description */}
              <div className="prose max-w-none mb-8">
                {event.longDescription ? (
                  <div dangerouslySetInnerHTML={{ 
                    __html: event.longDescription
                      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 mt-5">$1</h3>')
                      .replace(/\n\n/gim, '<br/><br/>')
                      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
                  }} />
                ) : (
                  <p>{event.description}</p>
                )}
              </div>
              
              {/* Rules */}
              {event.rules && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Règles & Conditions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="text-gray-700">{rule}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Organizers */}
              {event.organizers && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Organisateurs</h3>
                  <div className="flex flex-wrap gap-3">
                    {event.organizers.map((organizer, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {organizer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Registration Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4">Détails de l'inscription</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Clock size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Date et heure</p>
                    <p className="text-gray-600">{eventDate.toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'long',
                      year: 'numeric' 
                    })}</p>
                    <p className="text-gray-600">{eventDate.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Lieu</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Trophy size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Prix</p>
                    <p className="text-gray-600">{event.prizePool} GNF</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Participants</p>
                    <p className="text-gray-600">
                      {event.participants} 
                      {event.maxParticipants ? ` / ${event.maxParticipants}` : ''}
                    </p>
                  </div>
                </div>
                
                {event.registrationFee && (
                  <div className="flex items-start">
                    <CreditCard size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Frais d'inscription</p>
                      <p className="text-gray-600">{event.registrationFee.toLocaleString('fr-FR')} GNF</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Registration Status */}
              {isPastEvent ? (
                <div className="bg-gray-100 p-4 rounded-md text-center mb-4">
                  <p className="text-gray-700 font-medium">Cet événement est terminé</p>
                </div>
              ) : isFull ? (
                <div className="bg-red-50 p-4 rounded-md text-center mb-4">
                  <p className="text-red-600 font-medium">Complet</p>
                  <p className="text-gray-600 text-sm">Le nombre maximum de participants a été atteint</p>
                </div>
              ) : !isRegistrationOpen ? (
                <div className="bg-amber-50 p-4 rounded-md text-center mb-4">
                  <p className="text-amber-600 font-medium">Inscriptions à venir</p>
                  <p className="text-gray-600 text-sm">Les inscriptions ne sont pas encore ouvertes</p>
                </div>
              ) : (
                <div className="bg-green-50 p-4 rounded-md text-center mb-4">
                  <p className="text-green-600 font-medium">Inscriptions ouvertes</p>
                  {event.registrationDeadline && (
                    <p className="text-gray-600 text-sm">
                      Jusqu'au {new Date(event.registrationDeadline).toLocaleDateString('fr-FR', { 
                        day: 'numeric', 
                        month: 'long'
                      })}
                    </p>
                  )}
                </div>
              )}
              
              {/* CTA Button */}
              <Button 
                variant={isPastEvent || isFull ? "outline" : "primary"} 
                fullWidth
                onClick={handleRegister}
                isLoading={loading}
                disabled={isPastEvent || isFull || !isRegistrationOpen}
              >
                {isPastEvent ? "Événement terminé" : 
                  isFull ? "Complet" : 
                  !isRegistrationOpen ? "Bientôt disponible" : 
                  "S'inscrire maintenant"}
              </Button>
            </div>
            
            {/* Share Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Partager</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Similar Events Section */}
      <Section title="Autres événements qui pourraient vous intéresser" background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockedEvents
            .filter(e => e.id !== id && e.categories.some(cat => event.categories.includes(cat)))
            .slice(0, 3)
            .map(similarEvent => (
              <Card
                key={similarEvent.id}
                title={similarEvent.title}
                description={similarEvent.description}
                image={similarEvent.image}
                date={new Date(similarEvent.date).toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
                tags={similarEvent.categories}
                link={`/events/${similarEvent.id}`}
              />
            ))}
        </div>
      </Section>
    </>
  );
};

export default EventDetailPage;