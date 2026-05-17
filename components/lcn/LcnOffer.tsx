"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, ArrowRight, ChessKnight } from "lucide-react";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

const CTA_LINK = "https://pay.kiwify.com.br/4Zpu6Xr";

const included = [
  "Curso Milionário de Semijoias",
  "Todos os cursos + livro exclusivo",
  "Lista de fornecedores verificados",
  "Acesso à comunidade ativa",
  "Encontros ao vivo mensais",
  "Suporte e direcionamento direto",
  "Atualizações constantes",
  "Estratégias de venda e negócio",
];

export const LcnOffer = () => {
  return (
    <AnimatedSection className="lcn-bg-premium" id="oferta">

      <Container>
        <div className="text-center mb-12">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
          >
            Oferta especial
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Tudo isso por um valor que
            <br />
            <span className="lcn-accent-text">vai te surpreender.</span>
          </motion.h2>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-xl mx-auto">
          <motion.div
            variants={staggerItemVariants}
            className="relative rounded-[2rem] overflow-hidden"
          >
            {/* Card border glow */}
            <div className="absolute inset-0 rounded-[2rem] p-px bg-gradient-to-b from-[#F87171]/40 via-[#F87171]/10 to-[#F87171]/20">
              <div className="w-full h-full rounded-[2rem] bg-[#0a0a0a]" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 md:p-12">
              {/* Badge */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F87171]/10 border border-[#F87171]/20 text-[#F87171] text-xs font-semibold tracking-widest uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  Acesso completo
                </span>
              </div>

              {/* Included list */}
              <div className="flex justify-center mb-10">
                <div className="space-y-3">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F87171]/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#F87171]" />
                      </div>
                      <span className="text-white/60 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <p className="text-white/30 text-sm line-through mb-1">De R$3.500,00</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-white/40 text-lg">12x de</span>
                  <span className="font-title text-5xl sm:text-6xl font-black lcn-accent-text">
                    R$29
                  </span>
                  <span className="text-white/40 text-lg">,70</span>
                </div>
                <p className="text-white/35 text-sm">
                  ou <span className="text-white/60 font-semibold"> R$1.997,00</span> à vista
                </p>
              </div>

              {/* CTA */}
              <a
                href={CTA_LINK}
                className="group relative w-full flex items-center justify-center gap-3 px-10 py-5 sm:py-6 rounded-2xl font-semibold text-xs sm:text-base uppercase tracking-[0.15em] text-[#F7EEEC] lcn-gradient-btn lcn-pulse transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Garantir Minha Vaga
                  <ChessKnight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#F7EEEC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              {/* Micro badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-9 pb-4 text-xs text-white/35">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#DC2626]" />
                  7 dias de garantia
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#DC2626]" />
                  Acesso imediato
                </span>
              </div>
            </div>
          </motion.div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
