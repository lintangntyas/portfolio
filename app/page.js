"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0f1a] text-white">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 opacity-90"></div>

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

      {/* animated layered waves */}
      {/* animated pastel waves */}
      <div className="absolute bottom-0 left-0 w-full h-[420px] overflow-hidden leading-none z-0">
      
        <motion.svg
          viewBox="0 0 1440 320"
          className="block w-full"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#e7d9e6" d="M0,224L80,208C160,192,320,160,480,165C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"/>
        </motion.svg>
      
        <motion.svg
          viewBox="0 0 1440 320"
          className="block w-full -mt-20"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#d2bfd3" d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"/>
        </motion.svg>
      
        <motion.svg
          viewBox="0 0 1440 320"
          className="block w-full -mt-24"
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#b79bbd" d="M0,160L80,165C160,171,320,181,480,181C640,181,800,171,960,181C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z"/>
        </motion.svg>
      
        <motion.svg
          viewBox="0 0 1440 320"
          className="block w-full -mt-28"
          animate={{ y: [0, -28, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#9b7aa5" d="M0,224L80,213C160,203,320,181,480,165C640,149,800,139,960,144C1120,149,1280,171,1360,181L1440,192L1440,320L0,320Z"/>
        </motion.svg>
      
        <motion.svg
          viewBox="0 0 1440 320"
          className="block w-full -mt-32"
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#7a5b82" d="M0,256L80,240C160,224,320,192,480,181C640,171,800,181,960,197C1120,213,1280,235,1360,245L1440,256L1440,320L0,320Z"/>
        </motion.svg>
      
      </div>

    </main>
  );
}
