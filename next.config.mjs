import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",

  /** PRE-CACHE DELLE PAGINE PRINCIPALI */
  precachePages: ["/", "/cv"],

  /** PAGINA DI FALLBACK OFFLINE */
  fallbacks: {
    document: "/offline.html",
  },

  /** STRATEGIE DI CACHING OTTIMAZZATE */
  runtimeCaching: [
    // GOOGLE FONTS
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    // IMMAGINI E ICONE
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp|avif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // FILE STATICI JS/CSS/FONT
    {
      urlPattern: /\.(?:js|css|woff2?|ttf|otf)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // PAGINE HTML
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

const nextConfig = {
  reactStrictMode: true,

  /** MIGLIOR UX SU NAVIGAZIONE MULTIPAGINA */
  experimental: { scrollRestoration: true },

  /** OTTIMIZZAZIONE IMMAGINI NEXT */
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mauroconcentriarchitetto.com.com",
      },
    ],
  },

  /** SICUREZZA E PERFORMANCE */
  poweredByHeader: false,
  compress: true,
};

export default withPWA(nextConfig);
