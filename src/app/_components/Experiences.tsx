'use client'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/app/lib/data'
import SectionHeading from '@/app/_components/SectionHeading'

export default function Experiences() {
  return (
    <section className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0,0,0,0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
            date={item.date}
            icon={item.icon}
            iconStyle={{ background: 'white', fontStyle: '1.5rem' }}
          >
            <h3 className="font-semibold capitalize text-emerald-400">
              {item.title}
            </h3>
            <p className="!mt-0 font-normal text-gray-400">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}
