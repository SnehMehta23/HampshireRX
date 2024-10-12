// config/analytics.ts

export const analyticsConfig = {
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-RLVJ1PBJ0E",
        async: true
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-RLVJ1PBJ0E");
        `,
        type: 'text/javascript'
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-GPPJR3YTZW",
        async: true
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-GPPJR3YTZW");
        `,
        type: 'text/javascript'
      },
    ]
  }