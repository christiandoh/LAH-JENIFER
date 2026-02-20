import React from 'react'
import { Typography3D } from '../Typography3D/Typography3D'
import { Button } from '../Buttons/Buttons'
import styles from './HeroSection.module.css'

// Mettez votre image dans le dossier public/ puis indiquez son nom ici (ex: 'hero.jpg' → /hero.jpg)
const HERO_IMAGE = '/lah_remov.png' // ex: '/hero.jpg'

/**
 * HeroSection — Fond blanc, zone pour image (portrait femme) à placer plus tard.
 * Typo 3D centrée superposée, deux CTA en bas : primary + secondary.
 */
export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Accueil">
      <div className={styles.imageWrapper}>
        {HERO_IMAGE ? (
          <img src={HERO_IMAGE} alt="Lah Jenifer Nounan Gaëlle — Tourisme & Hôtellerie" />
        ) : (
          <div className={styles.placeholder}>
            <span>Image à placer</span>
            <small>Dossier : public/ — ex: hero.jpg</small>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <Typography3D mainText="HOTEL" subText="& Hospitality" animated />
        <div className={styles.buttons}>
          <Button variant="primary" href="#contact">
            Me contacter
          </Button>
          <Button variant="secondary" href="#competences">
            Découvrir mes compétences
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
