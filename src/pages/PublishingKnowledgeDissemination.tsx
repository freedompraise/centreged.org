import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  Newspaper,
  Book,
  Globe,
  Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Hero,
  ContentSection,
  CardItem
} from '@/components/PageComponents'

const scrollIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const featuredPublications = [
  {
    title: "The Future of African Governance",
    description: "A comprehensive analysis of governance trends and challenges in Africa.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    title: "Economic Development Strategies for Emerging Markets",
    description: "Strategies for sustainable economic growth in emerging markets.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    title: "Leadership in the 21st Century",
    description: "Insights on effective leadership in today's rapidly changing world.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
]

const publicationCategories = [
  {
    title: "Governance",
    description: "Publications on governance and institutional development.",
    icon: <Globe size={24} />
  },
  {
    title: "Economic Development",
    description: "Research on economic growth and investment.",
    icon: <FileText size={24} />
  },
  {
    title: "Leadership",
    description: "Strategies in leadership and organizational development.",
    icon: <Users size={24} />
  },
  {
    title: "Technology & Innovation",
    description: "Insights on technology and digital transformation.",
    icon: <BookOpen size={24} />
  }
]



const PublishingKnowledgeDissemination = () => {
  return (
    <div className="flex flex-col space-y-10">
      <Hero
        title="Knowledge for a Better World"
        subtitle="Our publications provide insights on critical global issues."
        backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
      />

      <motion.div {...scrollIn}>
        <ContentSection
          title="Featured Publications"
          subtitle="Our latest research and analysis"
          background="white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPublications.map((pub, i) => (
              <CardItem
                key={i}
                title={pub.title}
                description={pub.description}
                image={pub.image}
              />
            ))}
          </div>
        </ContentSection>
      </motion.div>

      <motion.div {...scrollIn}>
        <ContentSection
          title="Publication Categories"
          subtitle="Browse by category"
          background="light"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {publicationCategories.map((cat, i) => (
              <CardItem
                key={i}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
              />
            ))}
          </div>
        </ContentSection>
      </motion.div>


    </div>
  )
}

export default PublishingKnowledgeDissemination
