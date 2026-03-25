"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Shield,
  Star,
  Users,
  Cpu,
  CheckCircle2,
  Award,
  History,
  Briefcase,
  Zap,
  Globe,
  Settings,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import GradientText from './TextGradient';

export const AboutPage = () => {
  return (
    <div className="pt-20 blueprint-grid min-h-screen">
      {/* 1. PREMIUM FUTURISTIC HERO SECTION */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-slate-950 px-6 pt-20">
        {/* Fututistic Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Blueprint Grid with Pulsing Lines */}
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          
          {/* Glowing Accents */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#1A6FFF]/10 rounded-full blur-[100px]" 
          />

          {/* Floating Particle Simulation (CSS based) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-12">
          {/* LEFT SIDE: CONTENT */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
            >
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-blue-400 uppercase">
                ESTABLISHED 2014 • INDUSTRY LEADERS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter"
            >
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                ENGINEERING THE FUTURE OF INDUSTRY.
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-400 max-w-lg leading-relaxed font-light"
            >
              Sulav Mechatronics is a global leader in precision engineering, 
              delivering state-of-the-art industrial solutions for the next generation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link 
                href="/products" 
                className="group relative px-8 py-4 bg-blue-600 overflow-hidden text-white font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative z-10 uppercase tracking-widest text-xs flex items-center gap-2">
                  Explore Our Products <Zap className="w-4 h-4" />
                </span>
              </Link>
              <Link 
                href="/#contact" 
                className="px-8 py-4 border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-md text-white font-bold transition-all rounded-sm uppercase tracking-widest text-xs"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* TRUST BADGES / QUICK STATS */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5 w-full max-w-md"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white leading-none">10+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white leading-none">500+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-white leading-none">ISO</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Certified</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMMERSIVE VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center p-12"
          >
            {/* The "Mechanical Core" Visual */}
            <div className="relative w-full aspect-square max-w-lg">
              {/* Outer Rotating Gear / Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] border border-blue-500/20 rounded-full border-dashed"
              />
              
              {/* Central Glowing Core */}
              <div className="absolute inset-[25%] bg-gradient-to-br from-blue-600 to-blue-900 rounded-[2rem] shadow-[0_0_100px_rgba(37,99,235,0.3)] flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-x-0 h-[200%] bg-gradient-to-t from-transparent via-white/20 to-transparent top-[-100%] group-hover:top-[100%] transition-all duration-1000" />
                 <Cpu className="w-32 h-32 text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
              </div>

              {/* Orbital Tech Orbs */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: angle + 360,
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-500/40 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Telemetry Data (Floating Text) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-4 border-r border-t border-blue-500/30 font-mono text-[8px] text-blue-400 space-y-1"
              >
               
              </motion.div>
            </div>
          </motion.div>
        </div>

       
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-24 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-blue-500/5 z-0" />
        <div className="w-full mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                    <GradientText
                      colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                      animationSpeed={8}
                      showBorder={false}
                    >
                      Mission Statement
                    </GradientText>
                  </h2>
                </div>
                <p className="text-xl text-slate-200 leading-relaxed text-center">
                  To provide cutting-edge industrial machinery and mechatronic
                  solutions that empower businesses to achieve operational
                  excellence and drive innovation in their respective
                  industries.
                </p>
              </div>

              <div>
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                    <GradientText
                      colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                      animationSpeed={8}
                      showBorder={false}
                    >
                      Our Vision
                    </GradientText>
                  </h2>
                </div>
                <p className="text-xl text-slate-200 leading-relaxed text-center">
                  To be Nepal's leading provider of industrial machinery and
                  automation solutions, recognized for our commitment to
                  quality, innovation, and customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-x-0 inset-y-0 bg-blue-600/10 rounded-full blur-[80px]" />
              <div className="relative z-10 w-full h-full glass-panel flex items-center justify-center rounded-[3rem] shadow-2xl overflow-hidden border-2 border-white/20">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-600/30 mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Globe className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white italic">
                    SULAV
                  </h3>
                  <p className="text-xs uppercase tracking-[0.4em] font-bold text-blue-600 dark:text-blue-400 mt-2">
                    Industrial Group
                  </p>
                </div>
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 border border-blue-500/20 rounded-full border-dashed"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-20 -left-20 w-60 h-60 border border-blue-500/10 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 relative overflow-hidden">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Core Values
              </GradientText>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Shield}
              title="Quality"
              desc="We never compromise on the quality of our products and services."
              color="blue"
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              desc="We continuously seek innovative solutions for industrial challenges."
              color="indigo"
            />
            <ValueCard
              icon={Zap}
              title="Reliability"
              desc="Our customers can depend on us for consistent performance."
              color="emerald"
            />
            <ValueCard
              icon={Star}
              title="Excellence"
              desc="We strive for excellence in everything we do."
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* 4. TIMELINE / HISTORY */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-40 z-0" />
        <div className="w-full mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Our Journey
              </GradientText>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-600/20 md:-translate-x-1/2" />

            <TimelineItem
              icon={Rocket}
              title="Company Foundation"
              desc="Established Sulav Mechatronics & Machinery with a vision to revolutionize industrial solutions in Nepal."
              align="left"
            />
            <TimelineItem
              icon={Cpu}
              title="Business Expansion"
              desc="Expanded our product range to include advanced mechatronics and automation systems, serving diverse industries."
              align="right"
            />
            <TimelineItem
              icon={Award}
              title="Quality Certifications"
              desc="Achieved ISO certifications and established partnerships with leading international manufacturers."
              align="left"
            />
            <TimelineItem
              icon={Globe}
              title="Regional Leadership"
              desc="Became a trusted partner for industries across Nepal and neighboring regions, serving hundreds of satisfied customers."
              align="right"
            />
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section className="py-24">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Certifications & Standards
              </GradientText>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Our commitment to international quality and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CertCard
              title="ISO 9001:2015"
              desc="Quality Management System certification ensuring consistent product quality and customer satisfaction."
            />
            <CertCard
              title="ISO 14001:2015"
              desc="Environmental Management System certification demonstrating our commitment to environmental responsibility."
            />
            <CertCard
              title="ISO 45001:2018"
              desc="Occupational Health and Safety Management System ensuring workplace safety for all our operations."
            />
            <CertCard
              title="CE Compliance"
              desc="European Conformity marking ensuring our products meet EU safety, health, and environmental protection standards."
              icon={CheckCircle2}
            />
          </div>
        </div>
      </section>

      {/* 6. OUR EXPERT TEAM */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-40 z-0" />
        <div className="w-full mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Our Expert Team
              </GradientText>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamDept
              icon={Settings}
              title="Engineering Department"
              desc="Our experienced engineers provide technical expertise and innovative solutions for complex industrial challenges."
            />
            <TeamDept
              icon={Users}
              title="Technical Support"
              desc="Dedicated technical support team ensuring optimal performance and maintenance of all equipment and systems."
            />
            <TeamDept
              icon={Briefcase}
              title="Sales & Customer Service"
              desc="Professional sales team committed to understanding customer needs and providing tailored industrial solutions."
            />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24">
        <div className="w-full mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-12 glass-panel rounded-[3rem] shadow-2xl border-2 border-blue-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Ready to Experience Excellence?
              </GradientText>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
              Discover our comprehensive range of industrial solutions and take
              your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/30 active:scale-95">
                View Our Products
              </Link>
              <Link href="/#contact" className="inline-block px-10 py-4 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold rounded-2xl transition-all">
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, desc, color }: any) => {
  const colorStyles: any = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
  };
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-panel p-8 rounded-[2rem] border border-white/10 dark:border-white/5 shadow-lg flex flex-col items-center text-center group"
    >
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform",
          colorStyles[color],
        )}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-sm text-slate-200 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

const TimelineItem = ({ icon: Icon, title, desc, align }: any) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={cn(
      "relative mb-12 last:mb-0 w-full md:w-1/2",
      align === "left" ? "md:pr-16 md:ml-0" : "md:pl-16 md:ml-auto",
    )}
  >
    {/* Node */}
    <div
      className={cn(
        "absolute top-0 w-12 h-12 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-lg z-10",
        align === "left"
          ? "-left-14 md:-right-6 md:left-auto"
          : "-left-14 md:-left-6",
      )}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>

    <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-xl">
      <h3 className="text-xl font-display font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-200 leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

const CertCard = ({ title, desc, icon: Icon = Award }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 p-8 rounded-[2rem] border border-white/5 text-center shadow-sm"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-500">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-3">
      {title}
    </h3>
    <p className="text-sm text-slate-200 leading-loose">
      {desc}
    </p>
  </motion.div>
);

const TeamDept = ({ icon: Icon, title, desc }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-panel p-8 rounded-[2.5rem] border border-white/10 shadow-xl flex flex-col items-center text-center group"
  >
    <div className="w-16 h-16 rounded-3xl bg-blue-600/10 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-4">
      {title}
    </h3>
    <p className="text-base text-slate-200 leading-normal">
      {desc}
    </p>
  </motion.div>
);
