"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";

export const Hero = () => {
  return (
    <AnimatedSection className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#171a1d] px-4 sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-bottom md:bg-top bg-no-repeat bg-[image:url('/heroMobile.jpg')] md:bg-[image:url('/heroTablet.jpg')] lg:bg-[image:url('/hero.jpg')]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-black/75 md:bg-black/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/5 via-black/10 to-black/55 sm:hidden"
      />

      <MotionContainer
        variants={staggerContainerVariants}
        className="z-20 flex h-full items-center justify-center pt-24 pb-10 sm:pt-20 sm:pb-3"
      >
        <div className="text-center flex w-full flex-col justify-center max-w-3xl items-center">
          <motion.div variants={staggerItemVariants} className="mb-8 md:mb-10">
            <Image
              src="/logoMenu.png"
              alt="Xingyu"
              width={240}
              height={48}
              className="h-14 w-auto select-none mx-auto"
              draggable={false}
              priority
            />
          </motion.div>

          <motion.h1
            variants={staggerItemVariants}
            className="w-full max-w-3xl text-balance text-[clamp(1.75rem,7vw,3rem)] sm:text-4xl lg:text-5xl font-light leading-[1.15] mb-6 md:mb-8 tracking-tight select-none text-white px-4 md:px-0"
          >
            Antecipe-se para a temporada de inverno e garanta seu estoque{" "}
            <span className="font-medium">direto da fábrica.</span>
          </motion.h1>

          <motion.p
            variants={staggerItemVariants}
            className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mb-8 md:mb-10 leading-relaxed font-regular select-none px-4 md:px-0"
          >
            Peças inéditas, condições exclusivas e uma live shop com lançamentos
            que vão diferenciar seu negócio.
          </motion.p>

          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col items-center gap-6 sm:gap-8 w-full px-4 md:px-0"
          >
            <Button
              size="lg"
              className="w-full md:w-auto group"
              href="/redirect"
            >
              QUERO COMPRAR SEMIJOIAS DA FÁBRICA
              <ArrowRight
                className="w-5 h-5 opacity-80 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
                strokeWidth={1.3}
              />
            </Button>

            <p className="text-sm text-zinc-300 max-w-lg leading-relaxed">
              <span className="text-white font-medium">+de 10 mil</span>{" "}
              pessoas se inscreveram. Inscreva-se agora mesmo e participe do
              nosso{" "}
              <span className="text-white font-medium">
                grupo exclusivo no WhatsApp
              </span>
              .
            </p>
          </motion.div>
        </div>
      </MotionContainer>
    </AnimatedSection>
  );
};
