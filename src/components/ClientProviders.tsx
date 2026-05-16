"use client";

import { SplineOrbProvider } from "@/components/SplineScrollOrb";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SplineOrbProvider>{children}</SplineOrbProvider>;
}