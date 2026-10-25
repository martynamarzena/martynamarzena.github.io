import './SocialMedia.css'

export default function SocialMedia() {
  const socialProjects = [
    {
      brand: 'Brand Name 1',
      platforms: ['Facebook'],
      description: 'Realizowanie wpisów pod przewodnictwem i na potrzeby kierownika do spraw personalnych.',
      metrics: 'Od listopada 2024 do czerwca 2025.',
      image: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/355157528_725793266015143_1118636123756802019_n.jpg?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G7y3aAdsmi0Q7kNvwHA7pDZ&_nc_oc=Adrshmj3DI9nJt-wjXjmRQ46pp8s16adR7cOCSLCF-uFcP3JbBJXtglZ26nyxo8xpXweQlFeRK0O3Mb_1DK4XxL6&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=JWSp_mzWjrhsPKgOmmeyiA&_nc_ss=7b2a8&oh=00_AQNs3WFoZ7jfjMg2EOBRl6K-CYQi5JbqKMa1Zulq7nuHig&oe=6AE45982'
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