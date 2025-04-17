import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBar, 
  FileText, 
  Users, 
  Building, 
  Globe, 
  Scale, 
  BookOpen, 
  Database 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?advisory,policy';
const advisoryProcessImage = 'https://source.unsplash.com/random/800x600/?strategy,process';
const subtopicImages = {
  recommendations: 'https://source.unsplash.com/random/800x400/?strategy',
  legislation: 'https://source.unsplash.com/random/800x400/?legislation',
  capacity: 'https://source.unsplash.com/random/800x400/?training',
  international: 'https://source.unsplash.com/random/800x400/?international'
};

const AdvisoryServices = () => {
  return (
    <div>
      <Hero
        title="Advisory Services for Policymakers & Institutions"
        subtitle="Evidence-based policy recommendations and implementation support for governments, international organizations, and the private sector."
        buttonText="Request Advisory Services"
        buttonLink="/contact"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Our Advisory Approach"
        subtitle="A research-driven framework for effective policy development and implementation"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              CentreGED's advisory arm delivers data-driven, context-specific policy recommendations and tailored assistance designed to address Africa's unique governance and economic development challenges.
            </p>
            <p className="text-gray-700 mb-6">
              We work collaboratively with policymakers and institutional leaders, combining rigorous research with practical insights to develop solutions that are not only theoretically sound but also implementable within existing resource constraints.
            </p>
            <p className="text-gray-700">
              Our multidisciplinary team of economists, governance experts, legal specialists, and sector professionals ensures that our advisory services reflect diverse perspectives and integrated approaches to complex policy challenges.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={advisoryProcessImage} 
              alt="CentreGED Advisory Process" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Advisory Services"
        subtitle="Comprehensive support across the policy development lifecycle"
        background="light"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ChartBar className="h-6 w-6 text-primary" />
                  <CardTitle>Evidence-Based Policy Recommendations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img src={subtopicImages.recommendations} alt="Policy Recommendations" className="w-full mb-4 rounded-md" />
                <p className="text-gray-700 mb-4">
                  We offer tailored recommendations backed by comprehensive research and comparative studies to guide effective decision-making.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Economic growth and investment frameworks</li>
                  <li>Fiscal and monetary policy guidance</li>
                  <li>Public sector reform strategies</li>
                  <li>Social policy development</li>
                  <li>Trade and industrial policy</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  <CardTitle>Legislative & Regulatory Reforms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img src={subtopicImages.legislation} alt="Legislative Reforms" className="w-full mb-4 rounded-md" />
                <p className="text-gray-700 mb-4">
                  Our legal and policy experts help develop and review legislation and regulations to ensure they meet best practice standards and achieve intended outcomes.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Legislative drafting and review</li>
                  <li>Regulatory impact assessments</li>
                  <li>Compliance frameworks</li>
                  <li>Anti-corruption and transparency measures</li>
                  <li>Harmonization with international standards</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  <CardTitle>Institutional Capacity Building</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img src={subtopicImages.capacity} alt="Capacity Building" className="w-full mb-4 rounded-md" />
                <p className="text-gray-700 mb-4">
                  We bridge the gap between policy design and execution through comprehensive implementation support and institutional strengthening.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Organizational development planning</li>
                  <li>System and process optimization</li>
                  <li>Monitoring and evaluation frameworks</li>
                  <li>Technical assistance for implementation</li>
                  <li>Strategic planning and change management</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <CardTitle>Advisory for International Organizations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img src={subtopicImages.international} alt="International Advisory" className="w-full mb-4 rounded-md" />
                <p className="text-gray-700 mb-4">
                  We partner with multilateral agencies and donor organizations to develop policy solutions aligned with global frameworks and local contexts.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>SDG-aligned policy frameworks</li>
                  <li>AU Agenda 2063 implementation strategies</li>
                  <li>Regional integration mechanisms</li>
                  <li>Country-specific analysis and recommendations</li>
                  <li>Development program design and evaluation</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Why Partner with CentreGED"
        subtitle="Key differentiators of our advisory services"
        background="white"
        centered={true}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <ListItemWithIcon
            icon={<BookOpen size={24} />}
            title="Deep Expertise"
            description="Our team combines academic rigor with practical experience across governance, economics, and public policy."
          />
          <ListItemWithIcon
            icon={<Database size={24} />}
            title="Data-Driven Approach"
            description="All recommendations are backed by robust data analysis, ensuring evidence-based decision making."
          />
          <ListItemWithIcon
            icon={<Users size={24} />}
            title="Stakeholder Engagement"
            description="We facilitate inclusive policy processes that incorporate diverse perspectives and build consensus."
          />
          <ListItemWithIcon
            icon={<Globe size={24} />}
            title="Global Best Practices"
            description="Access to international expertise and comparative case studies adapted to African contexts."
          />
          <ListItemWithIcon
            icon={<FileText size={24} />}
            title="Customized Solutions"
            description="Tailored approaches that address the specific needs, constraints, and opportunities of each client."
          />
          <ListItemWithIcon
            icon={<Building size={24} />}
            title="Implementation Focus"
            description="Practical recommendations with clear implementation roadmaps and ongoing support."
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Advisory Process"
        background="light"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-between max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-bold text-primary mb-2">Assessment</h3>
            <p className="text-gray-600">Comprehensive situation analysis and needs assessment</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-bold text-primary mb-2">Research</h3>
            <p className="text-gray-600">Evidence gathering and stakeholder consultations</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-bold text-primary mb-2">Recommendations</h3>
            <p className="text-gray-600">Development of tailored policy solutions</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-bold text-primary mb-2">Implementation</h3>
            <p className="text-gray-600">Support for execution and capacity building</p>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Transforming Policy Challenges"
        subtitle="Our advisory services provide actionable insights and capacity-building support for institutions."
        background="light"
      >
        <p className="text-gray-700">
          CentreGED's advisory services are tailored to address the unique challenges faced by policymakers and institutions. We combine evidence-based research with practical implementation strategies to drive impactful change.
        </p>
      </ContentSection>
    </div>
  );
};

export default AdvisoryServices;
