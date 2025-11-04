// 🔁 REGISTRAZIONE DEL SERVICE WORKER (CLIENT SIDE)
// ===================================================================
// Registra /sw.js al caricamento del sito e gestisce aggiornamenti
// ===================================================================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("✅ Service Worker registrato:", registration.scope);

        // 🔄 Controllo aggiornamenti
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("🔁 Nuova versione disponibile. Aggiorna la pagina per applicarla.");
            }
          });
        });
      })
      .catch((err) => console.error("❌ Errore registrazione SW:", err));
  });
}
