// nuxt.config.js
import { analyticsConfig } from './config/analytics'
import { schemaConfig } from './config/schema'
import { hotjarConfig } from './config/hotjar'
import { metaConfig } from './config/meta'
import { metaPixelConfig } from './config/meta-pixel'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    runtimeConfig: {
        jwtSecret: process.env.JWT_SECRET // Make sure this is set via env or directly here
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
    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.NODE_ENV === 'production'
                    ? 'https://hampshirepharmacy.com/api/graphql'
                    : 'http://localhost:3000/api/graphql',
                wsEndpoint: 'wss://hampshirepharmacy.com/api/graphql', // WebSocket endpoint for subscriptions
                httpLinkOptions: {
                    credentials: 'include' // Ensures cookies are sent on every request.
                }
            },
        },
    },
    nitro: {
        experimental: {
            websocket: true,
        },
    },
    mongoose: {
        uri: process.env.MONGODB_URI,
        options: {},
        modelsDir: 'models',
        devtools: true,
    },
})
