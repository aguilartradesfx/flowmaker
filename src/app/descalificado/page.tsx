"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Info, Mail } from "lucide-react";

export default function DescalificadoPage() {
  const router = useRouter();

  useEffect(() => {
    // Marcar como descalificado en localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("lead_status", "descalificado");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#0D0D0D' }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(219, 39, 119, 0.2))',
            }}
          >
            <Info className="w-12 h-12 text-orange-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              No quedaste fuera.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-white font-semibold mb-12"
          >
            Simplemente no es tu momento para este tipo de sistema.
          </motion.p>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 md:p-10 rounded-2xl mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(219, 39, 119, 0.1))',
              border: '1px solid rgba(249, 115, 22, 0.3)',
            }}
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent font-bold">
                Bralto y Flowmaker
              </span>{" "}
              son para personas que ya están en una etapa muy específica de construcción.
            </p>

            <p className="text-white text-xl md:text-2xl font-semibold">
              Cuando llegues ahí, nos encantará que vuelvas.
            </p>
          </motion.div>

          {/* Future opening message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-xl mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(219, 39, 119, 0.05))',
              border: '1px solid rgba(249, 115, 22, 0.2)',
            }}
          >
            <p className="text-gray-300 text-base md:text-lg">
              📬 <span className="font-semibold text-white">Muy pronto abriremos nuevos cupos.</span><br />
              Te notificaremos cuando sea el momento adecuado para unirte.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <a href="mailto:cs@bralto.io" className="text-base">
              cs@bralto.io
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
