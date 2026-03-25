"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCounter } from "./AnimatedCounter";
import GradientText from "./TextGradient";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-black backdrop-blur-[1px] transition-colors duration-300">
      <div className="w-full mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Facility"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-3xl shadow-2xl hidden md:block border border-white/20">
            <div className="text-4xl font-display font-bold text-blue-500 mb-1 flex items-baseline">
              <AnimatedCounter from={0} to={10} />
              <span className="ml-1">+</span>
            </div>
            <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Years of Excellence</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            <GradientText
              colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
              animationSpeed={8}
              showBorder={false}
              className="!justify-start !mx-0"
            >
              Leading the Way in <br className="hidden md:block" /> Industrial Innovation
            </GradientText>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Sulav Mechatronics & Machinery is a premier provider of industrial automation and mechanical solutions. We specialize in delivering high-performance machinery that empowers businesses to scale their production with precision and speed.
          </p>

          <div className="space-y-4 mb-10">
            <FeatureItem text="Advanced Mechatronics Engineering" />
            <FeatureItem text="Customized Automation Workflows" />
            <FeatureItem text="Global Standard Quality Assurance" />
            <FeatureItem text="24/7 Technical Support & Maintenance" />
          </div>

          <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all inline-block">
            Learn Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
      <CheckCircle2 className="w-4 h-4 text-blue-400" />
    </div>
    <span className="text-slate-300 font-medium">{text}</span>
  </div>
);
