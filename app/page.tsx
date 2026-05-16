import type { Metadata } from "next";
import { LcnHeader } from "@/components/lcn/LcnHeader";
import { LcnHero } from "@/components/lcn/LcnHero";
import { LcnProblem } from "@/components/lcn/LcnProblem";
import { LcnIdentification } from "@/components/lcn/LcnIdentification";
import { LcnTransformation } from "@/components/lcn/LcnTransformation";
import { LcnIncluded } from "@/components/lcn/LcnIncluded";
import { LcnDifferential } from "@/components/lcn/LcnDifferential";
import { LcnFounder } from "@/components/lcn/LcnFounder";
import { LcnOffer } from "@/components/lcn/LcnOffer";
import { LcnVision } from "@/components/lcn/LcnVision";
import { LcnFaq } from "@/components/lcn/LcnFaq";
import { LcnFinalCta } from "@/components/lcn/LcnFinalCta";
import { LcnFooter } from "@/components/lcn/LcnFooter";

export const metadata: Metadata = {
  title: "Comunidade LCN | O Ecossistema Definitivo de Semijoias",
  description:
    "Tenha acesso ao ecossistema completo para comprar direto da China, criar vendas previsíveis e escalar com quem já gerou mais de R$20 milhões no mercado de semijoias.",
  openGraph: {
    title: "Comunidade LCN | O Ecossistema Definitivo de Semijoias",
    description:
      "Tenha acesso ao ecossistema completo para comprar direto da China, criar vendas previsíveis e escalar com quem já gerou mais de R$20 milhões no mercado de semijoias.",
    type: "website",
  },
};

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-[#090506] text-[#F7EEEC] selection:bg-[#621010]/30 overflow-x-hidden">
      <LcnHeader />
      <main>
        <LcnHero />
        <LcnProblem />
        <LcnIdentification />
        <LcnTransformation />
        <LcnIncluded />
        <LcnDifferential />
        <LcnFounder />
        <LcnOffer />
        <LcnVision />
        <LcnFaq />
        <LcnFinalCta />
      </main>
      <LcnFooter />
    </div>
  );
}
