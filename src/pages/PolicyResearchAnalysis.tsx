import React from 'react'
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
  BarChart3
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Hero, ContentSection, CardItem } from '@/components/PageComponents'
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
    <div className="flex flex-col space-y-10">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="Policy Research & Analysis"
        subtitle="Driving evidence-based policy solutions for Africa."
      />

      <ContentSection
        title="Our Research Approach"
        subtitle="Data analysis meets stakeholder engagement"
        background="white"
      >
        <div className="max-w-4xl mx-left space-y-4 text-gray-700">
          <p>CentreGED conducts high-quality research that informs policy.</p>
          <p>We combine quantitative and qualitative methods for deep insights.</p>
          <p>Our pan-African perspective connects local and global discourse.</p>
        </div>
      </ContentSection>

      <ContentSection
        title="Research Focus Areas"
        subtitle="Six streams tackling Africa’s key challenges"
        background="light"
      >
        <Tabs defaultValue="governance" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-6 text-xs">
            <TabsTrigger value="governance">Leadership & Governance</TabsTrigger>
            <TabsTrigger value="economic">Economic Policies</TabsTrigger>
            <TabsTrigger value="political">Political Economy</TabsTrigger>
            <TabsTrigger value="social">Social Policy</TabsTrigger>
            <TabsTrigger value="sustainable">Sustainable Development</TabsTrigger>
            <TabsTrigger value="digital">Digital Transformation</TabsTrigger>
          </TabsList>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm space-y-6">
            <TabsContent value="governance" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                Leadership & Governance Best Practices
              </h3>
              <p className="text-gray-700">
                We explore frameworks that drive transparency and accountability.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Election integrity strategies</li>
                <li>Anti-corruption initiatives</li>
                <li>Civil service reforms</li>
                <li>Local governance effectiveness</li>
                <li>Leadership ethics development</li>
              </ul>
            </TabsContent>

            <TabsContent value="economic" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                Economic Policies for Growth
              </h3>
              <p className="text-gray-700">
                We analyze fiscal and monetary frameworks for inclusive growth.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Monetary policy development</li>
                <li>Domestic resource mobilization</li>
                <li>Regional trade integration</li>
                <li>Industrial diversification</li>
                <li>SME ecosystem support</li>
              </ul>
              <div className="h-48 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={economicData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
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
              </div>
            </TabsContent>

            <TabsContent value="political" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                Political Economy Reforms
              </h3>
              <p className="text-gray-700">
                We study institutional reforms for better service delivery.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Policy reform dynamics</li>
                <li>Administrative modernization</li>
                <li>Regulatory framework updates</li>
                <li>Public-private partnerships</li>
                <li>Institutional development</li>
              </ul>
            </TabsContent>

            <TabsContent value="social" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                Social Policy & Welfare
              </h3>
              <p className="text-gray-700">
                We focus on inclusion in education, health, and protection.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Education access and quality</li>
                <li>Healthcare financing</li>
                <li>Safety net strategies</li>
                <li>Gender equity programs</li>
                <li>Youth development</li>
              </ul>
            </TabsContent>

            <TabsContent value="sustainable" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                Sustainable Development Models
              </h3>
              <p className="text-gray-700">
                We balance economic progress and environmental resilience.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Climate adaptation policies</li>
                <li>Renewable energy transition</li>
                <li>Resource governance</li>
                <li>Circular economy</li>
                <li>Green finance frameworks</li>
              </ul>
            </TabsContent>

            <TabsContent value="digital" className="space-y-3">
              <h3 className="text-xl font-bold text-primary">
                AI & Digital Transformation
              </h3>
              <p className="text-gray-700">
                We assess AI’s role in public administration.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>E-governance frameworks</li>
                <li>AI in policy analysis</li>
                <li>Digital identity systems</li>
                <li>Smart city planning</li>
                <li>Innovation policy</li>
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </ContentSection>

      <ContentSection
        title="Research Methodology"
        subtitle="Rigorous steps to generate insights"
        background="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Target size={16} /> Problem Definition
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Scoping research questions with stakeholders for relevance.
            </CardContent>
          </Card>

          <Card className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <BarChart3 size={16} /> Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Gathering quantitative and qualitative data comprehensively.
            </CardContent>
          </Card>

          <Card className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} /> Rigorous Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Applying statistical and qualitative frameworks deeply.
            </CardContent>
          </Card>

          <Card className="shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <FileText size={16} /> Policy Translation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Turning findings into actionable policy recommendations.
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title="Research Impact"
        subtitle="Positive change across Africa"
        background="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardItem
            title="Informing Policy Decisions"
            description="Our insights help shape effective governance frameworks."
            icon={<Briefcase size={20} />}
          />
          <CardItem
            title="Building Institutional Capacity"
            description="We empower institutions to conduct sustainable research."
            icon={<Leaf size={20} />}
          />
          <CardItem
            title="Advancing Knowledge"
            description="Our work enriches global discourse on policy."
            icon={<Award size={20} />}
          />
          <CardItem
            title="Supporting SDGs & Agenda 2063"
            description="Research aligns with continental development goals."
            icon={<Globe size={20} />}
          />
          <CardItem
            title="Influencing Practice"
            description="Our findings shape real-world implementation approaches."
            icon={<Users size={20} />}
          />
          <CardItem
            title="Facilitating Dialogue"
            description="We create platforms for evidence-based stakeholder discussions."
            icon={<Globe size={20} />}
          />
        </div>
      </ContentSection>
    </div>
  )
}

export default PolicyResearchAnalysis
