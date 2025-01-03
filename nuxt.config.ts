// https://nuxt.com/docs/api/configuration/nuxt-config
import { analyticsConfig } from './config/analytics'
import { schemaConfig } from './config/schema'
import { hotjarConfig } from './config/hotjar'
import { metaConfig } from './config/meta'
import { metaPixelConfig } from './config/meta-pixel'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig:{
      jwtSecret: ''
    },
    app: {
        head: {
          title: metaConfig.title,
          link: metaConfig.link,
          meta: metaConfig.meta,
          script: [
            ...metaPixelConfig.script,
            ...analyticsConfig.script,
            ...schemaConfig.script,
            ...hotjarConfig.script,
          ],
          noscript: [
            ...metaPixelConfig.noscript
          ],
        },
    },
    modules: ["@nuxtjs/tailwindcss", 'nuxt-mongoose', 'nuxt-graphql-server', '@nuxtjs/apollo'],
    graphqlServer: {
        url: '/api/graphql',
    },
    //@ts-ignore
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://hampshirepharmacy.com/api/graphql',
                wsEndpoint: 'wss://hampshirepharmacy.com/api/graphql', // WebSocket endpoint for subscriptions
                httpLinkOptions: {
                    credentials: 'include'
                }
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
        options: {},
        modelsDir: 'models',
        devtools: true,
    },
})
