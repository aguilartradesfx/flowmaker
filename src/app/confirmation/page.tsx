"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, Sparkles, ArrowRight, Shield } from "lucide-react";
import { useState, useEffect } from "react";

// Generate a persistent confirmation code based on browser fingerprint
function generatePersistentCode(): string {
  if (typeof window === "undefined") return "BRALTO-XXXXXX";
  
  const stored = localStorage.getItem("bralto_confirmation_code");
  if (stored) return stored;
  
  const code = "BRALTO-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  localStorage.setItem("bralto_confirmation_code", code);
  return code;
}

export default function ConfirmationPage() {
  const [isHovering, setIsHovering] = useState(false);
  const [flipTicket, setFlipTicket] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("BRALTO-XXXXXX");

  const eventDate = "15 de Enero, 2025";
  const eventTime = "3:00 PM EST";
  const eventLocation = "Evento Virtual en Vivo";

  useEffect(() => {
    setConfirmationCode(generatePersistentCode());
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
            top: "10%",
            left: "5%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
            bottom: "0%",
            right: "0%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-5xl">
        {/* Success Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-5 h-5 text-green-400" />
            </motion.div>
            <span className="text-green-400 font-semibold">¡REGISTRO CONFIRMADO!</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-white via-orange-400 to-pink-600 bg-clip-text text-transparent">
            ¡Su Ticket Está Listo!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-12"
        >
          Hemos enviado los detalles de acceso a su correo electrónico
        </motion.p>

        {/* Interactive Ticket */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="perspective-1000 mb-12"
        >
          <motion.div
            className="relative max-w-2xl mx-auto cursor-pointer"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onClick={() => setFlipTicket(!flipTicket)}
            animate={{
              rotateY: flipTicket ? 180 : 0,
            }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of Ticket */}
            <div
              className="relative backface-hidden"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-75"
                animate={{
                  opacity: isHovering ? 1 : 0.5,
                  scale: isHovering ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "blur(20px)",
                }}
              />

              {/* Ticket Body */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 overflow-hidden">
                {/* Ticket pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
                    }}
                  />
                </div>

                {/* Top Section with Ticket Icon */}
                <div className="relative flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30">
                      <Ticket className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">VIP ACCESS</h3>
                      <p className="text-gray-400 text-sm">Evento Exclusivo</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                </div>

                {/* Event Details Grid */}
                <div className="relative space-y-6">
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <Calendar className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Fecha del Evento</p>
                      <p className="text-white font-semibold text-lg">{eventDate}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-pink-500/20">
                      <Clock className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Hora de Inicio</p>
                      <p className="text-white font-semibold text-lg">{eventTime}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white font-semibold text-lg">{eventLocation}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 pt-6 border-t border-dashed border-white/10 flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Ticket ID: #BRT-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  <motion.p
                    className="text-orange-400 text-sm font-medium"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Click para voltear
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Back of Ticket - Clean with Confirmation Code */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 h-full flex flex-col items-center justify-center border border-white/10 overflow-hidden">
                {/* Subtle holographic shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      transparent 0%,
                      rgba(249,115,22,0.3) 25%,
                      rgba(219,39,119,0.3) 50%,
                      rgba(168,85,247,0.3) 75%,
                      transparent 100%
                    )`,
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h3 className="text-white font-bold text-xl">Código de Confirmación</h3>
                  </div>
                  
                  {/* Code Display */}
                  <motion.div
                    className="relative bg-black/50 rounded-xl p-6 border border-orange-500/30 mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-30 rounded-xl"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                        backgroundSize: "200% 100%",
                      }}
                      animate={{
                        backgroundPosition: ["-100% 0%", "200% 0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <p className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wider relative z-10">
                      {confirmationCode}
                    </p>
                  </motion.div>
                  
                  <p className="text-gray-400 text-sm max-w-xs mx-auto mb-6">
                    Guarda este código. Podrían solicitártelo durante el evento.
                  </p>
                  
                  <motion.p
                    className="text-orange-400 text-sm font-medium"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Click para regresar
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Simple Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <p className="text-gray-300 text-lg">
            📅 <span className="text-white font-medium">Próximo paso:</span> Marque su calendario y esté listo el <span className="text-orange-400 font-semibold">{eventDate}</span> a las <span className="text-pink-400 font-semibold">{eventTime}</span>
          </p>
        </motion.div>


      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
// deploy check
