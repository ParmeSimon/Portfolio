# Portfolio — Simon Parmé

Portfolio personnel : développeur web fullstack, en recherche de Master développeur web.

**Stack** : React 18 + Vite · Framer Motion (animations) · Lenis (smooth scroll) · CSS vanilla (design system dark, grain, curseur custom) · i18n FR/EN maison.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # sortie dans dist/
npm run preview  # prévisualise le build
```

`vite.config.js` utilise `base: './'` : le build fonctionne tel quel sur GitHub Pages (`/Portfolio/`).

## Structure

- `src/data.js` — tout le contenu (profil, projets, expériences, compétences) en FR + EN. **C'est le seul fichier à éditer pour mettre à jour le contenu.**
- `src/i18n.jsx` — contexte de langue + hook `useT()`
- `src/components/` — sections de la page (Hero, About, Experience, Projects, Skills, Contact)
- `src/index.css` — design system complet
