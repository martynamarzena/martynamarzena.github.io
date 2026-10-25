import { useState } from 'react'
import { projectsData, ProjectCategory } from '../data/projects'
import ProjectModal from './ProjectModal'
import './Portfolio.css'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories: (ProjectCategory | 'all')[] = [
    'all',
    'graphic-design',
    'branding',
    'video-editing',
    'motion-design',
    '3d-blender',
    'photography',
    'photo-retouching',
    'illustration',
    'social-media',
    'youtube-thumbnails'
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory)

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      'all': 'WSZYSTKIE',
      'graphic-design': 'Grafika',
      'branding': 'Branding',
      'video-editing': 'Wideo',
      'motion-design': 'Motion Design',
      '3d-blender': '3D & Blender',
      'photography': 'Fotografia',
      'photo-retouching': 'Retusz zdjęć',
      'illustration': 'Ilustracje',
      'social-media': 'Social Media',
      'youtube-thumbnails': 'Miniaturka YT'
    }
    return labels[cat] || cat
  }

  return (
    <div className="portfolio container">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>Wybrane prace z każdego zakresu.</p>
      </div>

      <div className="portfolio-category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`portfolio-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="portfolio-item"
            onClick={() => setSelectedProject(project)}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <span className="view-text">View Project</span>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">{getCategoryLabel(project.category)}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}