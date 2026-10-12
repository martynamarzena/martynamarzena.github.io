import { useState } from 'react'
import { YouTubeVideo, youtubeData } from '../data/youtube'
import './YouTube.css'

export default function YouTube() {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(youtubeData.videos.map(v => v.category)))

  const filteredVideos = selectedCategory
    ? youtubeData.videos.filter(v => v.category === selectedCategory)
    : youtubeData.videos

  return (
    <div className="youtube container">
      <div className="youtube-header">
        <div className="youtube-info">
          <h2>Akademia Przywoływacza</h2>
          <p>{youtubeData.description}</p>
          <a href={youtubeData.channelUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Odwiedź kanał
          </a>
        </div>
      </div>

      <div className="youtube-filters">
        <button
          className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          Wszystkie filmiki
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="videos-grid">
        {filteredVideos.map((video, idx) => (
          <div
            key={video.id}
            className="video-card"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-overlay">
                <button
                  className="play-btn"
                  onClick={() => setSelectedVideo(video)}
                  aria-label="Play video"
                >
                  ▶
                </button>
              </div>
            </div>
            <div className="video-info">
              <span className="video-category">{video.category}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedVideo(null)}>×</button>
            <div className="video-player">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}