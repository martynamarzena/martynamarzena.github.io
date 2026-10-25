export interface EducationEntry {
  institution: string
  degree: string
  startDate: string
  endDate: string
  status: 'ukończone' | 'w trakcie'
  description: string
  skills?: string[]
}

export const educationData: EducationEntry[] = [
  {
    institution: 'Badanie i Projektowanie gier, studia drugiego stopnia',
    degree: 'Uniwersytet Kazimierza Wielkiego w Bydgoszczy',
    startDate: 'Paź 2025',
    endDate: 'Cze 2027',
    status: 'w trakcie',
    description: 'Studia magisterskie poświęcone grom komputerowym i analogowym, ich historii, narracji oraz znaczeniu kulturowym',
    skills: ['Projektowanie Gier','Kultura gier i graczy', 'Esport', 'Nowe Media'],
  },
  {
    institution: 'Design w biznesie spec. grafika komputerowa w reklamie',
    degree: 'Uniwersytet WSB Merito w Bydgoszczy',
    startDate: 'Paź 2023',
    endDate: 'Lip 2026',
    status: 'ukończone',
    description: 'Studia licencjackie ukierunkowane na grafikę komputerową, fotografię oraz ekonomię, rachunkowość i przedsiębiorczość',
    skills: ['Grafika komputerowa', 'Fotografia', 'Projektowanie iSzarządzanie marką', 'Podstawy rachunkowości i ekonomii'],
  },
  {
    institution: 'Humanistyka drugiej generacji',
    degree: 'Uniwersytet Kazimierza Wielkiego w Bydgoszczy',
    startDate: 'Paź 2020',
    endDate: 'Wrz 2023',
    status: 'ukończone',
    description: 'Studia licencjackie skupione na rozwijaniu praktycznych umiejętności z zakresu badania i projektowania gier',
    skills: ['Projektowanie Gier', 'Programowanie', 'Grafika komputerowa', 'Kreatywne pisanie', 'Zarządzanie projektami', 'Marketing gier wideo'],
  }
]