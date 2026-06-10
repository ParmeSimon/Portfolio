import { projects, otherProjects, profile } from '../data.js'
import { useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const t = useT()

  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">03</span>
          <h2>
            {t({ fr: 'Projets', en: 'Projects' })} <span className="gradient-text">{t({ fr: 'sélectionnés', en: 'selected' })}</span>
          </h2>
        </Reveal>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <a href={p.link} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
              <article className="project-card">
                <span className="project-index">/{String(i + 1).padStart(2, '0')}</span>
                <div className="project-main">
                  <h3>{p.name}</h3>
                  <p className="project-type">{t(p.type)}</p>
                  <p className="project-desc">{t(p.desc)}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-meta">
                  <span className="project-year">{p.year}</span>
                  {p.private && <span className="badge-private">{t({ fr: 'privé', en: 'private' })}</span>}
                  <span className="project-arrow">↗</span>
                </div>
              </article>
            </a>
          </Reveal>
        ))}
        <Reveal className="others">
          <h3>{t({ fr: 'Aussi sur GitHub', en: 'Also on GitHub' })}</h3>
          <div className="others-list">
            {otherProjects.map((p) => (
              <a className="other-chip" href={p.link} target="_blank" rel="noreferrer" key={p.name}>
                {p.name} <span className="lang">{p.stack}</span>
              </a>
            ))}
            <a className="other-chip" href={profile.github} target="_blank" rel="noreferrer">
              {t({ fr: 'Tout voir', en: 'See all' })} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
