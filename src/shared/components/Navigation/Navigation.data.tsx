import Link from 'next/link';
import styles from './Navigation.module.scss';
export const navigationList = [
  {
    id: Math.random().toString(36).slice(5),
    href: '',
    label: 'Home',
    active: false,
  },
  {
    id: Math.random().toString(36).slice(5),
    href: '',
    label: 'Factions',
    active: false,
  },
  {
    id: Math.random().toString(36).slice(5),
    href: '',
    label: 'Roadmap',
    active: true,
  },
];
