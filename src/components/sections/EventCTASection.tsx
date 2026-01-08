"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCTAButton } from "@/components/ui/AnimatedCTAButton";
import { Calendar, Clock, Users, Gift } from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";
import { useFormPopup } from "@/components/ui/FormPopup";

export function EventCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();
  const { openPopup } = useFormPopup();

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(168, 85, 247, 0.2))",
              border: "1px solid rgba(249, 115, 22, 0.4)",
              color: "white",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                background: "#EF4444",
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
              }}
            />
            ¡Los cupos son limitados!
          </motion.div>

          <h2 className={`font-bold text-white mb-6 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
            No se pierda el{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              lanzamiento
            </span>
          </h2>

          <p className={`text-gray-300 mb-10 max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-lg md:text-xl'}`}>
            Este evento solo ocurrirá una vez. Si quiere aprender cómo automatizar 
            su negocio con IA y acceder a una oferta exclusiva, este es su momento.
          </p>

          {/* Event details */}
          <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'md:grid-cols-4 gap-6'} max-w-3xl mx-auto mb-10`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Calendar className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-orange-400 mx-auto mb-2`} />
              <p className={`text-white font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>22 de Enero</p>
              <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Clock className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-orange-400 mx-auto mb-2`} />
              <p className={`text-white font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>7:00 PM</p>
              <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Hora Colombia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-4 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Users className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-orange-400 mx-auto mb-2`} />
              <p className={`text-white font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>Online</p>
              <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>En vivo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-4 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Gift className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-orange-400 mx-auto mb-2`} />
              <p className={`text-white font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>GRATIS</p>
              <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Sin costo</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AnimatedCTAButton
              onClick={(e) => {
                e.preventDefault();
                openPopup();
              }}
              size="lg"
              className={`${isMobile ? 'px-8 py-5 text-base' : 'px-14 py-7 text-xl'} font-bold`}
            >
              QUIERO MI TICKET
            </AnimatedCTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
