import { experiences, education } from '../data.js'
import { useLang, useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  const t = useT()
  const { lang } = useLang()

  return (
    <section id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">02</span>
          <h2>{t({ fr: 'Parcours', en: 'Experience' })}</h2>
        </Reveal>
        {experiences.map((xp, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="xp-item">
              <div className="xp-period">{t(xp.period)}</div>
              <div className="xp-body">
                <h3>{t(xp.role)}</h3>
                <span className="xp-company">
                  {xp.company} — {xp.place}
                </span>
                <ul>
                  {xp.points[lang].map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="xp-logo">
                <img className="org-logo" src={xp.logo} alt={xp.company} />
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal className="edu-grid">
          {education.map((ed) => (
            <div className="edu-card" key={ed.period}>
              <div className="edu-head">
                <span className="edu-school">{ed.school}</span>
                <img className="org-logo org-logo-edu" src={ed.logo} alt={ed.school} />
              </div>
              <h3>{t(ed.degree)}</h3>
              <p>
                {ed.place} · {ed.period}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
