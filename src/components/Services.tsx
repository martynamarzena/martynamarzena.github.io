import './Services.css'

export default function Services() {
  const services = [
    {
      category: 'Graphic Design & Branding',
      items: ['Logo Design', 'Visual Identity', 'Business Cards', 'Packaging', 'Branding Books']
    },
    {
      category: 'Video & Motion',
      items: ['Short-form Editing', 'Long-form YouTube', 'Motion Graphics', 'Animation', 'Promotional Videos']
    },
    {
      category: 'Photography',
      items: ['Product Photography', 'Portrait Photography', 'Photo Editing', 'Retouching', 'Compositing']
    },
    {
      category: '3D & Digital Art',
      items: ['3D Modeling', 'Product Visualization', 'Rendering', 'Digital Illustration', 'Visual Projects']
    },
    {
      category: 'Social Media',
      items: ['Profile Management', 'Content Design', 'Graphics & Posts', 'Visual Identity', 'Content Strategy']
    },
    {
      category: 'Content Creation',
      items: ['YouTube Production', 'Video Editing', 'Thumbnail Design', 'Channel Optimization', 'Content Direction']
    }
  ]

  return (
    <div className="services container">
      <div className="services-header">
        <h2>Services & Specializations</h2>
        <p>What I can create for you</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <h3>{service.category}</h3>
            <ul className="service-items">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}