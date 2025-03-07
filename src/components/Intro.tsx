import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const Intro = () => {
  return (
    <section className="page-section bg-primary relative" id="home">
      <ParticlesBackground color="#00ffff" linkColor="#00ffff" particleCount={180} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg shadow-accent/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/images/avatar.jpg" 
              alt="赵亮的照片" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            你好，我是 <span className="text-accent">赵亮</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            数据标注/AI训练师 | 计算机科学与技术专业
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              联系我
            </a>
            <a href="#projects" className="btn-primary">
              查看项目
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro 