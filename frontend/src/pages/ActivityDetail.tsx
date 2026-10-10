import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Footprints,
  Gauge,
  MapPin,
  Sparkles,
  Tag,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CardMedia from '../components/ui/CardMedia'
import ActivityCard from '../components/ui/ActivityCard'
import DestinationCard from '../components/ui/DestinationCard'
import SectionTitle from '../components/ui/SectionTitle'
import { resolveImageAlt, resolveImageCredit } from '../assets/images'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import {
  activityBestPeriod,
  activityDescription,
  activityDuration,
  activityHighlights,
  activityLevel,
  activityName,
  activitySummary,
  useLanguage,
} from '../i18n'

function ActivityDetail() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const a = t.activityDetail
  const activity = activities.find((item) => item.slug === slug)
  useDocumentTitle(
    activity ? `${activityName(activity, language)} — ${a.titleSuffix}` : a.notFoundTitle,
  )

  if (!activity) {
    return (
      <main>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {t.common.error404}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {a.notFoundHeading}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {a.notFoundText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/activites" className="button">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {a.backToActivities}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const destination = destinations.find((item) => item.slug === activity.destinationSlug)
  const otherActivities = activities.filter((item) => item.slug !== activity.slug).slice(0, 3)
  const name = activityName(activity, language)
  const heroAlt = resolveImageAlt(activity.image) ?? `${t.common.illustrationOf}${name}`
  const heroCredit = resolveImageCredit(activity.image)

  // Architecture galerie : plusieurs images quand disponibles, une seule sinon.
  const galleryImages = activity.images ?? (activity.image ? [activity.image] : [])
  const description = activityDescription(activity, language)
  const highlights = activityHighlights(activity, language)
  const duration = activityDuration(activity, language)
  const level = activityLevel(activity, language)
  const bestPeriod = activityBestPeriod(activity, language)

  const practicalInfos = [
    destination
      ? {
          icon: MapPin,
          label: a.destinationLabel,
          value: destination.name,
          to: `/destinations/${destination.slug}`,
        }
      : null,
    duration
      ? { icon: Clock, label: a.durationLabel, value: duration, to: null }
      : null,
    activity.category
      ? {
          icon: Tag,
          label: a.categoryLabel,
          value: t.activityCategories[activity.category] ?? activity.category,
          to: null,
        }
      : null,
    level
      ? { icon: Gauge, label: a.levelLabel, value: level, to: null }
      : null,
    bestPeriod
      ? { icon: CalendarDays, label: a.bestPeriodLabel, value: bestPeriod, to: null }
      : null,
  ].filter((item) => item !== null)

  return (
    <main>
      {/* Fil d'Ariane */}
      <nav aria-label={a.breadcrumbAria} className="border-b border-slate-200/80 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <li>
            <Link to="/" className="font-semibold text-ink-soft transition hover:text-brand">
              {a.home}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li>
            <Link
              to="/activites"
              className="font-semibold text-ink-soft transition hover:text-brand"
            >
              {a.activities}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li aria-current="page" className="font-bold text-brand">
            {name}
          </li>
        </ol>
      </nav>

      {/* Hero détail */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 md:pt-16 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {activity.category && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    {t.activityCategories[activity.category] ?? activity.category}
                  </span>
                )}
                {destination && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {destination.name}
                  </span>
                )}
                {duration && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {duration}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                {name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {activitySummary(activity, language)}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={`/reservation?activity=${activity.slug}`}
                  className="button button-light"
                >
                  {t.common.planTrip}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {destination && (
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="button button-outline-light"
                  >
                    {a.seeDestination(destination.name)}
                  </Link>
                )}
              </div>
            </div>
            <CardMedia
              imageKey={activity.image}
              alt={heroAlt}
              icon={Footprints}
              className="aspect-[16/9] rounded-3xl shadow-xl ring-1 ring-white/20"
            >
              {heroCredit && (
                <span className="absolute right-3 bottom-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white/90">
                  {t.common.photoCredit}
                  {heroCredit}
                </span>
              )}
            </CardMedia>
          </div>
        </div>
      </section>

      {/* Description */}
      {description.length > 0 && (
        <section aria-label={a.aboutAria(name)} className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {a.experienceEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {a.experienceTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Informations pratiques */}
      {practicalInfos.length > 0 && (
        <section aria-label={a.practicalAria}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={a.practicalEyebrow}
              title={a.practicalTitle}
              subtitle={a.practicalSubtitle(name)}
            />
            <dl className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {practicalInfos.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <info.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                      {info.label}
                    </dt>
                    <dd className="mt-1 text-base font-bold text-ink">
                      {info.to ? (
                        <Link to={info.to} className="transition hover:text-brand">
                          {info.value}
                        </Link>
                      ) : (
                        info.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Points forts */}
      {highlights.length > 0 && (
        <section aria-label={a.highlightsTitle} className="bg-brand-soft">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={a.highlightsEyebrow}
              title={a.highlightsTitle}
              subtitle={a.highlightsSubtitle}
            />
            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-ink sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Galerie (architecture multi-images) */}
      {galleryImages.length > 1 && (
        <section aria-label={a.galleryTitle} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={a.galleryEyebrow}
              title={a.galleryTitle}
              subtitle={a.gallerySubtitle}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((imageKey, index) => (
                <CardMedia
                  key={`${imageKey}-${index}`}
                  imageKey={imageKey}
                  alt={a.galleryPhotoAlt(name, index)}
                  icon={Footprints}
                  className="aspect-[4/3] rounded-2xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Destination associée */}
      {destination && (
        <section aria-label={a.destinationTitle} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={a.destinationEyebrow}
              title={a.destinationTitle}
              subtitle={a.destinationSubtitle(destination.name)}
            />
            <div className="mx-auto mt-10 max-w-md">
              <DestinationCard destination={destination} />
            </div>
          </div>
        </section>
      )}

      {/* Autres activités */}
      {otherActivities.length > 0 && (
        <section aria-label={a.othersAria}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  {a.othersEyebrow}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {a.othersTitle}
                </h2>
              </div>
              <Link
                to="/activites"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                {a.allActivities}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherActivities.map((item) => (
                <ActivityCard key={item.slug} activity={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA réservation */}
      <section className="relative overflow-hidden bg-brand-deep">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-muted ring-1 ring-white/20">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            {a.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {a.ctaText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={`/reservation?activity=${activity.slug}`} className="button button-light">
              {t.common.planTrip}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/activites" className="button button-outline-light">
              {a.seeOtherActivities}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ActivityDetail
