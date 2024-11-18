'use client'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/action-section-context'
import type { SectionName } from '@/lib/types'

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) setActiveSection(sectionName)
  }, [inView, setActiveSection, sectionName])

  return { ref }
}
