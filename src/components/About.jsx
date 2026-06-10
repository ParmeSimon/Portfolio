import { profile, skills, interests } from '../data.js'
import { useLang, useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const t = useT()
  const { lang } = useLang()

  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">01</span>
          <h2>{t({ fr: 'À propos', en: 'About' })}</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="about-text">{t(profile.about)}</p>
          </Reveal>
          <Reveal delay={0.15} className="about-meta">
            <div className="meta-block">
              <h3>{t({ fr: 'Langues', en: 'Languages' })}</h3>
              <ul>
                {skills.langs.map((l) => (
                  <li key={t(l.name)}>
                    <span>{t(l.name)}</span>
                    <span>{t(l.level)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="meta-block">
              <h3>{t({ fr: 'En dehors du code', en: 'Outside of code' })}</h3>
              <ul>
                {interests[lang].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
