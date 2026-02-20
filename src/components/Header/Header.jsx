import React, { useState } from 'react'
import { Button } from '../Buttons/Buttons'
import styles from './Header.module.css'

/**
 * Header — Navigation principale et CTA Contact.
 * Menu : Services, À propos, Contact. CTA en haut à droite.
 */
const NAV_ITEMS = [
  { label: 'Compétences', href: '#competences' },
  { label: 'À propos', href: '#presentation' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <a href="#" className={styles.logo} aria-label="Accueil">
          LAH JENIFER
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>

        <ul id="main-menu" className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <Button variant="primary" href="#contact">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
