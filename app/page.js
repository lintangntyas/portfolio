"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0f1a] text-white">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 opacity-90" />

      {/* GLOW ORBS */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-600 rounded-full blur-[140px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-140px] right-[-100px] w-[420px] h-[420px] bg-pink-500 rounded-full blur-[140px] opacity-40 animate-pulse" />

      {/* CONTENT */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Welcome to My Portfolio Website.
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-10"
          >
            Data enthusiast with a Statistics background, passionate about turning data into clear and actionable insights.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            Let’s Get Acquainted
          </motion.a>

        </div>
      </section>

      {/* WAVES */}
      <div className="absolute bottom-0 left-0 w-full h-[420px] overflow-hidden z-10">

        {/* BACK WAVE */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-40"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#b79bbd"
            d="M0,160L80,165C160,171,320,181,480,181C640,181,800,171,960,181C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z"
          />
        </motion.svg>

        {/* MIDDLE WAVE */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-60"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#d2bfd3"
            d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"
          />
        </motion.svg>

        {/* FRONT WAVE */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-95"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#e7d9e6"
            d="M0,224L80,208C160,192,320,160,480,165C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"
          />
        </motion.svg>

        {/* BOTTOM FILL (ANTI BOCOR) */}
        <div className="absolute bottom-0 left-0 w-full h-[140px] bg-[#e7d9e6]" />

      </div>

    </main>
  );
}
