import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Award, 
  TrendingUp, 
  Briefcase, 
  Users, 
  Leaf, 
  Cpu, 
  Target, 
  FileText, 
  Globe,
  BarChart3,
  LineChart,
  Layers,
  PenTool,
  GraduationCap,
  BarChart,
  Download,
  ExternalLink,
  Building
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

// Import recharts components for the data visualization
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const headerImage = 'https://source.unsplash.com/random/1200x600/?research,policy';
const researchMethodologyImage = 'https://source.unsplash.com/random/800x600/?research,data';
const subtopicImages = {
  governance: 'https://source.unsplash.com/random/800x400/?leadership',
  economic: 'https://source.unsplash.com/random/800x400/?economics',
  political: 'https://source.unsplash.com/random/800x400/?politics',
  social: 'https://source.unsplash.com/random/800x400/?community',
  sustainable: 'https://source.unsplash.com/random/800x400/?sustainability',
  digital: 'https://source.unsplash.com/random/800x400/?technology'
};

// Sample data for the chart
const economicData = [
  { year: '2020', actual: 3.2, projected: 3.5 },
  { year: '2021', actual: 2.7, projected: 4.0 },
  { year: '2022', actual: 3.9, projected: 4.2 },
  { year: '2023', actual: 4.5, projected: 4.7 },
  { year: '2024', actual: 4.8, projected: 5.0 },
  { year: '2025', actual: null, projected: 5.3 },
];

