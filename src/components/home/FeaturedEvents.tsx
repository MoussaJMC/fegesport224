import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { mockedEvents } from '../../data/events';

export const FeaturedEvents: React.FC = () => {
  // Only get the first 3 upcoming events
  const upcomingEvents = mockedEvents
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Card
            key={event.id}
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
                  <div className="flex items-center mr-4 mb-2">
                    <Users size={16} className="mr-1" />
                    {event.participants} participants
                  </div>
                  <div className="flex items-center mb-2">
                    <Trophy size={16} className="mr-1" />
                    {event.prizePool} GNF
                  </div>
                </div>
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
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          href="/events" 
          size="lg"
        >
          Voir tous les événements
        </Button>
      </div>
    </div>
  );
};