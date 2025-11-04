// 📄 /lib/metadata.js

// ============================================================================
// 🔹 METADATI GLOBALI (SEO + PWA + OPEN GRAPH)
// ===========================================================================
// Questo file centralizza tutte le informazioni meta del sito:
//
// - SEO per motori di ricerca
// - Open Graph per social media (Facebook, LinkedIn, Instagram, ecc.)
// - Configurazione PWA (Progressive Web App)
// - Icone per browser, dispositivi mobili e sistemi operativi
//
// ===========================================================================
// Next.js utilizza automaticamente questi dati per generare i meta tag HTML,
// garantendo coerenza e scalabilità in tutto il progetto.
// ============================================================================

export const siteMetadata = {

  // ============
  // 🔸 SEO BASE
  // ============

  // Titolo principale mostrato nella scheda del browser e nei risultati di ricerca
  title: "Mauro Concentri | Architetto",

  // Descrizione breve del sito (importante per la SEO)
  description:
    "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettettazione e design sostenibile.",

  // URL base assoluto del dominio: serve come radice per i link Open Graph
  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),

  // ========================================================
  // Istruzioni per i motori di ricerca
  // ========================================================
  //
  // - index: consente l’indicizzazione delle pagine
  // - follow: permette ai crawler di seguire i link interni
  //
  // ========================================================

  robots: { index: true, follow: true },

  // Collegamento al file manifest per la configurazione PWA
  manifest: "/manifest.json",

  // URL canonico (previene la duplicazione SEO)
  alternates: {
    canonical: "https://www.mauroconcentriarchitetto.com",
  },

  // ===============================
  // 🔸 OPEN GRAPH — METADATI SOCIAL
  // ===============================

  openGraph: {

    // Titolo e descrizione mostrati quando il sito è condiviso
    title: "Mauro Concentri | Architetto",
    description:
      "Portfolio - Mauro Concentri Architetto a Vicenza. Impianti sportivi, progettettazione e design sostenibile.",

    // URL assoluto del sito
    url: "https://www.mauroconcentriarchitetto.com",

    // Nome del sito visualizzato nei post social
    siteName: "Mauro Concentri | Architetto",

    // Lingua e localizzazione
    locale: "it_IT",

    // Tipo di contenuto (website, article, portfolio, ecc.)
    type: "website",

    // Immagine di anteprima (social card)
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Progetto architettonico dell'architetto Mauro Concentri",
      },
    ],
  },

  // ==============
  // 🔸 ICONE E PWA
  // ==============

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

// ==================================================================
// 🔹 VIEWPORT — TEMA DELLA BARRA DI NAVIGAZIONE
// ==================================================================
//
// Questa configurazione definisce il colore del tema su browser mobile
// (Android, iOS e browser basati su Chromium).
//
// ===================================================================

export const viewport = {

  // colore chiaro coerente con il design del sito
  themeColor: "#ffffff",
};
