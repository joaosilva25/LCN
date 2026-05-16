"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container, staggerContainerVariants, staggerItemVariants, MotionContainer } from "@/components/ui/Section";

const gaps = [
  {
    tried: "Você aprendeu a vender",
    missing: "mas ninguém ensinou a estruturar",
  },
  {
    tried: "Você compra da China",
    missing: "mas não sabe se está pagando caro",
  },
  {
    tried: "Você tem clientes",
    missing: "mas eles não voltam sozinhos",
  },
];

export const LcnIdentification = () => {
  return (
    <AnimatedSection dark id="identificacao">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
          >
            Isso é sobre você?
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.1]"
          >
            Você não falhou.
            <br />
            <span className="lcn-accent-text">Faltou estrutura.</span>
          </motion.h2>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {gaps.map((g, i) => (
              <motion.div
                key={i}
                variants={staggerItemVariants}
                className="relative text-center px-6 sm:px-10 py-10 md:py-0 md:px-8"
              >
                {/* Separador vertical desktop */}
                {i < gaps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
                )}
                {/* Separador horizontal mobile */}
                {i < gaps.length - 1 && (
                  <div className="md:hidden absolute left-8 right-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                )}

                <span className="block text-5xl font-black text-white/15 font-title mb-4 select-none">
                  0{i + 1}
                </span>
                <p className="text-white/30 text-sm sm:text-base leading-relaxed mb-1">
                  {g.tried}
                </p>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-medium">
                  {g.missing}
                </p>
              </motion.div>
            ))}
          </div>
        </MotionContainer>

        <motion.div
          variants={staggerItemVariants}
          className="text-center mt-16"
        >
          <p className="max-w-lg mx-auto text-sm sm:text-base text-white/25 leading-relaxed">
            A <span className="text-[#F87171]/60 font-medium">Comunidade LCN</span> existe para
            preencher exatamente esses buracos.
          </p>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
};
