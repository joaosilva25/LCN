"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChessKnight, Zap, Shield, RefreshCcw } from "lucide-react";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

const CTA_LINK = "#oferta";

export const LcnFinalCta = () => {
  return (
    <AnimatedSection dark id="cta-final">

      <Container>
        <MotionContainer variants={staggerContainerVariants} className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.1] mb-8"
          >
            Essa é a <span className="lcn-accent-text">virada</span>.
            <br />
            A decisão é sua.
          </motion.h2>

          <motion.div variants={staggerItemVariants} className="space-y-4 mb-10">
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Você pode continuar no improviso, trocando de fornecedor,
              sem previsibilidade, trabalhando mais do que deveria para ganhar menos do que merece.
            </p>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed font-medium">
              Ou pode <span className="text-[#D48E93] font-semibold">entrar na comunidade</span> e
              construir um negócio real, com estrutura, processo e lucro de verdade.
            </p>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <a
              href={CTA_LINK}
              className="group relative inline-flex items-center gap-3 px-12 py-6 sm:px-16 sm:py-7 rounded-2xl font-semibold text-xs sm:text-lg uppercase tracking-[0.15em] text-[#F7EEEC] lcn-gradient-btn lcn-pulse transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero Entrar Agora
                <ChessKnight className="w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={1.3}/>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </motion.div>

          <motion.div
            variants={staggerItemVariants}
            className="mt-12"
          >
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-y-6 px-6 py-6 sm:px-8 sm:py-7">
              {[
                { icon: Zap, label: "Acesso imediato", desc: "Entre agora" },
                { icon: Shield, label: "Compra segura", desc: "Pagamento protegido" },
                { icon: RefreshCcw, label: "7 dias de garantia", desc: "Dinheiro de volta" },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div key={label} className="flex items-center justify-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#4A1219]/80">
                    <Icon className="w-4 h-4 text-[#D48E93]" strokeWidth={2} />
                  </div>
                  <p className="text-white/90 text-sm font-semibold">{label}</p>
                </div>
              )).reduce<React.ReactNode[]>((acc, el, i, arr) => {
                acc.push(el);
                if (i < arr.length - 1) {
                  acc.push(<div key={`sep-${i}`} className="hidden sm:block w-px h-8 bg-white/[0.06] mx-auto" />);
                }
                return acc;
              }, [])}
            </div>
          </motion.div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
