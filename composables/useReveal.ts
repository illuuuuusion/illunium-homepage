import { type Directive } from 'vue'

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
  }
}
