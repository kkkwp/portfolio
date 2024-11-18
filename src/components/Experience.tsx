'use client'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from '@/components/SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { experienceData } from '@/lib/data'

export default function Experience() {
  const { ref } = useSectionInView('Experience')

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: 'rgba(255, 255, 255, 0.15)',
              fontStyle: '1.5rem',
            }}
          >
            <h3 className="font-semibold capitalize text-emerald-400">
              {item.title}
            </h3>
            <p className="!mt-0 font-normal text-white/40">{item.location}</p>
            <p className="!mt-1 !font-normal text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}
