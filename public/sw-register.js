// ✅ Service Worker Registration Script
// Questo file registra automaticamente il Service Worker della PWA
// in modo sicuro, compatibile con Next.js e Vercel.

// Evita errori in ambienti server-side
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");

      console.log("✅ Service Worker registrato:", registration.scope);

      // Attende che il Service Worker sia attivo
      await navigator.serviceWorker.ready;
      console.log("PWA pronta all'uso offline!");

    } catch (error) {
      console.warn("❌ Errore nella registrazione del Service Worker:", error);
    }
  });
}
