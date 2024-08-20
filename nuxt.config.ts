// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
        title: "Hampshire Pharmacy | Low Cost Generic Alternatives",
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Mobile Tire Pro",
                "url": "https://www.hampshirepharmacy.com",
                "logo": "https://www.hampshirepharmacy.com/images/logos/smallLogo.png",
                "sameAs": [
                    "https://www.facebook.com/HampshirePharmacy/"
                ]
            })
        },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico'},
            {rel: 'canonical', href: 'https://hampshirepharmacy.com'}
        ],
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {
                name: "description",
                content: "Reliable low cost generic alternatives for prescription drugs from a local and trustworthy pharmacy"
            },
            {
                name: "keywords",
                content: "pharmacy near me, cash pharmacy, online pharmacy, generic alternatives, generic drugs, drugstore, prescriptions, generics, pharmacy, discounted medication, shop online, healthcare"
            },
            // Open Graph / Facebook
            {property: "og:type", content: "website"},
            {property: "og:url", content: "https://hampshirepharmacy.com"},
            {property: "og:title", content: "Hampshire Pharmacy | Low Cost Generic Alternatives"},
            {
                property: "og:description",
                content: "Reliable low cost generic alternatives for prescription drugs from a local and trustworthy pharmacy"
            },
            {property: "og:image", content: "/public/images/HampshireRXMetaImage.jpg"},
            // Twitter
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:url", content: "https://hampshirepharmacy.com"},
            {name: "twitter:title", content: "Hampshire Pharmacy | Low Cost Generic Alternatives"},
            {
                name: "twitter:description",
                content: "Reliable low cost generic alternatives for prescription drugs from a local and trustworthy pharmacy"
            },
            {name: "twitter:image", content: "/public/images/HampshireRXMetaImage.jpg"},
        ],
    },
},
  modules: ["@nuxtjs/tailwindcss", 'nuxt-mongoose', 'nuxt-graphql-server','@nuxtjs/apollo'],
  graphqlServer: {
    url: '/api/graphql',
  },
  //@ts-ignore
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/api/graphql',
        wsEndpoint: 'ws://localhost:3000/api/graphql', // WebSocket endpoint for subscriptions
      },
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  //@ts-ignore
  mongoose: {
    uri: process.env.MONGODB_URI,
    options:
        {}
    ,
    modelsDir: 'models',
    devtools:
        true,
  },
})