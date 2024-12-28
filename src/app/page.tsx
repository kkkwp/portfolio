import ActiveSectionContextProvider from '@/context/action-section-context'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <ActiveSectionContextProvider>
        <Header />
        <main className="flex flex-col items-center px-4">
          <Intro />
          <Projects />
          <Experience />
        </main>
      </ActiveSectionContextProvider>
    </>
  )
}
