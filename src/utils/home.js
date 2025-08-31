// Home Page Data (Array Format with Public Image URLs)
export const homeData = [
  // Hero Section
  {
    id: 1,
    section: "hero",
    title: "Transform Your Business Today",
    subtitle: "We provide cutting-edge solutions that drive growth, innovation, and success for businesses of all sizes",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90&fm=webp&dpr=2",
    cta: {
      primary: "Start Your Journey",
      secondary: "Watch Demo"
    }
  },

  // Features Section
  {
    id: 2,
    section: "feature",
    title: "AI-Powered Solutions",
    description: "Leverage artificial intelligence to automate processes, gain insights, and stay ahead of the competition.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "🤖"
  },
  {
    id: 3,
    section: "feature",
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and reliable cloud solutions that grow with your business needs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "☁️"
  },
  {
    id: 4,
    section: "feature",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "📊"
  },
  {
    id: 5,
    section: "feature",
    title: "Mobile Development",
    description: "Create stunning mobile applications that engage users across all platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "📱"
  },
  {
    id: 6,
    section: "feature",
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions and monitoring.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "🔒"
  },
  {
    id: 7,
    section: "feature",
    title: "24/7 Support",
    description: "Round-the-clock expert support to ensure your operations never skip a beat.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "🎧"
  },

  // Services Section
  {
    id: 8,
    section: "service",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $2,999",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"]
  },
  {
    id: 9,
    section: "service",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $1,499/month",
    features: ["SEO", "Social Media", "PPC Campaigns", "Analytics"]
  },
  {
    id: 10,
    section: "service",
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment integration and inventory management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $4,999",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"]
  },

  // Portfolio Section
  {
    id: 11,
    section: "portfolio",
    title: "TechCorp Enterprise Platform",
    description: "A comprehensive business management platform serving 10,000+ users",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Enterprise Software",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 12,
    section: "portfolio",
    title: "HealthCare Mobile App",
    description: "Patient management system with telemedicine capabilities",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Application",
    technologies: ["React Native", "Firebase", "WebRTC", "Stripe"]
  },
  {
    id: 13,
    section: "portfolio",
    title: "E-learning Platform",
    description: "Interactive online learning platform with video streaming and assessments",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Education Technology",
    technologies: ["Vue.js", "Laravel", "MySQL", "Vimeo API"]
  },

  // Team Section
  {
    id: 14,
    section: "team",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "15+ years of experience in technology leadership and business strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 15,
    section: "team",
    name: "Michael Chen",
    role: "CTO",
    description: "Expert in cloud architecture and scalable system design",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 16,
    section: "team",
    name: "Emily Rodriguez",
    role: "Lead Designer",
    description: "Creative visionary with expertise in UX/UI design and brand development",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    social: {
      dribbble: "#",
      behance: "#"
    }
  },
  {
    id: 17,
    section: "team",
    name: "David Kim",
    role: "Senior Developer",
    description: "Full-stack developer specializing in modern web technologies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    social: {
      github: "#",
      stackoverflow: "#"
    }
  },

  // Testimonials Section
  {
    id: 18,
    section: "testimonial",
    name: "Jennifer Walsh",
    role: "CEO, InnovateTech",
    content: "Working with this team transformed our business. Their expertise in AI and cloud solutions helped us increase efficiency by 300%.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    rating: 5,
    company: "InnovateTech Solutions"
  },
  {
    id: 19,
    section: "testimonial",
    name: "Robert Martinez",
    role: "Founder, StartupXYZ",
    content: "The mobile app they developed exceeded our expectations. User engagement increased by 250% within the first month of launch.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    rating: 5,
    company: "StartupXYZ"
  },
  {
    id: 20,
    section: "testimonial",
    name: "Lisa Thompson",
    role: "CTO, DataFlow Inc",
    content: "Their data analytics platform gave us insights we never had before. ROI was evident within 3 months of implementation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    rating: 5,
    company: "DataFlow Inc"
  },

  // Stats Section
  {
    id: 21,
    section: "stats",
    label: "Happy Clients",
    value: "1,200+",
    icon: "👥"
  },
  {
    id: 22,
    section: "stats",
    label: "Projects Completed",
    value: "2,500+",
    icon: "🚀"
  },
  {
    id: 23,
    section: "stats",
    label: "Years of Experience",
    value: "15+",
    icon: "⭐"
  },
  {
    id: 24,
    section: "stats",
    label: "Team Members",
    value: "85+",
    icon: "💼"
  },

  // Process Section
  {
    id: 25,
    section: "process",
    step: 1,
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive project roadmap",
    icon: "🔍"
  },
  {
    id: 26,
    section: "process",
    step: 2,
    title: "Design & Prototyping",
    description: "Our designers create intuitive interfaces and interactive prototypes",
    icon: "🎨"
  },
  {
    id: 27,
    section: "process",
    step: 3,
    title: "Development & Testing",
    description: "Expert developers build your solution with rigorous quality assurance",
    icon: "⚙️"
  },
  {
    id: 28,
    section: "process",
    step: 4,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and support",
    icon: "🚀"
  },

  // Gallery Section
  {
    id: 29,
    section: "gallery",
    title: "Modern Office Space",
    description: "Our state-of-the-art workspace designed for innovation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Workspace"
  },
  {
    id: 30,
    section: "gallery",
    title: "Team Collaboration",
    description: "Our team working together on innovative solutions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Team"
  },
  {
    id: 31,
    section: "gallery",
    title: "Technology Innovation",
    description: "Cutting-edge technology powering our solutions",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Technology"
  },
  {
    id: 32,
    section: "gallery",
    title: "Client Success Stories",
    description: "Celebrating achievements with our valued clients",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Success"
  },
  {
    id: 33,
    section: "gallery",
    title: "Innovation Lab",
    description: "Where breakthrough ideas come to life",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Innovation"
  },
  {
    id: 34,
    section: "gallery",
    title: "Global Reach",
    description: "Connecting businesses worldwide through technology",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Global"
  },

  // Additional Features
  {
    id: 35,
    section: "feature",
    title: "Blockchain Solutions",
    description: "Secure, transparent, and decentralized solutions for modern business challenges.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "⛓️"
  },
  {
    id: 36,
    section: "feature",
    title: "IoT Integration",
    description: "Connect and manage smart devices with our comprehensive IoT platform.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "🌐"
  },
  {
    id: 37,
    section: "feature",
    title: "Machine Learning",
    description: "Advanced ML algorithms to predict trends and automate decision-making processes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    icon: "🧠"
  },

  // Additional Services
  {
    id: 38,
    section: "service",
    title: "DevOps & Cloud Migration",
    description: "Streamline your development process and migrate to cloud infrastructure seamlessly",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $3,999",
    features: ["CI/CD Pipeline", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"]
  },
  {
    id: 39,
    section: "service",
    title: "AI & Machine Learning",
    description: "Custom AI solutions to automate processes and gain competitive advantages",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $7,999",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Custom Models"]
  },
  {
    id: 40,
    section: "service",
    title: "Cybersecurity Consulting",
    description: "Comprehensive security audits and implementation of enterprise-grade protection",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    price: "Starting at $2,499",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
  },

  // Additional Portfolio Items
  {
    id: 41,
    section: "portfolio",
    title: "FinTech Banking Platform",
    description: "Secure digital banking solution with real-time transactions and fraud detection",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    category: "Financial Technology",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Kubernetes"]
  },
  {
    id: 42,
    section: "portfolio",
    title: "Smart City IoT Dashboard",
    description: "Real-time monitoring and management system for urban infrastructure",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    category: "IoT Solutions",
    technologies: ["React", "Python", "InfluxDB", "Docker"]
  },
  {
    id: 43,
    section: "portfolio",
    title: "AI-Powered Logistics Platform",
    description: "Machine learning optimization for supply chain and delivery management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=90&fm=webp&dpr=2",
    category: "Artificial Intelligence",
    technologies: ["Python", "TensorFlow", "Redis", "GraphQL"]
  },

  // Additional Team Members
  {
    id: 44,
    section: "team",
    name: "Alex Thompson",
    role: "Head of AI Research",
    description: "PhD in Machine Learning with 12+ years in AI development and research",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    social: {
      linkedin: "#",
      researchgate: "#"
    }
  },
  {
    id: 45,
    section: "team",
    name: "Maria Santos",
    role: "DevOps Engineer",
    description: "Cloud infrastructure specialist with expertise in AWS, Azure, and GCP",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    social: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    id: 46,
    section: "team",
    name: "James Wilson",
    role: "Cybersecurity Specialist",
    description: "Certified ethical hacker and security consultant with 10+ years experience",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },

  // Additional Testimonials
  {
    id: 47,
    section: "testimonial",
    name: "Amanda Foster",
    role: "VP of Technology, GlobalCorp",
    content: "Their blockchain solution revolutionized our supply chain transparency. We can now track every product from origin to customer with complete confidence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    rating: 5,
    company: "GlobalCorp Industries"
  },
  {
    id: 48,
    section: "testimonial",
    name: "Carlos Rodriguez",
    role: "CEO, RetailMax",
    content: "The AI-powered recommendation engine increased our sales by 180%. Their team's expertise in machine learning is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2",
    rating: 5,
    company: "RetailMax Solutions"
  },

  // Awards Section
  {
    id: 49,
    section: "award",
    title: "Best Tech Innovation 2023",
    organization: "TechCrunch Awards",
    year: "2023",
    description: "Recognized for breakthrough AI solutions in healthcare technology",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2"
  },
  {
    id: 50,
    section: "award",
    title: "Top 100 Fastest Growing Companies",
    organization: "Inc. Magazine",
    year: "2023",
    description: "Listed among the fastest-growing technology companies in North America",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2"
  },
  {
    id: 51,
    section: "award",
    title: "Excellence in Cloud Computing",
    organization: "Cloud Computing World",
    year: "2022",
    description: "Outstanding achievement in enterprise cloud migration and optimization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=90&fm=webp&dpr=2"
  },

  // Partnership Section
  {
    id: 52,
    section: "partnership",
    name: "Amazon Web Services",
    type: "Premier Partner",
    description: "Advanced consulting partner specializing in cloud architecture and migration",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=200&q=90&fm=webp&dpr=2"
  },
  {
    id: 53,
    section: "partnership",
    name: "Microsoft Azure",
    type: "Gold Partner",
    description: "Certified partner for enterprise cloud solutions and digital transformation",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=90&fm=webp&dpr=2"
  },
  {
    id: 54,
    section: "partnership",
    name: "Google Cloud",
    type: "Premier Partner",
    description: "Specialized in AI/ML solutions and data analytics on Google Cloud Platform",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=200&q=90&fm=webp&dpr=2"
  },

  // Blog Highlights Section
  {
    id: 55,
    section: "blog",
    title: "The Future of AI in Business Automation",
    excerpt: "Exploring how artificial intelligence is reshaping business processes and creating new opportunities for growth and efficiency.",
    author: "Alex Thompson",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=90&fm=webp&dpr=2",
    category: "Artificial Intelligence"
  },
  {
    id: 56,
    section: "blog",
    title: "Cloud Security Best Practices for 2024",
    excerpt: "Essential security measures and strategies to protect your cloud infrastructure from emerging threats and vulnerabilities.",
    author: "James Wilson",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=90&fm=webp&dpr=2",
    category: "Cybersecurity"
  },
  {
    id: 57,
    section: "blog",
    title: "DevOps Transformation: A Complete Guide",
    excerpt: "Step-by-step approach to implementing DevOps practices and achieving continuous integration and deployment success.",
    author: "Maria Santos",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=90&fm=webp&dpr=2",
    category: "DevOps"
  },

  // Additional Stats
  {
    id: 58,
    section: "stats",
    label: "Countries Served",
    value: "45+",
    icon: "🌍"
  },
  {
    id: 59,
    section: "stats",
    label: "Code Commits",
    value: "500K+",
    icon: "💻"
  },
  {
    id: 60,
    section: "stats",
    label: "Uptime Guarantee",
    value: "99.9%",
    icon: "⚡"
  }
];
