import { Quote, Star } from 'lucide-react'
import type { Review } from '../../types'
import { reviewComment, useLanguage } from '../../i18n'
import { destinations } from '../../data/destinations'

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  const { language, t } = useLanguage()
  const destination = destinations.find((item) => item.slug === review.destinationSlug)

  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
      <Quote className="h-8 w-8 text-brand/30" aria-hidden="true" />
      <div className="mt-4 flex items-center gap-0.5" aria-label={t.reviewCard.ratingLabel(review.rating)}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            className={`h-4 w-4 ${
              value <= review.rating ? 'fill-current text-sand' : 'text-slate-300'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
        “{reviewComment(review, language)}”
      </blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-bold text-ink">{review.author}</p>
        {destination && (
          <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-brand">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" />
            {t.reviewCard.tripTo}
            {destination.name}
          </p>
        )}
      </figcaption>
    </figure>
  )
}

export default ReviewCard
