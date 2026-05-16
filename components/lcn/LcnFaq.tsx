"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

const faqs = [
  {
    q: "Sou iniciante, a comunidade é pra mim?",
    a: "Sim. A comunidade foi criada para atender desde quem está começando até quem já vende. Se você é iniciante, vai encontrar todo o passo a passo para montar seu negócio do zero com estrutura.",
  },
  {
    q: "Já vendo semijoias, vale a pena entrar?",
    a: "Com certeza. Se você já vende mas sente que está patinando, a comunidade vai te dar a estrutura que falta: fornecedores melhores, estratégias de escala, precificação inteligente e networking com vendedores que já faturam alto.",
  },
  {
    q: "Tenho loja física, funciona pra mim?",
    a: "Sim. As estratégias da comunidade se aplicam tanto para quem vende online quanto para loja física. Você vai aprender a comprar melhor, aumentar margem e atrair mais clientes independente do canal.",
  },
  {
    q: "Funciona para vendas online?",
    a: "Totalmente. Boa parte das estratégias são direcionadas para quem vende online — Instagram, WhatsApp, marketplace e loja virtual. Você vai dominar cada canal.",
  },
  {
    q: "Tenho pouco tempo, consigo acompanhar?",
    a: "Sim. O conteúdo é organizado para você consumir no seu ritmo. Os encontros ao vivo são gravados, e o suporte está sempre disponível. Você faz no seu tempo.",
  },
  {
    q: "E se eu não tiver retorno?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que não é pra você, devolvemos 100% do seu investimento. Risco zero.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group cursor-pointer"
      >
        <span className="text-white/70 text-sm sm:text-base font-medium group-hover:text-white/90 transition-colors duration-300">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#DC2626] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-white/40 text-sm sm:text-base leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const LcnFaq = () => {
  return (
    <AnimatedSection className="lcn-bg-premium" id="faq">
      <Container>
        <div className="text-center mb-14">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
          >
            Perguntas Frequentes
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight"
          >
            Tire suas <span className="lcn-accent-text">dúvidas</span>
          </motion.h2>
        </div>

        <MotionContainer variants={staggerContainerVariants} className="max-w-2xl mx-auto rounded-3xl lcn-glass p-6 sm:p-8 md:p-10">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
