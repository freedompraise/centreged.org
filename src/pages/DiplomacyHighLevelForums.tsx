
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Presentation, GraduationCap } from 'lucide-react';

const headerImage = 'https://source.unsplash.com/random/1200x600/?conference,summit';
const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

// Forum images
const forumImages = {
  aef: 'https://source.unsplash.com/random/800x400/?economic,forum',
  nef: 'https://source.unsplash.com/random/800x400/?national,economy',
  nlc: 'https://source.unsplash.com/random/800x400/?leadership,colloquium'
};

const DiplomacyHighLevelForums = () => {
  return (
    <div>
      <motion.section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(42, 92, 130, 0.9)), url(${headerImage})` }}
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shaping Africa's Future Through Dialogue</h1>
            <p className="text-xl">
              Our premier forums provide platforms for stakeholders to convene, deliberate, and shape policies that drive Africa's progress.
            </p>
          </div>
        </div>
      </motion.section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle 
            title="Premier Events" 
            subtitle="Flagship forums bringing together influential leaders to address pressing challenges"
          />
          
          <Tabs defaultValue="aef" className="w-full mt-8">
            <TabsList className="w-full mb-8 grid grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="aef" className="text-base py-3">Africa Economic Forum</TabsTrigger>
              <TabsTrigger value="nef" className="text-base py-3">National Economic Forum</TabsTrigger>
              <TabsTrigger value="nlc" className="text-base py-3">National Leadership Colloquium</TabsTrigger>
            </TabsList>
            
            <TabsContent value="aef" className="space-y-6">
              <img 
                src={forumImages.aef} 
                alt="Africa Economic Forum" 
                className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
              />
              <h3 className="text-2xl font-bold text-primary">Africa Economic Forum (AEF)</h3>
              <p className="text-gray-700 mb-4">
                The Africa Economic Forum (AEF) is our flagship continental event that brings together economic leaders, policymakers, and investors to discuss emerging trends and opportunities, positioning Africa as a global economic powerhouse.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Key Participants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ministers of Finance and Economic Development</li>
                      <li>Central Bank Governors</li>
                      <li>Heads of Financial Institutions</li>
                      <li>Business Leaders and Executives</li>
                      <li>International Development Partners</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Presentation className="h-5 w-5 mr-2 text-primary" />
                      Focus Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Economic Integration and Trade</li>
                      <li>Investment Climate and Capital Markets</li>
                      <li>Digital Economy and Financial Innovation</li>
                      <li>Sustainable Economic Development</li>
                      <li>Public-Private Partnerships</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="nef" className="space-y-6">
              <img 
                src={forumImages.nef} 
                alt="National Economic Forum" 
                className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
              />
              <h3 className="text-2xl font-bold text-primary">National Economic Forum (NEF)</h3>
              <p className="text-gray-700 mb-4">
                The National Economic Forum (NEF) focuses on addressing specific national economic challenges and fostering dialogue between government and the private sector to catalyze reforms and stimulate inclusive growth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Key Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Policy Recommendations for Economic Growth</li>
                      <li>Strategies for Business Environment Reform</li>
                      <li>Frameworks for Private Sector Development</li>
                      <li>Action Plans for Investment Promotion</li>
                      <li>Measures for Fiscal Sustainability</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Engagement Format
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>High-level Panel Discussions</li>
                      <li>Breakout Sessions for In-depth Analysis</li>
                      <li>Public-Private Dialogue Platforms</li>
                      <li>Expert Presentations on Key Economic Issues</li>
                      <li>Networking Opportunities for Stakeholders</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="nlc" className="space-y-6">
              <img 
                src={forumImages.nlc} 
                alt="National Leadership Colloquium" 
                className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
              />
              <h3 className="text-2xl font-bold text-primary">National Leadership Colloquium (NLC)</h3>
              <p className="text-gray-700 mb-4">
                The National Leadership Colloquium (NLC) is dedicated to cultivating transformational leadership by convening discussions on ethics, strategic management, and best practices in public and private sectors. It serves as a platform for nurturing visionary leadership across Africa.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      Learning Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Governance Excellence and Ethical Leadership</li>
                      <li>Strategic Planning and Decision Making</li>
                      <li>Emerging Leadership Paradigms</li>
                      <li>Artificial Intelligence in Leadership</li>
                      <li>Youth and Women in Leadership</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Target Participants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Senior Government Officials</li>
                      <li>Corporate Executives and Board Members</li>
                      <li>Civil Society Leaders</li>
                      <li>Emerging Leaders and Young Professionals</li>
                      <li>Academic and Research Institutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </Section>

      <Section background="light">
        <motion.div {...fadeIn}>
          <SectionTitle 
            title="Why Our Forums Matter" 
            subtitle="Creating impact through high-level dialogue and collaboration"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Influencing Policy Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our forums provide a platform for evidence-based discussions that directly inform policy formulation and implementation across African governments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Positioning Africa Globally</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  By convening thought leaders and decision-makers, we amplify Africa's voice in global economic dialogues and showcase the continent's potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Fostering Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  These events create unique networking opportunities that lead to partnerships, investments, and collaborative initiatives across sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle 
            title="Upcoming Forums" 
            subtitle="Mark your calendar for these transformative events"
          />
          
          <div className="bg-secondary rounded-lg p-6 mt-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded p-2 mr-4 flex-shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Africa Economic Forum 2025</h3>
                  <p className="text-gray-600">September 15-17, 2025 • Accra, Ghana</p>
                  <p className="mt-1">Theme: "Accelerating Digital Transformation for Economic Resilience"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white rounded p-2 mr-4 flex-shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">National Economic Forum</h3>
                  <p className="text-gray-600">November 8-9, 2025 • Lagos, Nigeria</p>
                  <p className="mt-1">Theme: "Building Sustainable Financial Systems for Inclusive Growth"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white rounded p-2 mr-4 flex-shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">National Leadership Colloquium</h3>
                  <p className="text-gray-600">January 22-24, 2026 • Nairobi, Kenya</p>
                  <p className="mt-1">Theme: "Ethical Leadership in the Age of Digital Transformation"</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Register for Upcoming Forums
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default DiplomacyHighLevelForums;
