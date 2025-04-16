import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?forum,conference';
const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const DiplomacyHighLevelForums = () => {
  return (
    <div>
      <motion.section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${headerImage})` }}
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hosting High-Level Forums &amp; Summits</h1>
            <p className="text-xl">
              Our premier forums provide platforms for stakeholders to convene, deliberate, and shape policies that drive Africa’s progress.
            </p>
          </div>
        </div>
      </motion.section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Africa Economic Forum (AEF)" />
          <p className="text-gray-700">
            The AEF brings together economic leaders, policymakers, and investors to discuss emerging trends and opportunities, positioning Africa as a global powerhouse.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="National Economic Forum (NEF)" />
          <p className="text-gray-700">
            The NEF focuses on addressing national economic challenges and fostering dialogue between government and the private sector to catalyze reforms.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="National Leadership Colloquium (NLC)" />
          <p className="text-gray-700">
            The NLC is dedicated to cultivating transformational leadership by convening discussions on ethics, strategic management, and best practices in public and private sectors.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default DiplomacyHighLevelForums;
