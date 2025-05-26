import React from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  date?: string;
  tags?: string[];
  footer?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  date,
  tags,
  footer,
  className = '',
}) => {
  const CardContent = () => (
    <div className={`card ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          {date && (
            <div className="absolute top-4 right-4 bg-accent text-white text-sm px-3 py-1 rounded-md font-medium">
              {date}
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}
        
        {footer && <div className="mt-auto">{footer}</div>}
      </div>
    </div>
  );

  if (link) {
    return link.startsWith('http') ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="group">
        <CardContent />
      </a>
    ) : (
      <Link to={link} className="group">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};