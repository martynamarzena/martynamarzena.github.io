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
        {experienceData.map((edu, idx) => (
          <div key={idx} className="experience-item" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="experience-marker">
              <div className="marker-dot"></div>
              {idx < experienceData.length - 1 && <div className="marker-line"></div>}
            </div>

            <div className="experience-content">
              <div className="experience-period">
                {edu.startDate} — {edu.endDate}
                {edu.status === 'w trakcie' && <span className="status-badge">W trakcie</span>}
              </div>

              <h3>{edu.institution}</h3>
              <p className="experience-degree">{edu.degree}</p>

              <p className="experience-description">{edu.description}</p>

              {edu.skills && edu.skills.length > 0 && (
                <div className="experience-skills">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
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