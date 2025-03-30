
import React from 'react';
import { Book, BookOpen, FileText, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';

const Publications = () => {
  return (
    <div>
      {/* Publications Hero */}
      <section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(42, 92, 130, 0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Research Publications
            </motion.h1>
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Groundbreaking insights and evidence-based analysis to shape Africa's future
            </motion.p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <AlertCircle className="h-16 w-16 text-primary" />
            </div>
            <SectionTitle 
              title="Publications Coming Soon" 
              centered={true}
            />
            <p className="text-lg mb-8">
              Our team of researchers is currently working on groundbreaking publications that will provide valuable insights into governance, economy, and development in Africa. Stay tuned for our upcoming releases.
            </p>
            
            <div className="space-y-6 max-w-2xl mx-auto mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Policy Analysis Series</span>
                  <span>75% Complete</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Economic Outlook Reports</span>
                  <span>60% Complete</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Governance Assessment Index</span>
                  <span>40% Complete</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Subscribe for Updates</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded border border-gray-300 flex-grow"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Publication Categories */}
      <Section background="light">
        <SectionTitle 
          title="Upcoming Publication Categories" 
          subtitle="Explore the key areas where our research will focus"
          centered={true}
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Book className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Policy Papers</h3>
            <p className="text-gray-600 mb-4">
              In-depth analysis of policy frameworks and their implications for African governance and development.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="topics">
                <AccordionTrigger>Upcoming Topics</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Governance Reform in West African States</li>
                    <li>Public-Private Partnerships for Infrastructure</li>
                    <li>Digital Transformation in Public Administration</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Research Journals</h3>
            <p className="text-gray-600 mb-4">
              Peer-reviewed academic publications focusing on economic policy, governance, and sustainable development.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="topics">
                <AccordionTrigger>Upcoming Topics</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>African Economic Integration and Trade</li>
                    <li>Leadership Models for Sustainable Growth</li>
                    <li>Climate Policy and Economic Resilience</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">White Papers</h3>
            <p className="text-gray-600 mb-4">
              Authoritative reports on complex issues providing background information and proposed solutions.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="topics">
                <AccordionTrigger>Upcoming Topics</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Artificial Intelligence in African Governance</li>
                    <li>Youth Empowerment and Economic Opportunity</li>
                    <li>Financial Inclusion Strategies for Rural Communities</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </Section>

      {/* Research Methodology Section */}
      <Section>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <SectionTitle 
              title="Our Research Methodology" 
              subtitle="Rigorous processes that ensure quality and relevance"
            />
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. Problem Identification</h4>
                <p>We identify critical challenges facing African governance and economic development through stakeholder consultations and needs assessments.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. Data Collection & Analysis</h4>
                <p>Our researchers employ rigorous qualitative and quantitative methods to gather and analyze data from diverse sources.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. Peer Review</h4>
                <p>All publications undergo thorough peer review by experts in relevant fields to ensure accuracy and quality.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. Policy Recommendations</h4>
                <p>We formulate evidence-based recommendations that are practical, impactful, and aligned with African realities.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605496036006-5a8641b5c470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Research Process" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Excellence in Research</h3>
                  <p>Our commitment to methodological rigor and ethical standards ensures our research stands up to international scrutiny.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Publications;
