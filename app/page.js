export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen relative pt-2 bg-gradient-to-br from-[#fdf2f8] via-[#f8fafc] to-[#dbeafe] px-5 md:px-10 py-6 md:py-8"
    >

      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-300 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-purple-200 rounded-full blur-[100px] opacity-30"></div>

      {/* NAVBAR */}
      <div className="fixed top-4 left-0 right-0 z-[9999] px-5 md:px-10">

        <nav className="max-w-6xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full px-5 md:px-10 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between shadow-2xl">

          {/* LOGO */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
            className="text-white text-lg md:text-2xl font-bold text-center hover:text-pink-400 transition duration-300"
          >
            Lintang Cahyaningtyas
          </button>

          {/* MENU */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-12 text-white font-medium text-sm md:text-lg">

            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                className="hover:text-pink-400 transition"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("experience")
                    .scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                className="hover:text-blue-400 transition"
              >
                Experience
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                className="hover:text-purple-400 transition"
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                className="hover:text-pink-400 transition"
              >
                Contact
              </button>
            </li>

          </ul>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/lintangntyas/"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 md:px-5 py-2 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg flex items-center gap-2 text-sm"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linkedin"
              className="w-4 h-4"
            />

            LinkedIn

          </a>

        </nav>
      </div>

      {/* HERO */}
      <section
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-24 pt-40 md:pt-48 relative z-10"
      >

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[10px] border-white shadow-[0_0_90px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-500">

            <img
              src="/foto.png"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">

          <p className="text-2xl md:text-3xl text-slate-600 mb-4 font-medium">
            Hello, Myself
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Lintang
            <br />
            Cahyaningtyas
          </h1>

          {/* ANIMATION */}
          <div className="mt-6">

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent inline-block animate-pulse">
              Data Enthusiast
            </h2>

            <div className="w-[220px] md:w-[320px] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-3 mx-auto md:mx-0"></div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-8">

            {/* DOWNLOAD CV */}
            <a
              href="https://drive.google.com/file/d/1rRmxiiQKzfyqcnI0HY5mNvaIchimlaxb/view?usp=drive_link"
              target="_blank"
            >

              <button className="border-2 border-black px-6 py-2 rounded-full text-sm md:text-lg font-medium hover:bg-black hover:text-white transition duration-300">
                Download CV
              </button>

            </a>

            {/* CONTACT */}
            <a href="mailto:lintangntys@gmail.com">

              <button className="border-2 border-black px-6 py-2 rounded-full text-sm md:text-lg font-medium hover:bg-black hover:text-white transition duration-300">
                Contact
              </button>

            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 pt-40 pb-24 px-4 md:px-6"
      >

        {/* TEXT */}
        <div className="flex-1">

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-12">
            About Me
          </h1>

          <div className="space-y-8 text-gray-800 leading-relaxed text-lg md:text-2xl">

            <p>
              Hello, my name is{" "}
              <span className="font-bold">
                Lintang Cahyaningtyas
              </span>{" "}
              and people usually call me{" "}
              <span className="font-bold">
                Lintang
              </span>.
              I graduated from{" "}
              <span className="font-bold">
                Universitas Islam Indonesia
              </span>{" "}
              majoring in Statistics with cumlaude distinction and have a strong interest in
              data analysis, visualization, and basic machine learning.
              I possess skills in various data analysis techniques and tools such as{" "}
              <span className="font-bold">
                Excel, basic Python, R, Google Data Studio,
                XAMPP, phpMyAdmin, and Tableau.
              </span>
            </p>

            <p>
              My experiences at{" "}
              <span className="font-bold">
                Badan Pusat Statistik, Bankaltimtara,
                PLN Indonesia Power, and INVISIO
              </span>,
              along with involvement in research, internships, and organizations,
              have strengthened both my technical and collaborative skills.
              I am a detail-oriented, responsible, and adaptive individual
              who is able to work independently as well as within a team.
            </p>

            {/* COMPANY LOGO */}
            <div className="flex flex-wrap items-center gap-8 pt-2">

              <img
                src="/bps.svg"
                alt="BPS"
                className="h-12 md:h-14 object-contain hover:scale-110 transition duration-300"
              />

              <img
                src="/bankaltimtara.png"
                alt="Bankaltimtara"
                className="h-12 md:h-14 object-contain hover:scale-110 transition duration-300"
              />

              <img
                src="/ip.webp"
                alt="PLN Indonesia Power"
                className="h-12 md:h-14 object-contain hover:scale-110 transition duration-300"
              />

            </div>

          </div>

        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            {/* BLUR */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-[40px] blur-3xl opacity-40 scale-110"></div>

            {/* IMAGE BOX */}
            <div className="relative bg-[#e9e3d9] rounded-[40px] overflow-hidden shadow-2xl border border-white/40">

              <img
                src="/about.png"
                alt="About Lintang"
                className="w-[320px] md:w-[470px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
