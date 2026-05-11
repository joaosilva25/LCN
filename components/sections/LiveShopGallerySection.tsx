"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AnimatedSection,
  MotionContainer,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/Section";
import { XingyuBackground } from "@/components/ui/XingyuBackground";

const galleryImages = [
  { id: "g1", src: "/p1.webp", alt: "Semijoia Xingyu" },
  { id: "g2", src: "/p2.webp", alt: "Semijoia Xingyu" },
  { id: "g3", src: "/p3.webp", alt: "Semijoia Xingyu" },
  { id: "g4", src: "/p4.webp", alt: "Semijoia Xingyu" },
];

export const LiveShopGallerySection = () => {
  return (
    <AnimatedSection
      id="gallery"
      className="relative overflow-hidden bg-[#0b0d0e] text-white"
    >
      <XingyuBackground
        variant="section"
        imageSrc="/bg1.png"
        imageOpacity={0.18}
      />

      <MotionContainer
        variants={staggerContainerVariants}
        className="space-y-14"
      >
        <motion.div
          variants={staggerItemVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-r from-transparent via-white/35 to-transparent hidden md:flex"
            />
            <span className="text-[0.62rem] uppercase tracking-[0.42em] text-zinc-300">
              Live Shop
            </span>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gradient-to-l from-transparent via-white/35 to-transparent hidden md:flex"
            />
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-light leading-[1.08] tracking-tight text-white">
            Durante a live shop, novos modelos serão revelados em primeira mão,
            e você poderá garantir suas peças com{" "}
            <span className="font-medium">condições de fábrica.</span>
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mt-6 leading-relaxed font-regular select-none mx-auto">
            Não perca a chance de ter produtos únicos para atrair seus clientes
            no inverno.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
        >
          {/* Left large image — spans 2 rows */}
          <motion.div
            variants={staggerItemVariants}
            className="relative overflow-hidden rounded-[1.2rem] md:rounded-[1.8rem] border border-white/10 bg-black/30 shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)] col-span-1 row-span-2"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover contrast-110 brightness-90"
              priority={false}
              draggable={false}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10"
            />
          </motion.div>

          {/* Top-right images */}
          <motion.div
            variants={staggerItemVariants}
            className="relative overflow-hidden rounded-[1.2rem] md:rounded-[1.8rem] border border-white/10 bg-black/30 shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)] col-span-1 row-span-1"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover contrast-110 brightness-90"
              priority={false}
              draggable={false}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10"
            />
          </motion.div>

          <motion.div
            variants={staggerItemVariants}
            className="relative overflow-hidden rounded-[1.2rem] md:rounded-[1.8rem] border border-white/10 bg-black/30 shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)] col-span-1 row-span-1"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover contrast-110 brightness-90"
              priority={false}
              draggable={false}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10"
            />
          </motion.div>

          {/* Bottom-right image — spans 2 columns */}
          <motion.div
            variants={staggerItemVariants}
            className="relative overflow-hidden rounded-[1.2rem] md:rounded-[1.8rem] border border-white/10 bg-black/30 shadow-[0_0_60px_-45px_rgba(255,255,255,0.08)] col-span-2 row-span-1"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover contrast-110 brightness-90"
              priority={false}
              draggable={false}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10"
            />
          </motion.div>
        </motion.div>
      </MotionContainer>
    </AnimatedSection>
  );
};
