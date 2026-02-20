"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0f1a] text-white">

      {/* animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 opacity-80"></div>

      {/* glow orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-purple-600 rounded-full blur-[140px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-140px] right-[-100px] w-[420px] h-[420px] bg-pink-500 rounded-full blur-[140px] opacity-40 animate-pulse"></div>
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* content */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-10"
          >
            Explore my projects, experience, and journey in data analytics and machine learning.
          </motion.p>

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

      {/* wave */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"
        />
      </svg>

    </main>
  );
}
