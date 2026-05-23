import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Human from '@/components/Human'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Skills />
      <Projects />
      <Human />
      <Contact />
    </main>
  )
}