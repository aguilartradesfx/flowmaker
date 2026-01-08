"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedCTAButton } from "@/components/ui/AnimatedCTAButton";
import { Briefcase, UserCheck } from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";
import { useFormPopup } from "@/components/ui/FormPopup";

export function LaunchHeroSection() {
  const isMobile = useMobileDetect();
  const { openPopup } = useFormPopup();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0A0A0A" }}>
      <AnimatedBackground />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      <div className="absolute inset-0 bg-mesh-gradient z-[2]" />
      
      <div className={`relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen ${isMobile ? 'px-2' : 'px-4'}`}>
        {/* Content container - positioned to overlap with image */}
        <div className={`relative w-full ${isMobile ? 'pt-4' : 'pt-0'}`}>
          {/* Hero Image with glow effect - large and overlapping */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative flex justify-center ${isMobile ? 'mb-[-40px]' : 'mb-[-80px]'}`}>
            {/* Glow behind image */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[400px] h-[400px]' : 'w-[600px] h-[600px]'} rounded-full blur-[120px]`}
              style={{ 
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(249, 115, 22, 0.3) 50%, transparent 70%)"
              }} />
            
            {/* Person image - much larger in mobile */}
            <div className={`relative ${isMobile ? 'w-[450px] h-[450px]' : 'w-[700px] h-[500px]'}`}>
              <img
                src="https://storage.googleapis.com/msgsndr/hdVpvshZP3RGJQbxx8GA/media/695f4d59d461d45604120454.png"
                alt="David Bralto"
                className="relative z-10 w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Text content - overlapping the image */}
          <div className={`relative z-20 max-w-5xl mx-auto ${isMobile ? 'space-y-4 px-4' : 'space-y-6'}`}>
            {/* Event badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center">
              <div
                className={`inline-flex items-center gap-2 ${isMobile ? 'px-5 py-2.5 text-sm' : 'px-5 py-2.5 text-sm'} rounded-full font-semibold`}
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(249, 115, 22, 0.3))",
                  border: "1px solid rgba(168, 85, 247, 0.5)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                }}>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: "#EF4444",
                    boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
                  }} />
                EVENTO EN VIVO: 22 DE ENERO - 7:00 PM
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center">
              <h1
                className={`font-bold leading-tight ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
                <span className="text-white">ESTE 2026 APRENDA A CREAR </span>
                <span
                  className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  SISTEMAS INTELIGENTES
                </span>
                <span className="text-white"> QUE FUNCIONAN EN </span>
                <span
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  PILOTO AUTOMÁTICO
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-center text-gray-300 max-w-3xl mx-auto ${isMobile ? 'text-base leading-relaxed' : 'text-lg md:text-xl'}`}>
              Descubra la metodología Flowmaker: diseñe, conecte y optimice sistemas completos 
              de adquisición, automatización y venta impulsados por IA.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex justify-center ${isMobile ? 'pt-3' : 'pt-4'}`}>
              <AnimatedCTAButton
                onClick={(e) => {
                  e.preventDefault();
                  openPopup();
                }}
                size="lg"
                className={`${isMobile ? 'px-8 py-5 text-base w-full max-w-sm' : 'px-12 py-6 text-lg'} font-bold`}>
                RESERVAR MI ESPACIO
              </AnimatedCTAButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`flex ${isMobile ? 'flex-col gap-3' : 'flex-row gap-8'} items-center justify-center ${isMobile ? 'pt-3 pb-6' : 'pt-4 pb-10'}`}>
              <div className="flex items-center gap-2 text-gray-400">
                <UserCheck className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'} text-green-400`} />
                <span className={`${isMobile ? 'text-sm' : 'text-sm'}`}>No necesita experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'} text-green-400`} />
                <span className={`${isMobile ? 'text-sm' : 'text-sm'}`}>Puede iniciar totalmente gratis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
