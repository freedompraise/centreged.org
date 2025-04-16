import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?advisory,policy';
const subtopicImages = {
  recommendations: 'https://source.unsplash.com/random/800x400/?strategy',
  legislation: 'https://source.unsplash.com/random/800x400/?legislation',
  capacity: 'https://source.unsplash.com/random/800x400/?training',
  international: 'https://source.unsplash.com/random/800x400/?international'
};

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const AdvisoryServices = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advisory Services for Policymakers &amp; Institutions</h1>
            <p className="text-xl">
              Our advisory arm delivers evidence-based policy recommendations and tailored assistance to governments, international organizations, and private sector partners.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Nested Navigation using anchor tags */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <a href="#recommendations" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Policy Recommendations</a>
            <a href="#legislation" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Legislative Reforms</a>
            <a href="#capacity" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Capacity Building</a>
            <a href="#international" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">International Advisory</a>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <Section id="recommendations">
        <motion.div {...fadeIn}>
          <SectionTitle title="Evidence-Based Policy Recommendations" />
          <img src={subtopicImages.recommendations} alt="Policy Recommendations" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            We offer tailored recommendations backed by research and comparative studies, addressing topics from economic growth and investment to public administration reforms.
          </p>
        </motion.div>
      </Section>

      <Section id="legislation">
        <motion.div {...fadeIn}>
          <SectionTitle title="Legislative &amp; Regulatory Reforms" />
          <img src={subtopicImages.legislation} alt="Legislative Reforms" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Our advisory services help in drafting, reviewing, and assessing the impact of new legislation and regulations to ensure they meet best practice standards.
          </p>
        </motion.div>
      </Section>

      <Section id="capacity">
        <motion.div {...fadeIn}>
          <SectionTitle title="Institutional Capacity Building &amp; Policy Implementation" />
          <img src={subtopicImages.capacity} alt="Capacity Building" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            We bridge the gap between policy design and execution by providing technical assistance, executive training, and strategic planning support to implement reforms effectively.
          </p>
        </motion.div>
      </Section>

      <Section id="international">
        <motion.div {...fadeIn}>
          <SectionTitle title="Advisory for International Organizations" />
          <img src={subtopicImages.international} alt="International Advisory" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Working with multilateral agencies and donor organizations, we develop policy solutions aligned with global frameworks such as the SDGs and AU Agenda 2063.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default AdvisoryServices;
