import { onMounted, onUnmounted } from 'vue'

export function useReveal(containerRef) {
  let observer

  onMounted(() => {
    if (!containerRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    containerRef.value.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el)
    })
  })

  onUnmounted(() => observer?.disconnect())
}
