import React from 'react'
import styles from './Footer.module.css'

/**
 * Footer — Pied de page minimaliste, cohérent avec la charte noir & blanc.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {currentYear} Lah Jenifer Nounan Gaëlle. Tous droits réservés.
        </p>
        <nav className={styles.links} aria-label="Liens footer">
          <a href="#presentation">Profil</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
