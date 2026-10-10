import { Languages } from 'lucide-react'
import { useLanguage, type Language } from '../../i18n'

const languages: Language[] = ['fr', 'en']

// Sélecteur FR | EN : discret, professionnel, clavier + lecteurs d'écran.
// Le changement ne recharge pas la page et ne modifie ni l'URL ni la route.
function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.language.choose}
      className="inline-flex items-center gap-1 rounded-full bg-brand-soft p-1 ring-1 ring-slate-200/80"
    >
      <Languages className="ml-1.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
      {languages.map((item) => {
        const active = language === item
        const fullName = item === 'fr' ? t.language.french : t.language.english
        const short = item === 'fr' ? t.language.shortFr : t.language.shortEn
        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            aria-pressed={active}
            aria-label={fullName}
            title={fullName}
            className={[
              'rounded-full px-3 py-1 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              active ? 'bg-brand text-white shadow-sm' : 'text-brand hover:bg-brand-muted',
            ].join(' ')}
          >
            <span aria-hidden="true">{short}</span>
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSelector
