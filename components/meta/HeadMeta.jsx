// 📄 /components/meta/HeadMeta.jsx

export default function HeadMeta() {
  return (

    <>

      {/* ↓ Garantisce layout responsive su mobile e tablet */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* ↓ Impostazioni per PWA su dispositivi Apple */}
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

      {/* ↓ Icona mascherabile per Safari e macOS */}
      <link
        rel="mask-icon"
        href="/icons/icon-192x192.png"
        color="#000000"
      />

    </>

  );

}
