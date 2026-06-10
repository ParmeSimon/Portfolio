import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { useT } from '../i18n.jsx'

const lineAnim = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
}

export default function Hero() {
  const t = useT()

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {t({ fr: 'Portfolio — 2026', en: 'Portfolio — 2026' })}
        </motion.p>
        <h1>
          <span className="line">
            <motion.span style={{ display: 'inline-block' }} variants={lineAnim} initial="hidden" animate="show" custom={0}>
              Simon
            </motion.span>
          </span>
          <span className="line">
            <motion.span style={{ display: 'inline-block' }} variants={lineAnim} initial="hidden" animate="show" custom={1}>
              Parmé<span className="gradient-text">.</span>
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <strong>{t(profile.title)}</strong> — {t(profile.tagline)}
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a className="btn btn-primary" href="#projects">
            {t({ fr: 'Voir mes projets', en: 'See my work' })} ↓
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            {t({ fr: 'Me contacter', en: 'Get in touch' })}
          </a>
          <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">
            {t({ fr: 'Mon CV ↗', en: 'My CV ↗' })}
          </a>
        </motion.div>
      </div>
      <div className="hero-scroll">{t({ fr: '( scroll )', en: '( scroll )' })}</div>
    </section>
  )
}
