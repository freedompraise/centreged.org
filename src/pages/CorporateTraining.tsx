import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  CheckCircle, 
  GraduationCap, 
  Building, 
  Leaf, 
  Cpu, 
  MonitorSmartphone, 
  Video, 
  Calendar,
  PenTool,
  Globe
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?corporate,training';
const trainingApproachImage = 'https://source.unsplash.com/random/800x600/?workshop,training';
const subtopicImages = {
  governance: 'https://source.unsplash.com/random/800x400/?leadership',
  economic: 'https://source.unsplash.com/random/800x400/?economics',
  capacity: 'https://source.unsplash.com/random/800x400/?development',
  sustainability: 'https://source.unsplash.com/random/800x400/?sustainability',
  technology: 'https://source.unsplash.com/random/800x400/?technology'
};

const CorporateTraining = () => {
  return (
    <div>
      <Hero
        title="Corporate & Institutional Training"
        subtitle="Building capacity for excellence in governance, economic management, and institutional leadership."
        buttonText="Request Training Information"
        buttonLink="/contact"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Excellence Through Continuous Learning"
        subtitle="Our training philosophy and approach"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              At CentreGED, we recognize that continuous capacity building is essential for excellence in governance, economic management, and institutional leadership. Our training programs are designed to equip organizations and their teams with the knowledge, skills, and tools needed to navigate complex challenges and drive sustainable success.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach is research-driven, practical, and results-oriented. We combine theoretical frameworks with real-world case studies, interactive exercises, and expert facilitation to ensure participants acquire both conceptual understanding and applicable skills.
            </p>
            <p className="text-gray-700">
              Each training program is developed by leading experts and experienced practitioners, and can be customized to address the specific needs, challenges, and contexts of your organization.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={trainingApproachImage} 
              alt="CentreGED Training Approach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Who We Serve"
        subtitle="Tailored training solutions for diverse organizations"
        background="light"
        centered={true}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                <span>Public Sector Institutions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Specialized training for government ministries, departments, agencies, and local authorities to enhance public service delivery and policy implementation.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Civil service leadership development</li>
                <li>Policy formulation and analysis</li>
                <li>Public financial management</li>
                <li>Digital government transformation</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span>Private Sector Organizations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Corporate training programs that strengthen leadership, improve governance practices, and enhance understanding of policy environments for business growth.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Corporate governance excellence</li>
                <li>Strategic planning and execution</li>
                <li>Policy navigation and advocacy</li>
                <li>ESG implementation and reporting</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <span>International Organizations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Capacity building for multilateral institutions, development agencies, and non-governmental organizations working on governance and economic development.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Program design and management</li>
                <li>Context-specific intervention strategies</li>
                <li>Monitoring, evaluation, and learning</li>
                <li>Cross-cultural collaboration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Training Areas"
        subtitle="Comprehensive programs addressing key competency needs"
        background="white"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="governance">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center">
                <Award className="mr-3 h-6 w-6" />
                Governance & Leadership Development
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Our governance and leadership programs develop the knowledge, skills, and ethical foundations needed for effective organizational leadership and sound governance practices.
                  </p>
                  <h4 className="font-bold text-primary mb-2">Training Modules:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Ethical Leadership and Decision-Making</li>
                    <li>Board Effectiveness and Governance Best Practices</li>
                    <li>Strategic Vision and Organizational Alignment</li>
                    <li>Public Sector Leadership Excellence</li>
                    <li>Accountability Systems and Transparency Frameworks</li>
                    <li>Change Management and Organizational Transformation</li>
                  </ul>
                  <p>
                    These modules can be delivered as standalone workshops or combined into comprehensive leadership development programs tailored to your organization's specific needs.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.governance} 
                    alt="Governance & Leadership" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="economic">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center">
                <Target className="mr-3 h-6 w-6" />
                Economic & Policy Training
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Our economic and policy training programs provide practical tools and frameworks for understanding, analyzing, and implementing effective economic policies and strategies.
                  </p>
                  <h4 className="font-bold text-primary mb-2">Training Modules:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Public Financial Management and Budgeting</li>
                    <li>Economic Policy Analysis and Evaluation</li>
                    <li>Fiscal Policy and Domestic Resource Mobilization</li>
                    <li>Trade and Investment Promotion Strategies</li>
                    <li>Monetary Policy and Financial Sector Development</li>
                    <li>Economic Statistics and Data Analysis for Decision-Making</li>
                  </ul>
                  <p>
                    These programs are designed for finance ministries, central banks, planning agencies, and other institutions involved in economic policy formulation and implementation.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.economic} 
                    alt="Economic & Policy Training" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="capacity">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center">
                <Building className="mr-3 h-6 w-6" />
                Institutional Capacity Building
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Our institutional capacity building programs strengthen the systems, processes, and capabilities needed for effective organizational performance and sustainable results.
                  </p>
                  <h4 className="font-bold text-primary mb-2">Training Modules:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Organizational Development and Structure Optimization</li>
                    <li>Strategic Planning and Implementation</li>
                    <li>Project Management and Results Delivery</li>
                    <li>Monitoring, Evaluation, and Learning Systems</li>
                    <li>Knowledge Management and Institutional Memory</li>
                    <li>HR Systems and Talent Development Frameworks</li>
                  </ul>
                  <p>
                    These programs help organizations build the internal capacity needed to achieve their mandates and strategic objectives effectively and efficiently.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.capacity} 
                    alt="Institutional Capacity Building" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="sustainability">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center">
                <Leaf className="mr-3 h-6 w-6" />
                Sustainability & Social Impact
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Our sustainability programs equip organizations with the knowledge and tools to integrate environmental, social, and governance considerations into their strategies and operations.
                  </p>
                  <h4 className="font-bold text-primary mb-2">Training Modules:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>ESG Strategy Development and Implementation</li>
                    <li>Corporate Social Responsibility and Shared Value</li>
                    <li>Sustainable Development Goals Integration</li>
                    <li>Climate Action Planning and Carbon Management</li>
                    <li>Social Impact Measurement and Reporting</li>
                    <li>Stakeholder Engagement and Community Relations</li>
                  </ul>
                  <p>
                    These programs help organizations enhance their social license to operate while contributing to sustainable development objectives.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.sustainability} 
                    alt="Sustainability & Social Impact" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="technology">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              <div className="flex items-center">
                <Cpu className="mr-3 h-6 w-6" />
                Technology & Innovation in Governance
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <p className="mb-4">
                    Our technology and innovation programs help organizations harness digital solutions and innovative approaches to enhance governance, service delivery, and operational efficiency.
                  </p>
                  <h4 className="font-bold text-primary mb-2">Training Modules:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Digital Transformation Strategy and Implementation</li>
                    <li>E-Government and Digital Public Services</li>
                    <li>Data-Driven Decision Making and Analytics</li>
                    <li>AI Applications in Governance and Management</li>
                    <li>Innovation Management and Organizational Agility</li>
                    <li>Digital Ethics and Responsible Technology Use</li>
                  </ul>
                  <p>
                    These programs prepare organizations to leverage technology effectively while managing associated risks and challenges.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={subtopicImages.technology} 
                    alt="Technology & Innovation" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>
      
      <ContentSection
        title="Training Formats"
        subtitle="Flexible delivery options to meet your organizational needs"
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem 
            title="On-Site Training"
            description="Delivered at your premises or preferred location, tailored to your organizational context and culture."
            icon={<Building size={24} />}
          />
          <CardItem 
            title="Virtual Training"
            description="Interactive online sessions using state-of-the-art digital learning platforms and collaborative tools."
            icon={<MonitorSmartphone size={24} />}
          />
          <CardItem 
            title="Customized Workshops"
            description="Focused sessions addressing specific challenges or competency needs identified by your organization."
            icon={<PenTool size={24} />}
          />
          <CardItem 
            title="Executive Retreats"
            description="Immersive learning experiences for leadership teams, combining training with strategic planning."
            icon={<Users size={24} />}
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Why Choose CentreGED"
        subtitle="What sets our training programs apart"
        background="white"
        centered={true}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ListItemWithIcon
            icon={<GraduationCap size={24} />}
            title="Expert-Led Training"
            description="Programs facilitated by seasoned academics, industry professionals, and policy experts with extensive practical experience."
          />
          <ListItemWithIcon
            icon={<Target size={24} />}
            title="Tailored Solutions"
            description="Customized content, case studies, and exercises designed specifically for your organization's context and challenges."
          />
          <ListItemWithIcon
            icon={<Globe size={24} />}
            title="Global Perspective"
            description="Training that incorporates international best practices while remaining relevant to African realities and contexts."
          />
          <ListItemWithIcon
            icon={<CheckCircle size={24} />}
            title="Practical Application"
            description="Focus on actionable insights and implementable solutions that participants can apply immediately to their work."
          />
          <ListItemWithIcon
            icon={<Users size={24} />}
            title="Collaborative Approach"
            description="Programs that foster peer learning, networking, and knowledge sharing among participants."
          />
          <ListItemWithIcon
            icon={<Calendar size={24} />}
            title="Flexible Scheduling"
            description="Training calendars designed to accommodate your organizational timetable and operational needs."
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Training Process"
        background="light"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-between max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-bold text-primary mb-2">Needs Assessment</h3>
            <p className="text-gray-600">Identifying specific training requirements and organizational goals</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-bold text-primary mb-2">Program Design</h3>
            <p className="text-gray-600">Creating customized curriculum and learning activities</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-bold text-primary mb-2">Delivery</h3>
            <p className="text-gray-600">Expert facilitation using interactive and engaging methods</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-bold text-primary mb-2">Follow-Up</h3>
            <p className="text-gray-600">Impact assessment and ongoing implementation support</p>
          </div>
        </div>
      </ContentSection>
      
      <CallToAction
        title="Ready to Transform Your Organization?"
        subtitle="Partner with CentreGED to develop customized training programs that build capacity and drive excellence."
        buttonText="Request Training Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default CorporateTraining;
