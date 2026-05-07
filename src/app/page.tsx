import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaperTexture } from "@/components/PaperTexture";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { MeetDella } from "@/components/sections/MeetDella";
import { MorningBrief } from "@/components/sections/MorningBrief";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Legal Intake Service",
    "provider": {
      "@type": "Organization",
      "name": "Call Della"
    },
    "description": "AI-powered after-hours intake specialist for personal injury law firms.",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Intake Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Plan"
          },
          "price": "297",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Practice Plan"
          },
          "price": "547",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Problem />
          <MeetDella />
          <MorningBrief />
          <HowItWorks />
          <Pricing />
          <Trust />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}
