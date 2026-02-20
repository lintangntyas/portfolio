export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Lintang Cahyaningtyas</h1>
      <p className="text-lg md:text-xl mb-6">Fresh Graduate – Data Analyst</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow">
        View Projects
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p>
        Lulusan Statistika UII dengan fokus data science, analisis data, visualisasi, dan machine learning dasar.
        Berpengalaman menggunakan Excel, Python, R, Google Data Studio, dan Tableau dalam berbagai proyek analitik dan penelitian.
      </p>
    </section>
  );
}

function Projects() {
  const items = [
    {
      title: "IndoBERT & LDA for Sunscreen Reviews",
      desc: "Sentiment analysis and topic modeling on Female Daily sunscreen reviews",
    },
    {
      title: "K-Means Clustering Criminality Indonesia",
      desc: "Clustering provinces based on criminality indicators (2018)",
    },
    {
      title: "Gold Price Forecasting ARIMA",
      desc: "Time series prediction using ARIMA, SARIMA, and hybrid ARIMA",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <div key={i} className="border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: lintangntys@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/lintangntyas</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-10">
      © {new Date().getFullYear()} Lintang Cahyaningtyas
    </footer>
  );
}