'use client'
import SectionHeading from '@/components/SectionHeading'
import { workData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Work() {
  const { ref } = useSectionInView('Work', 0.3)

  return (
    <section id="work" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>Work</SectionHeading>
      <div className="container">
        <motion.div
          className="mt-5 flex flex-col gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {workData.map((work, index) => (
            <motion.div
              key={work.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-gray-900/50 p-8 md:p-10 lg:p-20"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-semibold tracking-wide text-emerald-300">
                    {work.company}
                  </div>
                  <div className="text-base font-medium text-white/80">
                    {`${work.department} | ${work.position}`}
                  </div>
                  <div className="text-sm text-white/50">{work.date}</div>
                </motion.div>

                <div className="flex flex-col gap-8">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium text-emerald-300/90">
                      주요 업무
                    </h3>
                    <ul className="space-y-3">
                      {work.task.map((task, taskIndex) => (
                        <motion.li
                          key={taskIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + taskIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-300/50" />
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium text-emerald-300/90">
                      주요 성과
                    </h3>
                    <ul className="space-y-3">
                      {work.achievement.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + achievementIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-300/50" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
