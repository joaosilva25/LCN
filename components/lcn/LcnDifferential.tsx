"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

const comparisons = [
  { feature: "Acesso direto ao especialista", others: false, lcn: true },
  { feature: "Especialista morando na China", others: false, lcn: true },
  { feature: "Fornecedores reais e verificados", others: false, lcn: true },
  { feature: "Suporte personalizado", others: false, lcn: true },
  { feature: "Conteúdo atualizado constantemente", others: false, lcn: true },
  { feature: "Networking com vendedores reais", others: false, lcn: true },
  { feature: "Encontros ao vivo mensais", others: false, lcn: true },
  { feature: "Estratégias testadas na prática", others: false, lcn: true },
];

export const LcnDifferential = () => {
  return (
    <AnimatedSection className="lcn-bg-premium" id="diferencial">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
          >
            Diferencial
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            {/* Mobile */}
            <span className="sm:hidden">
              O que separa
              <br />
              a{" "}<span className="lcn-accent-text">Comunidade LCN</span>
              <br />
              do resto
            </span>

            {/* Desktop */}
            <span className="hidden sm:inline">
              O que separa a{" "}
              <span className="lcn-accent-text">Comunidade LCN</span>
              <br />
              do resto
            </span>
          </motion.h2>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-3xl mx-auto">
          {/* Table header */}
          <motion.div
            variants={staggerItemVariants}
            className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_120px_120px] items-center gap-4 px-6 py-4 mb-2"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">&nbsp;</span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#EF4444] text-center">
              Outros
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 text-center">
              LCN
            </span>
          </motion.div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_120px_120px] items-center gap-4 px-6 py-4 rounded-2xl odd:bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
            >
              <span className="text-white/60 text-sm sm:text-base">{row.feature}</span>
              <span className="flex justify-center">
                <X className="w-5 h-5 text-red-400/50" />
              </span>
              <span className="flex justify-center">
                <div className="w-7 h-7 rounded-full bg-black/20 border border-white/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white/70" />
                </div>
              </span>
            </motion.div>
          ))}
        </MotionContainer>
      </Container>

     
    </AnimatedSection>
  );
};
