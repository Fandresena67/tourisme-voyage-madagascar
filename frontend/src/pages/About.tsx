import {
  ArrowRight,
  BedDouble,
  Compass,
  Footprints,
  MapPin,
  Send,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useLanguage } from '../i18n'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function About() {
  const { t } = useLanguage()
  const about = t.about
  useDocumentTitle(about.title)

  const approaches = [
    { icon: MapPin, title: about.approaches[0].title, text: about.approaches[0].text },
    { icon: Footprints, title: about.approaches[1].title, text: about.approaches[1].text },
    { icon: BedDouble, title: about.approaches[2].title, text: about.approaches[2].text },
    { icon: Send, title: about.approaches[3].title, text: about.approaches[3].text },
  ]

  const stats = [
    { value: String(destinations.length), label: about.statsLabels[0] },
    { value: String(activities.length), label: about.statsLabels[1] },
    { value: String(hotels.length), label: about.statsLabels[2] },
  ]

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
            {about.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {about.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Objectif */}
      <section aria-label={about.goalAria} className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {about.goalEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {about.goalTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {about.goalParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section aria-label={about.approachAria}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <SectionTitle
            eyebrow={about.approachEyebrow}
            title={about.approachTitle}
            subtitle={about.approachSubtitle}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le site en bref : chiffres réels issus du catalogue */}
      <section aria-label={about.statsAria} className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <SectionTitle
            eyebrow={about.statsEyebrow}
            title={about.statsTitle}
            subtitle={about.statsSubtitle}
          />
          <dl className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/80"
              >
                <dd className="text-4xl font-extrabold text-brand">{stat.value}</dd>
                <dt className="mt-2 text-sm font-semibold text-ink-soft">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Préparer son voyage */}
      <section aria-label={about.prepareAria} className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
            <Compass className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-4xl">
            {about.prepareTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {about.prepareText}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/destinations" className="button">
              {about.discoverDestinations}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/reservation" className="button button-outline">
              {about.makeRequest}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
