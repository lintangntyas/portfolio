import "./globals.css";

export const metadata = {
  title: "Portfolio - Lintang Cahyaningtyas",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800">{children}</body>
    </html>
  );
}