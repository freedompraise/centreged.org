import React from 'react'
import { motion } from 'framer-motion'
import {
  ChartBar,
  FileText,
  Users,
  Building,
  Globe,
  Scale,
  BookOpen,
  Database
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Hero, ContentSection, ListItemWithIcon } from '@/components/PageComponents'

const scrollIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const AdvisoryServices = () => {
  return (
    <div className="flex flex-col space-y-12">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="Advisory Services for Policymakers & Institutions"
        subtitle="Evidence-based recommendations and implementation support"
      />

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Advisory Approach"
          subtitle="Research-driven framework for policy development"
          background="white"
        >
          <div className="space-y-6 text-gray-700 max-w-4xl">
            <p>
              CentreGED delivers data-driven, context-specific policy recommendations designed for Africa’s governance challenges.
            </p>
            <p>
              We collaborate with policymakers, combining rigorous research with practical insights for implementable solutions.
            </p>
            <p>
              Our team of economists, governance experts, and sector professionals ensures integrated approaches to complex issues.
            </p>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Advisory Services"
          subtitle="Support across the policy lifecycle"
          background="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3">
                <ChartBar size={24} />
                <CardTitle>Policy Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Tailored recommendations backed by comprehensive research to guide decision-making.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Growth and investment frameworks</li>
                  <li>Fiscal and monetary policy guidance</li>
                  <li>Public sector reform strategies</li>
                  <li>Social policy development</li>
                  <li>Trade and industrial policy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3">
                <Scale size={24} />
                <CardTitle>Legislative & Regulatory Reforms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Experts develop and review legislation and regulations for best outcomes.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Legislative drafting and review</li>
                  <li>Regulatory impact assessments</li>
                  <li>Compliance frameworks</li>
                  <li>Anti-corruption measures</li>
                  <li>Harmonization with global standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3">
                <Building size={24} />
                <CardTitle>Institutional Capacity Building</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Bridging policy design and execution through implementation support.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Organizational development planning</li>
                  <li>Process optimization</li>
                  <li>Monitoring & evaluation frameworks</li>
                  <li>Technical implementation assistance</li>
                  <li>Strategic change management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3">
                <Globe size={24} />
                <CardTitle>International Advisory</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">
                  Partnering with multilateral agencies to align policies with global frameworks.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>SDG-aligned policy frameworks</li>
                  <li>Agenda 2063 strategies</li>
                  <li>Regional integration mechanisms</li>
                  <li>Country-specific recommendations</li>
                  <li>Program design and evaluation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Why Partner with CentreGED"
          subtitle="What sets our advisory services apart"
          background="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListItemWithIcon
              icon={<BookOpen size={24} />}
              title="Deep Expertise"
              description="Academic rigor combined with practical policy experience."
            />
            <ListItemWithIcon
              icon={<Database size={24} />}
              title="Data-Driven"
              description="All advice is underpinned by robust data analysis."
            />
            <ListItemWithIcon
              icon={<Users size={24} />}
              title="Stakeholder Engagement"
              description="Inclusive processes that build consensus."
            />
            <ListItemWithIcon
              icon={<Globe size={24} />}
              title="Global Practices"
              description="Adapting international best practices to Africa."
            />
            <ListItemWithIcon
              icon={<FileText size={24} />}
              title="Customized Solutions"
              description="Tailored to each client’s needs and constraints."
            />
            <ListItemWithIcon
              icon={<Building size={24} />}
              title="Implementation Focus"
              description="Clear roadmaps and ongoing support."
            />
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Advisory Process"
          subtitle=""
          background="light"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {[
              { step: 'Assessment', desc: 'Situation analysis and needs assessment' },
              { step: 'Research', desc: 'Evidence gathering and consultations' },
              { step: 'Recommendations', desc: 'Development of policy solutions' },
              { step: 'Implementation', desc: 'Execution support and capacity building' }
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                  {i + 1}
                </div>
                <h3 className="font-bold text-primary mb-1">{item.step}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Transforming Policy Challenges"
          subtitle=""
          background="light"
        >
          <p className="text-gray-700">
            CentreGED provides actionable insights and capacity-building support to address complex policy challenges and drive impactful change.
          </p>
        </ContentSection>
      </motion.div>
    </div>
  )
}

export default AdvisoryServices
