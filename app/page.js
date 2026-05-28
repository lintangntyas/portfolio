export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#f8fafc] to-[#dbeafe] px-10 py-8">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-purple-200 rounded-full blur-[100px] opacity-30"></div>

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 flex items-center justify-between shadow-2xl relative z-10">

        {/* LOGO */}
        <h1 className="text-white text-3xl font-bold">
          Lintang Cahyaningtyas
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-12 text-white font-medium text-lg">
          <li className="cursor-pointer hover:text-pink-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Experience
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            Contact
          </li>
        </ul>

        {/* LINKEDIN BUTTON */}
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg flex items-center gap-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="linkedin"
            className="w-6 h-6"
          />

          LinkedIn
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24 mt-24 relative z-10">

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-[10px] border-white shadow-[0_0_90px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-500">

            <img
              src="/foto.png"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* TEXT */}
        <div>

          <p className="text-5xl text-slate-600 mb-6 font-medium">
            Hello, Myself
          </p>

          <h1 className="text-8xl font-extrabold text-black leading-tight">
            Lintang
            <br />
            Cahyaningtyas
          </h1>

          {/* NEW ANIMATION */}
          <div className="mt-8">

            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-bounce inline-block">
              Data Enthusiast
            </h2>

            <div className="w-[320px] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-3 animate-pulse"></div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-8 mt-14">

            <button className="border-4 border-black px-10 py-4 rounded-full text-2xl font-medium hover:bg-black hover:text-white transition duration-300">
              Download CV
            </button>

            <button className="bg-black text-white px-10 py-4 rounded-full text-2xl font-medium hover:scale-105 transition duration-300 flex items-center gap-3">
              Contact
            </button>

          </div>

        </div>
      </section>
    </main>
  );
}
