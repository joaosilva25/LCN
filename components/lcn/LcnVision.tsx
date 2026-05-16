"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container, staggerItemVariants, staggerContainerVariants, MotionContainer } from "@/components/ui/Section";

const highlights = [
  { label: "pedidos previsíveis", desc: "todos os dias" },
  { label: "clientes recorrentes", desc: "que voltam sozinhos" },
  { label: "operação organizada", desc: "funcionando como um relógio" },
  { label: "lucro crescente", desc: "mês após mês" },
];

export const LcnVision = () => {
  return (
    <AnimatedSection dark id="visao">
      <Container>
        <div className="text-center mb-10">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D48E93] mb-4"
          >
            Visão de futuro
          </motion.span>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerItemVariants}
            className="text-center"
          >
            <p className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.35] tracking-tight">
              Daqui a{" "}
              <span className="lcn-accent-text">3 meses</span>, você terá{" "}
              {highlights.map((h, i) => (
                <span key={i}>
                  <span className="relative inline-block">
                    <span className="relative z-10">{h.label}</span>
                    <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#621010]/25 rounded-sm -z-0" />
                  </span>
                  {" "}{h.desc}
                  {i < highlights.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </motion.div>

          {/* Navegação rápida */}
          <motion.div
            variants={staggerItemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12"
          >
            {highlights.map((h, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-medium tracking-wide text-[#D48E93]/70 border border-[#621010]/15 bg-[#621010]/[0.03]"
              >
                {String(i + 1).padStart(2, "0")}. {h.label}
              </span>
            ))}
          </motion.div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
