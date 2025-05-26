import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { mockedNews } from '../../data/news';

export const FeaturedNews: React.FC = () => {
  // Only get the latest 3 news items
  const latestNews = [...mockedNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestNews.map((news) => (
          <Card
            key={news.id}
            title={news.title}
            description={news.summary}
            image={news.image}
            tags={news.categories}
            link={`/news/${news.id}`}
            footer={
              <div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(news.date).toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <Button 
                  variant="text" 
                  href={`/news/${news.id}`} 
                  rightIcon={<ArrowRight size={16} />}
                >
                  Lire la suite
                </Button>
              </div>
            }
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          href="/news" 
          size="lg"
        >
          Toutes les actualités
        </Button>
      </div>
    </div>
  );
};