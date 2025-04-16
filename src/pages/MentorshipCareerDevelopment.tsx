import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const headerImage = 'https://source.unsplash.com/random/1200x600/?mentorship,career';
const subtopicImages = {
  approach: 'https://source.unsplash.com/random/800x400/?strategy',
  benefit: 'https://source.unsplash.com/random/800x400/?benefit',
  coaching: 'https://source.unsplash.com/random/800x400/?coaching',
  leadership: 'https://source.unsplash.com/random/800x400/?leadership',
  internship: 'https://source.unsplash.com/random/800x400/?internship',
  entrepreneurship: 'https://source.unsplash.com/random/800x400/?entrepreneurship'
};

const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };

const MentorshipCareerDevelopment = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentorship &amp; Career Development</h1>
            <p className="text-xl">
              We believe mentorship and career development are critical for empowering emerging leaders in Africa.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Nested Navigation using anchor tags */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto py-2 no-scrollbar">
            <a href="#approach" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Our Approach</a>
            <a href="#benefit" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Who Can Benefit</a>
            <a href="#coaching" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Career Mentorship</a>
            <a href="#leadership" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Leadership Development</a>
            <a href="#internship" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Internship &amp; Job Placement</a>
            <a href="#entrepreneurship" className="mr-4 cursor-pointer text-gray-600 hover:text-primary">Entrepreneurship Mentorship</a>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <Section id="approach">
        <motion.div {...fadeIn}>
          <SectionTitle title="Our Approach" subtitle="A holistic and structured mentorship framework." />
          <img src={subtopicImages.approach} alt="Our Approach" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            We connect mentees with experienced professionals and thought leaders offering personalized career coaching and leadership training.
          </p>
        </motion.div>
      </Section>

      <Section id="benefit">
        <motion.div {...fadeIn}>
          <SectionTitle title="Who Can Benefit" />
          <img src={subtopicImages.benefit} alt="Who Can Benefit" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Our programs are designed for university students, recent graduates, young professionals, emerging leaders, and aspiring entrepreneurs.
          </p>
        </motion.div>
      </Section>

      <Section id="coaching">
        <motion.div {...fadeIn}>
          <SectionTitle title="Career Mentorship &amp; Coaching" />
          <img src={subtopicImages.coaching} alt="Career Mentorship &amp; Coaching" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Engage in one-on-one sessions, receive industry-specific guidance, and strategize your career progression.
          </p>
        </motion.div>
      </Section>

      <Section id="leadership">
        <motion.div {...fadeIn}>
          <SectionTitle title="Leadership Development &amp; Executive Coaching" />
          <img src={subtopicImages.leadership} alt="Leadership Development" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Build leadership skills through training on ethics, decision-making, and public speaking while gaining insights into strategic management.
          </p>
        </motion.div>
      </Section>

      <Section id="internship">
        <motion.div {...fadeIn}>
          <SectionTitle title="Internship &amp; Job Placement Assistance" />
          <img src={subtopicImages.internship} alt="Internship and Job Placement" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Participate in career readiness workshops, CV writing sessions, and interview coaching that connect you with potential employers.
          </p>
        </motion.div>
      </Section>

      <Section id="entrepreneurship">
        <motion.div {...fadeIn}>
          <SectionTitle title="Business &amp; Entrepreneurship Mentorship" />
          <img src={subtopicImages.entrepreneurship} alt="Entrepreneurship Mentorship" className="w-full my-4 rounded-md" />
          <p className="text-gray-700">
            Receive expert advice on business development, funding access, scaling operations, and innovative strategies for startup success.
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <SectionTitle title="Get Started Today" />
          <p className="mt-4 text-gray-700">
            Join our Mentorship &amp; Career Development Program to build the skills and networks necessary for your professional success.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default MentorshipCareerDevelopment;
