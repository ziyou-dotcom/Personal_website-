import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const About = () => {
  const skills = [
    {
      name: "数据标注",
      description: "3段数据标注实战经验，累计处理文本/图像数据50万+条"
    },
    {
      name: "标注技术",
      description: "精通多轮对话标注、单轮对话意图标注，设计Reward Model评分规则"
    },
    {
      name: "数据处理",
      description: "掌握Python（Pandas/NLTK）实现数据清洗、噪声过滤"
    },
    {
      name: "标注工具",
      description: "熟练使用Label Studio、Prodigy等工具"
    },
    {
      name: "协同优化",
      description: "熟悉Prompt工程与多模态标注协同"
    },
    {
      name: "质量管控",
      description: "设计数据质量管控方案，质检通过率99%"
    }
  ]

  return (
    <section className="page-section bg-secondary relative" id="about">
      <ParticlesBackground color="#0ff" linkColor="#0ff" particleCount={150} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              关于我
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              计算机科学与技术专业在读，专注数据标注与AI训练领域
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              熟悉多轮对话意图识别、单轮对话场景标注及Reward Model标注方法，能够精准定义复杂场景标签边界。
              具备扎实的逻辑分析与跨团队协作能力，主导过电商评论、智能客服等高复杂度标注项目。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3 text-accent">{skill.name}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">教育背景</h3>
            <div className="text-gray-300">
              <p className="text-xl font-bold">武昌理工学院</p>
              <p>本科 计算机科学与技术 | 2020.09-2025.06（在读）</p>
              <p className="text-gray-400 mt-2">主修：机器学习、自然语言处理、数据库系统</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 