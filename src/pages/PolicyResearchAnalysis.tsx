import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?research,policy';
const subtopicImages = {
  governance: 'https://source.unsplash.com/random/800x400/?leadership',
  economic: 'https://source.unsplash.com/random/800x400/?economics',
  political: 'https://source.unsplash.com/random/800x400/?politics',
  social: 'https://source.unsplash.com/random/800x400/?community',
  sustainable: 'https://source.unsplash.com/random/800x400/?sustainability',
  digital: 'https://source.unsplash.com/random/800x400/?technology'
};

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const PolicyResearchAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Policy Research &amp; Analysis</h1>
            <p className="text-xl">
              We conduct high-quality, data-driven research to inform governance, economic policies, and public administration reforms.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Nested Navigation using anchor tags */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <a href="#governance" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Leadership &amp; Governance</a>
            <a href="#economic" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Economic Policies</a>
            <a href="#political" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Political Economy</a>
            <a href="#social" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Social Policies</a>
            <a href="#sustainable" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Sustainable Models</a>
            <a href="#digital" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Digital Transformation</a>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <Section id="governance">
        <motion.div {...fadeIn}>
          <SectionTitle title="Leadership &amp; Governance Best Practices" />
          <img src={subtopicImages.governance} alt="Governance Best Practices" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Explore the role of democratic institutions, ethical leadership, and best practices for public sector effectiveness.
          </p>
        </motion.div>
      </Section>

      <Section id="economic">
        <motion.div {...fadeIn}>
          <SectionTitle title="Economic Policies for Sustainable Growth" />
          <img src={subtopicImages.economic} alt="Economic Policies" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Analyze macroeconomic policies, fiscal management, and strategies for fostering inclusive and resilient growth.
          </p>
        </motion.div>
      </Section>

      <Section id="political">
        <motion.div {...fadeIn}>
          <SectionTitle title="Political Economy &amp; Public Administration Reforms" />
          <img src={subtopicImages.political} alt="Political Economy" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Examine the interplay between political decisions and economic outcomes, with a focus on regulatory frameworks and administrative efficiency.
          </p>
        </motion.div>
      </Section>

      <Section id="social">
        <motion.div {...fadeIn}>
          <SectionTitle title="Social Policy &amp; Welfare Strategies" />
          <img src={subtopicImages.social} alt="Social Policy" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Focus on education, healthcare, social protection, and initiatives aimed at reducing inequality and improving welfare.
          </p>
        </motion.div>
      </Section>

      <Section id="sustainable">
        <motion.div {...fadeIn}>
          <SectionTitle title="Sustainable Development Models" />
          <img src={subtopicImages.sustainable} alt="Sustainable Development" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Discover research on climate change policies, renewable energy, and models for sustainable production and consumption.
          </p>
        </motion.div>
      </Section>

      <Section id="digital">
        <motion.div {...fadeIn}>
          <SectionTitle title="Artificial Intelligence &amp; Digital Transformation" />
          <img src={subtopicImages.digital} alt="Digital Transformation" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Investigate the impact of AI, digital governance frameworks, and data-driven decision-making in public administration.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default PolicyResearchAnalysis;
