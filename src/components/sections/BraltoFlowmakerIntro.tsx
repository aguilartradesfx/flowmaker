"use client";
import { motion } from "framer-motion";
import { Sparkles, Zap, Briefcase, TrendingUp, DollarSign } from "lucide-react";

export function BraltoFlowmakerIntro() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#0D0D0D' }}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-pink-600/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(219, 39, 119, 0.1))',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Conoce el Ecosistema
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Qué es{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Bralto
            </span>{" "}
            y un{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Flowmaker
            </span>
            ?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bralto Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div 
              className="h-full rounded-2xl p-8 md:p-10 border transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(219, 39, 119, 0.05))',
                borderColor: 'rgba(249, 115, 22, 0.2)',
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(219, 39, 119, 0.2))',
                }}
              >
                <Zap className="w-8 h-8 text-orange-500" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  Bralto
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Su plataforma todo-en-uno de{" "}
                <span className="text-orange-500 font-semibold">automatización con IA</span>.
                Integre sus conversaciones de WhatsApp, Instagram, Facebook y más en un solo lugar.
                Automatice respuestas, califique leads y cierre ventas 24/7 sin esfuerzo.
              </p>

              {/* Stats Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6 p-4 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(219, 39, 119, 0.15))',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    +300%
                  </span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="font-semibold text-white">Aumente sus conversiones</span> automatizando la atención al cliente
                </p>
              </motion.div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  "Centralice todas sus conversaciones",
                  "IA que responde automáticamente",
                  "Calificación inteligente de leads",
                  "Venda mientras duerme"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Flowmaker Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div 
              className="h-full rounded-2xl p-8 md:p-10 border transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.05), rgba(249, 115, 22, 0.05))',
                borderColor: 'rgba(219, 39, 119, 0.2)',
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.2), rgba(249, 115, 22, 0.2))',
                }}
              >
                <Briefcase className="w-8 h-8 text-pink-600" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Flowmaker
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                La{" "}
                <span className="text-pink-600 font-semibold">profesión del futuro</span>.
                Un Flowmaker es la persona que se encarga de construir todos estos sistemas
                de automatización dentro de Bralto. Adquiera esta habilidad y genere ingresos
                implementando soluciones para negocios.
              </p>

              {/* Income Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6 p-4 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(219, 39, 119, 0.15), rgba(249, 115, 22, 0.15))',
                  border: '1px solid rgba(219, 39, 119, 0.3)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-pink-600" />
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                    $500 - $2,500 USD
                  </span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  <span className="font-semibold text-white">Por implementación</span> — Potencial de ingresos por proyecto
                </p>
              </motion.div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  "Aprenda una habilidad del futuro",
                  "Genere ingresos desde cualquier lugar",
                  "Trabaje con clientes internacionales",
                  "No necesita experiencia previa"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-600/10 border border-orange-500/30">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <p className="text-gray-300 text-sm md:text-base">
              <span className="font-semibold text-white">Los Flowmakers usan Bralto</span>{" "}
              para implementar sistemas de automatización en negocios
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
