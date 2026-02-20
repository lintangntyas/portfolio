export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* blob background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* content */}
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
            Welcome to My Portfolio
          </h1>

          <p className="text-lg md:text-xl text-purple-700 mb-10">
            Explore my projects, experience, and journey in data analytics and machine learning.
          </p>

          <a
            href="#projects"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
          >
            View Portfolio
          </a>
        </div>

        {/* wave */}
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
