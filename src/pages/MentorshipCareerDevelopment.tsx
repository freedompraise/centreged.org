import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  GraduationCap,
  Briefcase,
  Users,
  Building,
  HandshakeIcon,
  Target,
  Network,
  FileText
} from 'lucide-react'
import {
  Hero,
  ContentSection,
  CardItem,
  ListItemWithIcon,
  CallToAction
} from '@/components/PageComponents'

const MentorshipCareerDevelopment = () => {
  const scrollIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col space-y-12">
      <Hero
        title="Mentorship & Career Development"
        backgroundImage='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
        subtitle="Empowering Africa's next generation of leaders."
        buttonText="Apply for Mentorship"
        buttonLink="/contact"
      />

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Approach to Mentorship"
          subtitle="Holistic framework to nurture talent and leadership."
          background="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-700">
                Mentorship goes beyond advice, offering structured career coaching.
              </p>
              <p className="text-gray-700">
                We focus on professional growth alongside personal development.
              </p>
              <p className="text-gray-700">
                Our network of experts aligns guidance with Africa’s development.
              </p>
            </div>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Who Can Benefit"
          subtitle="Programs for diverse career stages"
          background="light"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardItem
              title="University Students"
              description="Final-year students and graduates seeking career direction."
              icon={<GraduationCap size={24} />}
            />
            <CardItem
              title="Young Professionals"
              description="Early-career individuals building leadership capabilities."
              icon={<Briefcase size={24} />}
            />
            <CardItem
              title="Emerging Leaders"
              description="Mid-career pros enhancing management and decision skills."
              icon={<Users size={24} />}
            />
            <CardItem
              title="Entrepreneurs"
              description="Founders needing guidance on strategy and growth."
              icon={<Building size={24} />}
            />
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Our Mentorship Programs"
          subtitle="Tailored development pathways"
          background="white"
        >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="career-mentorship">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Career Mentorship & Coaching
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>One-on-one sessions with industry professionals</li>
                  <li>Personalized development plans</li>
                  <li>Networking and industry guidance</li>
                  <li>Resume, interview, and branding support</li>
                  <li>Regular progress reviews</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="leadership-development">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Leadership Development & Executive Coaching
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Values-based decision making</li>
                  <li>Strategic planning skills</li>
                  <li>Communication and speaking coaching</li>
                  <li>Team management techniques</li>
                  <li>Emotional intelligence development</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="internship-placement">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Internship & Job Placement Assistance
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Career readiness workshops</li>
                  <li>CV, portfolio, and interview coaching</li>
                  <li>Access to employer network</li>
                  <li>Placement and monitoring support</li>
                  <li>Job search strategy</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="entrepreneurship-mentorship">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Business & Entrepreneurship Mentorship
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business model development</li>
                  <li>Investor readiness support</li>
                  <li>Market strategy guidance</li>
                  <li>Scaling and operations advice</li>
                  <li>Financial management planning</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="women-youth">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Women & Youth Empowerment Initiatives
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Women in leadership tracks</li>
                  <li>Youth entrepreneurship support</li>
                  <li>Gender equity mentorship</li>
                  <li>Peer networking events</li>
                  <li>Advocacy skill development</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Why Choose CentreGED Mentorship"
          subtitle="Key benefits of our programs"
          background="light"
          centered
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ListItemWithIcon
              icon={<HandshakeIcon size={24} />}
              title="Expert Guidance"
              description="Access to accomplished professionals and policy experts."
            />
            <ListItemWithIcon
              icon={<Target size={24} />}
              title="Tailored Support"
              description="Mentorship plans customized for your goals."
            />
            <ListItemWithIcon
              icon={<Network size={24} />}
              title="Extensive Network"
              description="Build connections across industries."
            />
            <ListItemWithIcon
              icon={<FileText size={24} />}
              title="Practical Learning"
              description="Hands-on projects and real-world case studies."
            />
          </div>
        </ContentSection>
      </motion.div>

      <CallToAction
        title="Ready to Accelerate Your Journey?"
        subtitle="Apply today and achieve your career goals."
        buttonText="Apply Now"
        buttonLink="/contact"
      />
    </div>
  )
}

export default MentorshipCareerDevelopment
