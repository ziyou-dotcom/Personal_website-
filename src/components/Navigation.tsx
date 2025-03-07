import React from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-accent"
            whileHover={{ scale: 1.1 }}
          >
            个人主页
          </motion.a>
          <div className="flex gap-6">
            <a href="#about" className="nav-link">关于</a>
            <a href="#projects" className="nav-link">项目</a>
            <a href="#resume" className="nav-link">简历</a>
            <a href="#contact" className="nav-link">联系</a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 