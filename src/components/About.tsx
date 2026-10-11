import './About.css'

export default function About() {
  return (
    <div className="about container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          
          <p>
            I'm a multidisciplinary creative professional combining graphic design, video production, photography, and 3D modeling. My passion lies in creating bold, visually striking work that tells stories and makes an impact.
          </p>

          <p>
            From eye-catching graphics and animated motion design to high-quality photography and immersive 3D environments, I work across the entire spectrum of visual communication. I believe in the power of creative direction, strong typography, and color to transform ideas into compelling visual experiences.
          </p>

          <p>
            Beyond client work, I'm an active content creator on YouTube, sharing my creative process, design insights, and production techniques with an engaged community.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">
              <span className="highlight-number">6+</span>
              <span className="highlight-label">Software Mastered</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">4</span>
              <span className="highlight-label">Creative Disciplines</span>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-placeholder">
            <span>Portrait Photo</span>
          </div>
        </div>
      </div>
    </div>
  )
}