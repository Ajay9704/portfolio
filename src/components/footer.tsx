'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-dark-900 to-dark-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Budida Ajay</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Backend-focused Software Engineer passionate about building scalable solutions 
                and solving complex problems through innovative technology. Currently pursuing 
                B.Tech at IIIT Jabalpur.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ajay9704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-all transform hover:scale-125"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/budida-ajay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-all transform hover:scale-125"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:chinniyadav868@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-all transform hover:scale-125"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block text-gray-300 hover:text-primary-400 transition-colors animated-underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-6 text-xl">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 text-primary-400 mr-3" />
                  <span className="text-sm">chinniyadav868@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="h-4 w-4 text-primary-400 mr-3 flex items-center justify-center">
                    📱
                  </div>
                  <span className="text-sm">+91 8688101195</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="h-4 w-4 text-primary-400 mr-3 flex items-center justify-center">
                    📍
                  </div>
                  <span className="text-sm">Jabalpur, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            <p className="flex items-center">
              © 2025 <span className="text-gradient font-semibold mx-1">Budida Ajay</span>. 
              All rights reserved. Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> and 
              <span className="text-primary-400 font-semibold ml-1">Next.js</span>
            </p>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="glass border-primary-500/50 text-primary-400 hover:bg-primary-500/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}