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
  { text: "Processo vence a sorte sempre", icon: CheckCircle },
];

export const LcnProblem = () => {
  return (
    <AnimatedSection className="lcn-bg-premium" id="problema">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
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
            Você provavelmente já tentou vender semijoias. Talvez tenha até vendido
            bastante em algum período. Mas quando chega um mês difícil, tudo para.
            <br /><br />
            E aí você não sabe por quê. A maioria das pessoas que vende semijoias opera no improviso. Compra o que acha barato, repassa mais ou menos, e espera o WhatsApp reagir.
            <br /><br />
            Não é um negócio, é uma aposta.
          </motion.p>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Myths */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#EF4444] mb-3 text-center md:text-left">
              O que te disseram
            </p>
            {myths.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItemVariants}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#EF4444]/[0.04] border border-[#EF4444]/10 hover:border-[#EF4444]/30 transition-colors duration-500"
              >
                <item.icon className="w-5 h-5 text-[#EF4444] mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Truths */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3 text-center md:text-left">
              A verdade
            </p>
            {truths.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItemVariants}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl lcn-glass hover:border-white/10 transition-colors duration-500"
              >
                <item.icon className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
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
