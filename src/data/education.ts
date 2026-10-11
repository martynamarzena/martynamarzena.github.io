export interface EducationEntry {
  institution: string
  degree: string
  startDate: string
  endDate: string
  status: 'completed' | 'in-progress'
  description: string
  skills?: string[]
}

export const educationData: EducationEntry[] = [
  {
    institution: 'Placeholder University',
    degree: 'Bachelor of Arts in Graphic Design',
    startDate: 'Sep 2020',
    endDate: 'Jun 2024',
    status: 'in-progress',
    description: 'Comprehensive education in visual communication, design theory, branding, and digital media production.',
    skills: ['Design Theory', 'Typography', 'Branding', 'Web Design']
  },
  {
    institution: 'Creative Skills Academy',
    degree: 'Professional Certificate in Video Editing',
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    status: 'completed',
    description: 'Specialized training in video production, editing workflow, color grading, and motion graphics.',
    skills: ['Video Editing', 'Premiere Pro', 'Color Grading', 'Motion Graphics']
  },
  {
    institution: 'Digital Photography Institute',
    degree: 'Professional Photography Certification',
    startDate: 'Mar 2022',
    endDate: 'Sep 2022',
    status: 'completed',
    description: 'Training in photography composition, lighting, post-processing, and professional retouching techniques.',
    skills: ['Photography', 'Lighting', 'Photoshop', 'Lightroom']
  }
]