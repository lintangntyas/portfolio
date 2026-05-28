export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f5f7ff] via-[#f3f3f3] to-[#ffeef7] px-10 py-8">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-purple-200 rounded-full blur-[100px] opacity-30"></div>

      {/* NAVBAR */}
      <nav className="max-w-5xl mx-auto bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl relative z-10">

        {/* LOGO */}
        <h1 className="text-white text-3xl font-bold">
          Lintang Cahyaningtyas
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          <li className="cursor-pointer hover:text-blue-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            Experience
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Contact
          </li>
        </ul>

        {/* BUTTON */}
        <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Visit Github
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-20 mt-24 relative z-10">

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-white shadow-[0_0_80px_rgba(59,130,246,0.35)] hover:scale-105 transition duration-500">

            <img
              src="/foto.png"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* TEXT */}
        <div>

          <p className="text-5xl text-gray-700 mb-4">
            Hello, Myself
          </p>

          <h1 className="text-7xl font-bold text-black leading-tight">
            Lintang Cahyaningtyas
          </h1>

          {/* ANIMATION TEXT */}
          <h2 className="text-5xl font-bold mt-6 inline-block overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-[typing_2s_steps(16)_infinite,blink_.7s_step-end_infinite]">

            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Data Enthusiast
            </span>

          </h2>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-12">

            <button className="border-2 border-black px-8 py-3 rounded-full text-xl hover:bg-black hover:text-white transition duration-300">
              Download CV
            </button>

            <button className="bg-black text-white px-8 py-3 rounded-full text-xl hover:scale-105 transition duration-300">
              Contact
            </button>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-8 mt-12">

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:scale-125 transition duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
                className="w-12 h-12"
              />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com"
              target="_blank"
              className="hover:scale-125 transition duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
                className="w-12 h-12"
              />
            </a>

            {/* DATA */}
            <a
              href="#"
              className="hover:scale-125 transition duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2784/2784487.png"
                alt="data"
                className="w-12 h-12"
              />
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}
