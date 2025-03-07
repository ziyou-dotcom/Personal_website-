import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const Projects = () => {
  const projects = [
    {
      title: "电商用户行为Reward Model标注优化",
      period: "2023.09-2024.03",
      description: "设计多维评分规则，完成8万+条Reward标注，支持个性化推荐系统优化",
      achievements: [
        "模型排序效果AUC提升至0.93",
        "输出《Reward标注SOP》",
        "开发自动化特征提取脚本"
      ],
      tech: ["Python", "Label Studio", "机器学习"]
    },
    {
      title: "智能客服多轮对话场景标注",
      period: "2023.03-2023.06",
      description: "负责多轮对话数据标注，定义意图继承规则，优化标注流程",
      achievements: [
        "多轮意图识别准确率89%",
        "团队效率提升40%",
        "减少60%沟通成本"
      ],
      tech: ["NLP", "对话系统", "标注工具"]
    },
    {
      title: "电商评论多标签标注系统",
      period: "2023.06-2024.01",
      description: "设计分层抽样规则，完成30万+条数据清洗与标注",
      achievements: [
        "点击率提升22%",
        "团队标注效率提升25%",
        "人工复核时间减少30%"
      ],
      tech: ["Python", "NLTK", "规则引擎"]
    }
  ]

  return (
    <section className="page-section bg-primary relative" id="projects">
      <ParticlesBackground color="#00ffff" linkColor="#00ffff" particleCount={160} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            项目经历
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.period}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-accent">主要成果：</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-primary/50 px-3 py-1 rounded-full text-sm text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 