import './SocialMedia.css'

export default function SocialMedia() {
  const socialProjects = [
    {
      brand: 'Brand Name 1',
      platforms: ['Instagram', 'Facebook'],
      description: 'Complete social media strategy and visual content creation.',
      metrics: 'Placeholder for performance data',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
    },
    {
      brand: 'Brand Name 2',
      platforms: ['Instagram', 'TikTok'],
      description: 'Short-form content creation and feed aesthetic development.',
      metrics: 'Placeholder for performance data',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
    },
    {
      brand: 'Brand Name 3',
      platforms: ['Facebook', 'Instagram'],
      description: 'Ad campaigns and promotional graphics design.',
      metrics: 'Placeholder for performance data',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
    }
  ]

  return (
    <div className="social-media container">
      <div className="social-media-header">
        <h2>Social Media Projects</h2>
        <p>Case studies and social media management</p>
      </div>

      <div className="social-grid">
        {socialProjects.map((project, idx) => (
          <div key={idx} className="social-project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="social-image">
              <img src={project.image} alt={project.brand} />
            </div>
            <div className="social-content">
              <h3>{project.brand}</h3>
              <div className="social-platforms">
                {project.platforms.map((platform, i) => (
                  <span key={i} className="platform-tag">{platform}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <p className="social-metrics">{project.metrics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}