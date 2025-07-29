// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'PrideBuzz - Financial Trading Platform',
    shortDescription:
      'Built comprehensive trading dashboard with market data visualization and interactive charts. Implemented advanced charting features with responsive design supporting desktop and mobile. Integrated financial APIs for live data feeds and WebSocket for real-time updates using Context API and JWT authentication.',
    cover:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://pridebuzz.com',
    type: 'Client Work 💼',
    siteAge: '6 months old',
    users: '10,000+ active users',
    tech: 'Next.js | Context API | Tailwind CSS | WebSocket | REST API',
  },
  {
    priority: 2,
    title: 'TaleTree - Educational Learning Platform',
    shortDescription:
      'Developed child-focused educational platform with interactive learning modules and story creation features. Implemented secure user authentication with role-based access control for parents and children. Created content management system with file upload functionality and responsive UI components with accessibility features.',
    cover:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://taletree.com',
    type: 'Educational 📚',
    siteAge: '1 year old',
    tech: 'React.js | Context API | Material-UI | REST API',
  },
  {
    priority: 3,
    title: 'AkritiCreation - Business Management System',
    shortDescription:
      'Developed comprehensive printing business management system with inventory and order management. Implemented dynamic form generation using React Hook Form with complex validation rules. Created role-based dashboard with different access levels for admin, staff, and customers with integrated payment gateway.',
    cover:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://akriticreation.com',
    type: 'Business 🏢',
    siteAge: '1.5 years old',
    tech: 'React.js | Redux | Material-UI | React Hook Form | REST API',
  },
  {
    priority: 4,
    title: 'Miukama - E-commerce Marketplace',
    shortDescription:
      'Built marketplace platform for collectible items with advanced search and filtering capabilities. Implemented user authentication, profile management, and seller dashboard with analytics. Created product catalog with category-based organization and integrated Stripe payment gateway with SEO optimization.',
    cover:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'E-commerce 🛒',
    livePreview: 'https://miukama.com',
    siteAge: '1 year old',
    tech: 'Next.js | Context API | Material UI | REST API | SEO',
  },
  {
    priority: 5,
    title: 'Vidya AI (Ultimeet) - Educational Platform',
    shortDescription:
      'AI-powered lecture management platform that serves live recorded online video lectures and audio. Generates summaries, transcripts, and important notes for PDF download. Provides quizzes and frequently asked questions to enhance students learning experience with maximum lecture benefits.',
    cover:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'AI-Powered 🤖',
    livePreview: 'https://vidya-ai.com',
    siteAge: '8 months old',
    tech: 'React.js | Context API | Tailwind CSS | REST API',
  },
  {
    priority: 6,
    title: 'ULTIMEET - Meeting Management Platform',
    shortDescription:
      'Streamlined meeting process with innovative Meeting and Task management platform. Features Voice Biometric-based Speaker Identification system with automatic meeting recording, transcription & MoM generation. Provides resolutions tracking, attendance metrics, and language monitoring capabilities.',
    cover:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Enterprise 🏢',
    livePreview: 'https://ultimeet.com',
    siteAge: '10 months old',
    tech: 'React.js | Tailwind CSS | Context API | REST API',
  },
]

// Service Data
export const serviceData = [
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js, hooks, and component libraries.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js, SSR, SSG and SEO optimization.',
  },
  {
    icon: JavaScriptIcon,
    title: 'JavaScript ES6+ Development',
    shortDescription: 'Creating dynamic and interactive web applications using modern JavaScript and TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Responsive UI Design',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS, Material-UI and custom CSS.',
  },
  {
    icon: SocketIcon,
    title: 'API Integration & Real-time',
    shortDescription: 'Integrating REST APIs with Axios, WebSocket for real-time data handling and state management.',
  },
  {
    icon: ReactIcon,
    title: 'State Management',
    shortDescription: 'Implementing Redux, React Context API, and React Hooks for complex application data flow.',
  },
]

// Skill List
export const skillList = [
  // Core Technologies
  {
    name: 'React.js',
    icon: ReactIcon,
    category: 'Framework'
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
    category: 'Framework'
  },
  {
    name: 'JavaScript ES6+',
    icon: JavaScriptIcon,
    category: 'Language'
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
    category: 'Language'
  },
  
  // Styling & UI
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
    category: 'CSS Framework'
  },
  {
    name: 'Material-UI',
    icon:'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
    category: 'Component Library'
  },
  {
    name: 'CSS3/SCSS',
    icon: TailwindCSS, // Can create a CSSIcon if needed
    category: 'Styling'
  },
  {
    name: 'Responsive Design',
    icon: ReactIcon, // Can create a ResponsiveIcon
    category: 'UI/UX'
  },
  
  // State Management
  {
    name: 'Redux',
    icon: ReactIcon,
    category: 'State Management'
  },
  {
    name: 'Context API',
    icon: ReactIcon,
    category: 'State Management'
  },
  // {
  //   name: 'Zustand',
  //   icon: ReactIcon, // Can create ZustandIcon
  //   category: 'State Management'
  // },
  
  // API & Data
  {
    name: 'REST APIs',
    icon: ExpressjsIcon,
    category: 'API'
  },
  {
    name: 'WebSocket',
    icon: SocketIcon,
    category: 'Realtime'
  },
  // {
  //   name: 'GraphQL',
  //   icon: ReactIcon, // Can create GraphQLIcon
  //   category: 'API'
  // },
  {
    name: 'Axios',
    icon: ReactIcon, // Can create AxiosIcon
    category: 'HTTP Client'
  },
   {
    name: 'Fetch',
    icon: ReactIcon, // Can create AxiosIcon
    category: 'HTTP Client'
  },
  
  // Build & Tools
  
  {
    name: 'ESLint/Prettier',
    icon: ReactIcon, // Can create LintIcon
    category: 'Code Quality'
  },
  // {
  //   name: 'Jest/Testing',
  //   icon: ReactIcon, // Can create TestIcon
  //   category: 'Testing'
  // },
  // {
  //   name: 'Vite',
  //   icon: ReactIcon, // Can create ViteIcon
  //   category: 'Build Tool'
  // },
  
  // Additional
  {
    name: 'React Hook Form',
    icon: ReactIcon,
    category: 'Forms'
  },
  {
    name: 'Formik',
    icon: ReactIcon,
    category: 'Forms'
  },
  // {
  //   name: 'Framer Motion',
  //   icon: ReactIcon, // Can create MotionIcon
  //   category: 'Animation'
  // },
  {
    name: 'Figma to Code',
    icon: ReactIcon, // Can create FigmaIcon
    category: 'Design'
  },
  // {
  //   name: 'PWA',
  //   icon: ReactIcon, // Can create PWAIcon
  //   category: 'Web Apps'
  // }
];

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Hi']