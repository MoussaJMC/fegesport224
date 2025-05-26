import React from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  overlay?: boolean;
  cta?: {
    text: string;
    link: string;
  };
  height?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'center' | 'top' | 'bottom';
};

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image, 
  overlay = true, 
  cta,
  height = 'lg',
  position = 'center'
}) => {
  const getHeightClass = () => {
    switch(height) {
      case 'sm': return 'h-[30vh]';
      case 'md': return 'h-[50vh]';
      case 'lg': return 'h-[70vh]';
      case 'xl': return 'h-[90vh]';
      default: return 'h-[70vh]';
    }
  };

  const getPositionClass = () => {
    switch(position) {
      case 'top': return 'bg-top';
      case 'center': return 'bg-center';
      case 'bottom': return 'bg-bottom';
      default: return 'bg-center';
    }
  };

  return (
    <div 
      className={`relative ${getHeightClass()} ${getPositionClass()} bg-cover bg-no-repeat flex items-center justify-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1 
          className="text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={cta.link} className="btn btn-primary">
              {cta.text}
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};