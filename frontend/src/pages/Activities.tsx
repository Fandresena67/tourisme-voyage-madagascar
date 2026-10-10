import { ArrowRight, Footprints, RotateCcw, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ActivityCard from '../components/ui/ActivityCard'
import SectionTitle from '../components/ui/SectionTitle'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { useLanguage } from '../i18n'
import { findBySlugOrName, normalizeText as normalize } from '../utils/search'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function destinationName(slug: string): string {
  return destinations.find((item) => item.slug === slug)?.name ?? ''
}

function Activities() {
  const { language, t } = useLanguage()
  useDocumentTitle(t.activities.title)
  const [searchParams] = useSearchParams()

  const initialCategory = useMemo(() => {
    const experience = searchParams.get('experience')
    if (experience && activities.some((activity) => activity.category === experience)) {
      return experience
    }
    return 'Toutes'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const initialDestination = useMemo(() => {
    const match = findBySlugOrName(destinations, searchParams.get('destination'))
    return match ? match.slug : 'Toutes'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>(initialCategory)
  const [destinationSlug, setDestinationSlug] = useState<string>(initialDestination)

  const categories = useMemo(() => {
    const unique = new Set(
      activities.map((activity) => activity.category).filter((item) => item !== undefined),
    )
    return [...unique].sort((a, b) => a.localeCompare(b, language))
  }, [language])

  const availableDestinations = useMemo(() => {
    const slugs = new Set(activities.map((activity) => activity.destinationSlug))
    return destinations
      .filter((destination) => slugs.has(destination.slug))
      .sort((a, b) => a.name.localeCompare(b.name, language))
  }, [language])

  const filtered = useMemo(() => {
    const query = normalize(search)
    return activities.filter((activity) => {
      const haystack = [
        activity.name,
        activity.summary,
        activity.category ?? '',
        destinationName(activity.destinationSlug),
        ...(activity.description ?? []),
        // Recherche anglaise additive, sans changer la recherche française.
        activity.en?.name ?? '',
        activity.en?.summary ?? '',
        ...(activity.en?.description ?? []),
        ...(activity.en?.highlights ?? []),
      ]
        .map(normalize)
        .join(' ')
      const matchesSearch = query.length === 0 || haystack.includes(query)
      const matchesCategory = category === 'Toutes' || activity.category === category
      const matchesDestination =
        destinationSlug === 'Toutes' || activity.destinationSlug === destinationSlug
      return matchesSearch && matchesCategory && matchesDestination
    })
  }, [search, category, destinationSlug])

  const hasActiveFilters =
    search.trim() !== '' || category !== 'Toutes' || destinationSlug !== 'Toutes'

  function resetFilters() {
    setSearch('')
    setCategory('Toutes')
    setDestinationSlug('Toutes')
  }

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
            {t.activities.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {t.activities.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.activities.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle
            eyebrow={t.activities.introEyebrow}
            title={t.activities.introTitle}
            subtitle={t.activities.introSubtitle}
          />
        </div>
      </section>

      {/* Recherche, filtres + catalogue */}
      <section aria-label={t.activities.catalogLabel}>
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_auto] lg:items-end">
              <div className="field">
                <label htmlFor="activity-search">{t.activities.searchLabel}</label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-soft"
                    aria-hidden="true"
                  />
                  <input
                    id="activity-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={t.activities.searchPlaceholder}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-3 pl-9 font-[inherit] text-[inherit] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-2 focus:outline-brand"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="activity-destination">{t.activities.destinationLabel}</label>
                <select
                  id="activity-destination"
                  value={destinationSlug}
                  onChange={(event) => setDestinationSlug(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-[inherit] text-[inherit] text-ink focus:border-brand focus:outline-2 focus:outline-brand"
                >
                  <option value="Toutes">{t.common.allDestinations}</option>
                  {availableDestinations.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="button button-outline inline-flex w-full items-center justify-center lg:w-auto"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  {t.common.reset}
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={t.activities.filterByCategory}>
              {['Toutes', ...categories].map((item) => {
                const active = category === item
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={active}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold transition',
                      active
                        ? 'bg-brand text-white shadow-sm'
                        : 'bg-brand-soft text-brand hover:bg-brand-muted',
                    ].join(' ')}
                  >
                    {item === 'Toutes' ? t.common.all : (t.activityCategories[item] ?? item)}
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold text-ink-soft" role="status" aria-live="polite">
            {t.activities.resultsFound(filtered.length)}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200/80">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Footprints className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mx-auto mt-5 max-w-md text-xl font-bold text-ink">
                {t.activities.emptyTitle}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                {t.activities.emptyText}
              </p>
              <button type="button" onClick={resetFilters} className="button mt-6">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {t.common.resetFilters}
              </button>
            </div>
          )}

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              {t.activities.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              {t.activities.ctaText}
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

export default Activities
