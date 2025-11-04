// 📄 next.config.mjs
// ============================================================================
// Configurazione principale di Next.js con supporto PWA, ottimizzazione immagini
// e parametri di performance per il deploy.
// ============================================================================

import withPWAInit from "next-pwa";

// -----------------------------------------------------------------------------
// 🔹 CONFIGURAZIONE PWA (Next-PWA 5.6+ compatibile con Next.js 15/16)
// -----------------------------------------------------------------------------
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disattiva in dev

  /** Pagine precaricate */
  precachePages: ["/", "/cv"],

  /** Pagina di fallback offline */
  fallbacks: {
    document: "/offline.html",
  },

  /** Strategie di caching (Workbox) */
  runtimeCaching: [
    // Google Fonts
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    // Immagini e icone
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp|avif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // Risorse statiche JS / CSS / font
    {
      urlPattern: /\.(?:js|css|woff2?|ttf|otf)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // Pagine HTML (fallback offline)
    {
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        networkTimeoutSeconds: 10,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
  ],
});

// -----------------------------------------------------------------------------
// ⚙️ CONFIGURAZIONE BASE NEXT.JS
// -----------------------------------------------------------------------------
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // rimuove header “x-powered-by”
  compress: true, // abilita gzip/brotli
  experimental: { scrollRestoration: true },

  // ✅ Ottimizzazione immagini aggiornata per Next 15/16
  images: {
    formats: ["image/avif", "image/webp"], // formati moderni
    minimumCacheTTL: 60, // cache base 60s
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mauroconcentriarchitetto.com",
      },
    ],
  },
};

// ✅ Esporta config con supporto PWA
export default withPWA(nextConfig);
