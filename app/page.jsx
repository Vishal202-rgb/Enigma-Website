import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Members } from '@/components/members'
import { Events } from '@/components/events'
import { SkillsCourses } from '@/components/skills-courses'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Events />
      <SkillsCourses />
      <Contact />
      <Footer />
    </main>
  )
}
