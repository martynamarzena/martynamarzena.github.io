import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import YouTube from './components/YouTube'
import Experience from './components/Experience'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [activeSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation activeSection={activeSection} scrolled={scrolled} />
      
      <main>
        <section id="home" className="section">
          <Hero />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="portfolio" className="section">
          <Portfolio />
        </section>

        <section id="youtube" className="section">
          <YouTube />
        </section>

        <section id="experience" className="experience">
          <Experience />
        </section>

        <section id="social-media" className="section">
          <SocialMedia />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}