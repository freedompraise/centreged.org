
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Building, 
  Network, 
  HandshakeIcon, 
  Target, 
  FileText 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const mentorshipHeroImage = 'https://source.unsplash.com/random/1200x600/?mentorship,coaching';
const mentorshipApproachImage = 'https://source.unsplash.com/random/800x600/?mentorship,career';

const MentorshipCareerDevelopment = () => {
  return (
    <div>
      <Hero
        title="Mentorship & Career Development"
        subtitle="Empowering Africa's next generation of leaders and professionals through structured guidance and practical support."
        buttonText="Apply for Mentorship"
        buttonLink="/contact"
        backgroundImage={mentorshipHeroImage}
      />
      
      <ContentSection
        title="Our Approach to Mentorship"
        subtitle="A holistic and personalized framework designed to nurture talent and develop leadership capacity."
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              At CentreGED, we believe that mentorship is a transformative process that goes beyond casual advice-giving. Our structured mentorship program connects mentees with experienced professionals and thought leaders who offer personalized career coaching, leadership training, and technical skills development.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach is holistic, focusing on both professional growth and personal development, ensuring that emerging leaders acquire the right values, ethics, and decision-making skills alongside technical competencies.
            </p>
            <p className="text-gray-700">
              We leverage our extensive network of industry experts, policymakers, and accomplished professionals to provide relevant, practical mentorship that aligns with both individual career aspirations and Africa's development needs.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={mentorshipApproachImage} 
              alt="CentreGED Mentorship Approach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Who Can Benefit"
        subtitle="Our mentorship programs serve diverse groups at various career stages"
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem 
            title="University Students"
            description="Final-year students and recent graduates seeking career direction and practical skills to transition into the workforce."
            icon={<GraduationCap size={24} />}
          />
          <CardItem 
            title="Young Professionals"
            description="Early-career individuals looking to accelerate their professional growth and develop leadership capabilities."
            icon={<Briefcase size={24} />}
          />
          <CardItem 
            title="Emerging Leaders"
            description="Mid-career professionals preparing for leadership roles and seeking to enhance their management and decision-making skills."
            icon={<Users size={24} />}
          />
          <CardItem 
            title="Entrepreneurs"
            description="Aspiring and early-stage business founders needing guidance on business strategy, funding, and sustainable growth."
            icon={<Building size={24} />}
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Mentorship Programs"
        subtitle="Comprehensive development pathways tailored to your goals"
        background="white"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="career-mentorship">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              Career Mentorship & Coaching
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <p className="mb-4">Our career mentorship offers personalized guidance to help you navigate your professional journey with confidence and clarity:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>One-on-one sessions with experienced industry professionals</li>
                <li>Personalized career development plans aligned with your goals</li>
                <li>Industry-specific guidance and networking opportunities</li>
                <li>Resume building, interview preparation, and personal branding</li>
                <li>Regular progress reviews and milestone tracking</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="leadership-development">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              Leadership Development & Executive Coaching
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <p className="mb-4">Designed for emerging leaders and executives, this program builds essential leadership capabilities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Leadership ethics and values-based decision making</li>
                <li>Strategic thinking, planning, and management skills</li>
                <li>Effective communication and public speaking coaching</li>
                <li>Team management and organizational leadership</li>
                <li>Executive presence and emotional intelligence development</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="internship-placement">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              Internship & Job Placement Assistance
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <p className="mb-4">We bridge the gap between education and employment through comprehensive career readiness support:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Career readiness workshops and skills assessment</li>
                <li>CV writing, portfolio development, and interview coaching</li>
                <li>Access to CentreGED's network of employer partners</li>
                <li>Internship placement and monitoring support</li>
                <li>Job search strategies and employment opportunity matching</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="entrepreneurship-mentorship">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              Business & Entrepreneurship Mentorship
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <p className="mb-4">Supporting entrepreneurs and business leaders with practical guidance to build and scale successful ventures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business model development and validation</li>
                <li>Access to funding opportunities and investor readiness</li>
                <li>Market strategy and customer acquisition guidance</li>
                <li>Operational efficiency and scaling strategies</li>
                <li>Financial management and sustainable growth planning</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="women-youth">
            <AccordionTrigger className="text-xl font-semibold text-primary hover:no-underline">
              Women & Youth Empowerment Initiatives
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4">
              <p className="mb-4">Specialized mentorship programs targeting underrepresented groups and addressing unique challenges:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Women in Leadership mentorship tracks</li>
                <li>Youth entrepreneurship and innovation support</li>
                <li>Gender equity and inclusion in professional environments</li>
                <li>Special networking events and peer support groups</li>
                <li>Advocacy skills and platforms for change-making</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>
      
      <ContentSection
        title="Why Choose CentreGED Mentorship"
        subtitle="Key benefits that set our mentorship programs apart"
        background="light"
        centered={true}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ListItemWithIcon
            icon={<HandshakeIcon size={24} />}
            title="Expert Guidance"
            description="Access to an extensive network of accomplished professionals, industry leaders, and policy experts."
          />
          <ListItemWithIcon
            icon={<Target size={24} />}
            title="Tailored Support"
            description="Personalized mentorship plans designed to address your specific goals, challenges, and aspirations."
          />
          <ListItemWithIcon
            icon={<Network size={24} />}
            title="Extensive Network"
            description="Opportunities to build meaningful professional connections across industries and sectors."
          />
          <ListItemWithIcon
            icon={<FileText size={24} />}
            title="Practical Learning"
            description="Hands-on projects, real-world case studies, and applicable skills development."
          />
        </div>
      </ContentSection>
      
      <CallToAction
        title="Ready to Accelerate Your Professional Journey?"
        subtitle="Apply for our mentorship program today and take the next step toward achieving your career goals."
        buttonText="Apply Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default MentorshipCareerDevelopment;
