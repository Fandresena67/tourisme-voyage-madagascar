import type { ReservationFormData, ReservationFormErrors } from '../types'
import { en } from '../i18n/en'
import { fr } from '../i18n/fr'
import type { Language } from '../i18n/LanguageContext'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

// Date locale du jour au format AAAA-MM-JJ, sans conversion UTC
// (évite tout décalage de jour lié au fuseau horaire).
function todayLocal(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

export function validateReservationForm(
  data: ReservationFormData,
  language: Language = 'fr',
): ReservationFormErrors {
  const errors: ReservationFormErrors = {}
  const messages = language === 'en' ? en.validation : fr.validation

  if (!data.nom.trim()) errors.nom = messages.lastName
  if (!data.prenom.trim()) errors.prenom = messages.firstName

  if (!data.email.trim()) {
    errors.email = messages.emailRequired
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = messages.emailInvalid
  }

  if (!data.telephone.trim()) errors.telephone = messages.phone
  if (!data.destination.trim()) errors.destination = messages.destination
  if (!data.sejour.trim()) errors.sejour = messages.stay
  if (!data.arrivee) errors.arrivee = messages.arrivalRequired
  if (!data.depart) errors.depart = messages.departureRequired

  if (data.arrivee && DATE_PATTERN.test(data.arrivee) && data.arrivee < todayLocal()) {
    errors.arrivee = messages.arrivalPast
  }

  if (data.arrivee && data.depart && data.depart < data.arrivee) {
    errors.depart = messages.departureBeforeArrival
  }

  const personnes = Number(data.personnes)
  if (!data.personnes.trim()) {
    errors.personnes = messages.travelersRequired
  } else if (!Number.isInteger(personnes) || personnes < 1) {
    errors.personnes = messages.travelersInvalid
  }

  if (!data.message.trim()) errors.message = messages.message

  return errors
}
