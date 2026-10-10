import type { Review } from '../types'

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Claire M.',
    rating: 5,
    comment:
      "Un voyage magique : les lagoons de Nosy Be et la chaleur de l'accueil malgache resteront longtemps dans nos souvenirs.",
    destinationSlug: 'nosy-be',
    en: {
      comment:
        'A magical trip: the lagoons of Nosy Be and the warmth of the Malagasy welcome will stay with us for a long time.',
    },
  },
  {
    id: '2',
    author: 'Julien R.',
    rating: 5,
    comment:
      "Le coucher de soleil à l'Allée des Baobabs vaut à lui seul le déplacement. Une organisation simple et vraiment claire.",
    destinationSlug: 'morondava',
    en: {
      comment:
        'The sunset at the Avenue of the Baobabs alone is worth the trip. Simple and truly clear organisation.',
    },
  },
  {
    id: '3',
    author: 'Aina & Soa',
    rating: 4,
    comment:
      "Une randonnée inoubliable à Andasibe, guidée par des passionnés. Nous reviendrons sans hésiter.",
    destinationSlug: 'andasibe',
    en: {
      comment:
        'An unforgettable hike in Andasibe, guided by enthusiasts. We will be back without hesitation.',
    },
  },
]
