"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container, staggerItemVariants, MotionContainer, staggerContainerVariants } from "@/components/ui/Section";

export const LcnFounder = () => {
  return (
    <AnimatedSection dark id="fundador" className="!pt-16 !pb-[28rem] sm:!py-40 lg:!py-52">
      {/* Background personalizado */}
      <div
  aria-hidden="true"
  className="absolute inset-0 z-0 bg-[url('/LC1Mobile.png')] bg-cover bg-[position:center_400px] bg-no-repeat sm:hidden"
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
          <div className="max-w-lg mx-auto text-center sm:ml-auto sm:mr-0 sm:text-right">

            <motion.span
              variants={staggerItemVariants}
              className="block text-[11px] font-medium tracking-[0.25em] uppercase text-white/25 mb-6"
            >
              QUEM ESTÁ POR TRÁS DISSO
            </motion.span>

            <motion.div
              variants={staggerItemVariants}
              className="font-title text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 leading-[1.45] mb-10 space-y-6"
            >
              <p>
                Um cara que já errou tudo que você pode estar errando agora.
              </p>
              <p className="text-white/70 font-normal text-base sm:text-lg leading-relaxed">
                Eu não comecei sabendo vender semijoias. Muito pelo contrário. Eu comprei errado, perdi dinheiro, fechei negócio ruim, fiquei meses tentando entender por que algumas pessoas cresciam e outras continuavam patinando.
              </p>
              <p className="text-white/70 font-normal text-base sm:text-lg leading-relaxed">
                A diferença é que eu fui atrás da resposta. Saí do Brasil, vim morar na China, comecei a entender esse mercado de dentro, construir relacionamento com fornecedores reais e criar estruturas que realmente funcionam.
              </p>
              <p className="text-white/70 font-normal text-base sm:text-lg leading-relaxed">
                Hoje, depois de mais de R$20 milhões gerados nesse mercado, eu entendi uma coisa: quem cresce não é quem trabalha mais… é quem aprende a estruturar melhor.
              </p>
              <p className="text-white/70 font-normal text-base sm:text-lg leading-relaxed">
                E foi exatamente por isso que eu criei a <span className="lcn-accent-text">COMUNIDADE LCN</span>. Para encurtar o caminho de quem quer construir um negócio sólido com semijoias, sem precisar passar pelos mesmos erros que eu passei.
              </p>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mt-8">
              <p className="text-center sm:text-right text-sm text-white/30 tracking-wide">
                Leo China <span className="text-white/15 mx-2">—</span> <span className="text-white/50">Fundador</span>
              </p>
            </motion.div>
          </div>
        </MotionContainer>
      </Container>
    </AnimatedSection>
  );
};
