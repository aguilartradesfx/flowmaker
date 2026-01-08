"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Users, 
  Bot, 
  Clock, 
  DollarSign, 
  TrendingDown, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Zap,
  Brain,
  Target
} from "lucide-react";
import { useMobileDetect } from "@/hooks/use-mobile-detect";

const comparisons = [
  {
    id: "response-time",
    icon: Clock,
    title: "Tiempo de Respuesta",
    human: {
      stat: "2-24 horas",
      description: "Depende de horarios laborales, descansos, y disponibilidad. Los fines de semana y noches, sus prospectos esperan.",
      problems: [
        "Los prospectos contactan a su competencia mientras esperan",
        "El 78% de los clientes compran al primero que responde",
        "Pierde leads calientes que se enfrían esperando"
      ]
    },
    ai: {
      stat: "< 3 segundos",
      description: "Respuesta instantánea, 24 horas, 7 días, 365 días del año. Sin importar la hora o el día.",
      benefits: [
        "Captura leads cuando están más interesados",
        "Multiplica sus oportunidades de venta",
        "Nunca más pierde un prospecto por demora"
      ]
    }
  },
  {
    id: "cost",
    icon: DollarSign,
    title: "Costo Mensual",
    human: {
      stat: "$1,200 - $5,000+",
      description: "Salarios, prestaciones, capacitación, rotación de personal, espacio de oficina, equipos y más costos ocultos.",
      problems: [
        "Un solo empleado cuesta más de $1,200/mes todo incluido",
        "La rotación genera costos de contratación constantes",
        "Necesita supervisores para mantener calidad"
      ]
    },
    ai: {
      stat: "Desde $0",
      description: "Sistema completo funcionando 24/7. Comience con una prueba gratuita de 14 días sin compromiso.",
      benefits: [
        "Ahorra +90% comparado con un equipo humano",
        "Sin costos ocultos ni sorpresas",
        "Escala sin aumentar costos proporcionalmente"
      ]
    }
  },
  {
    id: "scalability",
    icon: TrendingUp,
    title: "Capacidad de Escalar",
    human: {
      stat: "Limitada",
      description: "Cada empleado solo puede manejar 20-50 conversaciones al día. Escalar significa contratar más personas.",
      problems: [
        "Escalar = más nómina, más problemas",
        "Capacidad limitada por persona",
        "Calidad disminuye con el volumen"
      ]
    },
    ai: {
      stat: "Ilimitada",
      description: "El mismo sistema maneja 10 o 10,000 conversaciones simultáneas con la misma calidad.",
      benefits: [
        "Escala instantáneamente sin contratar",
        "Calidad consistente a cualquier volumen",
        "Crece sin límites operativos"
      ]
    }
  },
  {
    id: "consistency",
    icon: Target,
    title: "Consistencia",
    human: {
      stat: "Variable",
      description: "El rendimiento depende del ánimo, el día, problemas personales y nivel de entrenamiento de cada persona.",
      problems: [
        "Lunes diferentes a viernes",
        "Cada empleado tiene su estilo",
        "Difícil mantener scripts y procesos"
      ]
    },
    ai: {
      stat: "100% Consistente",
      description: "Siempre el mismo nivel de atención, los mismos mensajes, las mismas estrategias de conversión.",
      benefits: [
        "Mensaje de marca siempre alineado",
        "Procesos exactos cada vez",
        "Resultados predecibles y medibles"
      ]
    }
  },
  {
    id: "learning",
    icon: Brain,
    title: "Aprendizaje y Mejora",
    human: {
      stat: "Lento",
      description: "Requiere meses de capacitación. Cuando un empleado se va, el conocimiento se va con él.",
      problems: [
        "3-6 meses para dominar el puesto",
        "El conocimiento se pierde con la rotación",
        "Difícil implementar mejoras a todo el equipo"
      ]
    },
    ai: {
      stat: "Instantáneo",
      description: "Actualiza una vez, aplica a todo el sistema. Mejoras continuas basadas en datos reales.",
      benefits: [
        "Mejoras aplicadas al instante",
        "El conocimiento nunca se pierde",
        "Optimización constante con datos"
      ]
    }
  }
];

