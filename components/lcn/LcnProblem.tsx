"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { AnimatedSection, Container, staggerContainerVariants, staggerItemVariants, MotionContainer } from "@/components/ui/Section";

const myths = [
  { text: "Preciso de mais produto para vender mais", icon: XCircle },
  { text: "Só preciso trabalhar mais e mais horas", icon: XCircle },
];

const truths = [
  { text: "Estrutura gera previsibilidade e escala", icon: CheckCircle },
  { text: "Processo vence sorte — sempre", icon: CheckCircle },
];

export const LcnProblem = () => {
  return (
    <AnimatedSection className="lcn-bg-premium" id="problema">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D48E93] mb-4"
          >
            O problema real
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            O problema <span className="text-white">não é falta de produto.</span>
            <br />
            É <span className="lcn-accent-text">falta de estrutura.</span>
          </motion.h2>
          <motion.p
            variants={staggerItemVariants}
            className="mt-5 max-w-2xl mx-auto text-white/40 text-base sm:text-lg leading-relaxed"
          >
            Você já trabalha duro. O que falta é a estratégia certa, o fornecedor certo e o processo certo
            para transformar esforço em resultado previsível.
          </motion.p>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Myths */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-red-400/70 mb-3 text-center md:text-left">
              O que te disseram
            </p>
            {myths.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItemVariants}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-400/20 transition-colors duration-500"
              >
                <item.icon className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Truths */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D48E93]/70 mb-3 text-center md:text-left">
              A verdade
            </p>
            {truths.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItemVariants}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl lcn-glass-red hover:border-[#621010]/30 transition-colors duration-500"
              >
                <item.icon className="w-5 h-5 text-[#621010] mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
