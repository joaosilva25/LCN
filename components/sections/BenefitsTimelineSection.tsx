"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";

const phases = [
  {
    num: "01",
    title: "Descoberta",
    text: "Acesso a peças de qualidade com descontos agressivos no atacado.",
  },
  {
    num: "02",
    title: "Identidade",
    text: "Coleção exclusiva da Xingyu para diferenciar sua vitrine.",
  },
  {
    num: "03",
    title: "Autonomia",
    text: "Estoque em mãos e condições de fábrica. Você define o seu ritmo.",
  },
];

export const BenefitsTimelineSection = () => {
  return (
    <AnimatedSection
      id="beneficios"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <MotionContainer
        variants={staggerContainerVariants}
        className="space-y-20"
      >
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-light leading-[1.08] tracking-tight text-white">
            Comprar com a Xingyu é sinônimo de vantagem.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed mx-auto">
            Descontos agressivos, logística facilitada e peças de qualidade com
            alto giro — tudo antes da temporada começar.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          className="relative grid gap-12 sm:grid-cols-3 lg:gap-10"
        >
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute top-6 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          {phases.map((phase) => (
            <motion.div
              key={phase.num}
              variants={staggerItemVariants}
              className="relative flex flex-col items-center text-center"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500 font-medium">
                {phase.num}
              </span>

              <div
                aria-hidden="true"
                className="mt-3 h-2 w-2 rounded-full bg-white/50"
              />

              <h3 className="mt-6 text-lg font-medium tracking-tight text-white">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm sm:text-[0.95rem] text-zinc-400 max-w-[16rem] leading-relaxed">
                {phase.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
