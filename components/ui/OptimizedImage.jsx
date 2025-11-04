// 📄 /components/ui/OptimizedImage.jsx
// ============================================================================
// 🔹 COMPONENTE: OptimizedImage (Smart + Accessibile)
// ----------------------------------------------------------------------------
// Wrapper universale per <Image> di Next.js con:
//  - qualità automatica in base al tipo di immagine (hero, card, background...)
//  - gestione accessibilità: richiede sempre un attributo alt
//  - fallback sicuro per evitare warning in console
//
// ✅ Alt text: deve sempre essere presente.
//    - Se l'immagine è decorativa → alt="" (stringa vuota)
//    - Se l'immagine è informativa → alt="Descrizione chiara e breve"
// ============================================================================

import Image from "next/image";

export default function OptimizedImage({
  preset = "default", // Tipo di immagine (hero, card, background, ecc.)
  quality,
  alt = "", // Fallback: evita warning se alt non è fornito
  ...props
}) {
  // ----------------------------------------------------------
  // 🎯 Mappa qualità automatica in base al tipo d'immagine
  // ----------------------------------------------------------
  const qualityMap = {
    hero: 90,
    card: 75,
    background: 65,
    default: 85,
  };

  const appliedQuality = quality || qualityMap[preset] || qualityMap.default;

  return (
    <Image
      {...props}
      quality={appliedQuality}
      alt={alt} // ✅ obbligatorio per accessibilità
    />
  );
}

// ============================================================================
// 🧠 ESEMPI D’USO
// ----------------------------------------------------------------------------
// import OptimizedImage from "@/components/ui/OptimizedImage";
//
// // 🔸 HERO IMAGE — con descrizione
// <OptimizedImage
//   src="/images/hero.webp"
//   alt="Render architettonico contemporaneo"
//   fill
//   priority
//   preset="hero"
//   className="object-cover"
// />
//
// // 🔸 CARD IMAGE — con alt descrittivo
// <OptimizedImage
//   src="/images/progetto-thumb.webp"
//   alt="Anteprima progetto sportivo indoor"
//   width={600}
//   height={400}
//   preset="card"
//   loading="lazy"
//   className="object-cover rounded-xl shadow-architect"
// />
//
// // 🔸 BACKGROUND IMAGE — decorativa (alt vuoto)
// <OptimizedImage
//   src="/images/bg-texture.webp"
//   alt="" // ✅ immagine puramente estetica
//   fill
//   preset="background"
//   className="object-cover opacity-80"
// />
//
// // 🔸 Dettaglio con override manuale
// <OptimizedImage
//   src="/images/progetto-dettaglio.webp"
//   alt="Render dettagliato dell’impianto sportivo"
//   width={1200}
//   height={800}
//   quality={92}
//   className="object-cover rounded-lg"
// />
// ============================================================================

