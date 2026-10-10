// ---------------------------------------------------------------------------
// Helpers de localisation des données touristiques.
// Chaque helper retourne le texte anglais quand il existe, sinon le texte
// français d'origine (jamais `undefined`, jamais de clé technique visible).
// ---------------------------------------------------------------------------

import type { Activity, Destination, Hotel, Review } from '../types'
import type { Language } from './LanguageContext'

export function destSummary(destination: Destination, language: Language): string {
  if (language === 'en' && destination.en?.summary) return destination.en.summary
  return destination.summary
}

export function destDescription(destination: Destination, language: Language): string[] {
  if (language === 'en' && destination.en?.description) return destination.en.description
  return destination.description ?? []
}

export function destHighlights(destination: Destination, language: Language): string[] {
  if (language === 'en' && destination.en?.highlights) return destination.en.highlights
  return destination.highlights ?? []
}

export function destBestPeriod(
  destination: Destination,
  language: Language,
): string | undefined {
  if (language === 'en' && destination.en?.bestPeriod) return destination.en.bestPeriod
  return destination.bestPeriod
}

export function destDuration(destination: Destination, language: Language): string | undefined {
  if (language === 'en' && destination.en?.recommendedDuration)
    return destination.en.recommendedDuration
  return destination.recommendedDuration
}

export function activityName(activity: Activity, language: Language): string {
  if (language === 'en' && activity.en?.name) return activity.en.name
  return activity.name
}

export function activitySummary(activity: Activity, language: Language): string {
  if (language === 'en' && activity.en?.summary) return activity.en.summary
  return activity.summary
}

export function activityDescription(activity: Activity, language: Language): string[] {
  if (language === 'en' && activity.en?.description) return activity.en.description
  return activity.description ?? []
}

export function activityHighlights(activity: Activity, language: Language): string[] {
  if (language === 'en' && activity.en?.highlights) return activity.en.highlights
  return activity.highlights ?? []
}

export function activityDuration(activity: Activity, language: Language): string | undefined {
  if (language === 'en' && activity.en?.duration) return activity.en.duration
  return activity.duration
}

export function activityLevel(activity: Activity, language: Language): string | undefined {
  if (language === 'en' && activity.en?.level) return activity.en.level
  return activity.level
}

export function activityBestPeriod(
  activity: Activity,
  language: Language,
): string | undefined {
  if (language === 'en' && activity.en?.bestPeriod) return activity.en.bestPeriod
  return activity.bestPeriod
}

export function hotelSummary(hotel: Hotel, language: Language): string {
  if (language === 'en' && hotel.en?.summary) return hotel.en.summary
  return hotel.summary
}

export function reviewComment(review: Review, language: Language): string {
  if (language === 'en' && review.en?.comment) return review.en.comment
  return review.comment
}
