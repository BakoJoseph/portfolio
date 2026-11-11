import { MdWorkspacesOutline } from 'react-icons/md'
import { GoHome } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa'
import { PiChatTeardropDots } from 'react-icons/pi'

export const navigationItems = [
  { label: 'Home', href: '#home', icon: GoHome },
  { label: 'Work', href: '#projects', icon: MdWorkspacesOutline },
  { label: 'About', href: '#about', icon: FaRegUser },
  { label: 'Contact', href: '#contact', icon: PiChatTeardropDots },
]
