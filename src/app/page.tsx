import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'

const projects = [
  {
    title: 'PrideBuzz - Financial Trading Platform',
    shortDescription:
      'Next.js trading platform with real-time data visualization for 10,000+ active users',
    priority: 1,
    cover: '/pribuzz.png',
    livePreview: 'https://pridebuzz.in',
    type: 'Financial',
    visitors: '10,000+',
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
    cover: '/vidhyaAicover.png',
    livePreview: 'https://vidya.ultimeet.io/',
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
    livePreview: 'https://akriticreations.in/',
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
    cover: '/ultimeet.png',
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
