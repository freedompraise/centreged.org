import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  MessageCircle,
  Globe,
  GraduationCap,
  FileText,
  Building,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Hero,
  ContentSection,
  ListItemWithIcon,
} from '@/components/PageComponents';

const scrollIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DiplomacyHighLevelForums = () => {
  const pastEvents = [
    {
      title: 'Africa Economic Forum 2024',
      date: 'September 15-17, 2024',
      location: 'Kigali, Rwanda',
      description:
        'Focused on ‘Digital Transformation for Economic Resilience’.',
    },
    {
      title: 'National Economic Forum 2024',
      date: 'June 8-9, 2024',
      location: 'Abuja, Nigeria',
      description:
        'Centered on ‘Sustainable Financial Systems for Inclusive Growth.’',
    },
    {
      title: 'National Leadership Colloquium 2023',
      date: 'November 22-24, 2023',
      location: 'Nairobi, Kenya',
      description: 'Explored ‘Ethical Leadership in the Digital Age.’',
    },
  ];

  return (
    <div className="flex flex-col space-y-12">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="Shaping Africa's Future Through Dialogue"
        subtitle="Premier forums convening stakeholders to drive progress."
      />

      <motion.div {...scrollIn}>
        <ContentSection
          title="Fostering Thought Leadership"
          subtitle="Creating spaces for leaders to address Africa’s challenges"
          background="white"
        >
          <p className="max-w-3xl mx-left text-gray-700">
            CentreGED hosts high-level forums that unite policymakers, business
            executives, academics, and civil society to deliberate on
            governance, economic development, and leadership across Africa.
          </p>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Event Series"
          subtitle="Our flagship and national forums"
          background="light"
        >
          <Tabs defaultValue="aef" className="w-full">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 text-sm">
              <TabsTrigger value="aef">Africa Economic Forum</TabsTrigger>
              <TabsTrigger value="nef">National Economic Forum</TabsTrigger>
              <TabsTrigger value="nlc">
                National Leadership Colloquium
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aef" className="space-y-4">
              <h3 className="text-lg font-bold text-primary">
                Africa Economic Forum (AEF)
              </h3>
              <p className="text-gray-700">
                Continental summit positioning Africa as a global economic
                leader.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Users size={16} /> Key Participants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Finance ministers, central bank governors, business
                    executives, and development partners.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <GraduationCap size={16} /> Focus Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Economic integration, digital economy, sustainable
                    development, and public-private partnerships.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nef" className="space-y-4">
              <h3 className="text-lg font-bold text-primary">
                National Economic Forum (NEF)
              </h3>
              <p className="text-gray-700">
                Country-specific forum addressing national economic reforms.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar size={16} /> Key Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Policy recommendations, reform frameworks, and investment
                    plans.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Users size={16} /> Engagement Format
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Panel discussions, breakout sessions, and public-private
                    dialogues.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nlc" className="space-y-4">
              <h3 className="text-lg font-bold text-primary">
                National Leadership Colloquium (NLC)
              </h3>
              <p className="text-gray-700">
                Intensive forum on ethics, strategic management, and leadership
                best practices.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <GraduationCap size={16} /> Learning Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Ethical leadership, strategic planning, AI in governance,
                    and youth leadership.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Users size={16} /> Target Participants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 text-sm">
                    Senior officials, executives, civil society leaders, and
                    emerging professionals.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Why Our Forums Matter"
          subtitle="Driving policy, positioning Africa, and fostering collaboration"
          background="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Influencing Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                Evidence-based dialogue that informs government policymaking.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Global Positioning</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                Amplifying Africa’s voice in international economic forums.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                Networking opportunities leading to partnerships and
                investments.
              </CardContent>
            </Card>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Past Events"
          subtitle="Recent forums and outcomes"
          background="light"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((e, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm space-y-1">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {e.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe size={14} /> {e.location}
                  </div>
                  <p>{e.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </motion.div>
    </div>
  );
};

export default DiplomacyHighLevelForums;
