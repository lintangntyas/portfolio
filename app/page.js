export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-10 py-8">

      {/* NAVBAR */}
      <nav className="max-w-5xl mx-auto bg-[#2d2d2d] rounded-full px-8 py-4 flex items-center justify-between shadow-lg">

        {/* LOGO */}
        <h1 className="text-white text-3xl font-bold">
          John Smith
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          <li className="cursor-pointer hover:text-blue-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Experience
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Contact
          </li>
        </ul>

        {/* BUTTON */}
        <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Visit Github
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-20 mt-24">

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl">

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

          <h1 className="text-8xl font-bold text-black leading-tight">
            John Smith
          </h1>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mt-4">
            Full Stack Dev
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-10">

            <button className="border-2 border-black px-8 py-3 rounded-full text-xl hover:bg-black hover:text-white transition">
              Download CV
            </button>

            <button className="border-2 border-black px-8 py-3 rounded-full text-xl hover:bg-black hover:text-white transition">
              Contact
            </button>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-8 mt-12">

            <a
              href="#"
              className="text-6xl hover:scale-110 transition"
            >
              💼
            </a>

            <a
              href="#"
              className="text-6xl hover:scale-110 transition"
            >
              🐱
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}
