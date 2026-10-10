import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  ChevronRight,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resolveImageAlt, resolveImageCredit } from '../assets/images'
import CardMedia from '../components/ui/CardMedia'
import DestinationCard from '../components/ui/DestinationCard'
import HotelCard from '../components/ui/HotelCard'
import SectionTitle from '../components/ui/SectionTitle'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { hotelSummary, useLanguage } from '../i18n'

function HotelDetail() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const h = t.hotelDetail
  const hotel = hotels.find((item) => item.slug === slug)
  useDocumentTitle(
    hotel ? `${hotel.name} — ${h.titleSuffix}` : h.notFoundTitle,
  )

  if (!hotel) {
    return (
      <main>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {t.common.error404}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {h.notFoundHeading}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {h.notFoundText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/hotels" className="button">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {h.backToHotels}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const destination = destinations.find((item) => item.slug === hotel.destinationSlug)
  const heroAlt = resolveImageAlt(hotel.image) ?? `${t.common.illustrationOf}${hotel.name}`
  const heroCredit = resolveImageCredit(hotel.image)
  const otherHotels = hotels.filter((item) => item.slug !== hotel.slug).slice(0, 3)

  const practicalInfos = [
    hotel.location
      ? { icon: MapPin, label: h.locationLabel, value: hotel.location, to: null as string | null }
      : null,
    destination
      ? {
          icon: BedDouble,
          label: h.destinationLabel,
          value: destination.name,
          to: `/destinations/${destination.slug}` as string | null,
        }
      : null,
  ].filter((item) => item !== null)

  return (
    <main>
      {/* Fil d'Ariane */}
      <nav aria-label={h.breadcrumbAria} className="border-b border-slate-200/80 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <li>
            <Link to="/" className="font-semibold text-ink-soft transition hover:text-brand">
              {h.home}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li>
            <Link
              to="/hotels"
              className="font-semibold text-ink-soft transition hover:text-brand"
            >
              {h.hotels}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          </li>
          <li aria-current="page" className="font-bold text-brand">
            {hotel.name}
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
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                  {h.accommodationBadge}
                </span>
                {hotel.location && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {hotel.location}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                {hotel.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {hotelSummary(hotel, language)}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={`/reservation?hotel=${hotel.slug}`}
                  className="button button-light"
                >
                  {h.bookHotel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {destination && (
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="button button-outline-light"
                  >
                    {h.discoverDestination}
                  </Link>
                )}
              </div>
            </div>
            <CardMedia
              imageKey={hotel.image}
              alt={heroAlt}
              icon={BedDouble}
              className="aspect-[16/9] rounded-3xl shadow-xl ring-1 ring-white/20"
            >
              <span className="absolute top-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-bold text-white/90">
                {h.illustrationBadge}
              </span>
              {heroCredit && (
                <span className="absolute right-3 bottom-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white/90">
                  {t.common.photoCredit}
                  {heroCredit}
                </span>
              )}
            </CardMedia>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              {h.illustrationDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      {practicalInfos.length > 0 && (
        <section aria-label={h.practicalAria}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={h.practicalEyebrow}
              title={h.practicalTitle}
              subtitle={h.practicalSubtitle(hotel.name)}
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

      {/* Localisation Google Maps (affichée uniquement si l'hôtel a un mapsUrl) */}
      {hotel.mapsUrl && (
        <section aria-label={h.mapsEyebrow} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl bg-brand-soft p-8 text-center sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  {h.mapsEyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-balance text-ink sm:text-3xl">
                  {hotel.name}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                  {h.mapsSubtitle}
                </p>
              </div>
              <a
                href={hotel.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                {h.mapsButton}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Destination associée */}
      {destination && (
        <section aria-label={h.destinationTitle} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={h.destinationEyebrow}
              title={h.destinationTitle}
              subtitle={h.destinationSubtitle(destination.name)}
            />
            <div className="mx-auto mt-10 max-w-md">
              <DestinationCard destination={destination} />
            </div>
          </div>
        </section>
      )}

      {/* Autres hôtels */}
      {otherHotels.length > 0 && (
        <section aria-label={h.othersTitle}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow={h.othersEyebrow}
              title={h.othersTitle}
              subtitle={h.othersSubtitle}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherHotels.map((item) => (
                <HotelCard key={item.slug} hotel={item} />
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
            {h.ctaTitle(hotel.name)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {h.ctaText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={`/reservation?hotel=${hotel.slug}`} className="button button-light">
              {h.bookHotel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/hotels" className="button button-outline-light">
              {h.seeOtherHotels}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HotelDetail
