import Intro from '@/app/_components/Intro'
import Skills from '@/app/_components/Skills'
import Header from '@/app/_components/Header'
import Experience from '@/app/_components/Experience'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <Skills />
        <Experience />
      </main>
    </>
  )
}
