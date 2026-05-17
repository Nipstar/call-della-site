import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, PLAUSIBLE_DOMAIN, CONTACT_EMAIL } from "@/lib/config";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Call Della — After-hours intake for personal injury, criminal defense, and immigration firms",
    template: "%s | Call Della",
  },
  description:
    "Della answers your firm's overnight calls, qualifies every caller, and delivers a triage-ready dossier by dawn. Built for personal injury, criminal defense, and immigration intake from the first call.",
  applicationName: "Call Della",
  authors: [{ name: "Call Della" }],
  creator: "Call Della",
  publisher: "Call Della",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Call Della",
    title:
      "Call Della — After-hours intake for personal injury, criminal defense, and immigration firms",
    description:
      "Della answers your firm's overnight calls, qualifies every caller, and delivers a triage-ready dossier by dawn.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Call Della" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Della — After-hours legal intake specialist",
    description:
      "Della answers your firm's overnight calls and delivers a triage-ready dossier by dawn.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Call Della",
    legalName: "Call Della",
    alternateName: "Della",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-default.png`,
      width: 1200,
      height: 630,
    },
    description:
      "After-hours AI intake specialist for personal injury, criminal defense, and immigration law firms.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/about#founder`,
      name: "Andy Norman",
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    knowsAbout: [
      "legal intake",
      "after-hours phone answering",
      "personal injury intake",
      "criminal defense intake",
      "immigration intake",
      "voice AI for law firms",
      "ABA Formal Opinion 512",
      "HIPAA-compliant call handling",
    ],
    areaServed: { "@type": "Country", name: "United States" },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Call Della",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <head>
        <script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-serif bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
