"use client";
import { LaunchHeroSection } from "@/components/hero/LaunchHeroSection";
import { WhatYouWillLearnSection } from "@/components/sections/WhatYouWillLearnSection";
import { WhyAISystemsSection } from "@/components/sections/WhyAISystemsSection";
import { EventDateSection } from "@/components/sections/EventDateSection";
import { BraltoFeaturesSection } from "@/components/sections/BraltoFeaturesSection";
import { PlatformsCentralizationSection } from "@/components/sections/PlatformsCentralizationSection";
import { DoneForYouSection } from "@/components/sections/DoneForYouSection";
import { AutomatedPipelineBoard } from "@/components/sections/AutomatedPipelineBoard";
import { EventCTASection } from "@/components/sections/EventCTASection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { VoiceWidget } from "@/components/VoiceWidget";
import { FormPopupProvider } from "@/components/ui/FormPopup";

export default function Page() {
  return (
    <FormPopupProvider>
      <main className="min-h-screen bg-black">
        {/* Hero - Lanzamiento 22 de Enero */}
        <LaunchHeroSection />
        
        {/* Lo que aprenderás en el evento */}
        <WhatYouWillLearnSection />
        
        {/* Por qué sistemas con IA - Interactivo */}
        <WhyAISystemsSection />
        
        {/* Fecha, hora y para quién es */}
        <EventDateSection />
        
        {/* Centralización de plataformas */}
        <PlatformsCentralizationSection />
        
        {/* Características de Bralto */}
        <BraltoFeaturesSection />
        
        {/* CTA del evento */}
        <EventCTASection />
        
        {/* Prueba social */}
        <TrustSection />
      
        {/* Logo at the bottom */}
        <div
          className="w-full flex justify-center py-8 border-t"
          style={{ background: '#0D0D0D', borderColor: 'rgba(255,255,255,0.08)' }}>
          <img
            src="https://storage.googleapis.com/msgsndr/hdVpvshZP3RGJQbxx8GA/media/6823c9f977a9d4672be32ac7.png"
            alt="Bralto Logo"
            className="h-8 w-auto opacity-70" />
        </div>
        <FloatingCTA />
        <VoiceWidget />
      </main>
    </FormPopupProvider>
  );
}
