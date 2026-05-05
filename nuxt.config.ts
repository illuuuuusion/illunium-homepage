export default defineNuxtConfig({
  compatibilityDate: '2026-05-05',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  app: {
    head: {
      title: 'Illunium',
      meta: [
        { name: 'description', content: 'Community · Tools · Universum' },
        { property: 'og:title', content: 'Illunium' },
        { property: 'og:description', content: 'Community · Tools · Universum' },
        { property: 'og:image', content: '/og-image.svg' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#070710' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@300;400&family=Outfit:wght@300;400;500&display=swap'
        }
      ]
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
