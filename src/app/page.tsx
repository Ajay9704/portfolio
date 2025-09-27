'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  Brain,
  Briefcase,
  Trophy,
  Star,
  CheckCircle,
  ExternalLink,
  Phone,
  Send
} from 'lucide-react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-blue-400/40 rounded-full pointer-events-none z-50 shadow-lg shadow-blue-400/50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed w-3 h-3 bg-blue-300 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <motion.div
                  className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">Available for Opportunities</span>
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Budida Ajay
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                  Computer Science Student & Tech Enthusiast
                </h2>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {['SDE', 'SWE', 'AI/ML', 'Data Scientist', 'Backend Developer'].map((role, index) => (
                    <motion.span
                      key={role}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-purple-200 border border-purple-500/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {role}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                Computer Science student at IIIT Jabalpur with 8.2 CGPA. Currently working as Project Assistant Intern at Rakumura IT Solutions.
                Delivered three production projects and solved 500+ algorithm problems with expertise in API design, containerized delivery, and ML pipelines.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                <motion.div
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Jabalpur, India</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Award className="w-4 h-4 text-green-400" />
                  <span>8.2 CGPA</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>2023-Present</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://drive.google.com/file/d/19mNvS9eY5jgD4co0dmbURaumLFJiGsUk/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="font-semibold">Resume</span>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://github.com/Ajay9704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-semibold">GitHub</span>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://www.linkedin.com/in/budida-ajay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="mailto:chinniyadav868@gmail.com"
                    className="group flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Contact</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 relative overflow-hidden"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Floating Icons */}
                  <motion.div
                    className="absolute top-10 left-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <motion.div
                    className="absolute top-10 right-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <Database className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-10 left-10"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <Brain className="w-8 h-8 text-purple-400" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-10 right-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <Cloud className="w-8 h-8 text-pink-400" />
                  </motion.div>

                  <div className="text-center z-10">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-lg font-semibold text-white">Innovating Tomorrow</p>
                    <p className="text-sm text-gray-300">Through Code & Creativity</p>
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          style={{ cursor: 'pointer' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate Computer Science student with hands-on experience in various domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science and Engineering at IIIT Jabalpur,
                  where I've maintained a strong academic record with 8.2 CGPA while actively working on production-level projects.
                </p>
                <p>
                  Currently working as a Project Assistant Intern at Rakumura IT Solutions, where I've delivered three production projects and solved 500+ algorithm problems.
                  My expertise spans API design, containerized delivery, ML pipelines, and enterprise-level system architecture.
                </p>
                <p>
                  I'm passionate about competitive programming with achievements including LeetCode 1821 rating (Top 5%),
                  CodeChef 1650 rating, and recognition in multiple national-level competitions.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300">8.2 CGPA</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">Multiple Projects</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300">+91 8688101195</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-300">chinniyadav868@gmail.com</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Database, title: "Backend Development", desc: "Node.js, TypeScript, PostgreSQL, Redis", color: "blue" },
                { icon: Brain, title: "AI/ML & Data Science", desc: "scikit-learn, Pandas, NumPy, XGBoost", color: "purple" },
                { icon: Cloud, title: "Cloud & DevOps", desc: "Docker, Kubernetes, CI/CD, API Security", color: "green" },
                { icon: Code, title: "Programming", desc: "Python, C++, Go, SQL", color: "orange" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 group cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and key contributions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl border border-slate-600 group"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Project Assistant Intern
                  </h3>
                  <p className="text-lg font-semibold text-blue-400 mb-2">
                    Rakumura IT Solutions
                  </p>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Chennai / Hyderabad, India</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <motion.span
                    className="bg-blue-900/30 text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    July 2025 - Present
                  </motion.span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Designed and implemented an enterprise API Gateway supporting authentication (OAuth2, API keys),
                rate-limiting, routing and analytics to centralize service access. Built containerized deployments
                and automated delivery using Docker and Kubernetes with CI/CD pipelines.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Designed enterprise API Gateway with OAuth2, API keys, rate-limiting and analytics",
                      "Built containerized deployments using Docker and Kubernetes with CI/CD pipelines",
                      "Hardened API security with RBAC, input validation and secure configuration",
                      "Integrated developer portals and analytics dashboards for real-time monitoring"
                    ].map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "35% request latency reduction using Redis caching and WebSocket",
                      "Billing system designed to scale for 10K+ customers",
                      "Real-time metrics across 20+ API endpoints"
                    ].map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'].map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I work with across different domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Programming Languages",
                skills: ['Python', 'C++', 'C', 'Go', 'SQL', 'JavaScript'],
                color: "blue"
              },
              {
                icon: Database,
                title: "Web & Database",
                skills: ['HTML', 'CSS', 'PHP', 'MySQL', 'MongoDB'],
                color: "green"
              },
              {
                icon: Brain,
                title: "AI/ML",
                skills: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'XGBoost'],
                color: "purple"
              },
              {
                icon: Cloud,
                title: "Cloud/DevOps",
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'API Security'],
                color: "orange"
              },
              {
                icon: ExternalLink,
                title: "API Management",
                skills: ['Gateway Design', 'Authentication', 'Analytics', 'Monetization'],
                color: "teal"
              },
              {
                icon: Briefcase,
                title: "Tools & CS",
                skills: ['Git', 'GitHub', 'VS Code', 'DSA', 'OS', 'CN', 'Computer Architecture'],
                color: "indigo"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-600 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <category.icon className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform ${category.color === 'blue' ? 'text-blue-400' :
                  category.color === 'green' ? 'text-green-400' :
                    category.color === 'purple' ? 'text-purple-400' :
                      category.color === 'orange' ? 'text-orange-400' :
                        category.color === 'teal' ? 'text-teal-400' :
                          category.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'
                  }`} />
                <h3 className={`text-lg font-bold text-white mb-4 transition-colors ${category.color === 'blue' ? 'group-hover:text-blue-400' :
                  category.color === 'green' ? 'group-hover:text-green-400' :
                    category.color === 'purple' ? 'group-hover:text-purple-400' :
                      category.color === 'orange' ? 'group-hover:text-orange-400' :
                        category.color === 'teal' ? 'group-hover:text-teal-400' :
                          category.color === 'indigo' ? 'group-hover:text-indigo-400' : 'group-hover:text-blue-400'
                  }`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm text-gray-300">{skill}</span>
                      <motion.div
                        className={`w-2 h-2 rounded-full ${category.color === 'blue' ? 'bg-blue-400' :
                          category.color === 'green' ? 'bg-green-400' :
                            category.color === 'purple' ? 'bg-purple-400' :
                              category.color === 'orange' ? 'bg-orange-400' :
                                category.color === 'teal' ? 'bg-teal-400' :
                                  category.color === 'indigo' ? 'bg-indigo-400' : 'bg-blue-400'
                          }`}
                        whileHover={{ scale: 1.5 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Competitive Programming Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1821</div>
              <div className="text-gray-300 text-sm">LeetCode Rating</div>
              <div className="text-xs text-gray-400">Top 5%</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1650</div>
              <div className="text-gray-300 text-sm">CodeChef Rating</div>
              <div className="text-xs text-gray-400">Global Rank 455</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1235</div>
              <div className="text-gray-300 text-sm">Codeforces Rating</div>
              <div className="text-xs text-gray-400">Pupil</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Problems Solved</div>
              <div className="text-xs text-gray-400">Multiple Platforms</div>
            </div>
          </motion.div>

          {/* Additional Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <h4 className="text-lg font-bold text-white">NPTEL Excellence</h4>
                  <p className="text-sm text-gray-400">Top 1% Nationwide</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Joy of Computing using Python course with 94/100 score
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h4 className="text-lg font-bold text-white">PM YASASVI Scholarship</h4>
                  <p className="text-sm text-gray-400">Top 0.1% Nationwide</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                National level scholarship recognition for academic excellence
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Production-ready projects showcasing technical expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: "Enterprise API Gateway Platform",
                description: "Production-ready API Gateway with authentication, analytics, rate-limiting and RBAC",
                details: [
                  "35% latency reduction with Redis caching and WebSocket",
                  "Billing system designed to scale for 10K+ customers",
                  "Real-time metrics across 20+ API endpoints"
                ],
                tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "Docker", "Prometheus"],
                github: "https://github.com/Ajay9704/api_gate_way",
                featured: true
              },
              {
                title: "Traffic Flow Predictor",
                description: "ML-powered traffic prediction system for urban planning",
                details: [
                  "1M+ traffic records processed",
                  "35% delay reduction in test scenarios",
                  "Informed 10+ site selections for urban planners"
                ],
                tech: ["Python", "scikit-learn", "Pandas", "NumPy", "XGBoost"],
                github: "https://github.com/Ajay9704/traffic-flow-prediction",
                featured: true
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl border border-slate-600 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors group"
                  >
                    <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>View Code</span>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-600 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Email Spam Detector
                  </h3>
                  <p className="text-gray-300 mb-2">
                    ML classifier with 100% precision and 94.1% accuracy on 5K+ labeled emails
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["Naive Bayes", "XGBoost", "Random Forest"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://github.com/Ajay9704/spam_classification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm currently looking for opportunities in SDE, SWE, AI/ML, Data Science, and Backend Development roles.
                  Would love to hear about exciting projects where I can contribute my skills and continue learning.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "chinniyadav868@gmail.com", href: "mailto:chinniyadav868@gmail.com", color: "blue" },
                    { icon: Phone, label: "Phone", value: "+91 8688101195", href: "tel:+918688101195", color: "green" },
                    { icon: MapPin, label: "Location", value: "Jabalpur, Madhya Pradesh, India", href: null, color: "purple" }
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <contact.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{contact.label}</p>
                        {contact.href ? (
                          <a href={contact.href} className="text-blue-400 hover:underline">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: "https://github.com/Ajay9704", color: "gray" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/budida-ajay", color: "blue" }
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                        >
                          <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-600"
              >
                <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white transition-all"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}