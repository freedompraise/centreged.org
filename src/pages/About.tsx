
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button  from '@/components/ui/Button';

interface ObjectiveProps {
  number: number;
  title: string;
  description: string;
}

const Objective: React.FC<ObjectiveProps> = ({ number, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            {number}
          </div>
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
        </div>
        <button className="text-primary ml-4 flex-shrink-0">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <div className={`pl-12 pr-4 mt-2 text-gray-600 accordion-item overflow-hidden transition-all ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const objectives = [
    {
      number: 1,
      title: "Research and Innovation",
      description: "Conduct high-quality, and impactful research on leadership, governance, economic policies, and sustainable development to generate insights and innovative solutions for Africa's leadership and economic challenges."
    },
    {
      number: 2,
      title: "Capacity Building",
      description: "Enhance the skills and knowledge of leaders and institutions through targeted training programs and workshops."
    },
    {
      number: 3,
      title: "Advocacy",
      description: "Advocate for policies and practices that promote good governance, economic growth, and sustainable development."
    },
    {
      number: 4,
      title: "Stakeholder Engagement",
      description: "Connect public and private stakeholders through forums, summits, and dialogues to foster collaboration and shared vision."
    },
    {
      number: 5,
      title: "Leadership Excellence",
      description: "Promote and support the development of ethical and effective leadership across all sectors."
    },
    {
      number: 6,
      title: "Sustainable Development",
      description: "Drive initiatives that contribute to economic sustainability and social welfare, ensuring long-term growth and development."
    },
    {
      number: 7,
      title: "Policy Influence",
      description: "Influence policy-making processes to create an enabling environment for economic and social development."
    },
    {
      number: 8,
      title: "Community Impact",
      description: "Engage with local communities to understand their needs and develop programs that address their unique challenges."
    }
  ];

  const coreValues = [
    { 
      name: "Collaboration", 
      description: "Fostering partnerships and collaborative efforts for collective impact.",
      icon: "/lovable-uploads/a30162f6-08fe-4365-965f-dee2fb44b03d.png",
      bgColor: "bg-primary"
    },
    { 
      name: "Excellence", 
      description: "Striving for the highest quality in research, advocacy, and capacity building.",
      icon: "/lovable-uploads/f9ac3ba5-7f4a-40fd-8367-60210f60d378.png",
      bgColor: "bg-primary-dark"
    },
    { 
      name: "Innovation", 
      description: "Encouraging creativity and new approaches to solving Africa's development challenges.",
      icon: "/lovable-uploads/0b4c7af6-8d44-4888-8571-dac0ea6b842c.png",
      bgColor: "bg-primary"
    },
    { 
      name: "Inclusivity", 
      description: "Ensuring that all voices are heard and considered in the development process.",
      icon: "/lovable-uploads/9eb930a3-36d2-4b5c-9958-0a1a7816db49.png",
      bgColor: "bg-primary-dark"
    },
    { 
      name: "Integrity", 
      description: "Upholding the highest standards of honesty and transparency in all our endeavors.",
      icon: "/lovable-uploads/643fc012-84c3-44c1-bb4f-51ae6cdf777e.png",
      bgColor: "bg-primary"
    }
  ];

  return (
    <div>
      {/* About Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About CentreGED</h1>
            <p className="text-xl animate-fade-in">
              The African Centre for Governance, Economy and Development (CentreGED) 
              is an independent non-profit, non-partisan organization and think tank 
              dedicated to fostering leadership excellence and promoting sustainable 
              economic development across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Side */}
          <div className="md:animate-slide-in-left">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-secondary opacity-20"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mr-4">
                  <img 
                    src="/lovable-uploads/0b4c7af6-8d44-4888-8571-dac0ea6b842c.png" 
                    alt="Vision Icon" 
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              
              <div className="relative z-10">
                <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                  To be the leading catalyst for transformative leadership and sustainable 
                  economic development in Africa.
                </p>
                <div className="h-1 w-20 bg-gold"></div>
              </div>
            </div>
          </div>
          
          {/* Mission Side */}
          <div className="md:animate-slide-in-right">
            <div className="bg-primary text-white rounded-lg shadow-lg p-8 h-full relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 opacity-10">
                <img 
                  src="/lovable-uploads/9fca19fc-80fe-4220-bb9f-7be98a79452c.png" 
                  alt="CentreGED Logo" 
                  className="w-40 h-40 floating-animation"
                />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4">
                  <img 
                    src="/lovable-uploads/643fc012-84c3-44c1-bb4f-51ae6cdf777e.png" 
                    alt="Mission Icon" 
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              
              <div className="relative z-10">
                <p className="text-lg mb-4 leading-relaxed">
                  To promote excellence in leadership and economic management through research, 
                  capacity building, and strategic advocacy, thereby driving sustainable development 
                  and improving the quality of life for all Africans.
                </p>
                <div className="h-1 w-20 bg-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Objectives Section */}
      <Section background="light" className="py-16">
        <SectionTitle 
          title="Our Objectives" 
          subtitle="Strategic goals that guide our initiatives and programs"
        />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          {objectives.map((objective, index) => (
            <Objective 
              key={index}
              number={objective.number}
              title={objective.title}
              description={objective.description}
            />
          ))}
        </div>
      </Section>

      {/* Core Values Section */}
      <Section className="py-16">
        <SectionTitle 
          title="Our Core Values" 
          subtitle="The principles that drive our work and define our organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`${value.bgColor} p-6 text-white group-hover:bg-gold transition-colors duration-300`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <img src={value.icon} alt={value.name} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                <p className="text-sm text-white/80">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Our Operations</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Learn more about how we're working to fulfill our mission through our three core divisions
        </p>
        <Button to="/operations/diplomacy" variant="gold" size="lg">
          View Our Operations
        </Button>
      </Section>
    </div>
  );
};

export default About;
