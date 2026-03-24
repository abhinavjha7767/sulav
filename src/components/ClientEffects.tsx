"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/src/components/CustomCursor"),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () => import("@/src/components/ScrollToTop").then(mod => mod.ScrollToTop),
  { ssr: false }
);

const WhatsAppButton = dynamic(
  () => import("@/src/components/WhatsAppButton").then(mod => mod.WhatsAppButton),
  { ssr: false }
);

const LiquidEther = dynamic(
  () => import("@/src/components/LiquidEther"),
  { ssr: false }
);

export function ClientEffects() {
  return (
    <>
      <div className="fixed inset-0 z-[40] pointer-events-none opacity-60 mix-blend-screen">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <CustomCursor />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
