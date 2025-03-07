import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const Resume = () => {
  return (
    <section className="page-section bg-primary relative" id="resume">
      <ParticlesBackground color="#00ffff" linkColor="#00ffff" particleCount={120} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-secondary/80 backdrop-blur-sm p-8 rounded-lg"
        >
          {/* 基本信息 */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">赵亮</h1>
            <div className="text-gray-300 space-y-2">
              <p>男 | 22岁 | 2025届应届生</p>
              <p>电话：15327848221 | 邮箱：1812682747@qq.com</p>
              <p className="text-accent">求职意向：数据标注/AI训练师 | 期望薪资：8-12K | 期望城市：深圳</p>
            </div>
          </div>

          {/* 个人优势 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">个人优势</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>计算机科学与技术专业在读，专注数据标注与AI训练领域，擅长通过规则设计提升标注效率与数据质量，覆盖数据收集、清洗、标注全流程。</li>
              <li>熟悉多轮对话意图识别、单轮对话场景标注及Reward Model标注方法，能够精准定义复杂场景标签边界。</li>
              <li>具备扎实的逻辑分析与跨团队协作能力，主导过电商评论、智能客服等高复杂度标注项目，推动标注准确率提升15%+，适应高精度、高强度标注需求。</li>
            </ul>
          </div>

          {/* 专业技能 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">专业技能</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>数据标注经验：3段数据标注实战经验，累计处理文本/图像数据50万+条，质检通过率99%。</li>
              <li>标注技术：精通多轮对话标注（上下文依赖）、单轮对话意图标注，设计10+类Reward Model评分规则。</li>
              <li>数据处理：掌握Python（Pandas/NLTK）实现数据清洗、噪声过滤，效率提升35%。</li>
              <li>标注工具：熟练使用Label Studio、Prodigy等工具，日均标注效率2500+条。</li>
              <li>协同优化：熟悉Prompt工程与多模态标注协同，优化模型意图识别准确率12%。</li>
            </ul>
          </div>

          {/* 实习经历 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">实习经历</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">武汉智云科技有限公司</h3>
              <p className="text-gray-400 mb-2">数据标注实习生 | 2023.06-2024.01</p>
              <div className="text-gray-300">
                <p className="font-bold mb-2">内容：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>负责电商评论多标签标注，完成30万+条数据清洗与标注，设计分层抽样规则平衡长尾分布。</li>
                  <li>开发自动化脚本检测标注一致性，结合规则引擎预填充标签，人工复核时间减少30%。</li>
                  <li>主导Reward Model标注项目，制定评分规则，支持模型排序效果优化。</li>
                </ul>
                <p className="font-bold mt-2 mb-2">成果：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>交付数据用于推荐模型训练，点击率提升22%。</li>
                  <li>输出《Reward Model标注争议案例库》，团队标注效率提升25%。</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">武汉图灵数据服务有限公司</h3>
              <p className="text-gray-400 mb-2">数据标注助理（兼职） | 2022.12-2023.05</p>
              <div className="text-gray-300">
                <p className="font-bold mb-2">内容：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>参与智能客服多轮对话标注项目，标注10万+条上下文依赖对话数据，定义意图继承与状态迁移规则。</li>
                  <li>设计单轮对话意图分类模板，优化噪声过滤流程，标注准确率提升18%。</li>
                  <li>设计数据质量管控方案，结合人工校验与规则筛选，高效清除无效数据20%+。</li>
                </ul>
                <p className="font-bold mt-2 mb-2">成果：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>数据用于客户对话系统训练，意图识别F1-score达91%。</li>
                  <li>提出「动态规则迭代」机制，关键场景标注错误率下降15%。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 项目经历 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">项目经历</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">电商用户行为Reward Model标注优化 | 2023.09-2024.03</h3>
              <div className="text-gray-300">
                <p className="font-bold mb-2">内容：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>针对用户评论与点击行为，设计多维评分规则，完成8万+条Reward标注。</li>
                  <li>开发Python脚本自动化提取特征，辅助标注员快速匹配评分标准。</li>
                  <li>协同算法团队优化标注边界，解决"模糊行为"评分争议问题。</li>
                </ul>
                <p className="font-bold mt-2 mb-2">成果：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>模型排序效果AUC提升至0.93，支持个性化推荐系统上线。</li>
                  <li>输出《Reward标注SOP》，被采纳为团队核心标准。</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">智能客服多轮对话场景标注 | 2023.03-2023.06</h3>
              <div className="text-gray-300">
                <p className="font-bold mb-2">内容：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>标注5万+条多轮对话数据，定义上下文意图继承规则。</li>
                  <li>设计状态迁移标注模板，支持对话流程连贯性验证。</li>
                  <li>结合规则引擎预标注上下文依赖标签，团队效率提升40%。</li>
                </ul>
                <p className="font-bold mt-2 mb-2">成果：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>数据用于对话系统训练，多轮意图识别准确率提升至89%。</li>
                  <li>总结《多轮对话标注边界手册》，减少团队60%沟通成本。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 教育经历 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-accent">教育经历</h2>
            <div className="text-gray-300">
              <h3 className="text-xl font-bold">武昌理工学院</h3>
              <p>本科 计算机科学与技术 | 2020.09-2025.06（在读）</p>
              <p>主修课程：机器学习、自然语言处理、数据库系统</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 