const PolicyResearchAnalysis = () => {
  return (
    <div>
      <Hero
        title="Policy Research & Analysis"
        subtitle="Driving evidence-based policy solutions for governance, economic development, and public administration reforms across Africa."
        buttonText="Explore Our Research"
        buttonLink="/publications"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Our Research Approach"
        subtitle="Rigorous methodology combining data analysis, stakeholder engagement, and practical insights"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              CentreGED conducts high-quality, data-driven research that informs policy decisions, governance frameworks, and economic strategies. Our multidisciplinary approach combines quantitative and qualitative methods to provide comprehensive insights into complex policy challenges.
            </p>
            <p className="text-gray-700 mb-6">
              Our research is characterized by methodological rigor, contextual relevance, and practical applicability. We work closely with policymakers, practitioners, and stakeholders to ensure our findings address real-world needs and can be translated into actionable recommendations.
            </p>
            <p className="text-gray-700">
              With a pan-African perspective and global connections, our research contributes to both local policy development and international discourse on governance and economic transformation in Africa.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={researchMethodologyImage} 
              alt="CentreGED Research Methodology" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Research Focus Areas"
        subtitle="Explore our six key research streams addressing Africa's critical policy challenges"
        background="light"
      >
        <Tabs defaultValue="governance" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="governance" className="text-sm">Leadership & Governance</TabsTrigger>
            <TabsTrigger value="economic" className="text-sm">Economic Policies</TabsTrigger>
            <TabsTrigger value="political" className="text-sm">Political Economy</TabsTrigger>
            <TabsTrigger value="social" className="text-sm">Social Policy</TabsTrigger>
            <TabsTrigger value="sustainable" className="text-sm">Sustainable Development</TabsTrigger>
            <TabsTrigger value="digital" className="text-sm">Digital Transformation</TabsTrigger>
          </TabsList>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TabsContent value="governance" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Leadership & Governance Best Practices</h3>
                  <p className="text-gray-700 mb-4">
                    Our governance research explores institutional frameworks, ethical leadership principles, and best practices that promote transparency, accountability, and effectiveness in public administration.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Democratic institutions and election integrity</li>
                    <li>Anti-corruption strategies and transparency initiatives</li>
                    <li>Public sector performance and civil service reforms</li>
                    <li>Decentralization and local governance effectiveness</li>
                    <li>Leadership ethics and institutional culture development</li>
                  </ul>
                  <p className="text-gray-700">
                    This research stream directly informs our advisory services and training programs on governance reform, helping policymakers implement effective systems that build public trust and deliver quality services.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.governance} 
                    alt="Governance Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="economic" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Economic Policies for Sustainable Growth</h3>
                  <p className="text-gray-700 mb-4">
                    Our economic policy research analyzes macroeconomic frameworks, fiscal strategies, and sectoral policies that promote inclusive growth, resilience, and structural transformation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Monetary policy and financial sector development</li>
                    <li>Fiscal management and domestic resource mobilization</li>
                    <li>Trade policy, regional integration, and global value chains</li>
                    <li>Industrial policy and economic diversification</li>
                    <li>SME development and entrepreneurship ecosystems</li>
                  </ul>
                  <div className="h-64 w-full mt-8 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={economicData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="actual" name="Actual Growth (%)" fill="#2A5C82" />
                        <Bar dataKey="projected" name="Projected Growth (%)" fill="#D4AF37" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Sample: Sub-Saharan Africa GDP Growth Rates (2020-2025)
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.economic} 
                    alt="Economic Policy Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="political" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Political Economy & Public Administration Reforms</h3>
                  <p className="text-gray-700 mb-4">
                    This research stream examines the interplay between political dynamics and economic outcomes, with a focus on institutional reforms that enhance policy effectiveness and service delivery.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Political economy of policy reforms and implementation</li>
                    <li>Bureaucratic efficiency and administrative modernization</li>
                    <li>Regulatory frameworks and business environment reforms</li>
                    <li>Public-private partnerships and governance models</li>
                    <li>Political institutions and economic development</li>
                  </ul>
                  <p className="text-gray-700">
                    Our political economy analyses provide context-specific insights that help navigate complex reform processes and build coalitions for sustainable change.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.political} 
                    alt="Political Economy Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Social Policy & Welfare Strategies</h3>
                  <p className="text-gray-700 mb-4">
                    Our social policy research focuses on effective approaches to education, healthcare, social protection, and inclusion that reduce inequality and enhance human capital development.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Education access, quality, and workforce readiness</li>
                    <li>Healthcare systems strengthening and financing</li>
                    <li>Social protection mechanisms and safety nets</li>
                    <li>Gender equity and women's economic empowerment</li>
                    <li>Youth development and demographic dividend strategies</li>
                  </ul>
                  <p className="text-gray-700">
                    This stream informs our advisory work on social sector reforms and contributes to holistic development strategies that balance economic growth with social welfare.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.social} 
                    alt="Social Policy Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sustainable" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Sustainable Development Models</h3>
                  <p className="text-gray-700 mb-4">
                    This research explores policy approaches that balance economic progress with environmental sustainability and climate resilience, aligning with global frameworks such as the SDGs.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Climate change adaptation and mitigation policies</li>
                    <li>Renewable energy transition and green growth</li>
                    <li>Natural resource governance and sustainable management</li>
                    <li>Circular economy and sustainable production models</li>
                    <li>Climate finance and green investment frameworks</li>
                  </ul>
                  <p className="text-gray-700">
                    Our sustainability research provides actionable strategies for policymakers to address environmental challenges while pursuing inclusive economic development.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.sustainable} 
                    alt="Sustainable Development Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">AI & Digital Transformation in Governance</h3>
                  <p className="text-gray-700 mb-4">
                    This cutting-edge research stream investigates how emerging technologies, particularly AI and digital platforms, can transform public administration and policy implementation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>E-governance frameworks and digital public services</li>
                    <li>AI applications in policy analysis and decision-making</li>
                    <li>Digital identity systems and inclusive services</li>
                    <li>Smart city development and urban governance</li>
                    <li>Digital economy regulation and innovation policy</li>
                  </ul>
                  <p className="text-gray-700">
                    Our technology-focused research helps policymakers harness digital opportunities while addressing challenges related to access, privacy, and digital rights.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.digital} 
                    alt="Digital Transformation Research" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </ContentSection>
      
      <ContentSection
        title="Research Methodology"
        subtitle="Our rigorous approach to generating evidence-based insights"
        background="white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <span>Problem Definition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Precise scoping of research questions in collaboration with key stakeholders to ensure relevance and applicability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <span>Data Collection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Comprehensive gathering of quantitative and qualitative data through surveys, interviews, case studies, and secondary sources.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span>Rigorous Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Advanced analytical techniques combining statistical methods, econometric modeling, and qualitative frameworks.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span>Policy Translation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Converting research findings into practical, implementable policy recommendations through stakeholder engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Research Impact"
        subtitle="How our research drives positive change across Africa"
        background="light"
        centered={true}
      >
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <CardItem 
            title="Informing Policy Decisions"
            description="Our research provides evidence-based insights that help policymakers develop more effective governance frameworks and economic strategies."
            icon={<Briefcase size={24} />}
          />
          <CardItem 
            title="Building Institutional Capacity"
            description="We strengthen the capability of African institutions to conduct their own research and analysis for sustainable policy development."
            icon={<Building size={24} />}
          />
          <CardItem 
            title="Advancing Knowledge"
            description="Our publications contribute to the global discourse on governance, economic development, and public policy in African contexts."
            icon={<Award size={24} />}
          />
          <CardItem 
            title="Supporting SDGs & Agenda 2063"
            description="Research aligns with and supports implementation of continental and global development frameworks."
            icon={<Globe size={24} />}
          />
          <CardItem 
            title="Influencing Practice"
            description="Our findings shape training curricula, advisory services, and practical implementation approaches."
            icon={<Users size={24} />}
          />
          <CardItem 
            title="Facilitating Dialogue"
            description="Research creates platforms for evidence-based discussions among diverse stakeholders on critical policy issues."
            icon={<Globe size={24} />}
          />
        </div>
      </ContentSection>
    </div>
  );
};

export default PolicyResearchAnalysis;
