
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Book, 
  FileDigit, 
  Globe, 
  Radio, 
  Video, 
  Users, 
  Download,
  ExternalLink
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Button from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?publishing,knowledge';
const subtopicImages = {
  papers: 'https://source.unsplash.com/random/800x400/?papers',
  journals: 'https://source.unsplash.com/random/800x400/?journals',
  books: 'https://source.unsplash.com/random/800x400/?books',
  digest: 'https://source.unsplash.com/random/800x400/?newsletter'
};

// Sample publications for carousel
const featuredPublications = [
  {
    title: "Economic Transformation in West Africa: Opportunities and Challenges",
    type: "Policy Paper",
    image: "https://source.unsplash.com/random/300x400/?economics",
    year: "2025",
    description: "Comprehensive analysis of economic trends and policy recommendations for West African nations."
  },
  {
    title: "Governance Innovation: Digital Solutions for Public Service Delivery",
    type: "Research Report",
    image: "https://source.unsplash.com/random/300x400/?digital",
    year: "2024",
    description: "Examines the implementation of digital governance tools across African public institutions."
  },
  {
    title: "African Continental Free Trade Area: Implementation Framework",
    type: "White Paper",
    image: "https://source.unsplash.com/random/300x400/?trade",
    year: "2024",
    description: "Analysis of AfCFTA implementation strategies and recommendations for member states."
  },
  {
    title: "Climate Governance in Africa: Policy Responses to Environmental Challenges",
    type: "Book",
    image: "https://source.unsplash.com/random/300x400/?climate",
    year: "2023",
    description: "In-depth examination of climate policy frameworks and sustainability initiatives."
  },
  {
    title: "Women in Leadership: Breaking Barriers in African Institutions",
    type: "Journal Issue",
    image: "https://source.unsplash.com/random/300x400/?women",
    year: "2023",
    description: "Special issue featuring research on gender equality in leadership positions."
  }
];

