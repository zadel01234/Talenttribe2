// 'use client'

// import { useEffect } from 'react'

// export default function ScrollReveal() {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             (entry.target as HTMLElement).style.opacity = '1';
//             (entry.target as HTMLElement).style.transform = 'translateY(0)'
//           }
//         })
//       },
//       { threshold: 0.08 },
//     )

//     document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((el) => {
//       el.style.opacity = '0'
//       el.style.transform = 'translateY(28px)'
//       el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
//       observer.observe(el)
//     })

//     return () => observer.disconnect()
//   }, [])

//   return null
// }

'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) translateX(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 },
    )

    // Base .scroll-reveal elements
    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((el) => {
      const delay = el.dataset.delay ?? '0'
      const duration = el.dataset.duration ?? '0.7'
      const direction = el.dataset.direction ?? 'up'

      const translateFrom =
        direction === 'left' ? 'translateX(-32px)' :
          direction === 'right' ? 'translateX(32px)' :
            direction === 'down' ? 'translateY(-28px)' :
              'translateY(28px)' // default: up

      el.style.opacity = '0'
      el.style.transform = translateFrom
      el.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`
      observer.observe(el)
    })

    // Auto-stagger children inside .scroll-reveal-group
    document.querySelectorAll<HTMLElement>('.scroll-reveal-group').forEach((group) => {
      const baseDelay = parseFloat(group.dataset.baseDelay ?? '0')
      const step = parseFloat(group.dataset.step ?? '0.12')
      const duration = group.dataset.duration ?? '0.6'
      const direction = group.dataset.direction ?? 'up'

      const translateFrom =
        direction === 'left' ? 'translateX(-32px)' :
          direction === 'right' ? 'translateX(32px)' :
            direction === 'down' ? 'translateY(-28px)' :
              'translateY(28px)'

      const children = Array.from(group.children) as HTMLElement[]

      children.forEach((child, i) => {
        const delay = baseDelay + i * step
        child.style.opacity = '0'
        child.style.transform = translateFrom
        child.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`
        observer.observe(child)
      })
    })

    return () => observer.disconnect()
  }, [])

  return null
}