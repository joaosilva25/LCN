"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

export const LcnFounder = () => {
  return (
    <AnimatedSection dark id="fundador" className="!py-32 sm:!py-40 lg:!py-52">
      {/* Background personalizado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[url('/LC1Mobile.png')] bg-cover bg-top sm:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 hidden bg-[url('/LC1.png')] bg-cover bg-top sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-black/70"
      />
      <Container>
        <MotionContainer variants={staggerContainerVariants} className="w-full">
          <div className="max-w-lg ml-auto text-right">

            <motion.span
              variants={staggerItemVariants}
              className="block text-[11px] font-medium tracking-[0.25em] uppercase text-white/25 mb-6"
            >
              Sobre o fundador
            </motion.span>

            <motion.blockquote
              variants={staggerItemVariants}
              className="font-title text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 leading-[1.45] mb-10"
            >
              Eu também comecei sem nada. Sem conexões, sem fornecedor, sem direcionamento.
              Errei, perdi dinheiro, quase desisti. Então fui até a fonte: me mudei para a{" "}
              <span className="lcn-accent-text">China</span>, construí relacionamentos com fábricas
              e desenvolvi um método para comprar, vender e escalar com previsibilidade.
            </motion.blockquote>

            <motion.div variants={staggerItemVariants} className="mt-8">
              <p className="text-right text-sm text-white/30 tracking-wide">
                Leo China <span className="text-white/15 mx-2">—</span> <span className="text-white/50">Fundador</span>
              </p>
            </motion.div>
          </div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
