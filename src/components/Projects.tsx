'use client'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '@/components/SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { projectsData } from '@/lib/data'
import { useActiveSectionContext } from '@/context/action-section-context'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.3)
  const { setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div className="container">
        <div className="mt-5 flex flex-col gap-20">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:px-10 md:pt-12 lg:px-20 lg:pt-16"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-sm font-bold tracking-widest text-emerald-300">
                    {project.date}
                  </div>
                  <h3 className="mt-2 text-2xl md:mt-5">{project.title}</h3>
                  <hr className="my-4 border-t-2 border-white/5 md:my-5" />
                  <span className="text-sm text-white/50 md:text-base">
                    {project.description}
                  </span>
                  <div className="flex flex-col gap-4 md:flex-row lg:text-sm">
                    <button
                      className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-300 px-8 font-semibold text-black md:w-auto"
                      onClick={() => {
                        setTimeOfLastClick(Date.now())
                      }}
                    >
                      <span>상세 내역</span>
                      <span>📖</span>
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 font-semibold text-gray-950 md:w-auto">
                        <span>Visit Github</span>
                        <FiArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={507}
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
