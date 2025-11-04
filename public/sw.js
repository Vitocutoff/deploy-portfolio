// 📦 SERVICE WORKER — MAURO CONCENTRI ARCHITETTO
// ===================================================================
// Gestisce la cache, la modalità offline e l’aggiornamento automatico.
// Progettato per un uso PWA con Next.js.
// ===================================================================

// ✅ Versioning automatico per evitare conflitti di cache tra build
const CACHE_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const CACHE_NAME = `mauroconcentri-cache-${CACHE_VERSION}`;

// ✅ File statici essenziali da mettere in cache
const URLS_TO_CACHE = [
  "/",
  "/manifest.json",
  "/offline.html",
  "/favicon.ico",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// ✅ Installazione SW e caching iniziale
self.addEventListener("install", (event) => {
  console.log("📥 Installazione Service Worker…");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("📦 File aggiunti alla cache:", CACHE_NAME);
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting(); // forza l'attivazione immediata
});

// ✅ Attivazione e pulizia vecchie cache
self.addEventListener("activate", (event) => {
  console.log("♻️ Attivazione nuova versione del Service Worker…");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log("🗑️ Rimozione vecchia cache:", name);
            return caches.delete(name);
          })
      )
    )
  );
  self.clients.claim(); // prende subito il controllo delle pagine aperte
});

// ✅ Intercetta le richieste di rete e risponde dalla cache se offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse; // servita da cache
      return fetch(event.request).catch(() => caches.match("/offline.html"));
    })
  );
});
