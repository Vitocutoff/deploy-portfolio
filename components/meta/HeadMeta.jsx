// 📄 /components/meta/HeadMeta.jsx

// =========================================================================
// 🔹 COMPONENTE HEADMETA
// =========================================================================
// Contiene i meta tag "manuali" non gestiti direttamente da Next.js, ossia:
//
// - viewport responsive per tutti i device
// - configurazioni Apple PWA (Safari, iOS, iPadOS)
// - tema e background per la barra di stato mobile
// - icone mascherabili per Safari/macOS
//
// ==========================================================================
// Questi meta vengono inseriti nell’<head> globale da /app/layout.jsx
// tramite <HeadMeta />, mantenendo il layout pulito e coerente.
// ==========================================================================

export default function HeadMeta() {
  return (

    <>

      {/*

          ============================================================
          VIEWPORT RESPONSIVE
          ============================================================
          Garantisce un layout adattivo su smartphone e tablet.

          - width=device-width: imposta la larghezza al viewport reale
          - initial-scale=1: evita zoom automatico iniziale

          =============================================================

      */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/*

          =======================================================
          APPLE PWA SETTINGS
          =======================================================

          Queste impostazioni permettono di "installare" il sito
          come una web app su dispositivi iOS o iPadOS.

          ========================================================

      */}

      {/* Abilita il comportamento standalone (senza barra URL) */}
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      {/* Definisce lo stile della barra di stato su iOS: - black-translucent: testo bianco, sfondo semi-trasparente */}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Nome visualizzato sotto l’icona quando il sito è salvato come app */}
      <meta
        name="apple-mobile-web-app-title"
        content="M. Concentri"
      />

      {/*
          ======================================================================
          COLORI DI SISTEMA
          ======================================================================

          Gestiscono il colore della barra superiore (Android e browser moderni)
          e lo sfondo di fallback per browser legacy.

          ======================================================================
      */}

      <meta
        name="theme-color"
        content="#ffffff"
      />

      <meta
        name="background-color"
        content="#000000"
      />

      {/*
          =======================================================================
          MASK ICON (Safari / macOS)
          =======================================================================
          Icona vettoriale utilizzata per la barra dei preferiti di Safari:

          - rel="mask-icon": formato SVG o PNG monocolore
          - color: definisce il colore di riempimento quando Safari la visualizza

          =======================================================================
      */}

      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />

      <link
        rel="mask-icon"
        href="/icons/icon-192x192.png"
        color="#000000"
      />

    </>

  );

}
