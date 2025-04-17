
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  MessageCircle, 
  Globe, 
  Presentation, 
  GraduationCap, 
  ArrowUpRight, 
  FileText,
  Download,
  Video,
  Building
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Hero, ContentSection, CardItem, ListItemWithIcon, CallToAction } from '@/components/PageComponents';

const headerImage = 'https://source.unsplash.com/random/1200x600/?conference,summit';

// Forum images
const forumImages = {
  aef: 'https://source.unsplash.com/random/800x400/?economic,forum',
  nef: 'https://source.unsplash.com/random/800x400/?national,economy',
  nlc: 'https://source.unsplash.com/random/800x400/?leadership,colloquium'
};

// Gallery images
const galleryImages = [
  'https://source.unsplash.com/random/600x400/?conference,speaker',
  'https://source.unsplash.com/random/600x400/?conference,audience',
  'https://source.unsplash.com/random/600x400/?forum,panel',
  'https://source.unsplash.com/random/600x400/?summit,discussion',
  'https://source.unsplash.com/random/600x400/?meeting,delegates',
  'https://source.unsplash.com/random/600x400/?conference,workshop'
];

// Past events data
const pastEvents = [
  {
    title: "Africa Economic Forum 2024",
    date: "September 15-17, 2024",
    location: "Kigali, Rwanda",
    image: "https://source.unsplash.com/random/300x200/?kigali,conference",
    description: "Focused on 'Digital Transformation for Economic Resilience,' featuring 120+ speakers and 800+ delegates."
  },
  {
    title: "National Economic Forum 2024",
    date: "June 8-9, 2024",
    location: "Abuja, Nigeria",
    image: "https://source.unsplash.com/random/300x200/?abuja,conference",
    description: "Centered on 'Sustainable Financial Systems for Inclusive Growth' with key financial sector stakeholders."
  },
  {
    title: "National Leadership Colloquium 2023",
    date: "November 22-24, 2023",
    location: "Nairobi, Kenya",
    image: "https://source.unsplash.com/random/300x200/?nairobi,conference",
    description: "Explored 'Ethical Leadership in the Digital Age' with over 200 public and private sector leaders."
  }
];

