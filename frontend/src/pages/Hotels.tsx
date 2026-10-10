import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HotelCard from '../components/ui/HotelCard'
import SectionTitle from '../components/ui/SectionTitle'
import { hotels } from '../data/hotels'
import { useLanguage } from '../i18n'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Hotels() {
  const { t } = useLanguage()
  useDocumentTitle(t.hotels.title)
  return (
    <main>
      {/* Hero de page */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-sand/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-14 text-center sm:px-6 md:pt-20 md:pb-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-muted">
            {t.hotels.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {t.hotels.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.hotels.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Catalogue */}
      <section aria-label={t.hotels.catalogLabel}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle
            eyebrow={t.hotels.listEyebrow}
            title={t.hotels.listTitle}
            subtitle={t.hotels.listSubtitle}
          />
          <p className="mt-8 text-sm font-semibold text-ink-soft" role="status" aria-live="polite">
            {t.hotels.resultsFound(hotels.length)}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              {t.hotels.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              {t.hotels.ctaText}
            </p>
            <div className="mt-7">
              <Link to="/reservation" className="button button-light">
                {t.common.planTrip}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hotels
