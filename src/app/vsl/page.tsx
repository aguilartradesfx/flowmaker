"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/hero/AnimatedBackground";
import { AnimatedCTAButton } from "@/components/ui/AnimatedCTAButton";
import { Play, Volume2, VolumeX, Star, AlertTriangle } from "lucide-react";
import { useState, useRef } from "react";

const testimonials = [
  {
    author: "Alina Ramírez",
    role: "Business Manager",
    rating: 5,
    quote: "A uno se le olvida hacer seguimientos cuando se da cuenta tiene mil suscripciones por todo lado. El sistema trabaja por nosotros, y solo hablamos con personas realmente interesadas."
  },
  {
    author: "Martín Frediani",
    role: "Editor - Magazine",
    rating: 5,
    quote: "En Bralto logramos algo que no habíamos podido antes: tener todo en un mismo lugar. Es una locura lo que lograron como sistema."
  },
  {
    author: "Alejandro Araya",
    role: "Asesor financiero",
    rating: 5,
    quote: "La organización de leads y la automatización nos dio una trazabilidad real. Ahora sí sentimos que operamos con orden y claridad."
  }
];

function SocialProofSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0E0E0E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Resultados reales. Crecimiento real.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Sistemas que no fallan.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="relative p-6 rounded-2xl bg-[#1A1A1A]/80 border border-white/5 hover:border-orange-500/20 transition-all duration-300 h-full hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VSLPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 30) {
      setShowButton(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Warning Banner */}
      <div 
        className="w-full py-3 text-center"
        style={{ background: "linear-gradient(90deg, #F97316 0%, #DB2777 100%)" }}
      >
        <p className="text-white font-bold text-sm md:text-base flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          ¡NO CIERRE NI REFRESQUE ESTA PESTAÑA!
          <AlertTriangle className="w-4 h-4" />
        </p>
      </div>

      <section className="relative flex items-center justify-center bg-[#0A0A0A]">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-mesh-gradient z-[1]" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-white/[0.04] border border-white/10 text-white">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#F97316] to-[#DB2777]" />
                  Bralto
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">Su registro está </span>
                <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                  casi completo...
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Mire el video y llene la encuesta para unirse al Grupo de WhatsApp donde enviaremos el enlace del evento:
              </motion.p>
            </div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative p-[3px] rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, #F97316 0%, transparent 20%, transparent 30%, #DB2777 50%, transparent 70%, transparent 80%, #F97316 100%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute -inset-4 rounded-3xl -z-10"
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(249, 115, 22, 0.4), 0 0 120px rgba(219, 39, 119, 0.25)",
                      "0 0 80px rgba(219, 39, 119, 0.45), 0 0 140px rgba(249, 115, 22, 0.3)",
                      "0 0 60px rgba(249, 115, 22, 0.4), 0 0 120px rgba(219, 39, 119, 0.25)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0D0D0D]">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    muted={isMuted}
                    preload="metadata"
                  >
                    <source
                      src="https://storage.googleapis.com/msgsndr/hdVpvshZP3RGJQbxx8GA/media/6823c96d77a9d49b97e32a90.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {!isPlaying && (
                    <button
                      onClick={handlePlayClick}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(249, 115, 22, 0.9), rgba(219, 39, 119, 0.9))",
                          boxShadow: "0 0 40px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(255,255,255,0.1)",
                        }}
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                      </motion.div>
                    </button>
                  )}

                  {isPlaying && (
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/80 transition-all"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <AnimatedCTAButton
                  href="https://api.whatsapp.com/send?phone=12138567800&text=¡Quiero%20completar%20mi%20registro!%20🚀"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="px-8 md:px-12 py-5 md:py-6 text-base md:text-lg"
                >
                  LLENAR ENCUESTA PARA UNIRME AL GRUPO
                </AnimatedCTAButton>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <SocialProofSection />

      {/* Footer Logo */}
      <div className="w-full flex justify-center py-8 border-t bg-[#0D0D0D] border-white/[0.08]">
        <img
          src="https://storage.googleapis.com/msgsndr/hdVpvshZP3RGJQbxx8GA/media/6823c9f977a9d4672be32ac7.png"
          alt="Bralto Logo"
          className="h-8 w-auto opacity-70"
        />
      </div>
    </main>
  );
}
