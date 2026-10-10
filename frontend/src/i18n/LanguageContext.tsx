import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { en } from './en'
import { fr, type Dict } from './fr'

export type Language = 'fr' | 'en'

const STORAGE_KEY = 'tourisme-language'

const dictionaries: Record<Language, Dict> = { fr, en }

function initialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // Stockage indisponible : on garde le français par défaut.
  }
  return 'fr'
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'fr',
  setLanguage: () => undefined,
  t: fr,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  function setLanguage(next: Language) {
    setLanguageState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Stockage indisponible : la langue reste active pour la session.
    }
  }

  // Le document reflète la langue active (accessibilité / SEO).
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
