import { useLang, useT } from '../i18n.jsx'

const links = [
  { href: '#about', label: { fr: 'À propos', en: 'About' } },
  { href: '#experience', label: { fr: 'Parcours', en: 'Experience' } },
  { href: '#projects', label: { fr: 'Projets', en: 'Projects' } },
  { href: '#hackathons', label: { fr: 'Hackathons', en: 'Hackathons' } },
  { href: '#contact', label: { fr: 'Contact', en: 'Contact' } },
]

export default function Nav() {
  const { lang, toggle } = useLang()
  const t = useT()

  return (
    <nav className="nav">
      <div className="container">
        <a href="#top" className="nav-logo">
          SP<span className="gradient-text">.</span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {t(l.label)}
            </a>
          ))}
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            <span className={lang === 'fr' ? 'active' : ''}>FR</span>
            {' / '}
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
