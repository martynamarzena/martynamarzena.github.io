import { contactData } from '../data/contact'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Martyna Urban</h3>
          <p>Creative designer, video editor, and visual storyteller.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href={`mailto:${contactData.email}`}>Email</a></li>
            <li><a href={contactData.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
            {contactData.instagram && (
              <li><a href={contactData.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            )}
            {contactData.linkedin && (
              <li><a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Martyna Urban. All rights reserved.</p>
      </div>
    </footer>
  )
}