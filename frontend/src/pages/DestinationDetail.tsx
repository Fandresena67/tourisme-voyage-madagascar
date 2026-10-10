import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Footprints,
  MapPin,
  Mountain,
  Sparkles,
  Tag,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resolveImageAlt, resolveImageCredit } from '../assets/images'
import CardMedia from '../components/ui/CardMedia'
import AccommodationPhotoCard from '../components/ui/AccommodationPhotoCard'
import ActivityCard from '../components/ui/ActivityCard'
import HotelCard from '../components/ui/HotelCard'
import SectionTitle from '../components/ui/SectionTitle'
import { accommodationPhotosByDestination } from '../data/accommodationPhotos'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import {
  destBestPeriod,
  destDescription,
  destDuration,
  destHighlights,
  destSummary,
  useLanguage,
} from '../i18n'

function DestinationDetail() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const d = t.destinationDetail
  const destination = destinations.find((item) => item.slug === slug)
  useDocumentTitle(
    destination
      ? `${destination.name} — ${d.titleSuffix}`
      : d.notFoundTitle,
  )

  if (!destination) {
    return (
      <main>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {t.common.error404}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {d.notFoundHeading}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {d.notFoundText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/destinations" className="button">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {d.backToDestinations}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const relatedActivities = activities.filter(
    (activity) => activity.destinationSlug === destination.slug,
  )
  const heroAlt = resolveImageAlt(destination.image) ?? `${t.common.illustrationOf}${destination.name}`
  const heroCredit = resolveImageCredit(destination.image)
  const relatedHotels = hotels.filter((hotel) => hotel.destinationSlug === destination.slug)
  // Photos d'hébergement supplémentaires : garantissent un minimum de 3
  // photos différentes par destination avec hébergement (Nosy Tanikely,
  // sans hébergement, n'a aucune entrée et conserve son affichage actuel).
  const extraAccommodationPhotos = accommodationPhotosByDestination[destination.slug] ?? []
  const description = destDescription(destination, language)
  const highlights = destHighlights(destination, language)
  const bestPeriod = destBestPeriod(destination, language)
  const recommendedDuration = destDuration(destination, language)

  // Architecture galerie : plusieurs images quand disponibles, une seule sinon.
  const galleryImages = destination.images ?? (destination.image ? [destination.image] : [])

  const practicalInfos = [
    destination.region
      ? { icon: MapPin, label: d.locationLabel, value: `${destination.region}, ${destination.country}` }
      : null,
    destination.category
      ? { icon: Tag, label: d.typeLabel, value: t.categories[destination.category] }
      : null,
    bestPeriod
      ? { icon: CalendarDays, label: d.bestPeriodLabel, value: bestPeriod }
      : null,
    recommendedDuration
      ? { icon: Clock, label: d.durationLabel, value: recommendedDuration }
      : null,
  ].filter((item) => item !== null)

  return (
    <main>
      {/* Fil d'Ariane */}
      <nav aria-label={d.breadcrumbAria} className="border-b border-slate-200/80 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <li>
            <Link to="/" className="font-semibold text-ink-soft transition hover:text-brand">
              {d.home}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li>
            <Link
              to="/destinations"
              className="font-semibold text-ink-soft transition hover:text-brand"
            >
              {d.destinations}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li aria-current="page" className="font-bold text-brand">
            {destination.name}
          </li>
        </ol>
      </nav>

      {/* Introduction visuelle */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 md:pt-16 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {destination.category && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    {t.categories[destination.category]}
                  </span>
                )}
                {destination.region && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {destination.region}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {destination.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {destSummary(destination, language)}
              </p>
            </div>
            <CardMedia
              imageKey={destination.image}
              alt={heroAlt}
              icon={Mountain}
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
        <section id="presentation" aria-label={d.presentationTitle(destination.name)} className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {d.presentation}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {d.presentationTitle(destination.name)}
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
        <section id="informations" aria-label={d.practicalAria}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={d.practicalEyebrow}
              title={d.practicalTitle}
              subtitle={d.practicalSubtitle(destination.name)}
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
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                      {info.label}
                    </dt>
                    <dd className="mt-1 text-base font-bold text-ink">{info.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Localisation Google Maps */}
      <section id="localisation" aria-label={d.mapsEyebrow} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl bg-brand-soft p-8 text-center sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                {d.mapsEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-balance text-ink sm:text-3xl">
                {destination.location.label}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                {d.mapsSubtitle}
              </p>
            </div>
            <a
              href={destination.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {d.mapsButton}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Points forts */}
      {highlights.length > 0 && (
        <section id="points-forts" aria-label={d.highlightsTitle(destination.name)} className="bg-brand-soft">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={d.highlightsEyebrow}
              title={d.highlightsTitle(destination.name)}
              subtitle={d.highlightsSubtitle}
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
        <section id="galerie" aria-label={d.galleryTitle(destination.name)} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={d.galleryEyebrow}
              title={d.galleryTitle(destination.name)}
              subtitle={d.gallerySubtitle}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((imageKey, index) => (
                <CardMedia
                  key={`${imageKey}-${index}`}
                  imageKey={imageKey}
                  alt={d.galleryPhotoAlt(destination.name, index)}
                  icon={Mountain}
                  className="aspect-[4/3] rounded-2xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activités associées */}
      {relatedActivities.length > 0 && (
        <section id="activites" aria-label={d.activitiesTitle(destination.name)} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Footprints className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    {d.activitiesEyebrow}
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    {d.activitiesTitle(destination.name)}
                  </h2>
                </div>
              </div>
              <Link
                to="/activites"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                {d.allActivities}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {relatedActivities.map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hôtels associés */}
      {relatedHotels.length > 0 && (
        <section id="hebergements" aria-label={d.hotelsTitle}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <BedDouble className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    {d.hotelsEyebrow}
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    {d.hotelsTitle}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d.hotelsSubtitle}</p>
                </div>
              </div>
              <Link
                to="/hotels"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                {d.allHotels}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {relatedHotels.map((hotel) => (
                <HotelCard key={hotel.slug} hotel={hotel} />
              ))}
              {extraAccommodationPhotos.map((photo) => (
                <AccommodationPhotoCard
                  key={photo.image}
                  image={photo.image}
                  hotelSlug={photo.hotelSlug}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expériences et hébergements à venir */}
      {relatedActivities.length === 0 && relatedHotels.length === 0 && (
        <section aria-label={d.emptyTitle} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-3xl bg-brand-soft p-8 text-center sm:p-10">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <Footprints className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {d.emptyTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                {d.emptyText(destination.name)}
              </p>
              <div className="mt-6">
                <Link
                  to={`/reservation?destination=${destination.slug}`}
                  className="button"
                >
                  {d.reserveNow}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
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
            {d.ctaTitle(destination.name)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {d.ctaText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={`/reservation?destination=${destination.slug}`} className="button button-light">
              {d.reserveNow}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/destinations" className="button button-outline-light">
              {t.common.seeOtherDestinations}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DestinationDetail
