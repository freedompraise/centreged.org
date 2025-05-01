import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
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
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import {
  Hero,
  ContentSection,
  CardItem,
  ListItemWithIcon,
  CallToAction
} from '@/components/PageComponents'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const economicData = [
  { year: '2020', actual: 3.2, projected: 3.5 },
  { year: '2021', actual: 2.7, projected: 4.0 },
  { year: '2022', actual: 3.9, projected: 4.2 },
  { year: '2023', actual: 4.5, projected: 4.7 },
  { year: '2024', actual: 4.8, projected: 5.0 },
  { year: '2025', actual: null, projected: 5.3 }
]

const PolicyResearchAnalysis = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Hero
        backgroundImage='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
        title="Policy Research & Analysis"
        subtitle="Driving evidence-based policy solutions for Africa."
        buttonText="Explore Our Research"
        buttonLink="/publications"
      />

      <ContentSection
        title="Our Research Approach"
        subtitle="Data analysis meets stakeholder engagement"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700">
              CentreGED conducts high-quality research that informs policy.
            </p>
            <p className="text-gray-700">
              We combine quantitative and qualitative methods for deep insights.
            </p>
            <p className="text-gray-700">
              Our pan-African perspective connects local and global discourse.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Research Focus Areas"
        subtitle="Six streams tackling Africa’s key challenges"
        background="light"
      >
        <Tabs defaultValue="governance" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
            <TabsTrigger value="governance" className="text-sm">
              Leadership & Governance
            </TabsTrigger>
            <TabsTrigger value="economic" className="text-sm">
              Economic Policies
            </TabsTrigger>
            <TabsTrigger value="political" className="text-sm">
              Political Economy
            </TabsTrigger>
            <TabsTrigger value="social" className="text-sm">
              Social Policy
            </TabsTrigger>
            <TabsTrigger value="sustainable" className="text-sm">
              Sustainable Development
            </TabsTrigger>
            <TabsTrigger value="digital" className="text-sm">
              Digital Transformation
            </TabsTrigger>
          </TabsList>

          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <TabsContent value="governance" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Leadership & Governance Best Practices
              </h3>
              <p className="text-gray-700">
                We explore frameworks that drive transparency and accountability.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Election integrity strategies</li>
                <li>Anti-corruption initiatives</li>
                <li>Civil service reforms</li>
                <li>Local governance effectiveness</li>
                <li>Leadership ethics development</li>
              </ul>
              <p className="text-gray-700">
                This informs our advisory services on governance reform.
              </p>
            </TabsContent>

            <TabsContent value="economic" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Economic Policies for Growth
              </h3>
              <p className="text-gray-700">
                We analyze fiscal and monetary frameworks for inclusive growth.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Monetary policy development</li>
                <li>Domestic resource mobilization</li>
                <li>Regional trade integration</li>
                <li>Industrial diversification</li>
                <li>SME ecosystem support</li>
              </ul>
              <div className="h-64 w-full mt-4">
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
                    <Bar dataKey="actual" name="Actual" />
                    <Bar dataKey="projected" name="Projected" />
                  </RechartsBarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Sub-Saharan Africa GDP Growth Rates (2020–2025)
                </p>
              </div>
            </TabsContent>

            <TabsContent value="political" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Political Economy Reforms
              </h3>
              <p className="text-gray-700">
                We study institutional reforms for better service delivery.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Policy reform dynamics</li>
                <li>Administrative modernization</li>
                <li>Regulatory framework updates</li>
                <li>Public-private partnerships</li>
                <li>Institutional development</li>
              </ul>
              <p className="text-gray-700">
                Insights guide complex reform processes.
              </p>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Social Policy & Welfare
              </h3>
              <p className="text-gray-700">
                We focus on inclusion in education, health, and protection.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Education access and quality</li>
                <li>Healthcare financing</li>
                <li>Safety net strategies</li>
                <li>Gender equity programs</li>
                <li>Youth development</li>
              </ul>
              <p className="text-gray-700">
                This informs our social sector advisory work.
              </p>
            </TabsContent>

            <TabsContent value="sustainable" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Sustainable Development Models
              </h3>
              <p className="text-gray-700">
                We balance economic progress and environmental resilience.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Climate adaptation policies</li>
                <li>Renewable energy transition</li>
                <li>Resource governance</li>
                <li>Circular economy</li>
                <li>Green finance frameworks</li>
              </ul>
              <p className="text-gray-700">
                Strategies support policymakers on sustainability.
              </p>
            </TabsContent>

            <TabsContent value="digital" className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                AI & Digital Transformation
              </h3>
              <p className="text-gray-700">
                We assess AI’s role in public administration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>E-governance frameworks</li>
                <li>AI in policy analysis</li>
                <li>Digital identity systems</li>
                <li>Smart city planning</li>
                <li>Innovation policy</li>
              </ul>
              <p className="text-gray-700">
                Research guides digital policy implementation.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </ContentSection>

      <ContentSection
        title="Research Methodology"
        subtitle="Rigorous steps to generate insights"
        background="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span>Problem Definition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Scoping research questions with stakeholders for relevance.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <span>Data Collection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Gathering quantitative and qualitative data comprehensively.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span>Rigorous Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Applying statistical and qualitative frameworks deeply.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <span>Policy Translation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Turning findings into actionable policy recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title="Research Impact"
        subtitle="Positive change across Africa"
        background="light"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <CardItem
            title="Informing Policy Decisions"
            description="Our insights help shape effective governance frameworks."
            icon={<Briefcase size={24} />}
          />
          <CardItem
            title="Building Institutional Capacity"
            description="We empower institutions to conduct sustainable research."
            icon={<Building size={24} />}
          />
          <CardItem
            title="Advancing Knowledge"
            description="Our work enriches global discourse on policy."
            icon={<Award size={24} />}
          />
          <CardItem
            title="Supporting SDGs & Agenda 2063"
            description="Research aligns with continental development goals."
            icon={<Globe size={24} />}
          />
          <CardItem
            title="Influencing Practice"
            description="Our findings shape real-world implementation approaches."
            icon={<Users size={24} />}
          />
          <CardItem
            title="Facilitating Dialogue"
            description="We create platforms for evidence-based stakeholder discussions."
            icon={<Globe size={24} />}
          />
        </div>
      </ContentSection>
    </div>
  )
}

export default PolicyResearchAnalysis
