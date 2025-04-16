import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Newspaper, 
  Book, 
  Download, 
  ExternalLink, 
  Search,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?books,library';

const featuredPublications = [
  {
    title: "The Future of African Governance",
    description: "A comprehensive analysis of governance trends and challenges in Africa.",
    image: "https://source.unsplash.com/random/400x300/?governance,africa",
    link: "#"
  },
  {
    title: "Economic Development Strategies for Emerging Markets",
    description: "Strategies for sustainable economic growth in emerging markets.",
    image: "https://source.unsplash.com/random/400x300/?economic,development",
    link: "#"
  },
  {
    title: "Leadership in the 21st Century",
    description: "Insights on effective leadership in today's rapidly changing world.",
    image: "https://source.unsplash.com/random/400x300/?leadership",
    link: "#"
  }
];

const publicationCategories = [
  {
    title: "Governance",
    description: "Explore our publications on governance, public policy, and institutional development.",
    icon: <Globe size={24} />
  },
  {
    title: "Economic Development",
    description: "Discover research and analysis on economic growth, trade, and investment.",
    icon: <FileText size={24} />
  },
  {
    title: "Leadership",
    description: "Read about leadership strategies, ethical leadership, and organizational development.",
    icon: <Users size={24} />
  },
  {
    title: "Technology & Innovation",
    description: "Insights on technology, innovation, and digital transformation.",
    icon: <Cpu size={24} />
  }
];

const PublishingKnowledgeDissemination = () => {
  return (
    <div>
      <Hero
        title="Knowledge for a Better World"
        subtitle="Our publications and research reports provide insights and analysis on critical global issues."
        buttonText="Explore Publications"
        buttonLink="#publications"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Featured Publications"
        subtitle="Explore our latest research and analysis"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPublications.map((publication, index) => (
            <CardItem
              key={index}
              title={publication.title}
              description={publication.description}
              image={publication.image}
              link={publication.link}
            />
          ))}
        </div>
      </ContentSection>
      
      <ContentSection
        title="Publication Categories"
        subtitle="Browse our publications by category"
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {publicationCategories.map((category, index) => (
            <CardItem
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Publications"
        background="white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">Latest Publications</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search publications..."
              className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            />
            <Button variant="outline">
              <Search className="mr-2" />
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl">
                <BookOpen className="mr-2 inline-block" />
                The Impact of Technology on Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Explore the transformative effects of technology on education systems worldwide.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2" />
                  Read More
                </Button>
                <Button variant="primary" size="sm">
                  <Download className="mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl">
                <Newspaper className="mr-2 inline-block" />
                Global Economic Trends 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                An in-depth analysis of the key economic trends shaping the global landscape in 2024.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2" />
                  Read More
                </Button>
                <Button variant="primary" size="sm">
                  <Download className="mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl">
                <Book className="mr-2 inline-block" />
                Sustainable Development Goals: Progress and Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A critical assessment of the progress made towards achieving the Sustainable Development Goals.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2" />
                  Read More
                </Button>
                <Button variant="primary" size="sm">
                  <Download className="mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
          
           <Card className="bg-white shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl">
                <Book className="mr-2 inline-block" />
                The Future of Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
               Overview and insights into the future of work.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2" />
                  Read More
                </Button>
                <Button variant="primary" size="sm">
                  <Download className="mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      
      <CallToAction
        title="Stay Informed with Our Publications"
        subtitle="Access the latest research and analysis from CentreGED."
        buttonText="Browse All Publications"
        buttonLink="/publications"
      />
    </div>
  );
};

export default PublishingKnowledgeDissemination;
