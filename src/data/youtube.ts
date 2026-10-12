export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
}

export interface YouTubeChannel {
  channelUrl: string
  description: string
  videos: YouTubeVideo[]
}

export const youtubeData: YouTubeChannel = {
  channelUrl: 'hhttps://www.youtube.com/@AkademiaPrzywolywacza',
  description: 'Witaj w Akademii Przywoływacza! To projekt poświęcony graczom League of Legends, którzy w szybki i łatwy sposób chcą przyswoić informacje i nauczyć się grać.',
  videos: [
    {
      id: '_gRcgVVYUPQ',
      title: 'MUSISZ znać te momenty w League of Legends!',
      description: 'Poradnik na temat występujących timerów w grze oraz co warto wiedzieć na ich temat.',
      thumbnail: 'https://img.youtube.com/vi/_gRcgVVYUPQ/maxresdefault.jpg',
      category: 'Poradnik'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Video Editing Tips & Tricks',
      description: 'Essential techniques for creating engaging video content in Premiere Pro.',
      thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
      category: 'Tutorial'
    },
    {
      id: '9bZkp7q19f0',
      title: 'Photography Lighting Setup',
      description: 'Professional lighting techniques for product and portrait photography.',
      thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
      category: 'Photography'
    },
    {
      id: 'kffacxfA7g4',
      title: '3D Modeling in Blender Beginner Guide',
      description: 'Introduction to 3D modeling and rendering for product visualization.',
      thumbnail: 'https://img.youtube.com/vi/kffacxfA7g4/maxresdefault.jpg',
      category: '3D & Blender'
    },
    {
      id: '04sBaCAP0sM',
      title: 'Motion Graphics Animation',
      description: 'Creating dynamic animations with After Effects for social media.',
      thumbnail: 'https://img.youtube.com/vi/04sBaCAP0sM/maxresdefault.jpg',
      category: 'Motion Design'
    },
    {
      id: 'n_dY4addqZQ',
      title: 'Brand Identity Design Complete',
      description: 'Full walkthrough of creating a complete brand identity system.',
      thumbnail: 'https://img.youtube.com/vi/n_dY4addqZQ/maxresdefault.jpg',
      category: 'Branding'
    }
  ]
}