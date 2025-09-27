'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Star, GitFork, Briefcase, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  stats: {
    stars: number;
    forks: number;
    language: string;
  };
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise API Gateway Platform",
    description: "Production-ready API Gateway with authentication, analytics, rate-limiting and RBAC. Optimized throughput using Redis caching and WebSocket, reducing request latency by 35%.",
    longDescription: "Built a comprehensive API Gateway solution supporting OAuth2, API keys, rate-limiting, routing and analytics to centralize service access. Implemented containerized deployments and automated delivery using Docker and Kubernetes with CI/CD pipelines.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    github: "https://github.com/Ajay9704/api_gate_way",
    demo: null,
    featured: true,
    stats: {
      stars: 12,
      forks: 3,
      language: "JavaScript"
    },
    highlights: [
      "35% latency reduction",
      "10K+ customer scalability",
      "Real-time monitoring"
    ]
  },
  {
    id: 2,
    title: "ML-Powered Recommendation Engine",
    description: "Intelligent recommendation system using collaborative filtering and content-based algorithms. Achieved 78% accuracy with real-time personalization for 50K+ users.",
    longDescription: "Developed a sophisticated recommendation engine combining multiple ML algorithms including collaborative filtering, content-based filtering, and matrix factorization. Implemented real-time data processing pipelines and A/B testing framework.",
    tech: ["Python", "TensorFlow", "Apache Spark", "MongoDB", "FastAPI", "Docker"],
    github: "https://github.com/Ajay9704/ml-recommendation-engine",
    demo: null,
    featured: true,
    stats: {
      stars: 28,
      forks: 8,
      language: "Python"
    },
    highlights: [
      "78% accuracy rate",
      "50K+ user scalability",
      "Real-time processing"
    ]
  },
  {
    id: 3,
    title: "Cloud Infrastructure Automation",
    description: "Terraform-based infrastructure as code solution for AWS deployments. Automated provisioning of scalable, secure cloud environments with monitoring and backup strategies.",
    longDescription: "Created comprehensive IaC templates for multi-environment AWS deployments including VPC, ECS, RDS, and monitoring stack. Implemented automated backup strategies and disaster recovery procedures.",
    tech: ["Terraform", "AWS", "Python", "CloudWatch", "Lambda", "S3"],
    github: "https://github.com/Ajay9704/aws-terraform-infrastructure",
    demo: null,
    featured: false,
    stats: {
      stars: 15,
      forks: 5,
      language: "HCL"
    },
    highlights: [
      "Multi-environment support",
      "Automated backups",
      "Cost optimization"
    ]
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and analytics. Built with React, D3.js, and WebSocket connections for live data streaming.",
    longDescription: "Developed a comprehensive analytics platform with real-time data visualization, custom chart components, and interactive filtering. Integrated with multiple data sources and implemented caching strategies for optimal performance.",
    tech: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    github: "https://github.com/Ajay9704/analytics-dashboard",
    demo: "https://analytics-demo.vercel.app",
    featured: false,
    stats: {
      stars: 22,
      forks: 7,
      language: "TypeScript"
    },
    highlights: [
      "Real-time updates",
      "Interactive visualizations",
      "Multi-source integration"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleDemoClick = (demoUrl: string | null) => {
    if (demoUrl && typeof window !== 'undefined') {
      window.open(demoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleGithubClick = (githubUrl: string) => {
    if (typeof window !== 'undefined') {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my technical expertise in building scalable, production-ready applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.filter(project => project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <Star className="w-4 h-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <GitFork className="w-4 h-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.stats.language}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    onClick={() => handleGithubClick(project.github)}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  {project.demo && (
                    <Button
                      onClick={() => handleDemoClick(project.demo)}
                      size="sm"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.filter(project => !project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={() => handleGithubClick(project.github)}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 text-xs"
                  >
                    <Github className="w-3 h-3" />
                    <span>Code</span>
                  </Button>
                  {project.demo && (
                    <Button
                      onClick={() => handleDemoClick(project.demo)}
                      size="sm"
                      className="flex items-center space-x-2 text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Button
            onClick={() => handleGithubClick('https://github.com/Ajay9704')}
            variant="outline"
            size="lg"
            className="group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}