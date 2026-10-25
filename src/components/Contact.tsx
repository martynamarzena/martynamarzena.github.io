import { Mail, Linkedin, Instagram } from 'lucide-react'
import { contactData } from '../data/contact'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact container">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Pracujmy razem!</h2>
          <p>
            Każdy świetny projekt zaczyna się od pomysłu - może Twój będzie naszym kolejnym wspólnym wyzwaniem?
          </p>
          <p>
            Niezależnie od tego, czy potrzebujesz grafiki, montażu wideo, brandingu czy projektu 3D, chętnie pomogę Ci przekuć wizję w rzeczywistość. 
          </p>
          <p>Napisz do mnie i zacznijmy działać!</p>
          <div className="contact-methods">
            <a href={`mailto:${contactData.email}`} className="contact-method">
              <Mail size={24} />
              <span>{contactData.email}</span>
            </a>

            {contactData.linkedin && (
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            )}

            {contactData.instagram && (
              <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="contact-method">
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            )}
          </div>
        </div>

        <div className="contact-form-section">
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault()
            alert('Contact form setup required. Please connect a backend service.')
          }}>
            <input
              type="text"
              placeholder="Twoje imię"
              required
            />
            <input
              type="email"
              placeholder="Twój Email"
              required
            />
            <textarea
              placeholder="Twoja wiadomość"
              rows={5}
              required
            ></textarea>
            <button type="submit" className="btn">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}