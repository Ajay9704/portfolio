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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
        className="fixed w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
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
                Backend-focused SDE intern at IIIT Jabalpur. Delivered three production projects and solved 500+ algorithm problems. 
                Strengths include API design, containerized delivery, and ML pipelines with hands-on enterprise experience.
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
                <motion.a 
                  href="https://drive.google.com/file/d/19mNvS9eY5jgD4co0dmbURaumLFJiGsUk/view?usp=drive_link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-semibold">Resume</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/Ajay9704" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">GitHub</span>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/budida-ajay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="mailto:chinniyadav868@gmail.com"
                  className="group flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Contact</span>
                </motion.a>
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
      <section id="about" className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science and Engineering at IIIT Jabalpur, 
                  where I've maintained a strong academic record with 8.2 CGPA while actively working on production-level projects.
                </p>
                <p>
                  As a backend-focused SDE intern, I've delivered three production projects and solved 500+ algorithm problems. 
                  My expertise spans API design, containerized delivery, ML pipelines, and enterprise-level system architecture.
                </p>
                <p>
                  I'm passionate about competitive programming with achievements including LeetCode 1821 rating (Top 5%), 
                  CodeChef 1650 rating, and recognition in multiple national-level competitions.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">8.2 CGPA</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Multiple Projects</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-5 h-5 text-green-500" />
                    <span className="text-sm">+91 8688101195</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5 text-red-500" />
                    <span className="text-sm">chinniyadav868@gmail.com</span>
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
                  className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-gray-200 dark:border-slate-600 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}