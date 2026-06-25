import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { MenuPreview } from "@/components/MenuPreview";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { OpeningHours } from "@/components/OpeningHours";
import { FAQ } from "@/components/FAQ";
import { MapSection } from "@/components/MapSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { BUSINESS } from "@/lib/constants";

/** JSON-LD für lokale SEO */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.fullName,
  image: "/images/hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: "Adendorf",
    postalCode: "21365",
    addressCountry: "DE",
  },
  telephone: BUSINESS.phone,
  url: BUSINESS.website,
  servesCuisine: ["Italian", "Ice Cream", "Pizza"],
  priceRange: "€€",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <Highlights />
        <MenuPreview />
        <About />
        <Gallery />
        <OpeningHours />
        <FAQ />
        <MapSection />
        <ContactCTA />
      </main>
      <Footer />
      <MobileQuickActions />
    </>
  );
}
