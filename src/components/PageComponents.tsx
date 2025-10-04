import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  overlay?: boolean;
}

export const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '#',
  backgroundImage,
  overlay = true,
}: HeroProps) => {
  return (
    <motion.section
      className="pt-32 pb-16 bg-cover bg-center text-white relative"
      style={{
        backgroundImage: overlay
          ? `linear-gradient(rgba(26, 54, 93, 0.85), rgba(42, 92, 130, 0.9)), url(${backgroundImage})`
          : `url(${backgroundImage})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
          {buttonText && (
            <Button to={buttonLink} variant="gold" size="lg" className="mt-4">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
};

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'primary' | 'gradient';
  centered?: boolean;
  className?: string;
}

export const ContentSection = ({
  id,
  title,
  subtitle,
  children,
  background = 'white',
  centered = false,
  className = '',
}: ContentSectionProps) => {
  const getBgClass = () => {
    switch (background) {
      case 'light':
        return 'bg-secondary';
      case 'primary':
        return 'bg-primary text-white';
      case 'gradient':
        return 'bg-gradient-primary text-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <motion.section
      id={id}
      className={cn(`py-16 ${getBgClass()}`, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              background === 'white' || background === 'light'
                ? 'text-primary'
                : 'text-white'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-lg ${
                background === 'white' || background === 'light'
                  ? 'text-gray-600'
                  : 'text-gray-200'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </motion.section>
  );
};

interface CardItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
}

export const CardItem = ({
  title,
  description,
  icon,
  image,
  link,
}: CardItemProps) => {
  const content = (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start mb-4">
          {icon && <div className="text-primary mr-3 mt-1">{icon}</div>}
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full no-underline">
        {content}
      </a>
    );
  }

  return content;
};

interface ListItemWithIconProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export const ListItemWithIcon = ({
  icon,
  title,
  description,
}: ListItemWithIconProps) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-primary/10 p-2 rounded-md text-primary mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({ value, label, icon }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {icon && (
        <div className="text-primary text-4xl mb-3 flex justify-center">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

export const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}: CallToActionProps) => {
  return (
    <motion.section
      className="py-16 bg-gradient-primary text-white text-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(42, 92, 130, 0.95)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <Button to={buttonLink} variant="gold" size="lg">
          {buttonText}
        </Button>
      </div>
    </motion.section>
  );
};
