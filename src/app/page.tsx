import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'

const projects = [
  {
  title: 'Localists - Local Services Marketplace',
  shortDescription:
    'Next.js powered local services platform connecting customers with trusted professionals across multiple service categories.',
  priority: 11,
  cover: '/localists.png',
  livePreview: 'https://localists.com/',
  type: 'Marketplace',
  visitors: '5,000+',
  techStack: [
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'REST API',
    'Context API'
  ],
  achievements: [
    'Developed a responsive marketplace for discovering local service providers.',
    'Implemented category and location-based search for faster service discovery.',
    'Built reusable UI components to improve development efficiency and consistency.',
    'Created detailed business profiles with service information and contact details.',
    'Optimized application performance with code splitting and lazy loading.',
    'Integrated secure authentication and user account management.',
    'Enhanced SEO for better visibility of local business listings.'
  ],
},
  {
    title: 'PrideBuzz - Financial Trading Platform',
    shortDescription:
      'Next.js trading platform with real-time data visualization for 2,000+ active users',
    priority: 1,
    cover: '/pridescons.png',
    livePreview: 'https://pridecons.com/',
    type: 'Financial',
    visitors: '2,000+',
    techStack: ['Next.js', 'Tailwind CSS', 'WebSocket', 'Context API', 'REST API'],
    achievements: [
      'Optimized performance by 10% through code splitting',
      'Built reusable component library reducing dev time by 10%',
      'Implemented real-time data feeds with WebSocket',
    ],
  },
  {
    title: 'TaleTree - Educational Learning Platform',
    shortDescription:
      'React.js platform with interactive learning modules and story creation features',
    priority: 2,
    cover: '/taletreecover.png',
    livePreview: 'https://web.taletree.com/',
    type: 'Education',
    techStack: ['React.js', 'Material-UI', 'Context API', 'REST API'],
    achievements: [
      'Implemented secure role-based authentication',
      'Developed CMS with file upload functionality',
      'Created child-friendly UI with accessibility features',
    ],
  },
  {
    title: 'Vidya AI (Ultimeet) - Educational Platform',
    shortDescription: 'AI-powered lecture management with automated notes generation',
    priority: 3,
    cover: '/vidyaai.png',
    livePreview: 'https://vidyaai.ai/',
    type: 'Education',
    techStack: ['React.js', 'Tailwind CSS', 'Context API', 'REST API'],
    achievements: [
      'Implemented AI-generated lecture summaries and PDF notes',
      'Developed quiz system for enhanced learning',
      'Created real-time lecture processing system',
    ],
  },
  {
    title: 'AkritiCreation - Business Management System',
    shortDescription: 'React.js solution for printing business with inventory and order management',
    priority: 4,
    cover: '/akriticover.png',
    livePreview: '',
    type: 'Business',
    techStack: ['React.js', 'Material-UI', 'Redux', 'React Hook Form'],
    achievements: [
      'Developed dynamic form generation with complex validation',
      'Implemented role-based dashboards (admin/staff/customer)',
      'Integrated payment gateway and order tracking',
    ],
  },
  {
    title: 'UltiMeet - Meeting Management Platform',
    shortDescription: 'Voice biometric-based meeting automation system',
    priority: 5,
    cover: '/ultimeetnew.png',
    livePreview: 'https://ultimeet.io/',
    type: 'Productivity',
    techStack: ['React.js', 'Tailwind CSS', 'Context API', 'WebSocket'],
    achievements: [
      'Developed automatic meeting transcription and MoM generation',
      'Implemented voice biometric speaker identification',
      'Created analytics dashboard with attendance metrics',
    ],
  },
]
export default async function Home() {

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        {/* <TestimonialSection testimonials={testimonials} /> */}
        <ContactSection />
      </div>
    </main>
  )
}
