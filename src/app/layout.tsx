import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Call Della — After-hours intake specialist for personal injury law firms",
  description: "Della answers your firm's overnight calls, qualifies every caller, and delivers a triage-ready dossier by dawn. Built for PI intake from the first call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Call Della",
    "url": "https://calldella.com",
    "description": "After-hours intake specialist for personal injury law firms.",
    "sameAs": [
      "https://linkedin.com/company/calldella",
      "https://twitter.com/calldella"
    ]
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col font-serif bg-[var(--bg)] text-[var(--ink)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
