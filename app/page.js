"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#d9c7d8] via-[#cbb6cb] to-[#b49db4] text-[#5b2d5f]">

      {/* CONTENT */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Welcome To My Portfolio Website
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 text-[#6e4b73]"
          >
            Get to know my projects and background by clicking the button below!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-[#5b2d5f] to-[#a87aa9] text-white px-8 py-3 rounded-full shadow-lg"
          >
            Find Out More
          </motion.button>

        </div>
      </section>

      {/* WAVES CONTAINER */}
      <div className="absolute bottom-0 left-0 w-full h-[320px] overflow-hidden">

        {/* wave 1 back */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#8e6a8f"
            d="M0,224L80,208C160,192,320,160,480,165C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"
          />
        </motion.svg>

        {/* wave 2 */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#b49db4"
            d="M0,256L80,240C160,224,320,192,480,181C640,171,800,181,960,197C1120,213,1280,235,1360,245L1440,256L1440,320L0,320Z"
          />
        </motion.svg>

        {/* wave 3 */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#d1bdd1"
            d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L0,320Z"
          />
        </motion.svg>

        {/* wave 4 front */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#e7d9e6"
            d="M0,160L80,165C160,171,320,181,480,181C640,181,800,171,960,181C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z"
          />
        </motion.svg>

      </div>

    </main>
  );
}
