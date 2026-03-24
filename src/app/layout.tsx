  import type { Metadata } from "next";
  import type { ReactNode } from "react";
  import "../index.css";
  import { ClientEffects } from "@/src/components/ClientEffects";

import { Inter, Space_Grotesk, Space_Mono, Courier_Prime, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-vintage",
  display: "swap",
});

  export const metadata: Metadata = {
    title: "Sulav Mechatronics & Machinery | Industrial Solutions",
    description: "Premium industrial B2B platform for machinery, automation, and industrial equipment.",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
    return (
      <html lang="en" className={cn("scroll-smooth", "font-sans", "dark", geist.variable)}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'dark' || !theme) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } catch (e) {}
                })();
              `,
            }}
          />
        </head>
        <body
          className={`${geist.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${courierPrime.variable} antialiased bg-black text-white selection:bg-blue-500/30 font-sans`}
        >
          <ClientEffects />
          <div className="relative z-10">
            {children}
          </div>
        </body>
      </html>
    );
  }
