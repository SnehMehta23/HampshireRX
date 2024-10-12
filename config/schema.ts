// config/schema.ts

export const schemaConfig = {
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hampshire Pharmacy",
          "url": "https://www.hampshirepharmacy.com",
          "logo": "https://www.hampshirepharmacy.com/images/logos/smallLogo.png",
          "sameAs": [
            "https://www.facebook.com/HampshirePharmacy/"
          ]
        })
      }
    ]
  }