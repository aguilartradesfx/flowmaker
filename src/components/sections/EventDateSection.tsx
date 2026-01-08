"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calendar, 
  Clock, 
  Video, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Lightbulb,
  Rocket,
  Gift
} from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";
import { AnimatedCTAButton } from "@/components/ui/AnimatedCTAButton";
import { useFormPopup } from "@/components/ui/FormPopup";

const forYouPoints = [
  {
    icon: Users,
    text: "Dueños de negocios que quieren escalar sin contratar más personal"
  },
  {
    icon: Lightbulb,
    text: "Emprendedores que buscan automatizar su adquisición de clientes"
  },
  {
    icon: Rocket,
    text: "Freelancers y agencias que quieren ofrecer servicios de alto valor"
  },
  {
    icon: Gift,
    text: "Cualquiera que quiera aprender a crear sistemas inteligentes desde cero"
  }
];

export function EventDateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();
  const { openPopup } = useFormPopup();

  return (
    <section
      id="fecha-evento"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(249, 115, 22, 0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Date and Time - Big and Bold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))",
              border: "1px solid rgba(239, 68, 68, 0.4)"
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "#EF4444",
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
              }}
            />
            <span className="text-white font-semibold text-sm">EVENTO EN VIVO</span>
          </motion.div>

          {/* Big Date Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mb-6 ${isMobile ? 'px-4' : ''}`}
          >
            <div className={`flex items-center justify-center gap-3 md:gap-6 ${isMobile ? 'flex-col' : ''}`}>
              <div 
                className={`flex items-center gap-3 ${isMobile ? 'p-4' : 'p-6'} rounded-2xl`}
                style={{
                  background: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(168, 85, 247, 0.1))",
                  border: "1px solid rgba(249, 115, 22, 0.3)"
                }}
              >
                <Calendar className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-orange-400`} />
                <div className="text-left">
                  <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>FECHA</p>
                  <p className={`font-bold text-white ${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
                    22 de Enero
                  </p>
                  <p className={`text-orange-400 font-medium ${isMobile ? 'text-sm' : 'text-lg'}`}>2026</p>
                </div>
              </div>

              {!isMobile && (
                <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              )}

              <div 
                className={`flex items-center gap-3 ${isMobile ? 'p-4' : 'p-6'} rounded-2xl`}
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(249, 115, 22, 0.1))",
                  border: "1px solid rgba(168, 85, 247, 0.3)"
                }}
              >
                <Clock className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-purple-400`} />
                <div className="text-left">
                  <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>HORA</p>
                  <p className={`font-bold text-white ${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
                    7:00 PM
                  </p>
                  <p className={`text-purple-400 font-medium ${isMobile ? 'text-sm' : 'text-lg'}`}>Hora CDMX</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Platform Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <Video className="w-5 h-5" />
            <span className={isMobile ? 'text-sm' : 'text-base'}>Transmisión en vivo vía Zoom</span>
          </motion.div>
        </motion.div>

        {/* This is for you section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div 
            className={`${isMobile ? 'p-5' : 'p-8 md:p-10'} rounded-3xl`}
            style={{
              background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9))",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <h3 className={`font-bold text-white text-center mb-6 ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Esto es para ti
              </span>
              {" "}si...
            </h3>

            <div className="space-y-4 mb-8">
              {forYouPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(168, 85, 247, 0.2))"
                    }}
                  >
                    <point.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <p className={`text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Impact text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center mb-8 p-4 rounded-xl"
              style={{ background: "rgba(249, 115, 22, 0.1)" }}
            >
              <p className={`text-white ${isMobile ? 'text-sm' : 'text-base'}`}>
                <span className="text-orange-400 font-semibold">+500 personas</span> ya confirmaron su asistencia.
                <br />
                <span className="text-gray-400">Los cupos son limitados y se están llenando rápido.</span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex justify-center"
            >
              <AnimatedCTAButton
                onClick={(e) => {
                  e.preventDefault();
                  openPopup();
                }}
                size="lg"
                className={`${isMobile ? 'w-full px-6 py-5 text-base' : 'px-12 py-6 text-lg'} font-bold flex items-center justify-center gap-2`}
              >
                RESERVAR MI LUGAR AHORA
                <ArrowRight className="w-5 h-5" />
              </AnimatedCTAButton>
            </motion.div>

            {/* Free badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center mt-4 text-gray-400 text-sm flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              100% Gratis - Sin tarjeta de crédito
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
