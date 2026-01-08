"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { useEffect, createContext, useContext, useState, ReactNode } from "react";

interface FormPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const FormPopupContext = createContext<FormPopupContextType | undefined>(undefined);

export function useFormPopup() {
  const context = useContext(FormPopupContext);
  if (!context) {
    throw new Error("useFormPopup must be used within a FormPopupProvider");
  }
  return context;
}

export function FormPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <FormPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
      <FormPopup isOpen={isOpen} onClose={closePopup} />
    </FormPopupContext.Provider>
  );
}

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function FormPopup({ isOpen, onClose }: FormPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Load the form embed script
      const script = document.createElement("script");
      script.src = "https://link.bralto.io/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);

      // Prevent body scroll when popup is open
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
        try {
          document.body.removeChild(script);
        } catch (e) {
          // Script may have already been removed
        }
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-hidden rounded-2xl"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-500/30 rounded-3xl blur-2xl pointer-events-none" />

            {/* Content container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0D0D0D] to-[#111111] shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header */}
              <div className="p-4 sm:p-6 bg-[#0D0D0D]/50 border-b border-white/10">
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Evento en Vivo - 22 de Enero
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Reservar mi lugar{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                          GRATIS
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">Solo toma 30 segundos</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-md">
                    Complete el formulario y asegure su acceso al lanzamiento exclusivo de Bralto el 22 de Enero a las 7:00 PM
                  </p>
                </div>
              </div>

              {/* Form iframe */}
              <div className="p-4 sm:p-6">
                <iframe
                  src="https://link.bralto.io/widget/form/NhHrFaAeIszUyobGBWhb"
                  className="w-full border-none rounded"
                  style={{ height: "400px" }}
                  id="popup-NhHrFaAeIszUyobGBWhb"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 17"
                  data-height="400"
                  data-layout-iframe-id="popup-NhHrFaAeIszUyobGBWhb"
                  data-form-id="NhHrFaAeIszUyobGBWhb"
                  title="Form 17"
                />
              </div>

              {/* Trust indicators */}
              <div className="p-3 sm:p-4 border-t border-white/10 bg-[#0D0D0D]/50">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Demo en vivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Respuesta inmediata</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default FormPopup;
