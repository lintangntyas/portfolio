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
          <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-white font-medium text-sm">

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
                onClick={() => scrollToSection("medium")}
                className="hover:text-pink-400 transition"
              >
                Medium
              </button>
            </li>
            
            <li>
              <button
                onClick={() => scrollToSection("certificate")}
                className="hover:text-yellow-400 transition"
              >
                Certificate
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
        className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-24 pt-28 md:pt-24 pb-24 relative z-10"
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
        className="min-h-screen px-6 md:px-16 py-24 relative overflow-hidden"
      >
      
        {/* BACKGROUND */}
        <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-pink-200 blur-[120px] opacity-30 rounded-full"></div>
      
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-200 blur-[120px] opacity-30 rounded-full"></div>
      
        {/* TITLE */}
        <div className="text-center mb-20 relative z-10">
      
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
            Experience
          </h1>
      
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mt-5"></div>
      
        </div>
      
        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            max-w-7xl
            mx-auto
            relative
            z-10
            items-stretch
          "
        >
      
          {/* CARD 1 */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/30
              rounded-[35px]
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
      
              min-h-[470px]
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-start justify-between gap-4">
      
                <div>
      
                  <h2 className="
                    text-[22px]
                    font-bold
                    text-pink-500
                    leading-snug
                    min-h-[70px]
                  ">
                    Badan Pusat Statistik
                  </h2>
      
                  <p className="
                    text-[18px]
                    font-semibold
                    text-gray-800
                    mt-3
                    min-h-[60px]
                  ">
                    Statistician Intern
                  </p>
      
                </div>
      
                <span className="text-sm text-gray-500 text-right">
                  Nov 2025 - May 2026
                </span>
      
              </div>
      
              <div className="w-14 h-[3px] bg-pink-500 rounded-full my-6"></div>
      
              <ul className="
                space-y-4
                text-gray-700
                leading-relaxed
                text-[16px]
              ">
      
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
      
          </div>
      
          {/* CARD 2 */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/30
              rounded-[35px]
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
      
              min-h-[470px]
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-start justify-between gap-4">
      
                <div>
      
                  <h2 className="
                    text-[22px]
                    font-bold
                    text-blue-500
                    leading-snug
                    min-h-[70px]
                  ">
                    PLN Indonesia Power
                  </h2>
      
                  <p className="
                    text-[18px]
                    font-semibold
                    text-gray-800
                    mt-3
                    min-h-[60px]
                  ">
                    Reliability & System Owner Intern
                  </p>
      
                </div>
      
                <span className="text-sm text-gray-500 text-right">
                  Feb 2024
                </span>
      
              </div>
      
              <div className="w-14 h-[3px] bg-blue-500 rounded-full my-6"></div>
      
              <ul className="
                space-y-4
                text-gray-700
                leading-relaxed
                text-[16px]
              ">
      
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
      
          </div>
      
          {/* CARD 3 */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/30
              rounded-[35px]
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
      
              min-h-[470px]
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-start justify-between gap-4">
      
                <div>
      
                  <h2 className="
                    text-[22px]
                    font-bold
                    text-purple-500
                    leading-snug
                    min-h-[70px]
                  ">
                    INVISIO
                  </h2>
      
                  <p className="
                    text-[18px]
                    font-semibold
                    text-gray-800
                    mt-3
                    min-h-[60px]
                  ">
                    Marketing & Content Writer
                  </p>
      
                </div>
      
                <span className="text-sm text-gray-500 text-right">
                  Mar 2023 - Apr 2025
                </span>
      
              </div>
      
              <div className="w-14 h-[3px] bg-purple-500 rounded-full my-6"></div>
      
              <ul className="
                space-y-4
                text-gray-700
                leading-relaxed
                text-[16px]
              ">
      
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
      
          </div>
      
          {/* CARD 4 */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/30
              rounded-[35px]
              p-8
              shadow-xl
              hover:-translate-y-2
              transition
              duration-300
      
              min-h-[470px]
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-start justify-between gap-4">
      
                <div>
      
                  <h2 className="
                    text-[22px]
                    font-bold
                    text-pink-500
                    leading-snug
                    min-h-[70px]
                  ">
                    Bankaltimtara
                  </h2>
      
                  <p className="
                    text-[18px]
                    font-semibold
                    text-gray-800
                    mt-3
                    min-h-[60px]
                  ">
                    IT & E-Banking Intern
                  </p>
      
                </div>
      
                <span className="text-sm text-gray-500 text-right">
                  Jul 2019 - Dec 2019
                </span>
      
              </div>
      
              <div className="w-14 h-[3px] bg-pink-500 rounded-full my-6"></div>
      
              <ul className="
                space-y-4
                text-gray-700
                leading-relaxed
                text-[16px]
              ">
      
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
      
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      
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
                href="https://drive.google.com/file/d/1Mrt1T0XhkLEyTaaRevm9Re-UsrKW32yg/view?usp=sharing"
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
              BRS Automation Website
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
                href="https://drive.google.com/file/d/12WAzewd9DFh46geaJQrVdsc5UX5ZnUqp/view?usp=sharing"
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
              Final Research Project
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
                href="https://dspace.uii.ac.id/handle/123456789/56406"
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
              Gold Price Forecasting ARIMA
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
                href="https://www.linkedin.com/in/lintangntyas/details/projects/1706287119686/single-media-viewer?profileId=ACoAADMB2KIBFQ2GbVx6ODNoCdop_YAAwMaNjeM"
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
              Crime Clustering K-Means
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
                href="https://www.linkedin.com/in/lintangntyas/details/projects/1706288082189/single-media-viewer?profileId=ACoAADMB2KIBFQ2GbVx6ODNoCdop_YAAwMaNjeM"
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
              SPP Mobile Application
            </h2>
      
            <p className="text-sm text-gray-500 mb-5">
              Jan 2021 - Apr 2021
            </p>
      
            <p className="text-gray-700 leading-relaxed text-justify">
              Designed and developed a simple Android application using Android Studio as 
                a final vocational high school project. Created user-friendly UI/UX interfaces, 
                implemented student data input, payment recording, notification systems, and 
                performed functionality testing to ensure stable application performance.
            </p>
      
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1HGpwJUetVISlyq37NRKfKkzR5dGZjpmF/view?usp=sharing"
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

      {/* MEDIUM */}
      <section
        id="medium"
        className="w-full px-4 md:px-8 py-24 relative overflow-hidden"
      >
      
        {/* BLUR */}
        <div className="absolute left-0 top-0 w-[320px] h-[320px] bg-pink-200 blur-[130px] opacity-30 rounded-full"></div>
      
        <div className="absolute right-0 bottom-0 w-[320px] h-[320px] bg-blue-200 blur-[130px] opacity-30 rounded-full"></div>
      
        {/* TITLE */}
        <div className="text-center mb-20 relative z-10">
      
          <h1 className="text-[72px] font-black text-[#0f172a] leading-none">
            Medium Articles
          </h1>
      
          <p className="text-[#6b7280] mt-6 text-[20px] font-medium">
            Thoughts, insights, and data stories
          </p>
      
          <div className="w-[110px] h-[4px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mt-7"></div>
      
        </div>
      
        {/* GRID */}
        <div
          className="
            grid
            -mt-8
        
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
        
            gap-6
        
            max-w-[1700px]
            mx-auto
        
            relative
            z-10
          "
        >
      
          {/* CARD 1 */}
          <a
            href="https://medium.com/statistics-uii/basis-data-pada-rdbms-12be0f95c277"
            target="_blank"
            className="
              bg-[#f8f8f8]
      
              border
              border-[#ececec]
      
              rounded-[30px]
      
              px-7
              pt-7
              pb-6
      
              shadow-[0_10px_35px_rgba(0,0,0,0.05)]
      
              transition-all
              duration-300
      
              hover:-translate-y-1
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-8">
      
                {/* ICON */}
                <div
                  className="
                    w-[64px]
                    h-[64px]
      
                    rounded-full
      
                    bg-gradient-to-br
                    from-pink-500
                    to-pink-400
      
                    flex
                    items-center
                    justify-center
      
                    text-white
                    text-[38px]
                    font-black
                  "
                >
                  M
                </div>
      
                {/* TAG */}
                <span
                  className="
                    px-5
                    py-2
      
                    rounded-full
      
                    bg-pink-100
                    text-pink-500
      
                    text-[14px]
                    font-bold
                  "
                >
                  Data Science
                </span>
      
              </div>
      
              {/* TITLE */}
              <h2
                className="
                  text-[26px]
                  font-black
                  text-black
              
                  leading-[1.3]
                "
              >
                Database in RDBMS
              </h2>
      
              {/* DESC */}
              <p
                className="
                  text-[#4b5563]
              
                  text-[17px]
              
                  leading-[2]
              
                  mt-5
                "
              >
                Understand the basic concepts of relational databases,
                tables, normalization, and SQL implementation.
              </p>
      
            </div>
      
            {/* FOOTER */}
            <div className="flex items-center justify-between pt-4">
      
              <span className="text-[#6b7280] text-[16px]">
                26 Dec 2021
              </span>
      
              <span
                className="
                  text-pink-500
                  font-bold
                  text-[17px]
                "
              >
                Read Article →
              </span>
      
            </div>
      
          </a>
      
          {/* CARD 2 */}
          <a
            href="https://medium.com/@lintangntyas/clustering-provinsi-terhadap-jenis-bencana-alam-di-indonesia-tahun-2021-b85eeaf1b451"
            target="_blank"
            className="
              bg-[#f8f8f8]
      
              border
              border-[#ececec]
      
              rounded-[30px]
      
              px-7
              pt-7
              pb-6
      
              shadow-[0_10px_35px_rgba(0,0,0,0.05)]
      
              transition-all
              duration-300
      
              hover:-translate-y-1
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-center gap-4 mb-8">
      
                <div
                  className="
                    w-[64px]
                    h-[64px]
      
                    rounded-full
      
                    bg-gradient-to-br
                    from-purple-500
                    to-fuchsia-400
      
                    flex
                    items-center
                    justify-center
      
                    text-white
                    text-[38px]
                    font-black
                  "
                >
                  M
                </div>
      
                <span
                  className="
                    px-5
                    py-2
      
                    rounded-full
      
                    bg-purple-100
                    text-purple-500
      
                    text-[14px]
                    font-bold
                  "
                >
                  Machine Learning
                </span>
      
              </div>
      
              <h2
                className="
                  text-[26px]
                  font-black
                  text-black
              
                  leading-[1.3]
                "
              >
                Provincial Clustering Based on Types of Natural Disasters
              </h2>
      
              <p
                className="
                  text-[#4b5563]
              
                  text-[17px]
              
                  leading-[2]
              
                  mt-5
                "
              >
                Clustering analysis using K-Means to group provinces based on the dominant type of disaster.
              </p>
      
            </div>
      
            <div className="flex items-center justify-between pt-4">
      
              <span className="text-[#6b7280] text-[16px]">
                04 May 2023
              </span>
      
              <span
                className="
                  text-pink-500
                  font-bold
                  text-[17px]
                "
              >
                Read Article →
              </span>
      
            </div>
      
          </a>
      
          {/* CARD 3 */}
          <a
            href="https://medium.com/@lintangntyas/perilaku-konsumen-menggunakan-mba-association-rule-mining-cc0f604b319a"
            target="_blank"
            className="
              bg-[#f8f8f8]
      
              border
              border-[#ececec]
      
              rounded-[30px]
      
              px-7
              pt-7
              pb-6
      
              shadow-[0_10px_35px_rgba(0,0,0,0.05)]
      
              transition-all
              duration-300
      
              hover:-translate-y-1
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-center gap-4 mb-8">
      
                <div
                  className="
                    w-[64px]
                    h-[64px]
      
                    rounded-full
      
                    bg-gradient-to-br
                    from-pink-500
                    to-rose-400
      
                    flex
                    items-center
                    justify-center
      
                    text-white
                    text-[38px]
                    font-black
                  "
                >
                  M
                </div>
      
                <span
                  className="
                    px-5
                    py-2
      
                    rounded-full
      
                    bg-pink-100
                    text-pink-500
      
                    text-[14px]
                    font-bold
                  "
                >
                  Data Mining
                </span>
      
              </div>
      
              <h2
                className="
                  text-[26px]
                  font-black
                  text-black
              
                  leading-[1.3]
                "
              >
                Consumer Behavior Using MBA Association Rule Mining
              </h2>
      
              <p
                className="
                  text-[#4b5563]
              
                  text-[17px]
              
                  leading-[2]
              
                  mt-5
                "
              >
                Implement Market Basket Analysis to identify purchasing patterns of products frequently purchased together.
              </p>
      
            </div>
      
            <div className="flex items-center justify-between pt-4">
      
              <span className="text-[#6b7280] text-[16px]">
                30 Jul 2023
              </span>
      
              <span
                className="
                  text-pink-500
                  font-bold
                  text-[17px]
                "
              >
                Read Article →
              </span>
      
            </div>
      
          </a>
      
          {/* CARD 4 */}
          <a
            href="https://medium.com/@lintangntyas/analisis-data-terhadap-tipe-penyewaan-bikeshare-toronto-pada-tahun-2018-f932072c2682"
            target="_blank"
            className="
              bg-[#f8f8f8]
      
              border
              border-[#ececec]
      
              rounded-[30px]
      
              px-7
              pt-7
              pb-6
      
              shadow-[0_10px_35px_rgba(0,0,0,0.05)]
      
              transition-all
              duration-300
      
              hover:-translate-y-1
      
              flex
              flex-col
              justify-between
            "
          >
      
            <div>
      
              <div className="flex items-center gap-4 mb-8">
      
                <div
                  className="
                    w-[64px]
                    h-[64px]
      
                    rounded-full
      
                    bg-gradient-to-br
                    from-blue-400
                    to-indigo-400
      
                    flex
                    items-center
                    justify-center
      
                    text-white
                    text-[38px]
                    font-black
                  "
                >
                  M
                </div>
      
                <span
                  className="
                    px-5
                    py-2
      
                    rounded-full
      
                    bg-blue-100
                    text-blue-500
      
                    text-[14px]
                    font-bold
                  "
                >
                  Data Visualization
                </span>
      
              </div>
      
              <h2
                className="
                  text-[26px]
                  font-black
                  text-black
              
                  leading-[1.3]
                "
              >
                Toronto BikeShare User Data Analysis
              </h2>
      
              <p
                className="
                  text-[#4b5563]
              
                  text-[17px]
              
                  leading-[2]
              
                  mt-5
                "
              >
                Exploratory data analysis and visualization of BikeShare Toronto users to understand bicycle usage patterns.
              </p>
      
            </div>
      
            <div className="flex items-center justify-between pt-4">
      
              <span className="text-[#6b7280] text-[16px]">
                01 Nov 2023
              </span>
      
              <span
                className="
                  text-pink-500
                  font-bold
                  text-[17px]
                "
              >
                Read Article →
              </span>
      
            </div>
      
          </a>
      
        </div>
      
        {/* BUTTON */}
        <div className="flex justify-center mt-12 relative z-10">
      
          <a
            href="https://medium.com/@lintangntyas"
            target="_blank"
            className="
              px-10
              py-4
      
              rounded-full
      
              border-2
              border-pink-300
      
              text-[18px]
              font-bold
      
              hover:bg-pink-500
              hover:text-white
      
              transition-all
              duration-300
            "
          >
            View All Articles ↗
          </a>
      
        </div>
      
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certificate"
        className="py-28 overflow-hidden"
      >
        <h1 className="text-5xl md:text-7xl font-black text-center text-slate-900">
          Certifications
        </h1>
      
        {/* LINE */}
        <div className="w-28 h-1.5 bg-yellow-400 rounded-full mx-auto mt-5 mb-20"></div>
      
        <div className="relative w-full overflow-hidden">
      
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#fdf2f8] to-transparent"></div>
      
          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#dbeafe] to-transparent"></div>
      
          {/* SLIDER */}
          <div
            className="
              animate-scroll
              flex
              gap-6
              w-max
              hover:[animation-play-state:paused]
            "
          >
          
            {/* ORIGINAL */}
            {[...Array(14)].map((_, index) => (
              <div
                key={`original-${index}`}
                className="
                  flex-shrink-0
                  w-[500px]
                  h-[320px]
                  rounded-[20px]
                  border
                  border-black/10
                  bg-white
                  p-3
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <img
                  src={`/sertif${index + 1}.${index >= 9 ? "png" : "jpg"}`}
                  alt={`Certificate ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-contain
                    rounded-[14px]
                  "
                />
              </div>
            ))}
            
            {/* DUPLICATE */}
            {[...Array(14)].map((_, index) => (
              <div
                key={`duplicate-${index}`}
                className="
                  flex-shrink-0
                  w-[500px]
                  h-[320px]
                  rounded-[20px]
                  border
                  border-black/10
                  bg-white
                  p-3
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <img
                  src={`/sertif${index + 1}.${index >= 9 ? "png" : "jpg"}`}
                  alt={`Certificate ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-contain
                    rounded-[14px]
                  "
                />
              </div>
            ))}
          
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
