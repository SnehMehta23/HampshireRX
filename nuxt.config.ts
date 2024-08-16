// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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