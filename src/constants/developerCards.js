import { FiCode, FiLayers, FiMapPin, FiMove } from 'react-icons/fi'

export const developerCards = [
  {
    id: 'fullstack',
    number: '01',
    label: 'FULL-STACK DEVELOPMENT',
    title: 'From UI to database.',
    description: 'End-to-end web apps, from a clear interface to the services behind it.',
    tags: ['REACT', 'PYTHON', 'DATABASES'],
    icon: FiCode,
    theme: 'card-purple',
  },
  {
    id: 'motion',
    number: '02',
    label: 'MOTION & INTERACTION',
    title: 'A little movement.',
    description: 'Purposeful animation that makes a good experience feel alive.',
    tags: ['FRAMER MOTION', 'INTERACTION'],
    icon: FiMove,
    theme: 'card-black',
  },
  {
    id: 'craft',
    number: '03',
    label: 'DESIGN-MINDED BUILD',
    title: 'Care in every detail.',
    description: 'From the first layout to the last small polish pass.',
    tags: ['CRAFT', 'DETAIL'],
    icon: FiLayers,
    theme: 'card-outline',
  },
  {
    id: 'lagos',
    number: '04',
    label: 'BASED IN LAGOS, NIGERIA',
    title: 'Local roots. Open world.',
    description: 'Working from Lagos and building for people everywhere.',
    tags: ['LAGOS', 'WORLDWIDE'],
    icon: FiMapPin,
    theme: 'card-plum',
  },
]
