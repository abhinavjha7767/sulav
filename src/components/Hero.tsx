 "use client";

import React from "react";
import { motion } from "framer-motion";
import GradientText from "./TextGradient";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4 md:px-6 pt-20 md:pt-32">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          poster="/electronics_workshop_hero_1774336243668.png"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* 2. Main Content Stack */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center justify-center flex-grow py-12 px-2">
        {/* Animated Eyebrow / Welcome */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-6"
        >
          <GradientText
            colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
            animationSpeed={6}
            showBorder={false}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-[0.04em] uppercase leading-[1.1] text-center"
          >
            Welcome to <br className="sm:hidden" /> Sulav Mechatronics
          </GradientText>
        </motion.div>

        {/* Pill-shaped Sub-heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="inline-block px-8 py-2 md:px-12 md:py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-md mb-10"
        >
          <span className="text-[10px] md:text-[20px] lg:text-[20px] font-vintage uppercase tracking-[0.4em] text-blue-400">
            Precision Engineering & Industrial Excellence
          </span>
        </motion.div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 md:mb-12 font-light px-4"
        >
          "From advanced mechatronic systems to robust industrial machinery, 
          we deliver the technical superiority your operations require – 
          with unwavering reliability and state-of-the-art materials."
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#1A6FFF] hover:bg-blue-600 text-white font-bold uppercase tracking-widest transition-all rounded-full text-sm shadow-[0_10px_30px_-10px_rgba(26,111,255,0.5)]"
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-10 py-4 border border-white/40 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all rounded-full text-sm"
          >
            View Products
          </Link>
        </motion.div>
      </div>

      {/* 3. Subtle Animated Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 select-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-white"
        />
      </div>
    </section>
  );
};

export default Hero;
