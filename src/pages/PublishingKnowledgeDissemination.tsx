import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?publishing,knowledge';
const subtopicImages = {
  papers: 'https://source.unsplash.com/random/800x400/?papers',
  journals: 'https://source.unsplash.com/random/800x400/?journals',
  books: 'https://source.unsplash.com/random/800x400/?books',
  digest: 'https://source.unsplash.com/random/800x400/?newsletter'
};

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const PublishingKnowledgeDissemination = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publishing &amp; Knowledge Dissemination</h1>
            <p className="text-xl">
              We ensure that our research drives impact through timely and accessible publications and knowledge sharing initiatives.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Nested Navigation using anchor tags */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <a href="#papers" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Policy &amp; White Papers</a>
            <a href="#journals" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Economic &amp; Governance Journals</a>
            <a href="#books" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Books &amp; Monographs</a>
            <a href="#digest" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Policy Digest &amp; Newsletter</a>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <Section id="papers">
        <motion.div {...fadeIn}>
          <SectionTitle title="Policy Papers, White Papers &amp; Research Reports" />
          <img src={subtopicImages.papers} alt="Policy Papers" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Our in-depth studies and concise reports provide actionable insights and recommendations to guide policymakers and industry leaders.
          </p>
        </motion.div>
      </Section>

      <Section id="journals">
        <motion.div {...fadeIn}>
          <SectionTitle title="Economic &amp; Governance Journals" />
          <img src={subtopicImages.journals} alt="Journals" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Our peer-reviewed journals facilitate academic and professional discourse, featuring cutting-edge research from experts across Africa and beyond.
          </p>
        </motion.div>
      </Section>

      <Section id="books">
        <motion.div {...fadeIn}>
          <SectionTitle title="Books &amp; Monographs" />
          <img src={subtopicImages.books} alt="Books and Monographs" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Collaborating with leading scholars, we publish monographs and books that provide deep-dive analyses on governance, economics, and developmental strategies.
          </p>
        </motion.div>
      </Section>

      <Section id="digest">
        <motion.div {...fadeIn}>
          <SectionTitle title="CentreGED Policy Digest &amp; Newsletter" />
          <img src={subtopicImages.digest} alt="Policy Digest" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Stay updated with our concise policy digest and newsletter, offering summaries of major debates, research highlights, and expert interviews.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default PublishingKnowledgeDissemination;
