  import type { Metadata } from "next";
  import type { ReactNode } from "react";
  import "../index.css";
  import { ClientEffects } from "@/src/components/ClientEffects";

import { Inter, Space_Grotesk, Space_Mono, Courier_Prime } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
      <html lang="en" className="scroll-smooth">
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (theme === 'dark') {
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
          className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${courierPrime.variable} antialiased selection:bg-blue-500/30 font-sans`}
        >
          <ClientEffects />
          <div className="relative z-10">
            {children}
          </div>
        </body>
      </html>
    );
  }
