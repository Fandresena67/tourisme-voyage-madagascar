import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  CONTACT_WHATSAPP_URL,
} from '../components/layout/Footer'
import { useLanguage } from '../i18n'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  useDocumentTitle(c.title)

  const contactCards = [
    {
      icon: Mail,
      title: c.cards[0].title,
      description: c.cards[0].description,
      actionLabel: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
    {
      icon: Phone,
      title: c.cards[1].title,
      description: c.cards[1].description,
      actionLabel: CONTACT_PHONE_DISPLAY,
      href: CONTACT_PHONE_LINK,
      external: false,
    },
    {
      icon: MessageCircle,
      title: c.cards[2].title,
      description: c.cards[2].description,
      actionLabel: c.chatOnWhatsapp,
      href: CONTACT_WHATSAPP_URL,
      external: true,
    },
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
            {c.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {c.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Moyens de contact */}
      <section aria-label={c.meansAria}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink">{card.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  {...(card.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-5 inline-flex w-fit max-w-full items-center gap-1.5 rounded-lg bg-brand-soft px-3 py-2 text-sm font-semibold break-all text-brand transition hover:bg-brand hover:text-white"
                >
                  {card.actionLabel}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              {c.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              {c.ctaText}
            </p>
            <div className="mt-7">
              <Link to="/reservation" className="button button-light">
                {c.bookingRequest}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
