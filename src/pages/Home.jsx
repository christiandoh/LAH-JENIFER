import React from 'react'
import { Header } from '../components/Header/Header'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { Footer } from '../components/Footer/Footer'
import { FloatingIcons } from '../components/FloatingIcons/FloatingIcons'
import { WhatsAppIcon } from '../components/WhatsAppIcon/WhatsAppIcon'
import styles from './Home.module.css'

/**
 * Page d'accueil — Lah Jenifer Nounan Gaëlle — Portfolio Tourisme & Hôtellerie.
 */
export default function Home() {
  return (
    <>
      <FloatingIcons />
      <Header />

      <main>
        <HeroSection />

        <section id="presentation" className={styles.section} aria-labelledby="presentation-title">
          <div className={styles.container}>
            <h2 id="presentation-title" className={styles.sectionTitle}>
              Profil professionnel
            </h2>
            <p className={styles.lead}>
              Étudiante dynamique en 2ᵉ année de BTS Tourisme / Hôtellerie à l'École Supérieure Wonto.
            </p>
            <p className={styles.body}>
              Motivée, organisée et dotée d'un excellent sens de l'accueil, je suis sérieuse et souriante.
              Je souhaite mettre mes compétences au service d'une entreprise dans le cadre d'un stage ou
              d'un emploi afin d'acquérir une expérience professionnelle enrichissante.
            </p>
            <div className={styles.objective}>
              <h3>Objectif</h3>
              <p>
                Intégrer une entreprise du secteur touristique ou hôtelier afin de développer mes compétences
                pratiques et contribuer efficacement à la satisfaction de la clientèle.
              </p>
            </div>
          </div>
        </section>

        <section id="formation" className={styles.section} aria-labelledby="formation-title">
          <div className={styles.container}>
            <h2 id="formation-title" className={styles.sectionTitle}>
              Formation
            </h2>
            <ul className={styles.formationList}>
              <li>
                <strong>BTS Tourisme / Hôtellerie</strong> (2ᵉ année)<br />
                École Supérieure Wonto – En cours
              </li>
              <li>
                <strong>Baccalauréat Série A2</strong><br />
                Collège Legrand d'Abobo Avocatier
              </li>
            </ul>
          </div>
        </section>

        <section id="competences" className={styles.section} aria-labelledby="competences-title">
          <div className={styles.container}>
            <h2 id="competences-title" className={styles.sectionTitle}>
              Compétences
            </h2>
            <div className={styles.grid}>
              <article className={styles.card}>
                <h3>Accueil et orientation</h3>
                <p>Accueil et orientation des clients.</p>
              </article>
              <article className={styles.card}>
                <h3>Réservations</h3>
                <p>Gestion des réservations.</p>
              </article>
              <article className={styles.card}>
                <h3>Relation clientèle</h3>
                <p>Sens du service et relation clientèle.</p>
              </article>
              <article className={styles.card}>
                <h3>Communication</h3>
                <p>Communication professionnelle.</p>
              </article>
              <article className={styles.card}>
                <h3>Travail en équipe</h3>
                <p>Collaboration et esprit d'équipe.</p>
              </article>
              <article className={styles.card}>
                <h3>Organisation</h3>
                <p>Organisation et rigueur.</p>
              </article>
              <article className={styles.card}>
                <h3>Bureautique</h3>
                <p>Maîtrise des outils (Word, Excel).</p>
              </article>
            </div>
          </div>
        </section>

        <section id="qualites" className={styles.section} aria-labelledby="qualites-title">
          <div className={styles.container}>
            <h2 id="qualites-title" className={styles.sectionTitle}>
              Qualités personnelles
            </h2>
            <ul className={styles.qualitesList}>
              <li>Présentation soignée</li>
              <li>Sens des responsabilités</li>
              <li>Ponctualité</li>
              <li>Dynamisme</li>
              <li>Capacité d'adaptation</li>
            </ul>
          </div>
        </section>

        <section id="langues" className={styles.section} aria-labelledby="langues-title">
          <div className={styles.container}>
            <h2 id="langues-title" className={styles.sectionTitle}>
              Langues
            </h2>
            <p className={styles.body}>Français : Courant</p>
          </div>
        </section>

        <section id="contact" className={styles.section} aria-labelledby="contact-title">
          <div className={styles.container}>
            <h2 id="contact-title" className={styles.sectionTitle}>
              Contact
            </h2>
            <p className={styles.lead}>
              Lah Jenifer Nounan Gaëlle
            </p>
            <div className={styles.contactInfo}>
              <p className={styles.phoneRow}>
                <a href="tel:+225709496267">07 09 49 62 67</a>
                <WhatsAppIcon label="Écrire sur WhatsApp" className={styles.whatsapp} size="medium" />
              </p>
              <p>Abidjan, Côte d'Ivoire</p>
              <p>
                <a href="mailto:email@exemple.com">Ajouter une adresse email</a>
              </p>
            </div>
            <p className={styles.contactIntro}>
              Stage ou emploi dans le tourisme ou l'hôtellerie ? Échangeons.
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Nom</label>
              <input id="name" type="text" placeholder="Votre nom" required />
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="votre@email.com" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="Votre message" required />
              <button type="submit" className={styles.submitBtn}>
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppIcon label="Contacter sur WhatsApp" className={styles.whatsappFixed} size="large" />
    </>
  )
}
