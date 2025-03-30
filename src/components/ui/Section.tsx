
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  const getBgClass = () => {
    switch (background) {
      case 'light': return 'bg-secondary';
      case 'primary': return 'bg-primary text-white';
      case 'gradient': return 'bg-gradient-primary text-white';
      default: return 'bg-white';
    }
  };

  return (
    <section 
      id={id}
      className={`py-16 ${getBgClass()} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
