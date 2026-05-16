import type { Metadata } from "next";
import { LcnObrigado } from "@/components/lcn/LcnObrigado";

export const metadata: Metadata = {
  title: "Bem-vindo à Comunidade LCN",
  description: "Parabéns! Sua compra foi confirmada. Bem-vindo à Comunidade LCN.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return <LcnObrigado />;
}
