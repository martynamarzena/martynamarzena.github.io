import { Mail, Youtube, Linkedin, Instagram } from 'lucide-react'
import { contactData } from '../data/contact'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact container">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Let's Work Together</h2>
          <p>
            Have a creative project in mind? I'd love to hear about your ideas and discuss how I can help bring your vision to life.
          </p>
          <p>
            Whether it's graphic design, video production, photography, or 3D visualization, feel free to reach out.
          </p>

          <div className="contact-methods">
            <a href={`mailto:${contactData.email}`} className="contact-method">
              <Mail size={24} />
              <span>{contactData.email}</span>
            </a>

            <a href={contactData.youtube} target="_blank" rel="noopener noreferrer" className="contact-method">
              <Youtube size={24} />
              <span>YouTube Channel</span>
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
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}