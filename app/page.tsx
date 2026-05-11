import React from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HighlightsBar } from "@/components/sections/HighlightsBar";
import { EventAccessSection } from "@/components/sections/EventAccessSection";
import { LiveShopGallerySection } from "@/components/sections/LiveShopGallerySection";
import { OnlineFreeEventSection } from "@/components/sections/OnlineFreeEventSection";
import { EventSection } from "@/components/sections/EventSection";
import { ResaleBenefitsSection } from "@/components/sections/ResaleBenefitsSection";
import { VipAccessSection } from "@/components/sections/VipAccessSection";
import { WhoIsThisForSection } from "@/components/sections/WhoIsThisForSection";
import { BenefitsTimelineSection } from "@/components/sections/BenefitsTimelineSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

export default function Home() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteUrl = (
    rawSiteUrl
      ? rawSiteUrl.startsWith("http")
        ? rawSiteUrl
        : `https://${rawSiteUrl}`
      : "https://xingyu.com.br"
  ).replace(/\/+$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xingyu",
    url: siteUrl,
    logo: `${siteUrl}/logoMenu.png`,
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0b0d0e]  text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden">

        <Header />

        <main>
          <Hero />
          <EventSection />
          <HighlightsBar />
          <OnlineFreeEventSection />
          <LiveShopGallerySection />
          <WhoIsThisForSection />
          <BenefitsTimelineSection />
          <ResaleBenefitsSection />
          <VipAccessSection />
        </main>

        <Footer />

        <ScrollToTopButton />
      </div>
    </>
  );
}
