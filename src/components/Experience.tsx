import { experienceData } from '../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <div className="experience container">
      <div className="experience-header">
        <h2>Doświadczenie zawodowe</h2>
        <p>Academic background and continuous learning</p>
      </div>

      <div className="experience-timeline">
        {experienceData.map((exp, adx) => (
          <div key={adx} className="experience-item" style={{ animationDelay: `${adx * 0.1}s` }}>
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {adx < experienceData.length - 1 && <div className="marker-line"></div>}
            </div>

            <div className="experience-content">
              <div className="experience-period">
                {exp.startDate} — {exp.endDate}
                {exp.status === 'w trakcie' && <span className="status-badge">W trakcie</span>}
              </div>

              <h3>{exp.institution}</h3>
              <p className="experience-degree">{exp.degree}</p>

              <p className="experience-description">{exp.description}</p>

              {exp.skills && exp.skills.length > 0 && (
                <div className="experience-skills">
                  {exp.skills.map((skil, a) => (
                    <span key={a} className="skill-badge">{skil}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}