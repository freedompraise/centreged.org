
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, GraduationCap } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';

// Operations Tabs
const operationTabs = [
  {
    id: 'diplomacy',
    title: 'Diplomacy & International Relations',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-blue-500',
    description: "Facilitating dialogues, negotiations, and collaborations that promote Africa's economic, political, and diplomatic interests on a continental and global scale.",
    banner: 'https://source.unsplash.com/random/1200x600/?diplomacy,africa',
    functions: [
      {
        title: 'Hosting High-Level Forums & Summits',
        description: 'This division spearheads flagship events that bring together influential leaders to discuss pressing governance and economic challenges.',
        items: [
          'Africa Economic Forum - A premier platform for discussing Africa\'s economic trends, policies, and investment opportunities.',
          'National Economic Forum - A policy-driven initiative addressing national economic challenges and solutions.',
          'National Leadership Colloquium - A leadership development gathering focused on public and private sector governance excellence.',
        ]
      },
      {
        title: 'Stakeholder Engagement & Policy Advocacy',
        description: 'This division fosters collaborations between the public and private sectors, ensuring that economic and governance policies are aligned with Africa\'s long-term development goals.',
        items: []
      },
      {
        title: 'International Partnerships & Global Policy Integration',
        description: 'By working with diplomatic missions, international organizations, and multinational institutions, this division enhances Africa\'s voice in global decision-making platforms.',
        items: []
      }
    ]
  },
  {
    id: 'research',
    title: 'Independent Research',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-gray-700',
    description: "Generating innovative solutions to Africa's most pressing leadership, economic, and developmental challenges through evidence-based research.",
    banner: 'https://source.unsplash.com/random/1200x600/?research,africa',
    functions: [
      {
        title: 'Policy Research & Analysis',
        description: 'The Centre conducts high-quality, data-driven research in areas such as:',
        items: [
          'Leadership and governance best practices',
          'Economic policies for sustainable growth',
          'Political economy and public administration reforms',
          'Social policy and welfare strategies',
          'Sustainable development models',
          'Artificial Intelligence and digital transformation in governance'
        ]
      },
      {
        title: 'Publishing & Knowledge Dissemination',
        description: 'The research division regularly publishes:',
        items: [
          'Policy papers, research reports, and white papers to guide decision-making.',
          'Economic and governance journals featuring insights from scholars, practitioners, and thought leaders.'
        ]
      },
      {
        title: 'Advisory Services for Policymakers & Institutions',
        description: 'The Centre works with governments, businesses, and international organizations to provide:',
        items: [
          'Evidence-based recommendations for governance and economic strategies.',
          'Legislative and regulatory reforms to improve national and regional policies.'
        ]
      },
      {
        title: 'Mentorship & Career Development',
        description: 'This division also runs mentorship programs and career development initiatives to prepare the next generation of African leaders.',
        items: []
      }
    ]
  },
  {
    id: 'capacity-building',
    title: 'Capacity Building',
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'bg-blue-500',
    description: "Equipping individuals and organizations with the expertise needed to drive economic and governance transformations.",
    banner: 'https://source.unsplash.com/random/1200x600/?training,africa',
    functions: [
      {
        title: 'Faculty & Executive Development',
        description: 'Through its faculties, the Institute offers structured learning programs that cater to different professional levels, including:',
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
        title: 'Corporate & Institutional Training',
        description: 'The Institute provides customized training programs for organizations, helping businesses, NGOs, and government agencies enhance efficiency, governance structures, and leadership capacity.',
        items: []
      },
      {
        title: 'Mentorship & Career Development',
        description: 'This division runs mentorship programs and career development initiatives to prepare the next generation of African leaders.',
        items: []
      }
    ]
  }
];

const Operations = () => {
  const { operationId = 'diplomacy' } = useParams<{ operationId: string }>();
  const navigate = useNavigate();
  
  const currentOperation = operationTabs.find(op => op.id === operationId) || operationTabs[0];

  return (
    <div>
      {/* Operations Hero */}
      <section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(42, 92, 130, 0.9)), url(${currentOperation.banner})` 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {currentOperation.title}
            </h1>
            <p className="text-xl animate-fade-in">
              {currentOperation.description}
            </p>
          </div>
        </div>
      </section>

      {/* Operations Navigation */}
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

      {/* Operation Content */}
      <Section>
        <SectionTitle 
          title={`${currentOperation.title}`}
          subtitle="Key Functions & Initiatives"
        />
        
        <div className="space-y-12 mt-8">
          {currentOperation.functions.map((func, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{func.title}</h3>
              <p className="text-gray-600 mb-6">{func.description}</p>
              
              {func.items.length > 0 && (
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
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Next Operation Navigation */}
      <Section background="gradient" className="text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Explore Our Other Divisions</h3>
            <p className="text-lg">Learn about all three pillars of CentreGED's operations</p>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            {operationTabs.filter(tab => tab.id !== operationId).map((tab) => (
              <Button 
                key={tab.id}
                to={`/operations/${tab.id}`}
                variant="gold"
              >
                {tab.title}
              </Button>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Operations;
