import { profile } from '../data.js'
import { useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const t = useT()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2>
            {t({ fr: 'Travaillons', en: 'Let’s work' })} <span className="gradient-text">{t({ fr: 'ensemble', en: 'together' })}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            {t({
              fr: 'En recherche d’un Master développeur web en alternance. Une opportunité, une question, un projet ? Écrivez-moi.',
              en: 'Looking for a Master’s apprenticeship in web development. An opportunity, a question, a project? Drop me a line.',
            })}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            {profile.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
