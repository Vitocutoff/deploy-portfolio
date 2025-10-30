"use client";

import { fontMono, fontSans, fontSerif } from "@/lib/fonts";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const now = new Date();

  const mesi = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
  ];

  const meseCorrente = mesi[now.getMonth()];

  const annoCorrente = now.getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };

  const sections = [
    {
      title: "1. Tipologia di Cookie",
      content:
        "Questo sito utilizza esclusivamente cookie tecnici, necessari per il corretto funzionamento delle pagine. Non raccogliamo dati personali, non effettuiamo profilazione e non utilizziamo servizi di terze parti a fini di marketing.",
    },
    {
      title: "2. Finalità dei Cookie",
      content:
        "I cookie tecnici permettono al sito di mantenere attive alcune funzionalità, come la visualizzazione corretta delle pagine e il salvataggio delle preferenze di navigazione.",
    },
    {
      title: "3. Consenso e Revoca",
      content:
        "Accettando i cookie tecnici tramite il banner, confermi di comprendere che il sito funziona correttamente solo con l’uso di tali cookie. Puoi comunque eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser.",
    },
    {
      title: "4. Contatti",
      content:
        "Per qualsiasi informazione relativa alla privacy puoi contattarci via email a: archcon@goldnet.it.",
    },
  ];

  return (

    <main
      className="flex flex-col items-center
                 justify-center px-6 py-20
                 min-h-screen bg-linear-to-b
                 from-neutral-950
                 via-neutral-900 to-neutral-950
                 text-neutral-100 selection:bg-white/20
                 selection:text-white"
    >

      {/* TESTATA */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-center mt-4 mb-16"
      >

        <h1 className={`${fontSerif.className}
                        text-3xl lg:text-4xl font-light
                        text-white tracking-wide`}
        >

          Privacy & Cookie Policy

        </h1>

        <p
          className={`${fontMono.className}
                     mt-4 text-base lg:text-lg
                     text-cyan-600`}
        >

          Ultimo aggiornamento: {meseCorrente} {annoCorrente}

        </p>

      </motion.header>

      {/* SEZIONI */}
      <div
        className="max-w-xl w-full flex
                   flex-col gap-14"
      >

        {sections.map((section, i) => (

          <motion.section
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i}
            className="flex flex-col gap-4"
          >

            <h2
              className={`${fontSerif.className}
                         text-lg lg:text-xl bg-linear-to-r
                         from-neutral-950 via-neutral-900
                         to-transparent text-white px-4
                         py-2 rounded-xl shadow-md border
                         border-white/10 w-fit`}
            >

              {section.title}

            </h2>

            <p
              className={`${fontSans.className}
                          text-lg leading-relaxed tracking-wide
                          text-gray-200 px-2 lg:px-4`}
            >

              {section.content}

            </p>

          </motion.section>

        ))}

      </div>

    </main>

  );

}
