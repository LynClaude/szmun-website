'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageTransition from '@/components/PageTransition'

export default function PPRDMUNPage() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowHeight = window.innerHeight
      const mouseY = e.clientY
      setShowArrow(mouseY > windowHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <PageTransition>
      <div className="relative">
        {/* 第一页 */}
        <div className="relative min-h-screen overflow-hidden">
          {/* 背景图片 */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/pprdbg.png"
              alt="PPRDMUN Background"
              fill
              className="object-cover brightness-75"
              priority
            />
            {/* 深色蒙版 */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* 内容区域 */}
          <div className="relative z-10 container mx-auto min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full px-4 py-24">
              {/* 左侧文字内容 */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white space-y-8"
              >
                <h1 
                  className="text-4xl md:text-6xl font-bold" 
                  style={{ 
                    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc', '宋体', serif",
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  PPRDMUN 2025
                </h1>
                <p 
                  className="text-lg md:text-xl leading-relaxed opacity-90"
                  style={{
                    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc', '宋体', serif"
                  }}
                >
                  第十六届泛珠三角模拟联合国大会是华南地区最具影响力的模联会议之一。本届大会将继续秉承"和平、发展、合作、共赢"的理念，为各校学生提供一个展示外交才能、增进国际理解的专业平台。
                </p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold">大会信息</h2>
                  <ul className="list-disc list-inside space-y-2 opacity-90">
                    <li>举办时间：2025年7月中旬</li>
                    <li>举办地点：深圳中学（泥岗校区）</li>
                    <li>会议语言：中文/英文</li>
                    <li>参会规模：预计500人</li>
                    <li>主办方：深圳中学模拟联合国协会</li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* 右侧图片展示 */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/深中模联活动照.pic(1).jpg"
                  alt="PPRDMUN"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* 向下滚动指引按钮 */}
          <button 
            onClick={scrollToNextSection}
            className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce transition-opacity duration-300 ${
              showArrow ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </button>
        </div>

        {/* 第二页 - 委员会设置 */}
        <div className="min-h-screen bg-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <h2 className="text-4xl font-bold text-center text-primary">委员会设置</h2>
              
              {/* 英文特殊委员会 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
                <h3 className="text-3xl font-bold text-primary">英文特殊委员会 - 美国宪法第十九修正案</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">议题背景</h4>
                    <p className="text-gray-600">
                      1919年，美国宪法第十九修正案的通过标志着美国女性争取选举权运动的重大胜利。这一修正案禁止联邦政府和各州以性别为由剥夺或限制公民的投票权。本委员会将重现这一历史性时刻，探讨当时的社会背景、政治博弈以及对现代民主制度的深远影响。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">委员会设置</h4>
                    <div className="text-gray-600">
                      <p className="font-semibold mb-2">美国参议院</p>
                      <p className="text-sm opacity-90">模拟1919年美国参议院就第十九修正案进行的历史性辩论与表决，重现这一改变美国政治格局的关键时刻。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 中文委员会 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
                <h3 className="text-3xl font-bold text-primary">中文委员会 - 加泰罗尼亚公投</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">议题背景</h4>
                    <p className="text-gray-600">
                      2017年加泰罗尼亚独立公投是西班牙近代史上最具争议性的政治事件之一。这次公投不仅挑战了西班牙的宪法秩序，也引发了关于民族自决、地区自治与国家统一的深刻讨论。本委员会将重点关注公投前后的谈判过程，探讨地区政府与中央政府之间的权力博弈，以及这一事件对欧洲地区政治格局的影响。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">委员会设置</h4>
                    <div className="text-gray-600 space-y-4">
                      <div>
                        <p className="font-semibold mb-2">1. 双边谈判会场</p>
                        <p className="text-sm opacity-90">2017加泰罗尼亚独立公投协调机制</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">2. 加泰罗尼亚执行委员会会场</p>
                        <p className="text-sm opacity-90">2017加泰罗尼亚独立公投协调机制</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 主新闻中心 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
                <h3 className="text-3xl font-bold text-primary">主新闻中心</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">中文新闻中心</h4>
                    <p className="text-gray-600">
                      负责报道加泰罗尼亚公投进程中的重要事件，深入分析各方立场，为代表提供及时、准确的中文新闻报道，助力委员会讨论的深入开展。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">英文新闻中心</h4>
                    <p className="text-gray-600">
                      专注于美国宪法第十九修正案相关的历史事件报道，通过英文媒体视角，还原20世纪初美国女性争取选举权的重要时刻。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 第三页 - 大会亮点 */}
        <div className="min-h-screen bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <h2 className="text-4xl font-bold text-center text-primary">大会亮点</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                  <h3 className="text-2xl font-bold text-primary">专业学术团队</h3>
                  <p className="text-gray-600">
                    由经验丰富的学术团队提供支持，确保会议的专业性和学术水平。团队成员均具有丰富的模联经验和专业知识储备。
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                  <h3 className="text-2xl font-bold text-primary">国际化视野</h3>
                  <p className="text-gray-600">
                    设置中英文双语委员会，为代表提供国际化的交流平台。邀请国际友人参与，促进文化交流与理解。
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                  <h3 className="text-2xl font-bold text-primary">创新会议体验</h3>
                  <p className="text-gray-600">
                    引入危机联动机制，增加会议的趣味性和挑战性。采用现代化会议系统，提升参会体验。
                  </p>
                </div>
              </div>

              {/* 文件下载 */}
              <div className="flex justify-center gap-8">
                <a 
                  href="/docs/泛珠模联2025风纪与行为条例.pdf" 
                  download
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary/90 transition-colors"
                >
                  泛珠模联2025风纪与行为条例
                </a>
                <a 
                  href="/docs/PPRDMUN2025+学术团队申请表.docx" 
                  download
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary/90 transition-colors"
                >
                  PPRDMUN2025学术团队申请表
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 