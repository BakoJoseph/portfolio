import {
  SiDocker,
  SiFirebase,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'

export const techStackGroups = [
  {
    name: 'BACKEND & RUNTIME',
    tools: [
      { name: 'Python', icon: SiPython, color: '#5e9bd3' },
      { name: 'Java', icon: FaJava, color: '#e87532' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#78bd61' },
    ],
  },
  {
    name: 'CONTAINERS & ORCHESTRATION',
    tools: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#5a9bea' },
    ],
  },
  {
    name: 'DATABASE & SERVICES',
    tools: [
      { name: 'MongoDB', icon: SiMongodb, color: '#55ad68' },
      { name: 'Firebase', icon: SiFirebase, color: '#f5a623' },
    ],
  },
]

export const totalTechCount = techStackGroups.reduce((total, { tools }) => total + tools.length, 0)
export const stackChartRadius = 48
export const stackChartViewBoxSize = 120
