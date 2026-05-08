import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaperTexture } from "@/components/PaperTexture";
import { HomeHero } from "@/components/sections/HomeHero";
import { VerticalPicker } from "@/components/sections/VerticalPicker";
import { HowDellaWorks } from "@/components/sections/HowDellaWorks";
import { SecurityStrip } from "@/components/sections/SecurityStrip";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { BrandFAQ } from "@/components/sections/BrandFAQ";
import { HomeFinalCTA } from "@/components/sections/HomeFinalCTA";
import { BookingModal } from "@/components/BookingModal";

export const metadata: Metadata = {
  title: {
    absolute:
      "Della: After-Hours AI Intake for Personal Injury, Criminal Defense, and Immigration Firms",
  },
  description:
    "Della answers your firm's overnight phone, qualifies every caller, and delivers a triage-ready dossier by dawn. Three vertical intake flows. Month-to-month, no setup fees.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://calldella.com/",
    title: "Della: After-Hours AI Intake for Law Firms",
    description:
      "Della answers your firm's overnight phone and delivers a triage-ready dossier by dawn.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Call Della" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Della: After-Hours AI Intake for Law Firms",
    description:
      "Della answers your firm's overnight phone and delivers a triage-ready dossier by dawn.",
    images: ["/og-default.png"],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HomeHero />
          <VerticalPicker />
          <HowDellaWorks />
          <SecurityStrip />
          <PricingTeaser />
          <BrandFAQ />
          <HomeFinalCTA />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}
