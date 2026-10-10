export type DestinationCategory = 'Plage' | 'Nature' | 'Culture' | 'Aventure' | 'Ville' | 'Île'

// Textes anglais d'une destination (traduction fidèle des champs français,
// sans donnée touristique supplémentaire). Absent = affichage français.
export interface DestinationText {
  summary: string
  description?: string[]
  highlights?: string[]
  bestPeriod?: string
  recommendedDuration?: string
}

// Localisation externe d'une destination : libellé affiché (« Lieu, Madagascar »)
// + URL de recherche Google Maps au format universel
// (https://www.google.com/maps/search/?api=1&query=…). Aucune coordonnée
// GPS inventée : la recherche laisse Google Maps localiser le lieu.
export interface DestinationLocation {
  label: string
  mapsUrl: string
}

export interface Destination {
  slug: string
  name: string
  /** Autres noms recherchables (ex. ancien nom colonial), sans créer de doublon d'affichage. */
  aliases?: string[]
  country: string
  /** Localisation externe : libellé affiché + URL de recherche Google Maps (sans API ni clé). */
  location: DestinationLocation
  region?: string
  category?: DestinationCategory
  summary: string
  description?: string[]
  highlights?: string[]
  bestPeriod?: string
  recommendedDuration?: string
  image?: string
  images?: string[]
  en?: DestinationText
}

// Textes anglais d'une activité (traduction fidèle, slug et relations inchangés).
export interface ActivityText {
  name: string
  summary: string
  description?: string[]
  highlights?: string[]
  duration?: string
  level?: string
  bestPeriod?: string
}

export interface Activity {
  slug: string
  name: string
  destinationSlug: string
  summary: string
  category?: string
  duration?: string
  level?: string
  bestPeriod?: string
  description?: string[]
  highlights?: string[]
  image?: string
  images?: string[]
  en?: ActivityText
}

export interface Hotel {
  slug: string
  name: string
  destinationSlug: string
  location?: string
  summary: string
  pricePerNight?: number
  rating?: number
  image?: string
  /** Lien Google Maps de l'établissement (URL exacte fournie, ex. CID). Absent = pas de bouton Maps. */
  mapsUrl?: string
  /** Traduction fidèle du résumé (nom et relations inchangés). */
  en?: { summary: string }
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  destinationSlug?: string
  /** Traduction fidèle du commentaire. */
  en?: { comment: string }
}

export interface ReservationFormData {
  nom: string
  prenom: string
  email: string
  telephone: string
  destination: string
  sejour: string
  arrivee: string
  depart: string
  personnes: string
  message: string
}

export type ReservationFormErrors = Partial<Record<keyof ReservationFormData, string>>
