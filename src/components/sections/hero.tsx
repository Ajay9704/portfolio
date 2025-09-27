'use client'

import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Scene3D } from '@/components/3d/scene'
import { TypewriterText } from '@/components/ui/typewriter-text'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const roles = [
  'Software Engineer',
  'Backend Developer', 
  'ML Enthusiast',
  'Problem Solver',
  'Cloud Architect'
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    setMounted(true)
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"
      aria-label="Hero section"
    >
      {/* 3D Background */}
      {mounted && !reducedMotion && (
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            className="w-full h-full"
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Environment preset="night" />
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Fallback background for reduced motion */}
      {(reducedMotion || !mounted) && (
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-900/20 via-primary-600/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-white">Budida</span>
              <span className="block text-gradient">Ajay</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
              <span className="text-white">Aspiring </span>
              <TypewriterText 
                words={roles}
                className="text-primary-400"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-primary-400 font-semibold">ML & Cloud Enthusiast</span> | 
            <span className="text-primary-300 font-semibold"> Backend Developer</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Backend-focused SDE intern with expertise in API design, containerized delivery, and ML pipelines. 
            Passionate about building <span className="text-gradient font-semibold">scalable solutions</span> and solving 
            <span className="text-gradient font-semibold"> complex problems</span> with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass border-primary-500/50 text-white hover:bg-primary-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <a
              href="https://github.com/Ajay9704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/budida-ajay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:chinniyadav868@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Download Resume"
            >
              <Download className="h-8 w-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}