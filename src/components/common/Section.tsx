import React, { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
};

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const getBgClass = () => {
    switch (background) {
      case 'light': return 'bg-gray-50';
      case 'dark': return 'bg-gray-900 text-white';
      default: return 'bg-white';
    }
  };

  return (
    <section id={id} className={`py-16 ${getBgClass()} ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={`mb-4 ${background === 'dark' ? 'text-white' : ''}`}>{title}</h2>}
            {subtitle && (
              <p className={`text-lg max-w-3xl mx-auto ${background === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};