import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useLanguage, activityName } from '../i18n'
import { submitReservation } from '../services/formsubmit'
import type { Activity, Destination, Hotel, ReservationFormData, ReservationFormErrors } from '../types'
import { findBySlugOrName } from '../utils/search'
import { validateReservationForm } from '../utils/validation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const initialForm: ReservationFormData = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  destination: '',
  sejour: '',
  arrivee: '',
  depart: '',
  personnes: '1',
  message: '',
}

interface ReservationContext {
  destination?: Destination
  activity?: Activity
  hotel?: Hotel
}

function Reservation() {
  const { language, t } = useLanguage()
  const r = t.reservation
  useDocumentTitle(r.title)
  const [searchParams] = useSearchParams()

  const [context] = useState<ReservationContext>(() => {
    const destination = findBySlugOrName(destinations, searchParams.get('destination'))
    const activity = findBySlugOrName(activities, searchParams.get('activity'))
    const hotel = findBySlugOrName(hotels, searchParams.get('hotel'))
    // Si l'URL ne préremplit qu'une activité ou un hôtel, la destination
    // correspondante est déduite pour activer le filtrage (sans rien inventer).
    const stayDestinationSlug = activity?.destinationSlug ?? hotel?.destinationSlug
    return {
      destination:
        destination ??
        destinations.find((item) => item.slug === stayDestinationSlug),
      activity,
      hotel,
    }
  })

  const [form, setForm] = useState<ReservationFormData>(() => {
    const stayName = context.activity?.name ?? context.hotel?.name ?? initialForm.sejour
    const staySlug = context.activity?.slug ?? context.hotel?.slug
    const stayDestinationSlug = staySlug
      ? (activities.find((item) => item.slug === staySlug)?.destinationSlug ??
        hotels.find((item) => item.slug === staySlug)?.destinationSlug)
      : undefined
    // Ne conserve le séjour prérempli que s'il appartient à la destination
    // sélectionnée ; sinon il sera rechoisi dans la liste filtrée.
    const sejour =
      stayName &&
      context.destination &&
      stayDestinationSlug === context.destination.slug
        ? stayName
        : initialForm.sejour
    return {
      ...initialForm,
      destination: context.destination?.name ?? initialForm.destination,
      sejour,
    }
  })
  const [errors, setErrors] = useState<ReservationFormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function updateField(field: keyof ReservationFormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  // Destination → séjour : le choix d'une destination filtre les hôtels et
  // activités proposés, et tout changement réinitialise le séjour pour ne
  // jamais conserver un élément d'une autre destination.
  const selectedDestination = destinations.find((item) => item.name === form.destination)
  const filteredHotels = selectedDestination
    ? hotels.filter((hotel) => hotel.destinationSlug === selectedDestination.slug)
    : []
  const filteredActivities = selectedDestination
    ? activities.filter((activity) => activity.destinationSlug === selectedDestination.slug)
    : []

  function updateDestination(value: string) {
    setForm((current) => ({ ...current, destination: value, sejour: '' }))
    setErrors((current) => ({ ...current, destination: undefined, sejour: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)

    const nextErrors = validateReservationForm(form, language)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await submitReservation(form, language)
      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : r.submitError,
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="section">
        <p className="eyebrow">{r.successEyebrow}</p>
        <h1>{r.successHeading}</h1>
        <p>
          {r.successText}
        </p>
        <div className="form-actions">
          <button className="button" type="button" onClick={() => setSubmitted(false)}>
            {r.newRequest}
          </button>
          <Link to="/destinations" className="button button-outline">
            {r.keepExploring}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <p className="eyebrow">{r.eyebrow}</p>
      <h1>{r.heading}</h1>
      <p>{r.intro}</p>

      {(context.destination || context.activity || context.hotel) && (
        <div
          className="reservation-context"
          role="status"
          aria-live="polite"
          aria-label={r.contextAria}
        >
          <p>
            <strong>{r.contextLabel}</strong>{' '}
            {context.destination && (
              <Link to={`/destinations/${context.destination.slug}`}>
                {context.destination.name}
              </Link>
            )}
            {context.destination && (context.activity || context.hotel) && ' · '}
            {context.activity && (
              <Link to={`/activites/${context.activity.slug}`}>
                {activityName(context.activity, language)}
              </Link>
            )}
            {context.hotel && (
              <Link to={`/hotels/${context.hotel.slug}`}>{context.hotel.name}</Link>
            )}
          </p>
          <p className="reservation-context-hint">
            {r.contextHint}
          </p>
        </div>
      )}

      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="nom">{r.lastName}{r.requiredMark}</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="family-name"
              placeholder={r.lastNamePlaceholder}
              value={form.nom}
              onChange={(event) => updateField('nom', event.target.value)}
              aria-invalid={Boolean(errors.nom)}
            />
            {errors.nom && <p className="field-error">{errors.nom}</p>}
          </div>

          <div className="field">
            <label htmlFor="prenom">{r.firstName}{r.requiredMark}</label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              required
              autoComplete="given-name"
              placeholder={r.firstNamePlaceholder}
              value={form.prenom}
              onChange={(event) => updateField('prenom', event.target.value)}
              aria-invalid={Boolean(errors.prenom)}
            />
            {errors.prenom && <p className="field-error">{errors.prenom}</p>}
          </div>

          <div className="field">
            <label htmlFor="email">{r.email}{r.requiredMark}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={r.emailPlaceholder}
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div className="field">
            <label htmlFor="telephone">{r.phone}{r.requiredMark}</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+261 …"
              value={form.telephone}
              onChange={(event) => updateField('telephone', event.target.value)}
              aria-invalid={Boolean(errors.telephone)}
            />
            {errors.telephone && <p className="field-error">{errors.telephone}</p>}
          </div>

          <div className="field">
            <label htmlFor="destination">{r.destination}{r.requiredMark}</label>
            <select
              id="destination"
              name="destination"
              required
              value={form.destination}
              onChange={(event) => updateDestination(event.target.value)}
              aria-invalid={Boolean(errors.destination)}
            >
              <option value="">{r.chooseDestination}</option>
              {destinations.map((destination) => (
                <option key={destination.slug} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </select>
            {errors.destination && <p className="field-error">{errors.destination}</p>}
          </div>

          <div className="field">
            <label htmlFor="sejour">{r.stay}{r.requiredMark}</label>
            <select
              id="sejour"
              name="sejour"
              required
              disabled={!selectedDestination}
              value={form.sejour}
              onChange={(event) => updateField('sejour', event.target.value)}
              aria-invalid={Boolean(errors.sejour)}
            >
              <option value="">
                {selectedDestination ? r.chooseStay : r.chooseStayFirst}
              </option>
              {filteredHotels.length > 0 && (
                <optgroup label={r.hotelsGroup}>
                  {filteredHotels.map((hotel) => (
                    <option key={hotel.slug} value={hotel.name}>
                      {hotel.name} — {selectedDestination?.name}
                    </option>
                  ))}
                </optgroup>
              )}
              {filteredActivities.length > 0 && (
                <optgroup label={r.activitiesGroup}>
                  {filteredActivities.map((activity) => (
                    <option key={activity.slug} value={activity.name}>
                      {activityName(activity, language)} — {selectedDestination?.name}
                    </option>
                  ))}
                </optgroup>
              )}
              {selectedDestination &&
                filteredHotels.length === 0 &&
                filteredActivities.length === 0 && (
                  <option value="" disabled>
                    {r.stayEmpty}
                  </option>
                )}
            </select>
            {errors.sejour && <p className="field-error">{errors.sejour}</p>}
          </div>

          <div className="field">
            <label htmlFor="arrivee">{r.arrival}{r.requiredMark}</label>
            <input
              id="arrivee"
              name="arrivee"
              type="date"
              required
              value={form.arrivee}
              onChange={(event) => updateField('arrivee', event.target.value)}
              aria-invalid={Boolean(errors.arrivee)}
            />
            {errors.arrivee && <p className="field-error">{errors.arrivee}</p>}
          </div>

          <div className="field">
            <label htmlFor="depart">{r.departure}{r.requiredMark}</label>
            <input
              id="depart"
              name="depart"
              type="date"
              required
              value={form.depart}
              onChange={(event) => updateField('depart', event.target.value)}
              aria-invalid={Boolean(errors.depart)}
            />
            {errors.depart && <p className="field-error">{errors.depart}</p>}
          </div>

          <div className="field">
            <label htmlFor="personnes">{r.travelers}{r.requiredMark}</label>
            <input
              id="personnes"
              name="personnes"
              type="number"
              min={1}
              step={1}
              required
              value={form.personnes}
              onChange={(event) => updateField('personnes', event.target.value)}
              aria-invalid={Boolean(errors.personnes)}
            />
            {errors.personnes && <p className="field-error">{errors.personnes}</p>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">{r.message}{r.requiredMark}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            placeholder={r.messagePlaceholder}
          />
          {errors.message && <p className="field-error">{errors.message}</p>}
        </div>

        {submitError && <p className="form-error">{submitError}</p>}

        <button className="button" type="submit" disabled={submitting}>
          {submitting ? r.sending : r.send}
        </button>
      </form>
    </main>
  )
}

export default Reservation
