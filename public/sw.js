// ✅ SERVICE WORKER PWA COMPLETO PER NEXT.JS
// Caching statico + aggiornamento automatico

const CACHE_NAME = "mauroconcentri-cache-v2";
const ASSETS_TO_CACHE = [
  "/", // homepage
  "/manifest.json",
  "/favicon.ico",
  "/icons/apple-touch-icon.png",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/images/bgHero.png",
];

// 🧱 Installazione
self.addEventListener("install", (event) => {
  console.log("🧱 [Service Worker] Installazione in corso...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("📦 [Service Worker] Caching static assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // attiva subito il nuovo SW
});

// 🔁 Attivazione
self.addEventListener("activate", (event) => {
  console.log("♻️ [Service Worker] Attivazione completata");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim(); // controlla subito tutte le schede aperte
});

// 🌐 Intercetta richieste
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          const clonedResponse = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clonedResponse);
          });

          return networkResponse;
        })
        .catch(() => caches.match("/offline.html")); // eventuale fallback futuro
    })
  );
});

// 🧹 Aggiornamento manuale (opzionale)
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
