"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const leadStatus = localStorage.getItem("lead_status");
      
      // Si está descalificado y no está en la página de descalificado, redirigir
      if (leadStatus === "descalificado" && pathname !== "/descalificado") {
        router.replace("/descalificado");
      }
    }
  }, [pathname, router]);

  return <>{children}</>;
}
