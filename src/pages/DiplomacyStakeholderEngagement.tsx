import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Hero,
  ContentSection,
  CardItem,
  ListItemWithIcon,
  CallToAction,
} from '@/components/PageComponents';

const scrollIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DiplomacyStakeholderEngagement = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="Stakeholder Engagement & Policy Advocacy"
        subtitle="Building bridges to drive inclusive policy."
      />

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Approach to Engagement"
          subtitle="Inclusive dialogue and participatory processes"
          background="white"
        >
          <div className="space-y-6">
            <p className="text-gray-700">
              Effective policy requires active stakeholder engagement.
            </p>
            <p className="text-gray-700">
              We connect government, private sector, civil society, and
              citizens.
            </p>
            <p className="text-gray-700">
              Our advocacy is evidence-based and focused on tangible outcomes.
            </p>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Core Engagement Activities"
          subtitle="Initiatives that influence policy outcomes"
          background="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...scrollIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building size={24} />
                    Public-Private Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Structured dialogues between governments and businesses.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Policy roundtables with public and private leaders</li>
                    <li>Reform working groups</li>
                    <li>Dialogue platforms for sector policies</li>
                    <li>Joint implementation initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...scrollIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Megaphone size={24} />
                    Policy Advocacy & Legislative Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>Evidence-based advocacy campaigns with legislators.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Policy briefs and position papers</li>
                    <li>Legislative analysis and drafting support</li>
                    <li>Advocacy for governance improvements</li>
                    <li>Parliamentary engagement on key issues</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...scrollIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <UserPlus size={24} />
                    Grassroots Mobilization & Citizen Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>Empowering communities to influence policy decisions.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Community consultations</li>
                    <li>Citizen awareness programs</li>
                    <li>Feedback mechanisms</li>
                    <li>Capacity building for local groups</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...scrollIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe size={24} />
                    Strategic Partnerships & Regional Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>Alliances to strengthen Africa's policy influence.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Continental policy networks</li>
                    <li>Economic integration initiatives</li>
                    <li>Policy harmonization efforts</li>
                    <li>International knowledge exchange</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Engagement in Action"
          subtitle="Case study of our stakeholder engagement"
          background="white"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Case Study: Trade Policy Reform Initiative
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                <p>
                  <span className="font-semibold">Challenge:</span> Outdated
                  trade policies limiting integration.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                <p>
                  <span className="font-semibold">Approach:</span>{' '}
                  Public-private dialogue platform for policy reform.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                <p>
                  <span className="font-semibold">Action:</span> Workshops,
                  analysis, and drafting of new regulations.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1" />
                <p>
                  <span className="font-semibold">Results:</span> 24% increase
                  in regional trade within 18 months.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Engagement Impact"
          subtitle="Measurable outcomes from our initiatives"
          background="light"
          centered
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-primary">40+</h3>
              <p className="text-gray-600">Policy reforms influenced</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-primary">12,000+</h3>
              <p className="text-gray-600">Stakeholders engaged</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <Handshake className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-primary">25+</h3>
              <p className="text-gray-600">Regional partnerships formed</p>
            </div>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Engagement Methodology"
          subtitle="Our structured approach"
          background="white"
        >
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:flex-row gap-4 max-w-7xl mx-auto">
            {[
              'Stakeholder Mapping',
              'Evidence Gathering',
              'Engagement Design',
              'Facilitated Dialogue',
              'Implementation',
            ].map((step, i) => (
              <div
                key={i}
                className="flex-1 bg-secondary p-6 rounded-lg text-center shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{step}</h3>
                <p className="text-gray-600">
                  {step === 'Stakeholder Mapping' &&
                    'Identifying key actors and interests.'}
                  {step === 'Evidence Gathering' &&
                    'Research-based policy analysis.'}
                  {step === 'Engagement Design' &&
                    'Creating participatory processes.'}
                  {step === 'Facilitated Dialogue' &&
                    'Building consensus and outcomes.'}
                  {step === 'Implementation' &&
                    'Supporting action and monitoring.'}
                </p>
              </div>
            ))}
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Partner With Us"
          subtitle="Support for your advocacy needs"
          background="light"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardItem
              title="Engagement Facilitation"
              description="Expert-led multi-stakeholder dialogues."
              icon={<Users size={24} />}
            />
            <CardItem
              title="Policy Advocacy Support"
              description="Technical assistance for advocacy campaigns."
              icon={<Megaphone size={24} />}
            />
            <CardItem
              title="Consultation Design"
              description="Inclusive processes to capture diverse views."
              icon={<MessageCircle size={24} />}
            />
            <CardItem
              title="Coalition Building"
              description="Strengthening policy coalitions and networks."
              icon={<Handshake size={24} />}
            />
            <CardItem
              title="Capacity Development"
              description="Training for effective engagement."
              icon={<Users size={24} />}
            />
            <CardItem
              title="Impact Assessment"
              description="Measuring policy influence."
              icon={<FileText size={24} />}
            />
          </div>
        </ContentSection>
      </motion.div>

      <ContentSection
        title="Building Bridges"
        subtitle="Connecting diverse groups for policy impact"
        background="light"
      >
        <p className="text-gray-700">
          Our initiatives unite policymakers, community leaders, and experts for
          inclusive policy development.
        </p>
      </ContentSection>
    </div>
  );
};

export default DiplomacyStakeholderEngagement;
