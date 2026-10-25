import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, PLAUSIBLE_DOMAIN } from "@/lib/config";
import { graph, orgNode, websiteNode, founderNode } from "@/lib/schema";
import { CATEGORY_DEFINITION } from "@/lib/plans";
import { JsonLd } from "@/components/JsonLd";

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
    default: "AI Legal Intake for Law Firms, After Hours | Call Della",
    template: "%s | Call Della",
  },
  description: CATEGORY_DEFINITION,
  applicationName: "Call Della",
  authors: [{ name: "Andy Norman", url: `${SITE_URL}/about/andy-norman` }],
  creator: "Call Della",
  publisher: "Call Della",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Call Della",
    title: "AI Legal Intake for Law Firms, After Hours | Call Della",
    description:
      "Della answers your firm's overnight calls, qualifies every caller, and delivers a triage-ready dossier by dawn.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Call Della" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Legal Intake for Law Firms, After Hours | Call Della",
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
        <JsonLd data={graph(orgNode(), websiteNode(), founderNode())} />
        {children}
      </body>
    </html>
  );
}
