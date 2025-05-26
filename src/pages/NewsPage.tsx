import React, { useState } from 'react';
import { Section } from '../components/common/Section';
import { Hero } from '../components/common/Hero';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Calendar, ArrowRight, Filter, Search } from 'lucide-react';
import { mockedNews } from '../data/news';
import { motion } from 'framer-motion';

type NewsFilter = {
  search: string;
  category: string;
};

const NewsPage: React.FC = () => {
  const [filters, setFilters] = useState<NewsFilter>({
    search: '',
    category: ''
  });

  // Extract unique categories
  const allCategories = Array.from(
    new Set(mockedNews.flatMap(news => news.categories))
  );

  // Filter news based on search and category
  const filteredNews = mockedNews.filter(news => {
    const matchesSearch = filters.search === '' || 
      news.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      news.content.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = filters.category === '' || 
      news.categories.includes(filters.category);
    
    return matchesSearch && matchesCategory;
  });

  // Sort news by date (newest first)
  const sortedNews = [...filteredNews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero 
        title="Actualités"
        subtitle="Restez informé de l'actualité esport en Guinée"
        image="https://images.pexels.com/photos/7862601/pexels-photo-7862601.jpeg"
        height="md"
      />

      <Section>
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  placeholder="Rechercher une actualité..."
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
          </div>
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">
            {sortedNews.length} article{sortedNews.length !== 1 ? 's' : ''} trouvé{sortedNews.length !== 1 ? 's' : ''}
          </h3>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setFilters({
              search: '',
              category: ''
            })}
          >
            Réinitialiser les filtres
          </Button>
        </div>

        {/* News Grid */}
        {sortedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  title={news.title}
                  description={news.summary}
                  image={news.image}
                  date={new Date(news.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                  tags={news.categories}
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
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600 mb-6">
              Aucun article ne correspond à vos critères de recherche.
            </p>
            <Button 
              variant="outline"
              onClick={() => setFilters({
                search: '',
                category: ''
              })}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </Section>

      {/* Facebook Feed Section */}
      <Section background="light" title="Suivez-nous sur Facebook">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fesporting224&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="800"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NewsPage;