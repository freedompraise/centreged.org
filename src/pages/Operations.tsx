import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, GraduationCap } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/button';

const operationTabs = [
  {
    id: 'capacity-building',
    title: 'Capacity Building Institute',
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'bg-blue-500',
    description: "Equipping individuals and organizations with the expertise needed to drive economic and governance transformations.",
    banner: 'https://source.unsplash.com/random/1200x600/?training,africa',
    functions: [
      {
        id: 'certifications',
        title: 'Faculty & Executive Development',
        description: 'Through its faculties, the Institute offers structured learning programs for multiple professional levels.',
        items: [
          'Faculty of Leadership, Governance, and Policy',
          'Faculty of Political Economy, Public Administration, and Policy Analysis',
          'Faculty of Economics, Business Management, and Taxation',
          'Faculty of Sociology, Human Resource Management, and Organizational Studies',
          'Faculty of Sustainable Development and Environmental Studies',
          'Faculty of Digital Economy and Artificial Intelligence'
        ]
      },
      {
        id: 'corporate-training',
        title: 'Corporate & Institutional Training',
        description: 'Customized training programs for organizations, enabling enhanced efficiency, governance, and leadership capacity.',
        route: '/operations/corporate-training'
      },
      {
        id: 'mentorship',
        title: 'Mentorship & Career Development',
        description: 'Mentorship programs and career development initiatives to empower the next generation of African leaders.',
        route: '/operations/mentorship-career-development'
      }
    ]
  },
  {
    id: 'diplomacy',
    title: 'Diplomacy & International Relations',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-blue-500',
    description: "Facilitating dialogues, negotiations, and collaborations that promote Africa's interests on a global scale.",
    banner: 'https://source.unsplash.com/random/1200x600/?diplomacy,africa',
    functions: [
      {
        id: 'stakeholder-engagement',
        title: 'Stakeholder Engagement & Policy Advocacy',
        description: 'Fostering collaborations between public and private sectors to align governance with Africa’s development goals.',
        route: '/operations/diplomacy-stakeholder-engagement'
      },
      {
        id: 'high-level-forums',
        title: 'Hosting High-Level Forums & Summits',
        description: 'Flagship events that convene influential leaders to discuss pressing economic and governance challenges.',
        route: '/operations/diplomacy-high-level-forums'
      },
      {
        id: 'strategic-partnerships',
        title: 'International Partnerships & Global Policy Integration',
        description: 'Enhancing Africa’s global voice through collaborations with diplomatic missions and multinational institutions.',
        items: []
      }
    ]
  },
  {
    id: 'research',
    title: 'Independent Research Organization',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-gray-700',
    description: "Generating innovative solutions to Africa's leadership, economic, and developmental challenges through evidence-based research.",
    banner: 'https://source.unsplash.com/random/1200x600/?research,africa',
    functions: [
      {
        id: 'policy-research',
        title: 'Policy Research & Analysis',
        description: 'High-quality, data-driven research covering various aspects of governance, economic policies, and public administration.',
        route: '/operations/policy-research'
      },
      {
        id: 'knowledge-dissemination',
        title: 'Publishing & Knowledge Dissemination',
        description: 'Publishing policy papers, research reports, and journals to guide decision-making.',
        route: '/operations/knowledge-dissemination'
      },
      {
        id: 'advisory-services',
        title: 'Advisory Services for Policymakers & Institutions',
        description: 'Providing evidence-based recommendations, legislative reforms, and technical assistance.',
        route: '/operations/advisory-services'
      }
    ]
  }
];

const Operations = () => {
  const { operationId = 'capacity-building' } = useParams<{ operationId: string }>();
  const navigate = useNavigate();
  
  const currentOperation = operationTabs.find(op => op.id === operationId) || operationTabs[0];

  return (
    <div>
      <section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(42, 92, 130, 0.9)), url(${currentOperation.banner})` 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentOperation.title}</h1>
            <p className="text-xl">{currentOperation.description}</p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 no-scrollbar">
            {operationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(`/operations/${tab.id}`)}
                className={`px-4 py-2 mx-2 flex items-center whitespace-nowrap rounded-md transition-colors ${
                  tab.id === operationId 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <SectionTitle 
          title={currentOperation.title}
          subtitle="Key Functions & Initiatives"
        />
        <div className="space-y-12 mt-8">
          {currentOperation.functions.map((func, index) => (
            <div
              key={index}
              id={func.id}
              className={`bg-white rounded-lg shadow-md p-8 scroll-mt-20 transition-transform transform ${
                func.route ? 'hover:scale-105 cursor-pointer' : ''
              }`}
              onClick={() => func.route && navigate(func.route)}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{func.title}</h3>
              <p className="text-gray-600 mb-6">{func.description}</p>
              {func.route ? (
                <a href={func.route} className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                  Explore {func.title}
                </a>
              ) : (
                func.items.length > 0 && (
                  <ul className="space-y-4">
                    {func.items.map((item, i) => (
                      <li key={i} className="flex">
                        <div className="mr-4 mt-1 text-gold">
                          <ArrowRight size={16} />
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Operations;
