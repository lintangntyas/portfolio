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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to My Portfolio Website.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-10"
          >
            Data enthusiast with a Statistics background, passionate about turning data into clear and actionable insights.
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

      {/* animated waves bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] overflow-hidden leading-none z-0">

        <svg viewBox="0 0 1440 320" className="block w-[120%] wave-animate">
          <path fill="#d8c3dc" d="M0,224L80,208C160,192,320,160,480,165C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z" />
        </svg>

        <svg viewBox="0 0 1440 320" className="block w-[120%] -mt-40 opacity-90 wave-animate">
          <path fill="#b79bbd" d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z" />
        </svg>

        <svg viewBox="0 0 1440 320" className="block w-[120%] -mt-40 opacity-80 wave-animate">
          <path fill="#8f6a95" d="M0,160L80,165C160,171,320,181,480,181C640,181,800,171,960,181C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z" />
        </svg>

        <svg viewBox="0 0 1440 320" className="block w-[120%] -mt-40 opacity-70 wave-animate">
          <path fill="#5e3564" d="M0,224L80,213C160,203,320,181,480,165C640,149,800,139,960,144C1120,149,1280,171,1360,181L1440,192L1440,320L0,320Z" />
        </svg>

      </div>

    </main>
  );
}
