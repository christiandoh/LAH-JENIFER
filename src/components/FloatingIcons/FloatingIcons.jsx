import React from 'react'
import styles from './FloatingIcons.module.css'

/**
 * Icônes hôtellerie flottantes — se déplacent de façon indépendante sur tout le site.
 * Fixe, pointer-events: none pour ne pas gêner les clics.
 */
const ICONS = [
  { id: 1, icon: '★', label: 'Étoile', x: 8, y: 12, duration: 22, delay: 0 },
  { id: 2, icon: '🔑', label: 'Clé', x: 85, y: 8, duration: 18, delay: 2 },
  { id: 3, icon: '🛎', label: 'Cloche', x: 15, y: 75, duration: 25, delay: 4 },
  { id: 4, icon: '🍷', label: 'Vin', x: 78, y: 70, duration: 20, delay: 1 },
  { id: 5, icon: '🛏', label: 'Lit', x: 92, y: 35, duration: 24, delay: 3 },
  { id: 6, icon: '✈', label: 'Voyage', x: 5, y: 45, duration: 19, delay: 5 },
  { id: 7, icon: '⭐', label: 'Luxe', x: 72, y: 18, duration: 21, delay: 0.5 },
  { id: 8, icon: '🏨', label: 'Hôtel', x: 25, y: 25, duration: 23, delay: 2.5 },
  { id: 9, icon: '🌴', label: 'Détente', x: 88, y: 82, duration: 26, delay: 1.5 },
  { id: 10, icon: '✨', label: 'Service', x: 50, y: 5, duration: 17, delay: 3.5 },
  { id: 11, icon: '🥂', label: 'Réception', x: 10, y: 88, duration: 27, delay: 2 },
  { id: 12, icon: '📋', label: 'Réservation', x: 95, y: 55, duration: 20, delay: 4.5 },
]

export function FloatingIcons() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {ICONS.map(({ id, icon, label, x, y, duration, delay }) => (
        <span
          key={id}
          className={styles.icon}
          style={{
            '--x': `${x}%`,
            '--y': `${y}%`,
            '--duration': `${duration}s`,
            '--delay': `${delay}s`,
          }}
          role="img"
          aria-label={label}
        >
          {icon}
        </span>
      ))}
    </div>
  )
}

export default FloatingIcons
