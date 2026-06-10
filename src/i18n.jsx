import { createContext, useContext, useState, useCallback } from 'react'

const LangContext = createContext({ lang: 'fr', toggle: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), [])
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** t({ fr: '...', en: '...' }) -> string selon la langue active */
export function useT() {
  const { lang } = useLang()
  return useCallback((obj) => (typeof obj === 'string' ? obj : obj[lang]), [lang])
}
