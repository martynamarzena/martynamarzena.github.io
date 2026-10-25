import { useState } from 'react'
import { skillsData } from '../data/skills'
import './Skills.css'

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  return (
    <div className="skills container">
      <div className="skills-header">
        <h2>Narzędzia & Umiejętności</h2>
        <p>Kliknij program po więcej informacji.</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className={`skill-card ${expandedSkill === skill.id ? 'expanded' : ''}`}
            onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
          >
            <div className="skill-header">
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-level">
                  <div className="skill-bars">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`level-bar ${i < skill.level ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="level-text">{skill.level}/5</span>
                </div>
              </div>
            </div>

            {expandedSkill === skill.id && (
              <div className="skill-details">
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.applications.map((app, idx) => (
                    <span key={idx} className="tag">{app}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="skill-footer">
        <p>Oraz wiele więcej, ale chyba nie ma potrzeby zaznaczać znajomości pakietu Office i umiejętności obsługi komputera?</p>
      </div>
    </div>

    
      
  )
}