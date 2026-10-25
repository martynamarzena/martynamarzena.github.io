import { ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const scrollToPortfolio = () => {
    const portfolio = document.getElementById('portfolio')
    portfolio?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Przekuwam pomysły</span>
            <span className="title-line highlight-line">
              <span className="highlight-word">w realne projekty</span>
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Grafika komputerowa • Montaż wideo • Fotografia produktowa • Wizualizacje 3D • Marketing • Ilustracje
          </p>

          <p className="hero-description">
            Twój pomysł, moja kreatywność - wspólny cel, świetny efekt. Opowiedz mi o swoim pomyśle, a wspólnie znajdziemy sposób, by nadać mu wyjątkową formę. 
          </p>

          <div className="hero-buttons">
            <button className="btn" onClick={scrollToPortfolio}>
              Zobacz moje prace
            </button>
            <a href="#contact" className="btn btn-secondary">
              Skontakuj się
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-block block-1">
            <span className="visual-label">Design</span>
          </div>
          <div className="visual-block block-2">
            <span className="visual-label">Wideo</span>
          </div>
          <div className="visual-block block-3">
            <span className="visual-label">Fotografia</span>
          </div>
          <div className="visual-block block-4">
            <span className="visual-label">Marketing</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <button onClick={scrollToPortfolio} className="scroll-indicator">
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  )
}