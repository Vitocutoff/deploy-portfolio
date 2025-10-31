import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollController from "@/components/layout/ScrollController";
import ScrollToTop from "@/components/ui/ScrollToTop";

// METADATI COMPLETI (SEO + PWA)
export const metadata = {
  title: "Mauro Concentri | Architetto",
  description: "Portfolio dell'architetto Mauro Concentri a Vicenza. Impianti sportivi, progetti contemporanei e design sostenibile.",
  metadataBase: new URL("https://www.mauroconcentriarchitetto.com"),
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.mauroconcentriarchitetto.com",
  },
  openGraph: {
    title: "Mauro Concentri | Architetto",
    description: "Portfolio dell'architetto Mauro Concentri a Vicenza. Impianti sportivi, architettura contemporanea e design sostenibile.",
    url: "https://www.mauroconcentriarchitetto.com",
    siteName: "Mauro Concentri | Architetto",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Progetto architettonico dell'architetto Mauro Concentri",
      },
    ],
  },
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
    other: [
      {
        rel: "mask-icon",
        url: "/icons/icon-192x192.png",
        color: "#000000"
      },
    ],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};


export default function RootLayout({ children }) {
  return (

    <html
      lang="it"
      className="scroll-smooth"
      suppressHydrationWarning
    >

      <head>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="manifest"
          href="/manifest.json"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="M. Concentri"
        />

        <meta
          name="theme-color"
          content="#ffffff"
        />

        <meta
          name="background-color"
          content="#000000"
        />

        <link
          rel="mask-icon"
          href="/icons/icon-192x192.png"
          color="#000000"
        />

      </head>

      <body
        className="min-h-screen bg-white text-neutral-900
                   antialiased selection:bg-black/90
                   selection:text-white"
      >

        {/* SCROLL FLUIDO */}
        <ScrollController />

        {/* COOKIE BANNER */}
        <CookieBanner />

        {/* HEADER FISSO */}
        <Header />


        <main
          className="relative z-10"
        >

          {children}

        </main>

        {/* PULSANTE "TORNA SU" */}
        <ScrollToTop />

        {/* FOOTER GLOBALE */}
        <Footer />

        {/* SERVICE WORKER PER PWA */}
        <script
          src="/sw-register.js"
          defer
        ></script>

        {/* FALLBACK PER JS DISABILITATO */}
        <noscript>

          Il sito utilizza JavaScript per un’esperienza ottimale. Abilitalo per
          visualizzare correttamente tutti i contenuti.

        </noscript>

      </body>

    </html>

  );

}
