'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Briefcase, Trophy, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-white dark:bg-dark-900" ref={ref}>
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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Hello! I'm Ajay 👋
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a Computer Science student at <span className="text-primary-500 font-semibold">IIIT Jabalpur</span> with a passion for backend development and machine learning. 
                    Currently working as a Project Assistant Intern at <span className="text-primary-500 font-semibold">Rakumura IT Solutions</span>, where I've delivered three production projects 
                    and built enterprise-grade API gateways.
                  </p>
                  <p>
                    With over <span className="text-gradient font-bold">500+ algorithm problems</span> solved across various platforms and a strong foundation in cloud technologies, 
                    I enjoy tackling complex challenges and building scalable solutions that make a real impact.
                  </p>
                  <p>
                    My expertise spans from designing robust APIs and implementing ML pipelines to containerized deployments with Docker and Kubernetes. 
                    I'm particularly passionate about the intersection of software engineering and artificial intelligence.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button
                    className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stats & Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education Card */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl border border-primary-200 dark:border-primary-800">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-500 p-3 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Current Studies</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science & Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">IIIT Jabalpur • <span className="text-primary-500 font-bold">CGPA: 8.2/10</span> • 2023-Present</p>
                </div>
              </div>

              {/* Current Role Card */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Current Role</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional Experience</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Project Assistant Intern</p>
                  <p className="text-gray-600 dark:text-gray-400">Rakumura IT Solutions • <span className="text-blue-500 font-bold">Jul 2025-Present</span></p>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-3 rounded-lg mr-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Competitive Programming</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Problem Solving</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">500+ Problems Solved</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    LeetCode: <span className="text-purple-500 font-bold">1821 rating (Top 5%)</span> • 
                    CodeChef: <span className="text-purple-500 font-bold">1650 rating</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}