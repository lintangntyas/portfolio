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
            onClick={() => scrollToSection("top")}
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
        className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-24 pt-28 md:pt-36 pb-24 relative z-10"
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
              href="https://drive.google.com/file/d/1yDxtNUwH4OJrMQxE0cy7naBDWw-gRXiz/view?usp=sharing"
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

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-6 md:px-16 py-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-20">
          Projects
        </h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          {/* PROJECT 1 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project1.png"
              alt="Project 1"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-pink-500 mb-2">
              Commodity Tabulation Automation
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Dec 2025 - Jan 2026
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Developed a Python (Flask)-based automation website to display
              commodity and inflation data for East Kalimantan Province in a
              structured and real-time format. Integrated Excel data processing,
              automatic uploads/downloads using OpenPyXL, report formatting,
              and dynamic data visualization features.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
          {/* PROJECT 2 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project2.png"
              alt="Project 2"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Statistical News Automation Website
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Jan 2026 - May 2026
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Built a Flask-based automation system for Official Statistics News
              (BRS) publication covering Inflation, Tourism, NTP, and Transportation.
              Developed interactive DataTables, automated statistical calculations,
              reporting layouts, debugging systems, and publication-ready dashboards.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
          {/* PROJECT 3 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project3.png"
              alt="Project 3"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-purple-500 mb-2">
              IndoBERT & LDA Sentiment Analysis
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Dec 2024 - May 2025
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Conducted sentiment analysis on Sunscreen product reviews using
              IndoBERT and Latent Dirichlet Allocation (LDA). Performed
              preprocessing, labeling, topic modeling, and performance evaluation
              to identify customer perceptions and review themes.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
          {/* PROJECT 4 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project4.png"
              alt="Project 4"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-pink-500 mb-2">
              Gold Price Forecasting Using ARIMA
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Dec 2023 - Jan 2024
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Developed forecasting models using ARIMA, SARIMA, and Hybrid
              Decomposition ARIMA methods to predict 20-karat gold prices.
              Compared model performance using RMSE and MAPE metrics to determine
              the most accurate forecasting model.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
          {/* PROJECT 5 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project5.png"
              alt="Project 5"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Crime Clustering Using K-Means
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Dec 2023 - Jan 2024
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Analyzed village-level crime data in Indonesia using the K-Means
              Clustering method. Determined the optimal number of clusters,
              interpreted clustering results, and developed visualizations
              to support data-driven decision making.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
          {/* PROJECT 6 */}
          <div className="bg-white/70 backdrop-blur-lg border border-black/10 rounded-[40px] p-8 shadow-xl hover:-translate-y-2 transition duration-300">
            
            <img
              src="/project6.png"
              alt="Project 6"
              className="w-full h-[240px] object-cover rounded-3xl mb-8"
            />
      
            <h2 className="text-2xl font-bold text-purple-500 mb-2">
              Simple Mobile Application
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Jan 2021 - Apr 2021
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Designed and developed a simple Android application using Android Studio.
              Created user-friendly UI/UX interfaces, implemented student data input,
              payment recording, notification systems, and performed functionality testing
              to ensure stable application performance.
            </p>
      
            <div className="mt-8">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
      
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-20 text-center">
          Contact Me
        </h1>
      
        {/* CONTACT BOX */}
        <div className="w-full max-w-5xl">
      
          <div className="bg-white/70 backdrop-blur-lg border-2 border-black rounded-[40px] px-8 md:px-12 py-8 shadow-xl flex items-center gap-6">
      
            {/* ICON */}
            <div className="text-5xl">
              📧
            </div>
      
            {/* EMAIL */}
            <input
              type="email"
              placeholder="lintangntys@gmail.com"
              className="w-full bg-transparent outline-none text-2xl md:text-5xl text-gray-500 placeholder:text-gray-400"
            />
          </div>
      
          {/* BUTTON */}
          <div className="flex justify-center mt-10">
            <button className="border-2 border-black px-10 py-3 rounded-full text-xl font-medium hover:bg-black hover:text-white transition duration-300">
              Submit
            </button>
          </div>
        </div>
      
        {/* FOOTER MENU */}
        <div className="flex gap-10 mt-28 text-xl font-semibold">
        
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-pink-500 transition duration-300"
          >
            About
          </button>
        
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-blue-500 transition duration-300"
          >
            Experience
          </button>
        
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-purple-500 transition duration-300"
          >
            Projects
          </button>
        
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-pink-500 transition duration-300"
          >
            Contact
          </button>
        
        </div>
      
        {/* COPYRIGHT */}
        <p className="mt-10 text-lg text-gray-700">
          © All Rights Reserved | Lintang Cahyaningtyas
        </p>
      </section>

    </main>
  );
}
