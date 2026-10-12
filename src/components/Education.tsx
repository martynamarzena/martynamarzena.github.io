import { educationData } from '../data/education'
import './Education.css'

export default function Education() {
  return (
    <div className="education container">
      <div className="education-header">
        <h2>Education</h2>
        <p>Academic background and continuous learning</p>
      </div>

      <div className="education-timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="education-item" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="education-marker">
              <div className="marker-dot"></div>
              {idx < educationData.length - 1 && <div className="marker-line"></div>}
            </div>

            <div className="education-content">
              <div className="education-period">
                {edu.startDate} — {edu.endDate}
                {edu.status === 'w trakcie' && <span className="status-badge">In Progress</span>}
              </div>

              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>

              <p className="education-description">{edu.description}</p>

              {edu.skills && edu.skills.length > 0 && (
                <div className="education-skills">
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