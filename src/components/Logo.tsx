
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'icon') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/lovable-uploads/icon.png" 
          alt="CentreGED Logo" 
          className="h-12 w-12"
        />
      </div>
    );
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d50a1c1d-cf89-4802-a43d-b83024419217.png" 
        alt="The African Centre for Governance, Economy, and Development" 
        className="h-16"
      />
    </div>
  );
};

export default Logo;
