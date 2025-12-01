import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide";
  
  const variants = {
    primary: "bg-moss text-white hover:bg-moss_dark shadow-sm",
    outline: "border border-moss text-moss hover:bg-moss hover:text-white",
    text: "bg-transparent text-moss underline hover:text-moss_dark"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};