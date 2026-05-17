"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection, Container, staggerContainerVariants, staggerItemVariants, MotionContainer } from "@/components/ui/Section";

const items = [
  { image: "/Curso Milionário de Semijoias.png", title: "Curso Milionário de Semijoias", desc: "Do zero à estrutura completa. Aprende a comprar, precificar, vender e escalar com método testado." },
  { image: "/Todos os cursos.png", title: "Todos os cursos + livro", desc: "Acesso completo à biblioteca de conteúdos. Tudo atualizado, tudo focado em resultado real." },
  { image: "/Lista de fornecedores confiáveis.png", title: "Lista de fornecedores confiáveis", desc: "Não é uma lista aleatória. São fornecedores selecionados pelo por mim, que moro na China e conhece pessoalmente cada contato." },
  { image: "/Comunidade ativa de membros.png", title: "Comunidade ativa", desc: "Troca de experiência real com quem está no mesmo caminho. Sem papo de coach, só prática." },
  { image: "/Encontros ao vivo mensais.png", title: "Encontros ao vivo mensais", desc: "Todo mês tem encontro. É onde você tira dúvidas, recebe atualização de mercado e interage com o Léo." },
  { image: "/Suporte e direcionamento.png", title: "Suporte e direcionamento", desc: "Você não está sozinho. Tem equipe olhando, respondendo e te direcionando quando travar." },
  { image: "/Atualizações constantes.png ", title: "Atualizações constantes", desc: "O mercado mudou. O conteúdo da Comunidade também. Você sempre tem acesso ao que é atual." },
  { image: "/Estratégias de venda e estrutura de negócio.png", title: "Estratégias de venda e negócio", desc: "Varejo, atacado ou online você vai saber exatamente como montar cada modelo com lucratividade." },
];

export const LcnIncluded = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <AnimatedSection dark id="incluso">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            variants={staggerItemVariants}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#F87171] mb-4"
          >
            Ecossistema completo
          </motion.span>
          <motion.h2
            variants={staggerItemVariants}
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          >
            Tudo que está <span className="lcn-accent-text">incluso</span>
          </motion.h2>
          <motion.p
            variants={staggerItemVariants}
            className="mt-4 max-w-2xl mx-auto text-white/40 text-base sm:text-lg"
          >
            Não é uma coisa só. É tudo que você precisa no mesmo lugar.
          </motion.p>
        </div>

        <MotionContainer variants={staggerContainerVariants}>
          {/* Navigation arrows */}
          <motion.div
            variants={staggerItemVariants}
            className="hidden sm:flex items-center justify-end gap-3 mb-6"
          >
            <button
              type="button"
              aria-label="Anterior"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 backdrop-blur-xl transition-all duration-300 hover:bg-[#DC2626] hover:border-[#DC2626] hover:text-white cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={scrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 backdrop-blur-xl transition-all duration-300 hover:bg-[#DC2626] hover:border-[#DC2626] hover:text-white cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </motion.div>

          <motion.div variants={staggerItemVariants} className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y select-none">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] mr-6"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0a0a] backdrop-blur-sm transition-all duration-500 group h-full cursor-grab">
                    {/* Image area */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0a] via-transparent to-transparent" />
                    </div>

                    {/* Text content */}
                    <div className="p-5 sm:p-6 text-center">
                      <h3 className="font-title text-sm sm:text-base font-bold text-white uppercase tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#F87171] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        Incluso
                      </p>
                      <p className="text-white/40 text-xs sm:text-sm pb-4 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={staggerItemVariants}
            className="mt-5 text-[10px] text-white/30 mt-8 uppercase tracking-[0.28em] text-center sm:text-left"
          >
            Arraste para o lado
          </motion.p>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
