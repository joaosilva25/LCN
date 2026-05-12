"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";

export const WhoIsThisForSection = () => {
  return (
    <AnimatedSection
      id="para-quem"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <MotionContainer
        variants={staggerContainerVariants}
        className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <motion.div
          variants={staggerItemVariants}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2rem] border border-white/10 bg-black/40 overflow-hidden shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <Image
              src="/p1.webp"
              alt="Semijoias Xingyu"
              fill
              className="object-cover contrast-110 brightness-90"
              draggable={false}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/20"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerItemVariants}
          className="flex flex-col justify-center gap-2 items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white text-center lg:text-left">
            Um evento exclusivo, online e gratuito.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mt-5 leading-relaxed font-regular select-none text-center lg:text-left">
            Faremos nossa live através de um evento gratuito no Youtube, fácil
            assim, você vai perder?
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              size="lg"
              variant="primary"
              className="group hover:bg-white text-zinc-950"
              href="/redirect"
            >
              GARANTA SUA VAGA AGORA
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
