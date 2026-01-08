"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Zap, Target, Rocket, Gift, Clock } from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";

const learnings = [
  {
    icon: Lightbulb,
    title: "Qué es un Flowmaker",
    description: "La metodología completa para diseñar, conectar y optimizar sistemas inteligentes",
  },
  {
    icon: Zap,
    title: "Sistemas que Trabajan 24/7",
    description: "Cómo crear sistemas completos que funcionan 24/7 sin ser un experto",
  },
  {
    icon: Target,
    title: "Flujos End-to-End",
    description: "De tráfico a conversación, calificación, cierre y seguimiento automatizado",
  },
  {
    icon: Rocket,
    title: "Infraestructura Bralto",
    description: "La plataforma que permite que el rol de Flowmaker exista y escale",
  },
  {
    icon: Gift,
    title: "Oferta Exclusiva",
    description: "Una oferta especial solo para asistentes del evento en vivo",
  },
  {
    icon: Clock,
    title: "Sin Experiencia Necesaria",
    description: "Aprenda a orquestar sistemas completos aunque no sea técnico",
  },
];

export function WhatYouWillLearnSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();

  return (
    <section
      id="que-aprenderas"
      ref={ref}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Evento 22 de Enero
          </span>
          <h2 className={`font-bold text-white mb-4 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Lo que{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              aprenderá
            </span>{" "}
            en el evento
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-lg'}`}>
            En solo 2 horas va a descubrir todo lo que necesita para transformar su negocio con IA
          </p>
        </motion.div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 lg:grid-cols-3 gap-6'} max-w-6xl mx-auto`}>
          {learnings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-6 rounded-2xl group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ 
                  background: "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(168, 85, 247, 0.2))",
                  border: "1px solid rgba(249, 115, 22, 0.3)"
                }}
              >
                <item.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className={`font-bold text-white mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                {item.title}
              </h3>
              <p className={`text-gray-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
