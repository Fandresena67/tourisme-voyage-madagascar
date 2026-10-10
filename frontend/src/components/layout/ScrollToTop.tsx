import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ramène la page en haut à chaque changement de route (React Router
// conserve sinon la position de scroll précédente, ex. lien « Accueil »
// du footer cliqué depuis le bas de page).
// - Réagit uniquement au pathname : les changements de query params
//   (filtres /destinations, préremplissage /reservation) ne déclenchent
//   aucun scroll et restent fonctionnels.
// - Route sans hash : retour en haut DOUX (natif, rapide) sauf si
//   prefers-reduced-motion (alors instantané). Le `behavior` explicite
//   fait de cet appel l'unique responsable du scroll de route : aucune
//   animation concurrente, aucune bibliothèque externe.
// - Avec hash (#main-content du lien d'évitement, ou ancre de section
//   type /destinations/:slug#hebergements) : comportement Stage 5.5
//   conservé, défile vers l'élément ciblé une fois la page rendue.
// - Un seul requestAnimationFrame côté hash (pas de listener, pas de
//   timer permanent) : performance native préservée.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hash) {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    if (!id) return
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }
    })
    return () => {
      cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
