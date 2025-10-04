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
  PenTool,
  Globe,
  Calendar,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Hero,
  ContentSection,
  CardItem,
  ListItemWithIcon,
  CallToAction,
} from '@/components/PageComponents';

const CorporateTraining = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Hero
        title="Corporate & Institutional Training"
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        subtitle="Building capacity for excellence in governance and leadership."
      />

      <ContentSection
        title="Excellence Through Continuous Learning"
        subtitle="Our training philosophy and approach"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700">
              Continuous capacity building drives excellence in institutions.
            </p>
            <p className="text-gray-700">
              We blend theory, case studies, and interactive exercises.
            </p>
            <p className="text-gray-700">
              Programs are customized to your organization’s unique context.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Who We Serve"
        subtitle="Tailored training solutions for diverse organizations"
        background="light"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building size={24} />
                Public Sector Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Specialized programs for ministries and agencies to enhance
                service delivery.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Civil service leadership</li>
                <li>Policy formulation</li>
                <li>Financial management</li>
                <li>Digital transformation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users size={24} />
                Private Sector Organizations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Strengthening leadership and governance practices in businesses.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Corporate governance</li>
                <li>Strategic planning</li>
                <li>Policy advocacy</li>
                <li>ESG reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe size={24} />
                International Organizations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Capacity building for development agencies and NGOs.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Program design</li>
                <li>Intervention strategies</li>
                <li>Monitoring and evaluation</li>
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
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="governance">
            <AccordionTrigger className="flex items-center text-xl font-semibold text-primary">
              <Award size={24} className="mr-3" />
              Governance & Leadership
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700">
              <p>
                Programs develop skills and ethics for effective leadership.
              </p>
              <h4 className="font-bold">Modules include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ethical decision-making</li>
                <li>Board effectiveness</li>
                <li>Strategic vision</li>
                <li>Change management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="economic">
            <AccordionTrigger className="flex items-center text-xl font-semibold text-primary">
              <Target size={24} className="mr-3" />
              Economic & Policy
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700">
              <p>
                Practical tools for analyzing and implementing economic
                policies.
              </p>
              <h4 className="font-bold">Modules include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Budgeting and PFM</li>
                <li>Policy analysis</li>
                <li>Fiscal management</li>
                <li>Trade promotion</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="capacity">
            <AccordionTrigger className="flex items-center text-xl font-semibold text-primary">
              <Building size={24} className="mr-3" />
              Institutional Capacity
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700">
              <p>Strengthening systems and processes for performance.</p>
              <h4 className="font-bold">Modules include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organizational development</li>
                <li>Project management</li>
                <li>Monitoring systems</li>
                <li>Talent development</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sustainability">
            <AccordionTrigger className="flex items-center text-xl font-semibold text-primary">
              <Leaf size={24} className="mr-3" />
              Sustainability & Impact
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700">
              <p>Integrating ESG and social impact into strategy.</p>
              <h4 className="font-bold">Modules include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>ESG strategy</li>
                <li>CSR and shared value</li>
                <li>Climate planning</li>
                <li>Impact measurement</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technology">
            <AccordionTrigger className="flex items-center text-xl font-semibold text-primary">
              <Cpu size={24} className="mr-3" />
              Technology & Innovation
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-gray-700">
              <p>Leveraging digital solutions for governance efficiency.</p>
              <h4 className="font-bold">Modules include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital transformation</li>
                <li>Data-driven analytics</li>
                <li>AI applications</li>
                <li>Responsible tech use</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>

      <ContentSection
        title="Training Formats"
        subtitle="Flexible delivery options"
        background="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem
            title="On-Site Training"
            description="Delivered at your premises, tailored to your context."
            icon={<Building size={24} />}
          />
          <CardItem
            title="Virtual Training"
            description="Interactive online sessions with collaborative tools."
            icon={<MonitorSmartphone size={24} />}
          />
          <CardItem
            title="Customized Workshops"
            description="Focused sessions addressing specific challenges."
            icon={<PenTool size={24} />}
          />
          <CardItem
            title="Executive Retreats"
            description="Immersive learning experiences for leadership teams."
            icon={<Users size={24} />}
          />
        </div>
      </ContentSection>

      <ContentSection
        title="Why Choose CentreGED"
        subtitle="What sets our programs apart"
        background="white"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ListItemWithIcon
            icon={<GraduationCap size={24} />}
            title="Expert-Led"
            description="Facilitated by seasoned academics and industry experts."
          />
          <ListItemWithIcon
            icon={<Target size={24} />}
            title="Tailored Solutions"
            description="Content and exercises customized for your needs."
          />
          <ListItemWithIcon
            icon={<Globe size={24} />}
            title="Global Perspective"
            description="International best practices applied locally."
          />
          <ListItemWithIcon
            icon={<CheckCircle size={24} />}
            title="Practical Focus"
            description="Actionable insights for immediate application."
          />
          <ListItemWithIcon
            icon={<Users size={24} />}
            title="Collaborative"
            description="Peer learning and networking opportunities."
          />
          <ListItemWithIcon
            icon={<Calendar size={24} />}
            title="Flexible Scheduling"
            description="Training calendars that fit your timeline."
          />
        </div>
      </ContentSection>

      <ContentSection title="Our Training Process" background="light">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center flex-col text-center p-6 bg-white shadow-md rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              Needs Assessment
            </h3>
            <p className="text-gray-600">
              Identifying training requirements and goals
            </p>
          </div>
          <div className="flex items-center flex-col  text-center p-6 bg-white shadow-md rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              Program Design
            </h3>
            <p className="text-gray-600">
              Crafting customized curriculum and activities
            </p>
          </div>
          <div className="flex items-center flex-col  text-center p-6 bg-white shadow-md rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Delivery</h3>
            <p className="text-gray-600">
              Expert facilitation with interactive methods
            </p>
          </div>
          <div className="flex items-center flex-col text-center p-6 bg-white shadow-md rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              4
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Follow-Up</h3>
            <p className="text-gray-600">
              Impact assessment and ongoing support
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default CorporateTraining;
