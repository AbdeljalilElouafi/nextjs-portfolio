import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Languages from "@/components/languages"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </main>
  )
}
