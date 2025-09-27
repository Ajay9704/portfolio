'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Globe, 
  Brain, 
  Cloud, 
  Network, 
  Settings,
  Database,
  Server,
  Cpu,
  GitBranch
} from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "blue",
    skills: ["Python", "C++", "C", "Go", "SQL", "JavaScript", "TypeScript"],
    description: "Core programming languages for system design and development"
  },
  {
    title: "Web & Database",
    icon: Globe,
    color: "green", 
    skills: ["HTML", "CSS", "PHP", "MySQL", "MongoDB", "PostgreSQL", "Redis"],
    description: "Full-stack web development and database management"
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "purple",
    skills: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "XGBoost", "TensorFlow", "PyTorch"],
    description: "Machine learning and data science technologies"
  },
  {
    title: "Cloud/DevOps",
    icon: Cloud,
    color: "orange",
    skills: ["Docker", "Kubernetes", "CI/CD", "API Security", "AWS", "Azure", "Jenkins"],
    description: "Cloud infrastructure and deployment automation"
  },
  {
    title: "API Management",
    icon: Network,
    color: "teal",
    skills: ["Gateway Design", "Authentication", "Analytics", "Monetization", "OAuth2", "JWT"],
    description: "API design, security, and management systems"
  },
  {
    title: "Tools & CS",
    icon: Settings,
    color: "gray",
    skills: ["Git", "GitHub", "VS Code", "DSA", "OS", "CN", "System Design"],
    description: "Development tools and computer science fundamentals"
  }
]

const colorClasses = {
  blue: {
    bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    border: "border-blue-200 dark:border-blue-800",
    icon: "bg-blue-500",
    text: "text-blue-800 dark:text-blue-200"
  },
  green: {
    bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    border: "border-green-200 dark:border-green-800",
    icon: "bg-green-500",
    text: "text-green-800 dark:text-green-200"
  },
  purple: {
    bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
    border: "border-purple-200 dark:border-purple-800",
    icon: "bg-purple-500",
    text: "text-purple-800 dark:text-purple-200"
  },
  orange: {
    bg: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
    border: "border-orange-200 dark:border-orange-800",
    icon: "bg-orange-500",
    text: "text-orange-800 dark:text-orange-200"
  },
  teal: {
    bg: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20",
    border: "border-teal-200 dark:border-teal-800",
    icon: "bg-teal-500",
    text: "text-teal-800 dark:text-teal-200"
  },
  gray: {
    bg: "from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20",
    border: "border-gray-200 dark:border-gray-700",
    icon: "bg-gray-600",
    text: "text-gray-800 dark:text-gray-200"
  }
}

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning backend development, machine learning, and cloud technologies.
              Each skill represents countless hours of learning and practical application.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses]
              const IconComponent = category.icon
              
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className={`bg-gradient-to-br ${colors.bg} p-8 rounded-2xl border ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`${colors.icon} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-white dark:bg-dark-800 ${colors.text} font-semibold rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Production Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}