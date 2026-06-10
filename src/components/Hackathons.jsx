import { hackathons } from '../data.js'
import { useT } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Hackathons() {
  const t = useT()

  return (
    <section id="hackathons">
      <div className="container">
        <Reveal className="section-head">
          <span className="index">04</span>
          <h2>Hackathons</h2>
        </Reveal>
        <div className="timeline">
          {hackathons.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className={`timeline-dot${h.upcoming ? ' is-upcoming' : ''}`} />
                </div>
                <div className="timeline-date">
                  {t(h.date)} · {t(h.place)}
                </div>
                <div className="timeline-card">
                  <div className="timeline-body">
                    <div className="timeline-top">
                      <h3>{h.name}</h3>
                      {h.rank && <span className="badge-rank">🏆 {t(h.rank)}</span>}
                      {h.upcoming && (
                        <span className="badge-upcoming">{t({ fr: 'À venir', en: 'Upcoming' })}</span>
                      )}
                    </div>
                    <p className="timeline-subject">
                      {t({ fr: 'Projet', en: 'Project' })} — {t(h.subject)}
                    </p>
                    <p className="timeline-desc">{t(h.desc)}</p>
                    {h.team.length > 0 && (
                      <p className="timeline-team">
                        {t({ fr: 'En équipe avec', en: 'Team with' })} {h.team.join(' · ')}
                      </p>
                    )}
                    <div className="project-stack">
                      {h.stack.map((s) => (
                        <span className="tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <a className="timeline-link" href={h.link} target="_blank" rel="noreferrer">
                      {h.upcoming
                        ? t({ fr: 'Voir l’événement', en: 'See the event' })
                        : t({ fr: 'Voir le post LinkedIn', en: 'See the LinkedIn post' })}{' '}
                      ↗
                    </a>
                  </div>
                  {h.image && <img className="timeline-poster" src={h.image} alt={`Affiche ${h.name}`} />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
