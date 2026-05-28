"use client";

export default function Home() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      className="min-h-screen relative pt-2 bg-gradient-to-br from-[#fdf2f8] via-[#f8fafc] to-[#dbeafe] px-5 md:px-10 py-6 md:py-8 overflow-hidden"
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
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-white text-lg md:text-2xl font-bold text-center hover:text-pink-400 transition duration-300"
          >
            Lintang Cahyaningtyas
          </button>

          {/* MENU */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-12 text-white font-medium text-sm md:text-lg">

            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-pink-400 transition"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-blue-400 transition"
              >
                Experience
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-purple-400 transition"
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
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
        id="top"
        className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-24 pt-40 md:pt-48 pb-24 relative z-10"
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

            <a
              href="https://drive.google.com/file/d/1rRmxiiQKzfyqcnI0HY5mNvaIchimlaxb/view?usp=drive_link"
              target="_blank"
            >

              <button className="border-2 border-black px-6 py-2 rounded-full text-sm md:text-lg font-medium hover:bg-black hover:text-white transition duration-300">
                Download CV
              </button>

            </a>

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
        className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-20"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-10">
              About Me
            </h1>

            <div className="space-y-8 text-justify text-gray-800 text-lg leading-[2.2rem]">

              <p>
                Hello, my name is{" "}
                <span className="font-bold">
                  Lintang Cahyaningtyas
                </span>{" "}
                and people usually call me{" "}
                <span className="font-bold">Lintang</span>. 
                I graduated from Universitas Islam Indonesia with a degree in Statistics and graduated with cum laude distinction. 
                I have a strong interest in data analysis, visualization, and basic machine learning. 
                I possess skills in various data analysis techniques and tools such as {" "}
                <span className="font-bold">
                  Excel, basic Python, R, Google Data Studio, XAMPP,
                  phpMyAdmin, and Tableau. 
                </span>

                   
              </p>

              <p>
                My experiences at{" "}
                <span className="font-bold">
                  Badan Pusat Statistik, Bankaltimtara, PLN Indonesia Power,
                  and INVISIO
                </span>
                , along with my involvement in research, internships, and organizations, 
                have strengthened both my technical and collaborative skills. I am a detail-oriented, 
                responsible, and adaptive individual who is able to work independently as well as in a team.
              </p>

            </div>

            {/* LOGO */}
            <div className="flex items-center gap-8 mt-10 flex-wrap">

              <img
                src="/bps.svg"
                alt="BPS"
                className="h-14 object-contain"
              />

              <img
                src="/bankaltimtara.png"
                alt="Bankaltimtara"
                className="h-10 object-contain"
              />

              <img
                src="/ip.webp"
                alt="PLN"
                className="h-14 object-contain"
              />

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">

            <img
              src="/about.png"
              alt="About"
              className="w-[420px] md:w-[500px] rounded-[2.5rem] shadow-2xl"
            />

          </div>

        </div>
                
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen px-6 md:px-16 py-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-20">
          Experience
        </h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          {/* BPS */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-pink-500">
                  Badan Pusat Statistik
                </h2>
      
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  Statistician Intern
                </p>
              </div>
      
              <span className="text-sm text-gray-500">
                Nov 2025 - May 2026
              </span>
            </div>
      
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Collected, cleaned, and analyzed statistical distribution indicator data.
              </li>
      
              <li>
                • Developed web-based automation systems to improve work efficiency.
              </li>
      
              <li>
                • Created statistical infographics to support publication activities.
              </li>
      
              <li>
                • Managed administrative documents and company directory data.
              </li>
            </ul>
          </div>
      
          {/* PLN */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-blue-500">
                  PLN Indonesia Power
                </h2>
      
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  Reliability & System Owner Intern
                </p>
              </div>
      
              <span className="text-sm text-gray-500">
                Feb 2024
              </span>
            </div>
      
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Analyzed Unit 7 disturbance and pulverizer maintenance data using Excel and R.
              </li>
      
              <li>
                • Prepared evaluation reports for system reliability improvement.
              </li>
      
              <li>
                • Participated in occupational health and safety socialization programs.
              </li>
            </ul>
          </div>
      
          {/* INVISIO */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-purple-500">
                  INVISIO
                </h2>
      
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  Marketing & Content Writer
                </p>
              </div>
      
              <span className="text-sm text-gray-500">
                Mar 2023 - Apr 2025
              </span>
            </div>
      
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Developed content strategies and educational statistical materials.
              </li>
      
              <li>
                • Collaborated with design teams to create engaging publications.
              </li>
      
              <li>
                • Analyzed social media engagement performance monthly.
              </li>
            </ul>
          </div>
      
          {/* BANKALTIMTARA */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-pink-500">
                  Bankaltimtara
                </h2>
      
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  IT & E-Banking Intern
                </p>
              </div>
      
              <span className="text-sm text-gray-500">
                Jul 2019 - Dec 2019
              </span>
            </div>
      
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Assisted customer service activities related to ATM services.
              </li>
      
              <li>
                • Helped improve customer satisfaction through responsive problem handling.
              </li>
      
              <li>
                • Supported ATM card destruction and banking administration processes.
              </li>
            </ul>
          </div>
      
        </div>
      </section>

    </main>
  );
}
