import { BedDouble, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resolveImageAlt, resolveImageCredit } from '../../assets/images'
import { hotels } from '../../data/hotels'
import { useLanguage } from '../../i18n'
import CardMedia from './CardMedia'

interface AccommodationPhotoCardProps {
  /** Clé du registre `assets/images.ts`. */
  image: string
  /**
   * Slug d'un hôtel du projet, renseigné uniquement si la photo montre
   * réellement cet établissement (la carte devient alors un vrai lien
   * vers sa fiche). Sinon la photo reste une simple illustration.
   */
  hotelSlug?: string
}

function AccommodationPhotoCard({ image, hotelSlug }: AccommodationPhotoCardProps) {
  const { t } = useLanguage()
  const hotel = hotelSlug ? hotels.find((item) => item.slug === hotelSlug) : undefined
  const alt = resolveImageAlt(image) ?? hotel?.name ?? ''
  const credit = resolveImageCredit(image)

  const media = (
    <CardMedia imageKey={image} alt={alt} icon={BedDouble} className="aspect-[4/3]">
      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink shadow-sm">
        {t.hotelCard.illustrationBadge}
      </span>
    </CardMedia>
  )

  if (hotel) {
    return (
      <Link
        to={`/hotels/${hotel.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {media}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold text-ink transition group-hover:text-brand">
            {hotel.name}
          </h3>
          {hotel.location && (
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {hotel.location}
            </p>
          )}
          {credit && (
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              {t.common.photoCredit}
              {credit}
            </p>
          )}
          <span className="mt-4 inline-flex w-fit items-center rounded-lg bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
            {t.destinationDetail.seeAccommodation}
          </span>
        </div>
      </Link>
    )
  }

  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
      {media}
      <figcaption className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold leading-relaxed text-ink">{alt}</p>
        {credit && (
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">
            {t.common.photoCredit}
            {credit}
          </p>
        )}
      </figcaption>
    </figure>
  )
}

export default AccommodationPhotoCard
