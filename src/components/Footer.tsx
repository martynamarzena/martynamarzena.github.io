import { contactData } from '../data/contact'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Martyna Urban</h3>
          <p>Aspirujący "rzemieślnik" sztuki graficznej.</p>
        </div>

        <div className="footer-section">
          <h4>Szybkie linki</h4>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Doświadczenie</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Napisz do mnie!</h4>
          <ul>
            <li><a href={`mailto:${contactData.email}`}>Email</a></li>

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
        <p>&copy; {currentYear} Martyna Urban. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}