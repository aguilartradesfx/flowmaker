"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";

const forYou = [
  "Emprendedores que quieren escalar sin contratar más personal",
  "Dueños de negocios cansados de perder clientes por falta de seguimiento",
  "Agencias de marketing que buscan ofrecer más valor a sus clientes",
  "Freelancers que quieren automatizar tareas repetitivas",
  "Coaches y consultores que necesitan sistematizar sus procesos",
  "Cualquier persona que quiera generar ingresos con IA en 2025",
];

const notForYou = [
  "Personas que buscan hacerse ricos de la noche a la mañana",
  "Quienes no están dispuestos a invertir tiempo en aprender",
  "Personas que esperan resultados sin tomar acción",
  "Quienes no creen en el poder de la automatización",
  "Personas que no están comprometidas con su crecimiento",
];

export function WhoIsThisForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();

  return (
    <section
      id="para-quien"
      ref={ref}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)",
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
            ¿Es para ti?
          </span>
          <h2 className={`font-bold text-white mb-4 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Este evento{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              ES y NO es
            </span>{" "}
            para todos
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-lg'}`}>
            Queremos ser honestos con usted desde el principio
          </p>
        </motion.div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-8'} max-w-5xl mx-auto`}>
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.02))",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <h3 className={`font-bold text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Esto ES para usted si...
              </h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.02))",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className={`font-bold text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Esto NO es para usted si...
              </h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
