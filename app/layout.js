import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Portfolio - Lintang Cahyaningtyas",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* VERCEL ANALYTICS */}
        <Analytics />
      </body>
    </html>
  );
}
