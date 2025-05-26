import React, { useState, useEffect } from 'react';
import { Search, Calendar, Filter, MapPin } from 'lucide-react';
import { Hero } from '../components/common/Hero';
import { Section } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { mockedEvents } from '../data/events';
import { motion } from 'framer-motion';

// Define filter types
type EventFilter = {
  search: string;
  category: string;
  timeFrame: 'all' | 'upcoming' | 'past';
};

const EventsPage: React.FC = () => {
  // State for filters
  const [filters, setFilters] = useState<EventFilter>({
    search: '',
    category: '',
    timeFrame: 'upcoming',
  });

  // Extract unique categories from all events
  const allCategories = Array.from(
    new Set(mockedEvents.flatMap(event => event.categories))
  );

  // Function to filter events based on selected filters
  const getFilteredEvents = () => {
    return mockedEvents.filter(event => {
      const matchesSearch = filters.search === '' || 
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = filters.category === '' || 
        event.categories.includes(filters.category);
      
      const eventDate = new Date(event.date);
      const now = new Date();
      
      const matchesTimeFrame = 
        filters.timeFrame === 'all' ||
        (filters.timeFrame === 'upcoming' && eventDate >= now) ||
        (filters.timeFrame === 'past' && eventDate < now);
      
      return matchesSearch && matchesCategory && matchesTimeFrame;
    });
  };

  const filteredEvents = getFilteredEvents();

  // Sort events by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (filters.timeFrame === 'past') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <>
      <Hero 
        title="Événements"
        subtitle="Participez aux compétitions esport en Guinée et montrez votre talent"
        image="https://images.pexels.com/photos/7915247/pexels-photo-7915247.jpeg"
        height="md"
        position="center"
      />
      
      <Section>
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-6">Filtrer les événements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search filter */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Recherche
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Rechercher un événement..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Category filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary appearance-none"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">Toutes les catégories</option>
                  {allCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Time filter */}
            <div>
              <label htmlFor="timeFrame" className="block text-sm font-medium text-gray-700 mb-2">
                Période
              </label>
              <div className="relative">
                <select
                  id="timeFrame"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary appearance-none"
                  value={filters.timeFrame}
                  onChange={(e) => setFilters({...filters, timeFrame: e.target.value as EventFilter['timeFrame']})}
                >
                  <option value="all">Tous les événements</option>
                  <option value="upcoming">À venir</option>
                  <option value="past">Passés</option>
                </select>
                <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">
            {sortedEvents.length} événement{sortedEvents.length !== 1 ? 's' : ''} trouvé{sortedEvents.length !== 1 ? 's' : ''}
          </h3>
          <div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setFilters({
                search: '',
                category: '',
                timeFrame: 'upcoming',
              })}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        </div>
        
        {/* Events grid */}
        {sortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  date={new Date(event.date).toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                  tags={event.categories}
                  link={`/events/${event.id}`}
                  footer={
                    <div>
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <Calendar size={16} className="mr-1" />
                          {new Date(event.date).toLocaleDateString('fr-FR', { 
                            day: 'numeric', 
                            month: 'long' 
                          })}
                        </div>
                        <div className="flex items-center mb-2">
                          <MapPin size={16} className="mr-1" />
                          {event.location.split(',')[0]}
                        </div>
                      </div>
                      
                      {/* Registration status */}
                      {event.registrationDeadline && new Date(event.registrationDeadline) > new Date() ? (
                        <div className="mb-3">
                          <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full">
                            Inscriptions ouvertes
                          </span>
                        </div>
                      ) : filters.timeFrame === 'past' ? (
                        <div className="mb-3">
                          <span className="text-sm bg-gray-100 text-gray-800 py-1 px-2 rounded-full">
                            Événement terminé
                          </span>
                        </div>
                      ) : event.maxParticipants && event.participants >= event.maxParticipants ? (
                        <div className="mb-3">
                          <span className="text-sm bg-red-100 text-red-800 py-1 px-2 rounded-full">
                            Complet
                          </span>
                        </div>
                      ) : (
                        <div className="mb-3">
                          <span className="text-sm bg-amber-100 text-amber-800 py-1 px-2 rounded-full">
                            Inscriptions bientôt
                          </span>
                        </div>
                      )}
                      
                      <Button 
                        variant="primary" 
                        href={`/events/${event.id}`} 
                        fullWidth
                      >
                        Voir les détails
                      </Button>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-gray-400 mb-4">
              <Calendar size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aucun événement trouvé</h3>
            <p className="text-gray-600 mb-6">Aucun événement ne correspond à vos critères de recherche.</p>
            <Button 
              variant="outline"
              onClick={() => setFilters({
                search: '',
                category: '',
                timeFrame: 'upcoming',
              })}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </Section>
      
      {/* Call to action */}
      <Section background="dark" className="text-center">
        <h2 className="text-white mb-6">Vous souhaitez organiser un événement ?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          La FEGESPORT accompagne les organisateurs d'événements esport en Guinée. 
          Bénéficiez de notre expertise, de notre réseau et de notre support logistique.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
          >
            Contactez-nous
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/resources"
          >
            Guide des organisateurs
          </Button>
        </div>
      </Section>
    </>
  );
};

export default EventsPage;