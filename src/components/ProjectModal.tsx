import { X } from 'lucide-react'
import './ProjectModal.css'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-gallery">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <div>
              <h2>{project.title}</h2>
              <span className="modal-category">{project.category}</span>
            </div>
          </div>

          <div className="modal-description">
            <p>{project.description}</p>
          </div>

          <div className="modal-details">
            <div className="detail-box">
              <h4>Objective</h4>
              <p>{project.objective || 'Creative visual solution'}</p>
            </div>

            {project.tools && (
              <div className="detail-box">
                <h4>Tools Used</h4>
                <div className="tools-list">
                  {project.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}