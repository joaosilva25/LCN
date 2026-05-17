"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Monitor, Headphones } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Mail,
    title: "Abra o e-mail de confirmação",
    desc: "Enviamos agora um e-mail com o link de acesso à plataforma e seus dados de login. Se não aparecer na caixa principal em alguns minutos, confira a pasta de spam.",
  },
  {
    num: "2",
    icon: Monitor,
    title: "Faça seu login e explore a plataforma",
    desc: "Ao acessar pela primeira vez você vai encontrar todos os cursos, a lista de fornecedores, os encontros ao vivo e a comunidade.",
  },
  {
    num: "3",
    icon: Headphones,
    title: "Não recebeu em 15 minutos? Fale com o suporte.",
    desc: "A nossa equipe resolve na hora. Manda uma mensagem e a gente te dá o acesso sem enrolação.",
    email: "suporte@leochina.com.br",
  },
];

export const LcnObrigado = () => {
  return (
    <div className="min-h-screen bg-[#090506] text-white selection:bg-[#DC2626]/30 overflow-x-hidden">

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 py-20 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">


          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full lcn-glass-red mb-6"
          >
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#F87171]">
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
            BEM-VINDO À
            <br />
            <span className="lcn-accent-text">COMUNIDADE LCN</span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-16 space-y-2"
          >
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed">
              Parabéns. <span className="text-white/70 font-medium">Você tomou a decisão certa.</span>
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mt-12">
              Verifique seu e-mail
            </p>
            <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-lg mx-auto">
              Sua compra foi confirmada. Em instantes você recebe as instruções de acesso na sua caixa de entrada.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-left"
          >
            <h2 className="text-center font-title text-lg sm:text-xl font-semibold text-white/70 mb-2">
              O QUE ACONTECE AGORA
            </h2>
            <p className="text-center text-sm text-white/40 mb-8">Três passos simples.</p>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                  className="flex items-start gap-5 p-6 sm:p-7 rounded-2xl lcn-glass hover:border-[#F87171]/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F87171]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F87171]/20 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-[#F87171]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-[#F87171]/50 font-mono">{step.num}</span>
                      <h3 className="font-title text-base sm:text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                    {step.email && (
                      <p className="text-[#F87171] text-sm sm:text-base mt-1.5">
                        {step.email}
                      </p>
                    )}
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
            className="mt-16 pt-12 border-t border-white/[0.06] space-y-6"
          >
            <p className="text-base sm:text-lg text-white/30 leading-relaxed italic max-w-lg mx-auto">
              &ldquo;Agora é a sua vez de parar de improvisar e começar a construir de verdade.&rdquo;
            </p>

            <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-lg mx-auto">
              Você acabou de entrar em um lugar construído para quem quer resultado real com semijoias. Não tem atalho, tem método. E o método funciona para todo mundo que aplica.
            </p>

            <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg mx-auto">
              Nos vemos lá dentro.
            </p>

            <p className="text-sm text-white/30 leading-relaxed max-w-lg mx-auto">
              Léo | Fundador | COMUNIDADE LCN | China
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
