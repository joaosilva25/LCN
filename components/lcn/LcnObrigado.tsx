"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Monitor, Headphones, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Mail,
    title: "Abra seu e-mail",
    desc: "Verifique sua caixa de entrada (e o spam) para o e-mail de confirmação com seus dados de acesso.",
  },
  {
    num: "02",
    icon: Monitor,
    title: "Acesse a plataforma",
    desc: "Use os dados recebidos para acessar a plataforma e começar a explorar todo o conteúdo.",
  },
  {
    num: "03",
    icon: Headphones,
    title: "Entre em contato com o suporte",
    desc: "Qualquer dúvida, nossa equipe está pronta para te ajudar. Estamos juntos nessa jornada.",
  },
];

export const LcnObrigado = () => {
  return (
    <div className="min-h-screen bg-[#090506] text-white selection:bg-[#621010]/30 overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#621010]/[0.04] blur-[200px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 py-20 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#621010]/10 border border-[#621010]/20 flex items-center justify-center lcn-pulse">
              <CheckCircle className="w-10 h-10 text-[#621010]" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full lcn-glass-red mb-6"
          >
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#D48E93]">
              Compra confirmada
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-5"
          >
            Bem-vindo à
            <br />
            <span className="lcn-accent-text">COMUNIDADE LCN</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-lg sm:text-xl text-white/50 leading-relaxed mb-16"
          >
            Parabéns. <span className="text-white/70 font-medium">Você tomou a decisão certa.</span>
          </motion.p>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-left"
          >
            <h2 className="text-center font-title text-lg sm:text-xl font-semibold text-white/70 mb-8">
              O que acontece agora
            </h2>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                  className="flex items-start gap-5 p-6 sm:p-7 rounded-2xl lcn-glass hover:border-[#D48E93]/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#D48E93]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D48E93]/20 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-[#D48E93]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-[#D48E93]/50 font-mono">{step.num}</span>
                      <h3 className="font-title text-base sm:text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emotional close */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 pt-12 border-t border-white/[0.06]"
          >
            <p className="text-base sm:text-lg text-white/30 leading-relaxed italic max-w-lg mx-auto">
              &ldquo;Agora é sua vez de parar de improvisar
              <br />
              e começar a{" "}
              <span className="text-[#D48E93] not-italic font-semibold">construir de verdade</span>.&rdquo;
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-2 mt-8 text-sm text-[#D48E93]/60 hover:text-[#D48E93] transition-colors duration-300"
            >
              Acessar a plataforma
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
