import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navigation.css'

interface NavigationProps {
  activeSection: string
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'O mnie' },
    { id: 'skills', label: 'Umiejętności' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Możliwości' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'education', label: 'Edukacja' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'contact', label: 'Kontakt' },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <span className="logo-accent">MARTYNA URBAN</span>
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}