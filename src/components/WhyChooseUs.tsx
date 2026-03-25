"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Award } from 'lucide-react';
import GradientText from "./TextGradient";

const reasons = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Every machine undergoes rigorous stress testing to meet international safety and performance standards."
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    desc: "We integrate the latest AI and IoT capabilities into our automation systems for smarter production."
  },
  {
    icon: Clock,
    title: "Rapid Support",
    desc: "Our technical response team is available 24/7 to ensure your production line never stops."
  },
  {
    icon: Award,
    title: "Industry Experts",
    desc: "With over a decade of experience, we provide consultation that optimizes your entire workflow."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black/20 transition-colors duration-300">
      <div className="w-full mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <GradientText
              colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
              animationSpeed={8}
              showBorder={false}
            >
              Why Choose Sulav
            </GradientText>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just sell machines; we build long-term partnerships that drive industrial growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-all group shadow-none"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
