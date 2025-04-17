import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Megaphone, 
  UserPlus, 
  Globe, 
  FileText, 
  Check, 
  MessageCircle, 
  Building, 
  Handshake, 
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/button';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?diplomacy,engagement';
const engagementApproachImage = 'https://source.unsplash.com/random/800x600/?meeting,collaboration';
const caseStudyImage = 'https://source.unsplash.com/random/800x400/?policy,reform';

const DiplomacyStakeholderEngagement = () => {
  return (
    <div>
      <Hero
        title="Stakeholder Engagement & Policy Advocacy"
        subtitle="Building bridges and fostering dialogue to drive inclusive policy development and implementation."
        buttonText="Partner With Us"
        buttonLink="/contact"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Our Approach to Engagement"
        subtitle="Fostering inclusive dialogue and participatory policy processes"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              At CentreGED, we believe that effective policy development and implementation require the active engagement of diverse stakeholders. Our stakeholder engagement and policy advocacy initiatives create platforms for inclusive dialogue, consensus-building, and collaborative action.
            </p>
            <p className="text-gray-700 mb-6">
              We facilitate engagement across the policy ecosystem—connecting government entities, private sector actors, civil society organizations, and citizens to bridge policy gaps and foster solutions that reflect multiple perspectives and interests.
            </p>
            <p className="text-gray-700">
              Our advocacy efforts are evidence-based, constructive, and focused on achieving tangible policy outcomes that promote good governance, sustainable economic development, and social inclusion throughout Africa.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={engagementApproachImage} 
              alt="CentreGED Engagement Approach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Core Engagement Activities"
        subtitle="Strategic initiatives that connect stakeholders and influence policy outcomes"
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
                <CardTitle className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  Public-Private Sector Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We facilitate structured dialogues and partnerships between governments and businesses to address policy gaps and create enabling environments for sustainable growth.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Policy Roundtables that bring together public officials and business leaders</li>
                  <li>Business Environment Reform Working Groups</li>
                  <li>Public-Private Dialogue Platforms on sectoral policies</li>
                  <li>Joint implementation initiatives for policy reforms</li>
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
                <CardTitle className="flex items-center gap-3">
                  <Megaphone className="h-6 w-6 text-primary" />
                  Policy Advocacy & Legislative Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We support evidence-based advocacy campaigns and engage with legislative bodies to promote policies that foster good governance and economic development.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Policy briefs and position papers on critical reform issues</li>
                  <li>Legislative analysis and drafting support</li>
                  <li>Advocacy campaigns for economic reforms and governance improvements</li>
                  <li>Parliamentary engagement on key policy issues</li>
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
                <CardTitle className="flex items-center gap-3">
                  <UserPlus className="h-6 w-6 text-primary" />
                  Grassroots Mobilization & Citizen Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We empower communities through grassroots mobilization initiatives that ensure citizens have meaningful input in policy decisions that affect their lives.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Community consultations on policy development</li>
                  <li>Citizen awareness and education programs</li>
                  <li>Feedback mechanisms for policy implementation</li>
                  <li>Capacity building for community-based organizations</li>
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
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  Strategic Partnerships & Regional Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We build strategic alliances with regional and international organizations to strengthen Africa's position in global policy dialogues and leverage collective expertise.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Continental policy networks and coalitions</li>
                  <li>Regional economic integration initiatives</li>
                  <li>Cross-border policy harmonization efforts</li>
                  <li>International partnerships for knowledge exchange</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Engagement in Action"
        subtitle="A case study of our stakeholder engagement approach"
        background="white"
      >
        <div className="bg-secondary p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Case Study: Trade Policy Reform Initiative</h3>
              <p className="text-gray-700 mb-4">
                CentreGED facilitated a multi-stakeholder engagement process to support the development and implementation of trade policy reforms in a West African nation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Challenge:</span> Outdated trade policies creating barriers for businesses and limiting regional integration.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Approach:</span> Established a Public-Private Dialogue platform bringing together government officials, business associations, border agencies, and civil society.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Action:</span> Conducted policy analysis, facilitated consensus-building workshops, and supported drafting of revised trade regulations.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Results:</span> Reformed policies adopted, reducing trade barriers, streamlining processes, and increasing regional trade volumes by 24% within 18 months.</p>
                </div>
              </div>
              <Button variant="primary" size="sm" className="mt-2">
                Read Full Case Study
                <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </div>
            <div>
              <img 
                src={caseStudyImage} 
                alt="Trade Policy Reform Case Study" 
                className="w-full rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Engagement Impact"
        subtitle="Measurable outcomes from our stakeholder engagement initiatives"
        background="light"
        centered={true}
      >
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">40+</h3>
            <p className="text-gray-600">Policy reforms influenced through our stakeholder engagement initiatives</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">12,000+</h3>
            <p className="text-gray-600">Stakeholders engaged through our dialogue platforms and consultations</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
            <p className="text-gray-600">Strategic partnerships formed with regional and international organizations</p>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Engagement Methodology"
        subtitle="Our structured approach to effective stakeholder engagement"
        background="white"
      >
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          <div className="flex-1 bg-secondary p-6 rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-bold text-primary mb-2">Stakeholder Mapping</h3>
            <p className="text-gray-600">Identifying key actors, interests, and influence levels</p>
          </div>
          
          <div className="flex-1 bg-secondary p-6 rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-bold text-primary mb-2">Evidence Gathering</h3>
            <p className="text-gray-600">Research-based analysis of policy issues and impact</p>
          </div>
          
          <div className="flex-1 bg-secondary p-6 rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-bold text-primary mb-2">Engagement Design</h3>
            <p className="text-gray-600">Creating appropriate platforms and processes</p>
          </div>
          
          <div className="flex-1 bg-secondary p-6 rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-bold text-primary mb-2">Facilitated Dialogue</h3>
            <p className="text-gray-600">Building consensus and actionable outcomes</p>
          </div>
          
          <div className="flex-1 bg-secondary p-6 rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
            <h3 className="text-lg font-bold text-primary mb-2">Implementation</h3>
            <p className="text-gray-600">Supporting action and monitoring results</p>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Partner With Us"
        subtitle="How we can support your engagement and advocacy needs"
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardItem 
            title="Stakeholder Engagement Facilitation"
            description="Expert facilitation of multi-stakeholder dialogue processes and consensus-building initiatives."
            icon={<Users size={24} />}
          />
          <CardItem 
            title="Policy Advocacy Support"
            description="Strategic guidance and technical assistance for evidence-based advocacy campaigns."
            icon={<Megaphone size={24} />}
          />
          <CardItem 
            title="Public Consultation Design"
            description="Development of inclusive consultation processes that capture diverse perspectives."
            icon={<MessageCircle size={24} />}
          />
          <CardItem 
            title="Coalition Building"
            description="Support for forming and strengthening policy coalitions and advocacy networks."
            icon={<Handshake size={24} />}
          />
          <CardItem 
            title="Capacity Development"
            description="Training and coaching for effective stakeholder engagement and policy influence."
            icon={<Users size={24} />}
          />
          <CardItem 
            title="Impact Assessment"
            description="Evaluation of engagement initiatives and measurement of policy influence."
            icon={<FileText size={24} />}
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Building Bridges"
        subtitle="Our stakeholder engagement initiatives foster collaboration and dialogue."
        background="light"
      >
        <p className="text-gray-700">
          CentreGED's stakeholder engagement programs are designed to connect diverse groups, ensuring inclusive policy development and effective advocacy. By bringing together policymakers, community leaders, and industry experts, we create platforms for meaningful dialogue and collaboration.
        </p>
      </ContentSection>
    </div>
  );
};

export default DiplomacyStakeholderEngagement;
