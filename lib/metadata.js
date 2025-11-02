// 📄 /lib/metadata.js

// ---------------------------------------------------------------------------
// - METADATI GLOBALI (SEO + PWA + OPEN GRAPH)
// ---------------------------------------------------------------------------
// Qui vengono definiti i dati globali per motori di ricerca e social network.
// Next.js li usa per generare automaticamente i <meta> appropriati nell’HTML.
// ----------------------------------------------------------------------------

export const siteMetadata = {

  // ↓ Titolo visibile nella tab di navigazione e nei motori di ricerca
  title: "Mauro Concentri | Architetto",

  // ↓ Descrizione breve del sito (importante per SEO)
  description:
    "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettettazione e design sostenibile.",

  // ↓ URL base assoluto per i metadati relativi
  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),

  // ↓ Consente ai motori di ricerca una indicizzazione completa
  robots: { index: true, follow: true },

  // ↓ Percorso al file di configurazione PWA
  manifest: "/manifest.json",

  // ↓ URL canonico (evita duplicati SEO)
  alternates: {
    canonical: "https://www.mauroconcentriarchitetto.com",
  },

  openGraph: {
    // Dati Open Graph per anteprime social (facebook, linkedin, Instagram)

    title: "Mauro Concentri | Architetto",

    description:
      "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettettazione e design sostenibile.",

    url: "https://www.mauroconcentriarchitetto.com",

    siteName: "Mauro Concentri | Architetto",

    // ↓ Localizzazione (italiano, Italia)
    locale: "it_IT",

    type: "website",

    images: [
      {

        // ↓ immagine usata per la preview nei social
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Progetto architettonico dell'architetto Mauro Concentri",

      },
    ],
  },

  // Icone del sito (favicon, touch icon, ecc.)
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/icons/icon-192x192.png",
        type: "image/png"
      },
      {
        url: "/icons/icon-512x512.png",
        type: "image/png",
      },
      {
        url: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    // ↓ fallback per browser più vecchi
    shortcut: ["/favicon.ico"],
  },

};

// ------------------------------------------------------------------
// - viewport (colore tema browser)
// ------------------------------------------------------------------
// Serve per personalizzare la barra superiore del browser su mobile.
// ------------------------------------------------------------------

export const viewport = {
  themeColor: "#ffffff",
};
