
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Logo from '@/components/Logo';

const Index = () => {
  const navigate = useNavigate();

  // Generate random geometric shapes
  const generateShapes = () => {
    const shapes = [];
    for (let i = 0; i < 6; i++) {
      const size = Math.floor(Math.random() * 150) + 50;
      const top = Math.floor(Math.random() * 80) + 10;
      const left = Math.floor(Math.random() * 80) + 10;
      const animationDelay = Math.floor(Math.random() * 5);
      
      shapes.push(
        <div 
          key={i}
          className="geometric-shape"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${animationDelay}s`
          }}
        />
      );
    }
    return shapes;
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-primary">
        {generateShapes()}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-8 flex justify-center animate-fade-in">
              <Logo variant="full" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Catalyzing Transformative Leadership in Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Fostering leadership excellence and promoting sustainable economic development across the continent
            </p>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <Button 
                size="lg"
                variant="gold"
                onClick={() => scrollToElement('core-pillars')}
                className="shadow-lg"
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <Section id="core-pillars" background="white" className="py-20">
        <SectionTitle 
          title="Our Core Pillars" 
          subtitle="We operate through three key divisions to fulfill our mission of fostering leadership excellence, economic development, and sustainable governance across Africa." 
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Diplomacy Card */}
          <div 
            className="card-tilt rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white hover:border-primary-light transition-all duration-300"
            onClick={() => navigate('/operations/diplomacy')}
          >
            <div className="h-48 bg-primary relative overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?diplomacy,africa" 
                alt="Diplomacy and International Relations" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Diplomacy</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Facilitating dialogues, negotiations, and collaborations that promote Africa's economic, political, and diplomatic interests on a continental and global scale.
              </p>
              <Button 
                to="/operations/diplomacy" 
                variant="outline" 
                size="sm"
                className="flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Research Card */}
          <div 
            className="card-tilt rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white hover:border-primary-light transition-all duration-300"
            onClick={() => navigate('/operations/research')}
          >
            <div className="h-48 bg-primary relative overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?research,africa" 
                alt="Independent Research" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Research</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Generating innovative solutions to Africa's most pressing leadership, economic, and developmental challenges through evidence-based research.
              </p>
              <Button 
                to="/operations/research" 
                variant="outline" 
                size="sm"
                className="flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Capacity Building Card */}
          <div 
            className="card-tilt rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white hover:border-primary-light transition-all duration-300"
            onClick={() => navigate('/operations/capacity-building')}
          >
            <div className="h-48 bg-primary relative overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?training,africa" 
                alt="Capacity Building" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Capacity Building</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Equipping individuals and organizations with the expertise needed to drive economic and governance transformations across the continent.
              </p>
              <Button 
                to="/operations/capacity-building" 
                variant="outline" 
                size="sm"
                className="flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="light" className="py-16 overflow-hidden">
        <SectionTitle 
          title="Our Core Values" 
          subtitle="The principles that guide our work and partnerships"
          centered
        />
        
        <div className="scroll-container mt-12">
          <div className="scroll-content">
            {[
              { name: 'Collaboration', icon: '/lovable-uploads/a30162f6-08fe-4365-965f-dee2fb44b03d.png', description: 'Fostering partnerships for collective impact' },
              { name: 'Excellence', icon: '/lovable-uploads/f9ac3ba5-7f4a-40fd-8367-60210f60d378.png', description: 'Striving for the highest quality in all endeavors' },
              { name: 'Innovation', icon: '/lovable-uploads/0b4c7af6-8d44-4888-8571-dac0ea6b842c.png', description: 'Encouraging creative solutions to development challenges' },
              { name: 'Inclusivity', icon: '/lovable-uploads/9eb930a3-36d2-4b5c-9958-0a1a7816db49.png', description: 'Ensuring all voices are heard in the development process' },
              { name: 'Integrity', icon: '/lovable-uploads/643fc012-84c3-44c1-bb4f-51ae6cdf777e.png', description: 'Upholding honesty and transparency in all our work' }
            ].map((value, index) => (
              <div 
                key={index} 
                className="inline-block w-60 mx-4 p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
                  <img src={value.icon} alt={value.name} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.name}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
            {/* Duplicate for continuous scroll effect */}
            {[
              { name: 'Collaboration', icon: '/lovable-uploads/a30162f6-08fe-4365-965f-dee2fb44b03d.png', description: 'Fostering partnerships for collective impact' },
              { name: 'Excellence', icon: '/lovable-uploads/f9ac3ba5-7f4a-40fd-8367-60210f60d378.png', description: 'Striving for the highest quality in all endeavors' },
              { name: 'Innovation', icon: '/lovable-uploads/0b4c7af6-8d44-4888-8571-dac0ea6b842c.png', description: 'Encouraging creative solutions to development challenges' },
              { name: 'Inclusivity', icon: '/lovable-uploads/9eb930a3-36d2-4b5c-9958-0a1a7816db49.png', description: 'Ensuring all voices are heard in the development process' },
              { name: 'Integrity', icon: '/lovable-uploads/643fc012-84c3-44c1-bb4f-51ae6cdf777e.png', description: 'Upholding honesty and transparency in all our work' }
            ].map((value, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="inline-block w-60 mx-4 p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
                  <img src={value.icon} alt={value.name} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.name}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="gradient" className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with CentreGED</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Join us in our mission to foster leadership excellence and sustainable development across Africa
        </p>
        <Button to="/about" variant="gold" size="lg">
          Learn More About Us
        </Button>
      </Section>
    </div>
  );
};

export default Index;
