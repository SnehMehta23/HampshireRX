// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig:{
      jwtSecret: ''
    },
    app: {
        head: {
            title: "Hampshire Pharmacy | Low Cost Generic Alternatives",
            script: [
                {
                    async: true,
                    src: "https://www.googletagmanager.com/gtag/js?id=G-RLVJ1PBJ0E",
                },
                {
                    innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-RLVJ1PBJ0E");
            `,
                    type: 'text/javascript',
                },
                {
                  async: true,
                  src: "https://www.googletagmanager.com/gtag/js?id=G-GPPJR3YTZW",
                },
                {
                  innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                      dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-GPPJR3YTZW");
                  `,
                  type: 'text/javascript',
                },
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Hampshire Pharmacy",
                        "url": "https://www.hampshirepharmacy.com",
                        "logo": "https://www.hampshirepharmacy.com/images/logos/smallLogo.png",
                        "sameAs": [
                            "https://www.facebook.com/HampshirePharmacy/"
                        ]
                    })
                },
                {
                    innerHTML: `
              (function (h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function () {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: 5002732, hjsv: 6 };
                a = o.getElementsByTagName("head")[0];
                r = o.createElement("script");
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
            `,
                    type: 'text/javascript',
                },
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
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
            // Disable sanitization for specific script
            //@ts-ignore
            __dangerouslyDisableSanitizers: ['script'],
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
                httpEndpoint: 'http://hampshirepharmacy.com',
                wsEndpoint: 'ws://hampshirepharmacy.com', // WebSocket endpoint for subscriptions
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
