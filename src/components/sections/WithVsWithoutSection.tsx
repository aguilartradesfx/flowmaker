"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";

const withoutBralto = [
  { text: "Responde mensajes manualmente todo el día", icon: "⏰" },
  { text: "Pierde clientes porque no da seguimiento", icon: "💔" },
  { text: "Trabaja 12+ horas diarias sin escalar", icon: "😓" },
  { text: "Depende 100% de su tiempo para generar ingresos", icon: "⛓️" },
  { text: "No tiene sistemas automatizados", icon: "🔧" },
  { text: "Pierde oportunidades por falta de organización", icon: "📉" },
];

const withBralto = [
  { text: "La IA responde 24/7 por usted automáticamente", icon: "🤖" },
  { text: "Seguimiento automático que convierte más clientes", icon: "📈" },
  { text: "Libera tiempo para lo que realmente importa", icon: "⏳" },
  { text: "Genera ingresos incluso mientras duerme", icon: "💰" },
  { text: "Sistemas automatizados que escalan solos", icon: "🚀" },
  { text: "Todo centralizado y organizado en un solo lugar", icon: "✨" },
];

export function WithVsWithoutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();

  return (
    <section
      id="con-sin-bralto"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(249, 115, 22, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6">
            La diferencia es clara
          </span>
          <h2 className={`font-bold text-white mb-4 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            <span className="text-red-400">Sin Bralto</span>
            {" "}vs{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Con Bralto
            </span>
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-lg'}`}>
            Mire cómo cambia todo cuando automatiza su negocio con agentes de IA
          </p>
        </motion.div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-6'} max-w-5xl mx-auto`}>
          {/* Without Bralto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.9))",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(239, 68, 68, 0.15)" }}
              >
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className={`font-bold text-red-400 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Sin Bralto
              </h3>
            </div>
            <ul className="space-y-4">
              {withoutBralto.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(239, 68, 68, 0.05)" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow for desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ 
                  background: "linear-gradient(135deg, #F97316, #DB2777)",
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)"
                }}
              >
                <ArrowRight className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          )}

          {/* With Bralto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-6 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(168, 85, 247, 0.05))",
              border: "1px solid rgba(249, 115, 22, 0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(168, 85, 247, 0.2))" }}
              >
                <Check className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className={`font-bold ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Con Bralto
                </span>
              </h3>
            </div>
            <ul className="space-y-4">
              {withBralto.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(249, 115, 22, 0.05)" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow for mobile */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center -my-3 relative z-20"
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rotate-90"
              style={{ 
                background: "linear-gradient(135deg, #F97316, #DB2777)",
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)"
              }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
