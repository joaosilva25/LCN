"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Star, ArrowRight, ChessKnight } from "lucide-react";

const CTA_LINK = "#oferta";

export const LcnHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-44 pb-24 sm:pt-28 sm:px-8 lg:px-12">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#090506]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 90% 60% at 50% 20%, rgba(185,31,60,0.10) 0%, transparent 70%)",
              "radial-gradient(ellipse 50% 80% at 20% 80%, rgba(136,17,42,0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse 50% 80% at 80% 80%, rgba(136,17,42,0.06) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        <div className="absolute inset-0 bg-[url('/HeroMobile.png')] bg-cover bg-[position:center_25px] opacity-[0.45] sm:hidden" />
        <div className="absolute inset-0 hidden bg-[url('/HeroDesk.png')] bg-cover bg-top opacity-[0.45] sm:block" />
       
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center sm:text-left relative top-12 md:top-0">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-title text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-7"
        >
          <span className="text-white">Chega de vender no improviso.</span>
          <br />
          <span className="text-white">É hora de construir um </span>
          <span className="lcn-accent-text">negócio </span>
          <br className="hidden sm:block" />
          <span className="text-white">altamente </span>
          <span className="lcn-accent-text">lucrativo</span>
          <span className="text-white"> com semijoias</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-white/55 leading-relaxed mb-10"
        >
          Tenha acesso ao ecossistema completo para importar da China, vender com previsibilidade e escalar no mercado de semijoias com estratégias que já geraram mais de<br></br>
          <span className="text-[#D48E93] font-semibold"> R$20 milhões</span>.
        </motion.p>

        {/* CTA + micro proofs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col items-center sm:items-start gap-5"
        >
          <a
            href={CTA_LINK}
            className="group relative inline-flex items-center gap-3 px-10 py-5 sm:px-14 sm:py-6 rounded-2xl font-semibold text-xs sm:text-base uppercase tracking-[0.15em] text-[#F7EEEC] lcn-gradient-btn lcn-pulse transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Entrar na Comunidade
              <ChessKnight className="w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={1.3}/>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Micro badges */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#621010]" />
              Acesso imediato
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#621010]" />
              Compra 100% segura
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090506] to-transparent pointer-events-none" />

      {/* Bottom authority headline bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute inset-x-0 py-4 bottom-0 z-20 border-t border-white/5 bg-[#090506]/60 backdrop-blur-xl hidden sm:block"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-6 sm:gap-10 md:gap-14 px-5 py-4 overflow-x-auto no-scrollbar">
          {[
            "+20M faturados",
            "Direto da China",
            "Encontro ao vivo todo mês",
            "Suporte real",
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#F7EEEC]/50 whitespace-nowrap"
            >
              <span className="relative flex items-center justify-center mr-1">
                <span className="absolute inline-flex w-2.5 h-2.5 rounded-full bg-[#621010] opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#621010]" />
              </span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
