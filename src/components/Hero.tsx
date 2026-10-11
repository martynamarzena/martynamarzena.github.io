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
            <span className="title-line">Ideas into</span>
            <span className="title-line highlight-line">
              <span className="highlight-word">Visuals</span>
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Graphic Design • Video Editing • Photography • Motion Design • 3D • Illustration
          </p>

          <p className="hero-description">
            Creating bold, colorful, and memorable visual experiences through design, motion, and photography.
          </p>

          <div className="hero-buttons">
            <button className="btn" onClick={scrollToPortfolio}>
              View My Work
            </button>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-block block-1">
            <span className="visual-label">Design</span>
          </div>
          <div className="visual-block block-2">
            <span className="visual-label">Motion</span>
          </div>
          <div className="visual-block block-3">
            <span className="visual-label">Photo</span>
          </div>
          <div className="visual-block block-4">
            <span className="visual-label">3D</span>
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