import type { ReservationFormData } from '../types'
import { en } from '../i18n/en'
import { fr } from '../i18n/fr'
import type { Language } from '../i18n/LanguageContext'

function messages(language: Language) {
  return language === 'en' ? en.reservation : fr.reservation
}

export function getFormSubmitEmail(language: Language = 'fr'): string {
  const email = import.meta.env.VITE_FORMSUBMIT_EMAIL?.trim()

  if (!email) {
    throw new Error(messages(language).configError)
  }

  // Refuse les adresses d'exemple (dont le placeholder de .env.example) :
  // on ne doit jamais envoyer silencieusement vers une adresse factice.
  // Le test volontairement large évite de dupliquer le placeholder en clair dans le code.
  if (email.endsWith('@example.com')) {
    throw new Error(messages(language).configError)
  }

  return email
}

export function getFormSubmitAction(language: Language = 'fr'): string {
  return `https://formsubmit.co/ajax/${getFormSubmitEmail(language)}`
}

export async function submitReservation(
  data: ReservationFormData,
  language: Language = 'fr',
): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${getFormSubmitEmail(language)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(messages(language).submitError)
  }
}
