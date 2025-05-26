import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-600 focus:ring-2 focus:ring-accent-300 focus:outline-none",
    secondary: "bg-secondary text-dark hover:bg-secondary-600 focus:ring-2 focus:ring-secondary-300 focus:outline-none",
    accent: "bg-primary text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-300 focus:outline-none",
    outline: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-2 focus:ring-accent-300 focus:outline-none",
    text: "bg-transparent text-accent hover:bg-accent-50 focus:outline-none"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </button>
  );
};