const DiplomacyHighLevelForums = () => {
  return (
    <div>
      <Hero
        title="Shaping Africa's Future Through Dialogue"
        subtitle="Our premier forums provide platforms for stakeholders to convene, deliberate, and shape policies that drive Africa's progress."
        buttonText="Upcoming Forums"
        buttonLink="#upcoming-forums"
        backgroundImage={headerImage}
      />
      
      <ContentSection
        title="Fostering Thought Leadership Through Premier Events"
        subtitle="Creating spaces for influential leaders to address Africa's pressing challenges"
        background="white"
      >
        <p className="text-gray-700 mb-10 max-w-4xl mx-auto text-center">
          CentreGED hosts high-level forums and summits that bring together policymakers, business leaders, academics, and civil society representatives to engage in meaningful dialogue on governance, economic development, and leadership challenges facing Africa.
        </p>
        
        <Tabs defaultValue="aef" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="aef" className="text-base py-3">Africa Economic Forum</TabsTrigger>
            <TabsTrigger value="nef" className="text-base py-3">National Economic Forum</TabsTrigger>
            <TabsTrigger value="nlc" className="text-base py-3">National Leadership Colloquium</TabsTrigger>
          </TabsList>
          
          <div className="bg-secondary p-6 rounded-lg">
            <TabsContent value="aef" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">Africa Economic Forum (AEF)</h3>
                  <p className="text-gray-700 mb-6">
                    Our flagship continental event that brings together economic leaders, policymakers, and investors to discuss emerging trends and opportunities, positioning Africa as a global economic powerhouse.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="font-bold text-primary mb-3">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Annual three-day forum rotating across major African cities</li>
                      <li>800+ delegates from government, business, and international organizations</li>
                      <li>High-level plenary sessions and specialized breakout discussions</li>
                      <li>Focus on economic integration, investment climate, and sustainable development</li>
                      <li>Publication of comprehensive policy recommendations and action plans</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          Key Participants
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Finance Ministers and Economic Planning Officials</li>
                          <li>Central Bank Governors</li>
                          <li>Heads of Financial Institutions</li>
                          <li>Business Leaders and Executives</li>
                          <li>International Development Partners</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Presentation className="h-5 w-5 mr-2 text-primary" />
                          Focus Areas
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Economic Integration and Trade</li>
                          <li>Investment Climate and Capital Markets</li>
                          <li>Digital Economy and Financial Innovation</li>
                          <li>Sustainable Economic Development</li>
                          <li>Public-Private Partnerships</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={forumImages.aef} 
                    alt="Africa Economic Forum" 
                    className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
                  />
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Recent Outcomes
                    </h4>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <FileText className="h-3 w-3 text-primary" />
                        </div>
                        <span>Framework for Digital Economy Acceleration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <FileText className="h-3 w-3 text-primary" />
                        </div>
                        <span>Continental Investment Promotion Strategy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <FileText className="h-3 w-3 text-primary" />
                        </div>
                        <span>AfCFTA Implementation Roadmap</span>
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <Download size={14} className="mr-2" />
                      Download Reports
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nef" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">National Economic Forum (NEF)</h3>
                  <p className="text-gray-700 mb-6">
                    Country-specific events that address national economic challenges by bringing together government and private sector stakeholders to catalyze reforms and stimulate inclusive growth.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="font-bold text-primary mb-3">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Two-day forums tailored to country-specific economic contexts</li>
                      <li>300+ participants from government ministries, business associations, and civic groups</li>
                      <li>Data-driven presentations on economic performance and opportunities</li>
                      <li>Structured public-private dialogue sessions on priority reform areas</li>
                      <li>Development of action-oriented reform agendas with clear responsibilities</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Calendar className="h-5 w-5 mr-2 text-primary" />
                          Key Outcomes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Policy Recommendations for Economic Growth</li>
                          <li>Strategies for Business Environment Reform</li>
                          <li>Frameworks for Private Sector Development</li>
                          <li>Action Plans for Investment Promotion</li>
                          <li>Measures for Fiscal Sustainability</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          Engagement Format
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>High-level Panel Discussions</li>
                          <li>Breakout Sessions for In-depth Analysis</li>
                          <li>Public-Private Dialogue Platforms</li>
                          <li>Expert Presentations on Key Economic Issues</li>
                          <li>Networking Opportunities for Stakeholders</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={forumImages.nef} 
                    alt="National Economic Forum" 
                    className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
                  />
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary mb-3 flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Recent Host Countries
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-secondary p-2 rounded text-center text-sm">
                        <div className="font-bold">Nigeria</div>
                        <div className="text-xs text-gray-500">June 2024</div>
                      </div>
                      <div className="bg-secondary p-2 rounded text-center text-sm">
                        <div className="font-bold">Ghana</div>
                        <div className="text-xs text-gray-500">March 2024</div>
                      </div>
                      <div className="bg-secondary p-2 rounded text-center text-sm">
                        <div className="font-bold">Kenya</div>
                        <div className="text-xs text-gray-500">November 2023</div>
                      </div>
                      <div className="bg-secondary p-2 rounded text-center text-sm">
                        <div className="font-bold">Senegal</div>
                        <div className="text-xs text-gray-500">August 2023</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Calendar size={14} className="mr-2" />
                      View All Past Forums
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nlc" className="space-y-6">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-primary mb-4">National Leadership Colloquium (NLC)</h3>
                  <p className="text-gray-700 mb-6">
                    Forums dedicated to cultivating transformational leadership by convening discussions on ethics, strategic management, and best practices in public and private sectors.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="font-bold text-primary mb-3">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Three-day intensive leadership development events</li>
                      <li>200+ participants including senior officials, executives, and emerging leaders</li>
                      <li>Keynote addresses from distinguished governance and leadership experts</li>
                      <li>Interactive workshops and case study analyses</li>
                      <li>Networking and mentorship opportunities for next-generation leaders</li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                          Learning Objectives
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Governance Excellence and Ethical Leadership</li>
                          <li>Strategic Planning and Decision Making</li>
                          <li>Emerging Leadership Paradigms</li>
                          <li>Artificial Intelligence in Leadership</li>
                          <li>Youth and Women in Leadership</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          Target Participants
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Senior Government Officials</li>
                          <li>Corporate Executives and Board Members</li>
                          <li>Civil Society Leaders</li>
                          <li>Emerging Leaders and Young Professionals</li>
                          <li>Academic and Research Institutions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src={forumImages.nlc} 
                    alt="National Leadership Colloquium" 
                    className="w-full aspect-video object-cover rounded-lg mb-6 shadow-md" 
                  />
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary mb-3 flex items-center">
                      <Video className="h-4 w-4 mr-2" />
                      Featured Resources
                    </h4>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <Video className="h-3 w-3 text-primary" />
                        </div>
                        <span>Ethical Leadership in the Digital Age: Keynote Address</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <FileText className="h-3 w-3 text-primary" />
                        </div>
                        <span>Leadership Framework for Public Sector Transformation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <Download className="h-3 w-3 text-primary" />
                        </div>
                        <span>Emerging Leaders Toolkit: Practical Resources</span>
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <ArrowUpRight size={14} className="mr-2" />
                      Access Resources
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </ContentSection>
      
      <ContentSection
        title="Forum Highlights"
        subtitle="Moments from our previous high-level events"
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
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`Forum Highlight ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <CarouselPrevious>Previous</CarouselPrevious>
              <CarouselNext>Next</CarouselNext>
            </div>
          </Carousel>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Why Our Forums Matter"
        subtitle="Creating impact through high-level dialogue and collaboration"
        background="white"
        centered={true}
      >
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Influencing Policy Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our forums provide a platform for evidence-based discussions that directly inform policy formulation and implementation across African governments.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Positioning Africa Globally</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                By convening thought leaders and decision-makers, we amplify Africa's voice in global economic dialogues and showcase the continent's potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Fostering Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                These events create unique networking opportunities that lead to partnerships, investments, and collaborative initiatives across sectors.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      
      <ContentSection
        title="Past Events"
        subtitle="Explore our recent forums and their outcomes"
        background="light"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600 mb-4 text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <p className="text-gray-700 text-sm">{event.description}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  <FileText size={14} className="mr-2" />
                  View Outcomes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="primary" className="px-8">
            Browse All Past Events
            <ArrowUpRight size={16} className="ml-2" />
          </Button>
        </div>
      </ContentSection>
      
      <ContentSection
        id="upcoming-forums"
        title="Upcoming Forums"
        subtitle="Mark your calendar for these transformative events"
        background="white"
      >
        <div className="bg-secondary rounded-lg p-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center md:w-40 flex-shrink-0">
                <div className="text-sm uppercase tracking-wider mb-1">Sep 15-17</div>
                <div className="text-2xl font-bold">2025</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Africa Economic Forum 2025</h3>
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Accra, Ghana
                </div>
                <p className="text-gray-700 mb-4">
                  Theme: "Accelerating Digital Transformation for Economic Resilience"
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  Join over 800 delegates from across Africa and beyond for three days of insightful discussions on leveraging digital technologies to build resilient economies in the post-pandemic era.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">
                    Register Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText size={14} className="mr-2" />
                    Event Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center md:w-40 flex-shrink-0">
                <div className="text-sm uppercase tracking-wider mb-1">Nov 8-9</div>
                <div className="text-2xl font-bold">2025</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">National Economic Forum</h3>
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Lagos, Nigeria
                </div>
                <p className="text-gray-700 mb-4">
                  Theme: "Building Sustainable Financial Systems for Inclusive Growth"
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  A focused two-day forum bringing together key stakeholders from Nigeria's financial sector, government, and business community to develop actionable strategies for financial inclusion and sustainable growth.
                </p>
                <Button variant="outline" size="sm">
                  <Calendar size={14} className="mr-2" />
                  Save the Date
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center md:w-40 flex-shrink-0">
                <div className="text-sm uppercase tracking-wider mb-1">Jan 22-24</div>
                <div className="text-2xl font-bold">2026</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">National Leadership Colloquium</h3>
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Nairobi, Kenya
                </div>
                <p className="text-gray-700 mb-4">
                  Theme: "Ethical Leadership in the Age of Digital Transformation"
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  A transformative leadership development event exploring the intersection of ethics, technology, and leadership in the rapidly evolving digital landscape.
                </p>
                <Button variant="outline" size="sm">
                  <MessageCircle size={14} className="mr-2" />
                  Express Interest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <CallToAction
        title="Join Our Next Forum"
        subtitle="Be part of the conversations shaping Africa's governance and economic future."
        buttonText="Register for Upcoming Forums"
        buttonLink="/contact"
        backgroundImage={headerImage}
      />
    </div>
  );
};

export default DiplomacyHighLevelForums;
