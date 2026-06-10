import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Hackathons from './components/Hackathons.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'
import { useLang, useT } from './i18n.jsx'

export default function App() {
  const { lang } = useLang()
  const t = useT()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <div className="grain" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <span>© 2026 {profile.name}</span>
          <span>{t({ fr: 'Conçu et codé à la main — React + Vite', en: 'Designed & hand-coded — React + Vite' })}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/ParmeSimon
          </a>
        </div>
      </footer>
    </>
  )
}
