import { skills } from '../data.js'
import { useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  const t = useT()

  return (
    <section id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">05</span>
          <h2>{t({ fr: 'Compétences', en: 'Skills' })}</h2>
        </Reveal>
        <div className="skills-grid">
          <Reveal className="skill-card">
            <h3>{t({ fr: 'Cœur de stack', en: 'Core stack' })}</h3>
            <div className="skill-tags">
              {skills.main.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="skill-card">
            <h3>{t({ fr: 'Outils & écosystème', en: 'Tools & ecosystem' })}</h3>
            <div className="skill-tags">
              {skills.tools.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="skill-card">
            <h3>{t({ fr: 'Langues', en: 'Languages' })}</h3>
            <ul className="skill-langs">
              {skills.langs.map((l) => (
                <li key={t(l.name)}>
                  <span>{t(l.name)}</span>
                  <span className="level">{t(l.level)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
