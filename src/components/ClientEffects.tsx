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

export function ClientEffects() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
