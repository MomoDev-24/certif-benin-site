// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'CertiBénin - La preuve de l’origine, à chaque étape',
      meta: [
        { name: 'description', content: 'Plateforme nationale de traçabilité, authentification et valorisation des produits Made in Benin.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})