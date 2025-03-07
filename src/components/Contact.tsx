import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const Contact = () => {
  return (
    <section className="page-section bg-secondary relative" id="contact">
      <ParticlesBackground color="#0ff" linkColor="#0ff" particleCount={140} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            联系我
          </motion.h2>
          <motion.div 
            className="text-xl text-gray-300 mb-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>期望职位：数据标注/AI训练师</p>
            <p>期望城市：深圳</p>
            <p>期望薪资：8-12K</p>
          </motion.div>
          <motion.div
            className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">联系方式</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>电话：15327848221</li>
                  <li>邮箱：1812682747@qq.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">个人信息</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>年龄：22岁</li>
                  <li>学历：本科在读</li>
                  <li>毕业时间：2025年</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="mailto:1812682747@qq.com" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              发送邮件
            </a>
            <a 
              href="tel:15327848221" 
              className="btn-primary"
            >
              电话联系
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 