const PublishingKnowledgeDissemination = () => {
  return (
    <div>
      <Hero
        title="Publishing & Knowledge Dissemination"
        subtitle="Transforming research into accessible knowledge that drives policy impact across Africa."
        buttonText="Access Our Publications"
        buttonLink="/publications"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Our Publishing Philosophy"
        subtitle="Bridging research and practice through strategic knowledge dissemination"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              At CentreGED, we believe that research without dissemination has limited impact. Our publishing and knowledge sharing initiatives ensure that our policy insights reach the stakeholders who can implement change.
            </p>
            <p className="text-gray-700 mb-6">
              We are committed to making our research accessible through multiple channels and formats, ensuring that complex policy analyses are translated into practical guidance for diverse audiences.
            </p>
            <p className="text-gray-700">
              Our publications adhere to the highest standards of academic rigor while maintaining relevance to real-world policy challenges, creating a vital bridge between theoretical research and practical implementation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary text-white p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm">Policy Papers Published</div>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-gray-600">Active Journal Series</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">12k+</div>
                <div className="text-sm text-gray-600">Publication Downloads</div>
              </div>
              <div className="bg-gold text-white p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">35+</div>
                <div className="text-sm">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Featured Publications"
        subtitle="Explore our latest research publications and policy analyses"
        background="light"
        centered={true}
      >
        <div className="max-w-6xl mx-auto mt-8">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredPublications.map((pub, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                      <img 
                        src={pub.image} 
                        alt={pub.title} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        {pub.type}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">{pub.year}</p>
                      <p className="text-sm text-gray-700">{pub.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download size={16} className="mr-2" />
                        Download PDF
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          
          <div className="mt-8 text-center">
            <Button to="/publications" variant="primary">
              View All Publications
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Our Publication Categories"
        subtitle="A diverse portfolio of knowledge products tailored to different needs and audiences"
        background="white"
      >
        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="papers">Policy Papers</TabsTrigger>
            <TabsTrigger value="journals">Journals</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="digest">Policy Digest</TabsTrigger>
          </TabsList>
          
          <div className="bg-secondary p-6 rounded-lg">
            <TabsContent value="papers" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Policy Papers, White Papers & Research Reports</h3>
                  <p className="text-gray-700 mb-4">
                    Our flagship publication formats deliver in-depth analysis on specific policy issues, providing evidence-based recommendations for decision-makers and practitioners.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Policy Papers (20-30 pages): Focused analyses of specific policy challenges with actionable recommendations</li>
                    <li>White Papers (40-60 pages): Comprehensive frameworks addressing major governance or economic issues</li>
                    <li>Research Reports (60+ pages): In-depth studies featuring original research and extensive data analysis</li>
                    <li>Policy Briefs (5-10 pages): Concise summaries of key findings and recommendations for busy policymakers</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4">
                    <FileText size={16} className="mr-2" />
                    Browse Policy Papers
                  </Button>
                </div>
                <div>
                  <img 
                    src={subtopicImages.papers} 
                    alt="Policy Papers" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="journals" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Economic & Governance Journals</h3>
                  <p className="text-gray-700 mb-4">
                    Our peer-reviewed academic journals facilitate intellectual exchange and rigorous debate on governance, economic development, and public policy in Africa.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>African Journal of Governance & Economic Development (Quarterly)</li>
                    <li>Public Administration & Policy Review (Bi-annual)</li>
                    <li>Sustainable Development in Africa (Quarterly)</li>
                    <li>Digital Governance & Innovation Journal (Bi-annual)</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Each journal features original research, case studies, and policy analyses from academic researchers, practitioners, and policymakers across Africa and beyond.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    <BookOpen size={16} className="mr-2" />
                    Explore Journals
                  </Button>
                </div>
                <div>
                  <img 
                    src={subtopicImages.journals} 
                    alt="Journals" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="books" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Books & Monographs</h3>
                  <p className="text-gray-700 mb-4">
                    We publish comprehensive volumes on governance, economics, and development in Africa, providing deep-dive analyses and reference materials for researchers and practitioners.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Edited volumes featuring chapters from leading experts</li>
                    <li>Monographs presenting in-depth research on specific themes</li>
                    <li>Textbooks for educational and training purposes</li>
                    <li>Case study compilations highlighting best practices and lessons learned</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Our books are published in both print and digital formats, making them accessible to diverse audiences across the continent and globally.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Book size={16} className="mr-2" />
                    Browse Books
                  </Button>
                </div>
                <div>
                  <img 
                    src={subtopicImages.books} 
                    alt="Books and Monographs" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="digest" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">CentreGED Policy Digest & Newsletter</h3>
                  <p className="text-gray-700 mb-4">
                    Our regular publications keep stakeholders informed about the latest policy developments, research findings, and CentreGED activities.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Monthly Policy Digest: Concise summary of major policy debates and developments</li>
                    <li>Quarterly Research Highlights: Featured findings from recent studies</li>
                    <li>Expert Interviews: Insights from leading policymakers and researchers</li>
                    <li>Event Announcements: Upcoming forums, workshops, and training opportunities</li>
                  </ul>
                  <div className="flex space-x-4 mt-4">
                    <Button variant="outline" size="sm">
                      <FileDigit size={16} className="mr-2" />
                      Latest Digest
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Download size={16} className="mr-2" />
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div>
                  <img 
                    src={subtopicImages.digest} 
                    alt="Policy Digest" 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </ContentSection>
      
      <ContentSection
        title="Dissemination Channels"
        subtitle="Maximizing the reach and impact of our research through multiple platforms"
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem 
            title="Online Knowledge Hub"
            description="Our digital repository provides open access to publications, datasets, and interactive policy tools."
            icon={<Globe size={24} />}
          />
          <CardItem 
            title="Print & Digital Distribution"
            description="Strategic distribution to policymakers, institutions, libraries, and partner organizations."
            icon={<Book size={24} />}
          />
          <CardItem 
            title="Conferences & Seminars"
            description="Regular events presenting research findings and facilitating discussion among stakeholders."
            icon={<Users size={24} />}
          />
          <CardItem 
            title="Media Engagement"
            description="Strategic partnerships with media outlets to amplify research insights and policy recommendations."
            icon={<Radio size={24} />}
          />
        </div>
      </ContentSection>
      
      <ContentSection
        title="Publishing Partnerships"
        background="white"
      >
        <div className="bg-secondary p-8 rounded-lg">
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We collaborate with leading publishers, academic institutions, and policy organizations to extend the reach and impact of our publications.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-20 bg-white rounded flex items-center justify-center shadow-sm">
                <div className="text-gray-300 text-xs">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
      
      <CallToAction
        title="Contribute to Our Publications"
        subtitle="Submit your research, partner on publishing initiatives, or subscribe to our knowledge products."
        buttonText="Learn More"
        buttonLink="/contact"
      />
    </div>
  );
};

export default PublishingKnowledgeDissemination;