function ComparisonCard({ item, isExpanded, onToggle, index }: { 
  item: typeof comparisons[0]; 
  isExpanded: boolean; 
  onToggle: () => void;
  index: number;
}) {
  const isMobile = useMobileDetect();
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-4 md:p-6 rounded-2xl transition-all duration-300 ${
          isExpanded 
            ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 border-orange-500/30' 
            : 'bg-white/5 hover:bg-white/10 border-white/10'
        } border`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div 
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                isExpanded 
                  ? 'bg-gradient-to-r from-orange-500/30 to-purple-500/30' 
                  : 'bg-white/10'
              }`}
            >
              <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isExpanded ? 'text-orange-400' : 'text-gray-400'}`} />
            </div>
            <div>
              <h3 className={`font-bold text-white ${isMobile ? 'text-base' : 'text-lg'}`}>
                {item.title}
              </h3>
              <div className={`flex items-center gap-2 md:gap-4 mt-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                <span className="text-red-400 flex items-center gap-1">
                  <Users className="w-3 h-3 md:w-4 md:h-4" />
                  {item.human.stat}
                </span>
                <span className="text-gray-500">vs</span>
                <span className="text-green-400 flex items-center gap-1">
                  <Bot className="w-3 h-3 md:w-4 md:h-4" />
                  {item.ai.stat}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${isExpanded ? 'text-orange-400' : 'text-gray-400'}`} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-6'} p-4 md:p-6`}>
              {/* Human Team */}
              <div 
                className="p-4 md:p-5 rounded-xl"
                style={{ 
                  background: "rgba(239, 68, 68, 0.05)",
                  border: "1px solid rgba(239, 68, 68, 0.2)"
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h4 className={`font-semibold text-red-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Con Equipo Humano
                  </h4>
                </div>
                <p className={`text-gray-400 mb-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  {item.human.description}
                </p>
                <ul className="space-y-2">
                  {item.human.problems.map((problem, i) => (
                    <li key={i} className={`flex items-start gap-2 text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      <TrendingDown className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI System */}
              <div 
                className="p-4 md:p-5 rounded-xl"
                style={{ 
                  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(168, 85, 247, 0.05))",
                  border: "1px solid rgba(34, 197, 94, 0.2)"
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className={`font-semibold text-green-400 ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Con Sistema Inteligente
                  </h4>
                </div>
                <p className={`text-gray-400 mb-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  {item.ai.description}
                </p>
                <ul className="space-y-2">
                  {item.ai.benefits.map((benefit, i) => (
                    <li key={i} className={`flex items-start gap-2 text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      <Zap className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function WhyAISystemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMobileDetect();
  const [expandedId, setExpandedId] = useState<string | null>("response-time");

  return (
    <section
      id="por-que-ia"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6">
            La Verdad Incómoda
          </span>
          <h2 className={`font-bold text-white mb-4 ${isMobile ? 'text-2xl px-2' : 'text-4xl md:text-5xl'}`}>
            <span className="text-red-400">Equipos Humanos</span>
            {" "}vs{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Sistemas Inteligentes
            </span>
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${isMobile ? 'text-sm px-4' : 'text-lg'}`}>
            Haga clic en cada categoría para descubrir por qué los sistemas con IA están reemplazando equipos completos
          </p>
        </motion.div>

        {/* Interactive Comparison Cards */}
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {comparisons.map((item, index) => (
            <ComparisonCard
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedId === item.id}
              onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className={`text-gray-300 mb-2 ${isMobile ? 'text-base' : 'text-xl'}`}>
            La pregunta no es <span className="text-white font-semibold">si</span> deberías automatizar...
          </p>
          <p className={`text-white font-bold ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
            Es <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">cuánto estás perdiendo</span> por no hacerlo aún.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
