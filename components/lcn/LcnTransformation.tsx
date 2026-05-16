"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, Rocket, Brain } from "lucide-react";
import { AnimatedSection, Container, staggerContainerVariants, staggerItemVariants, MotionContainer } from "@/components/ui/Section";

const benefits = [
  {
    num: "01",
    title: "Vendas previsíveis",
    desc: "Pare de depender da sorte. Tenha processos claros que geram receita todo mês.",
    icon: TrendingUp,
  },
  {
    num: "02",
    title: "Clientes recorrentes",
    desc: "Construa uma base de clientes fiéis que voltam a comprar automaticamente.",
    icon: Users,
  },
  {
    num: "03",
    title: "Compra certa e margem real",
    desc: "Saiba exatamente o que comprar, quando comprar e de quem comprar — com margem de verdade.",
    icon: ShoppingBag,
  },
  {
    num: "04",
    title: "Escala sem trabalhar mais",
    desc: "Sistemas e processos que permitem crescer sem se destruir fisicamente.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Decisões baseadas em lógica",
    desc: "Chega de intuição. Tome decisões com dados, estratégias e inteligência de mercado.",
    icon: Brain,
  },
];

const BenefitIcon = ({ index }: { index: number }) => {
  const Icon = benefits[index].icon;
  return <Icon className="w-6 h-6 text-[#621010]" />;
};

export const LcnTransformation = () => {
  const [active, setActive] = useState(0);

  return (
    <AnimatedSection className="lcn-bg-premium" id="transformacao">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D48E93] mb-4"
          >
            Transformação
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            {/* Mobile */}
            <span className="sm:hidden">
              A{" "}<span className="lcn-accent-text">Comunidade LCN</span>
              <br />
              muda o jogo.
            </span>

            {/* Desktop */}
            <span className="hidden sm:inline">
              A <span className="lcn-accent-text">Comunidade LCN</span> muda o jogo.
            </span>
          </motion.h2>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-4xl mx-auto">
          {/* Navegação minimalista */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
            {benefits.map((b, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative px-3 sm:px-4 py-2 rounded-lg text-sm font-title font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-white/20 hover:text-white/50"
                  }`}
                >
                  <span className="relative z-10">{b.num}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lcn-tab-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.04] border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Conteúdo ativo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-14"
            >
              <div className="w-14 h-14 rounded-2xl lcn-glass-red flex items-center justify-center mx-auto mb-6">
                <BenefitIcon index={active} />
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-semibold text-white mb-3">
                {benefits[active].title}
              </h3>
              <p className="text-white/35 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                {benefits[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
