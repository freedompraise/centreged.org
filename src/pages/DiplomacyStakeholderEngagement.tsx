import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?diplomacy,engagement';
const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const DiplomacyStakeholderEngagement = () => {
  return (
    <div>
      <motion.section 
        className="pt-32 pb-16 bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${headerImage})` }}
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stakeholder Engagement &amp; Policy Advocacy</h1>
            <p className="text-xl">
              Engage in dialogues and partnerships that bridge policy gaps and foster collaborative solutions for Africa’s development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Optional: Nested Sections for more details */}
      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Public-Private Sector Collaboration" />
          <p className="text-gray-700">
            We facilitate partnerships between governments, businesses, and civil society to foster inclusive policy discussions.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Policy Advocacy &amp; Legislative Engagement" />
          <p className="text-gray-700">
            Our initiatives support advocacy campaigns and help shape legislative reforms for a more accountable governance framework.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Grassroots Mobilization &amp; Citizen Engagement" />
          <p className="text-gray-700">
            We empower communities through grassroots mobilization and ensure that citizens have a meaningful voice in policymaking.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Strategic Partnerships &amp; Regional Collaboration" />
          <p className="text-gray-700">
            Our regional engagements reinforce Africa’s position in global policy dialogues through collaborative partnerships.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default DiplomacyStakeholderEngagement;
