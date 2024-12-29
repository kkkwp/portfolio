import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import ActiveSectionContextProvider from '@/context/action-section-context'

export default function Home() {
  return (
    <>
      <ActiveSectionContextProvider>
        <Header />
        <main className="flex flex-col items-center px-4">
          <Intro />
          <Work />
          <Projects />
          <Experience />
          <Footer />
        </main>
      </ActiveSectionContextProvider>
    </>
  )
}
