import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

// Sample images from Unsplash
const headerImage = 'https://source.unsplash.com/random/1200x600/?corporate,training';
const subtopicImages = {
  governance: 'https://source.unsplash.com/random/800x400/?leadership',
  economic: 'https://source.unsplash.com/random/800x400/?economics',
  capacity: 'https://source.unsplash.com/random/800x400/?development',
  sustainability: 'https://source.unsplash.com/random/800x400/?sustainability',
  technology: 'https://source.unsplash.com/random/800x400/?technology'
};

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const CorporateTraining = () => {
  return (
    <div>
      {/* Header Section */}
      <motion.section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative" 
        style={{ backgroundImage: `url(${headerImage})` }}
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate & Institutional Training</h1>
            <p className="text-xl">
              At CentreGED, we recognize that continuous capacity building is essential for excellence in governance, economic management, and institutional leadership.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Nested Navigation using anchor tags */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <a href="#governance" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Governance &amp; Leadership</a>
            <a href="#economic" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Economic &amp; Policy Training</a>
            <a href="#capacity" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Institutional Capacity</a>
            <a href="#sustainability" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Sustainability &amp; Social Impact</a>
            <a href="#technology" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Technology &amp; Innovation</a>
          </nav>
        </div>
      </div>
      
      {/* Content Sections */}
      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle 
            title="Our Approach" 
            subtitle="A research-driven, practical, and results-oriented method."
          />
          <p className="mt-4 text-gray-700">
            We ensure participants acquire both theoretical and hands-on skills through modules developed by leading experts and policymakers.
          </p>
        </motion.div>
      </Section>

      <Section id="governance">
        <motion.div {...fadeIn}>
          <SectionTitle title="Governance &amp; Leadership Development" />
          <img src={subtopicImages.governance} alt="Governance &amp; Leadership" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Learn ethical leadership, board effectiveness, and strategic management through sessions tailored for both the public and private sectors.
          </p>
        </motion.div>
      </Section>

      <Section id="economic">
        <motion.div {...fadeIn}>
          <SectionTitle title="Economic &amp; Policy Training" />
          <img src={subtopicImages.economic} alt="Economic &amp; Policy Training" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Our programs cover public financial management, budgeting, and economic strategies to foster sustainable growth.
          </p>
        </motion.div>
      </Section>

      <Section id="capacity">
        <motion.div {...fadeIn}>
          <SectionTitle title="Institutional Capacity Building" />
          <img src={subtopicImages.capacity} alt="Institutional Capacity Building" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Enhance your organization's ability with change management, project management, and performance evaluation.
          </p>
        </motion.div>
      </Section>

      <Section id="sustainability">
        <motion.div {...fadeIn}>
          <SectionTitle title="Sustainability &amp; Social Impact" />
          <img src={subtopicImages.sustainability} alt="Sustainability &amp; Social Impact" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Explore sustainable development practices, CSR, and community engagement to drive long-term impact.
          </p>
        </motion.div>
      </Section>

      <Section id="technology">
        <motion.div {...fadeIn}>
          <SectionTitle title="Technology &amp; Innovation in Governance" />
          <img src={subtopicImages.technology} alt="Technology &amp; Innovation" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Discover digital transformation, e-governance, and data-driven decision-making as keys for modern public administration.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Training Formats" />
          <p className="mt-4 text-gray-700">
            We offer on-site training, virtual training, customized workshops, and executive retreats designed to meet your organization’s needs.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Why Choose CentreGED?" />
          <ul className="list-disc ml-6 text-gray-700">
            <li>Expert-led training by renowned academics and industry professionals</li>
            <li>Tailored solutions for your unique challenges</li>
            <li>A global perspective incorporating international best practices</li>
            <li>Practical applications with real-world case studies</li>
          </ul>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Get Started Today" />
          <p className="mt-4 text-gray-700">
            Partner with us to build a more efficient, innovative, and impactful organization.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default CorporateTraining;
