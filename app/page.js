import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-purple-900 mb-6"
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-purple-700 mb-10"
          >
            Explore my projects, experience, and journey in data analytics and machine learning.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Let’s Get Acquainted
          </motion.a>
        </div>

        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </section>
    </main>
  );
}
