"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

const faqs = [
  {
    q: "Sou iniciante, a comunidade é pra mim?",
    a: "Perfeito. O conteúdo começa do zero e te leva pelo caminho certo desde o início, sem pular a etapa que depois vai te travar.",
  },
  {
    q: "Já vendo semijoias, vale a pena entrar?",
    a: "É exatamente pra isso que a comunidade existe. Quem já vende vai aprender a estruturar, escalar e ter mais margem. Não só faturar mais, mas ganhar mais."
  },
  {
    q: "Tenho loja física, funciona pra mim?",
    a: "A Comunidade cobre varejo, atacado e online. Você vai aprender a potencializar sua loja com produto certo, precificação inteligente e recorrência de cliente.",
  },
  {
    q: "Funciona para vendas online?",
    a: "Estratégias completas de venda online estão no conteúdo. E você vai aprender a usar isso junto com uma base de fornecedores que a maioria dos concorrentes não têm acesso.",
  },
  {
    q: "Tenho pouco tempo, consigo acompanhar?",
    a: "A plataforma é 100% no seu ritmo. Você acessa quando puder.Os encontros ao vivo ficam gravados. Não tem horário obrigatório.",
  },
  {
    q: "E se eu não tiver retorno?",
    a: "R$97 é quanto você pagaria por três almoços. Se a comunidade te ajudar a fechar uma única venda a mais por mês, já se paga. O retorno vem com aplicação e você tem suporte para aplicar.",
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
