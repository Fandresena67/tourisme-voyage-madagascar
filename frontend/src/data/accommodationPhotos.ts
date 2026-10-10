import { hotels } from './hotels'

/**
 * Photos d'hébergement SUPPLÉMENTAIRES par destination.
 *
 * Objectif : garantir un minimum de 3 photos d'hébergement différentes
 * pour chaque destination qui possède au moins un hébergement
 * (Nosy Tanikely, destination d'excursion sans hébergement, est exclue).
 *
 * - Le modèle `Hotel` n'est PAS modifié : les photos principales restent
 *   dans `hotels.ts` (champ `image`) et dans le registre `assets/images.ts`.
 * - Chaque entrée ci-dessous référence une clé du registre `images.ts`
 *   (vérifiée : URL https, crédit, page source, licence Commons).
 * - `hotelSlug` est renseigné UNIQUEMENT quand la photo montre réellement
 *   l'hôtel nommé du projet (lien « Voir l'hébergement ») ; sinon la photo
 *   est affichée comme simple illustration avec badge et crédit.
 */
export interface AccommodationExtraPhoto {
  /** Clé du registre `assets/images.ts`. */
  image: string
  /** Slug d'un hôtel du projet, si la photo le représente réellement. */
  hotelSlug?: string
}

export const accommodationPhotosByDestination: Record<string, AccommodationExtraPhoto[]> = {
  'nosy-be': [{ image: 'hotel-extra-nosy-be-1' }, { image: 'hotel-extra-nosy-be-2' }],
  morondava: [{ image: 'hotel-extra-morondava-1' }, { image: 'hotel-extra-morondava-2' }],
  antananarivo: [{ image: 'hotel-extra-antananarivo-1' }, { image: 'hotel-extra-antananarivo-2' }],
  'sainte-marie': [{ image: 'hotel-extra-sainte-marie-1' }, { image: 'hotel-extra-sainte-marie-2' }],
  'tsingy-bemaraha': [{ image: 'hotel-extra-tsingy-bemaraha-1' }],
  ranomafana: [{ image: 'hotel-extra-ranomafana-1' }],
  antsirabe: [{ image: 'hotel-extra-antsirabe-1', hotelSlug: 'hotel-des-thermes' }],
  'nosy-komba': [{ image: 'hotel-extra-nosy-komba-1' }],
  ramena: [{ image: 'hotel-extra-ramena-1' }],
  foulpointe: [{ image: 'hotel-extra-foulpointe-1' }],
  'montagne-ambre': [{ image: 'hotel-extra-montagne-ambre-1' }],
  ankarafantsika: [{ image: 'hotel-extra-ankarafantsika-1' }],
  'nosy-iranja': [{ image: 'hotel-extra-nosy-iranja-1' }, { image: 'hotel-extra-nosy-iranja-2' }],
}

export interface AccommodationGalleryItem {
  image: string
  hotelSlug?: string
}

/**
 * Galerie complète d'hébergement d'une destination : photos des hôtels
 * du projet suivies des photos supplémentaires (jamais de doublon :
 * les clés supplémentaires sont distinctes des clés `image` des hôtels).
 */
export function accommodationGalleryForDestination(destinationSlug: string): AccommodationGalleryItem[] {
  const hotelPhotos: AccommodationGalleryItem[] = hotels
    .filter((hotel) => hotel.destinationSlug === destinationSlug && hotel.image)
    .map((hotel) => ({ image: hotel.image as string, hotelSlug: hotel.slug }))
  const extraPhotos: AccommodationGalleryItem[] = (
    accommodationPhotosByDestination[destinationSlug] ?? []
  ).map((photo) => ({ image: photo.image, hotelSlug: photo.hotelSlug }))
  return [...hotelPhotos, ...extraPhotos]
}
