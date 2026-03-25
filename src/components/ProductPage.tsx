"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  ArrowUp,
  Star,
  Shield,
  Zap,
  Wrench,
  Award,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import ChromaGrid from "./ChromaGrid";
import GradientText from './TextGradient';
import HeavyDuty from "../assets/Heavy Duty Impact Wrench.jpg";
import Precision from "../assets/Precision.jpg";
import ProSafety from "../assets/Pro Safety Harness.jpg";
import IndustrialMotor from "../assets/Industrial Motor 50HP.jpg";
import WorkshopExtractionSystem from "../assets/Workshop.jpg";

const categories = [
  "All",
  "Industrial",
  "Automation",
  "Power Tools",
  "Hand Tools",
  "Workshop",
  "Safety",
  "Electrical",
];

const allProducts = [
  {
    id: 1,
    name: "Titan-X CNC Milling Machine",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    specs: "5-Axis, 24k RPM, Auto-Tool Changer",
    featured: true,
  },
  {
    id: 2,
    name: "RoboArm Pro 500",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800",
    specs: "15kg Payload, 0.02mm Precision",
  },
  {
    id: 3,
    name: "Industrial Fiber Laser",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    specs: "4kW Power, 1500x3000mm Bed",
  },
  {
    id: 4,
    name: "Heavy Duty Impact Wrench",
    category: "Power Tools",
    image: HeavyDuty,
    specs: "1000Nm Torque, Brushless Motor",
  },
  {
    id: 5,
    name: "Precision Caliper Set",
    category: "Hand Tools",
    image: Precision,
    specs: "0.01mm Accuracy, Digital Display",
  },
  {
    id: 6,
    name: "Workshop Extraction System",
    category: "Workshop",
    image: WorkshopExtractionSystem,
    specs: "HEPA Filter, 2000 CFM",
  },
  {
    id: 7,
    name: "Pro Safety Harness",
    category: "Safety",
    image: ProSafety,
    specs: "Fall Protection, OSHA Compliant",
  },
  {
    id: 8,
    name: "Industrial Motor 50HP",
    category: "Electrical",
    image: IndustrialMotor,
    specs: "3-Phase, 1800 RPM",
  },
];

const stats = [
  {
    label: "Products",
    value: 500,
    suffix: "+",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    label: "Years Experience",
    value: 10,
    suffix: "+",
    icon: <Award className="w-5 h-5" />,
  },
  {
    label: "Clients WorldWide",
    value: 1000,
    suffix: "+",
    icon: <Shield className="w-5 h-5" />,
  },
];

export const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="products"
      className="relative bg-transparent min-h-screen overflow-hidden font-sans"
    >
      {/* 1. HERO / HEADER SECTION */}
      <div className="relative w-full pt-32 pb-20 px-6 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 opacity-90 z-0 transition-colors duration-500"></div>
          {/* Subtle Particles / Light waves */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)] bg-[length:100%_100%] dark:opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            <GradientText
              colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
              animationSpeed={8}
              showBorder={false}
            >
              Explore Our Product Range
            </GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto font-light"
          >
            Precision Tools & Industrial Solutions for Every Need
          </motion.p>

          {/* Floating Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-md border border-white/10 p-2 rounded-full flex items-center shadow-2xl">
              <Search className="w-6 h-6 text-white/70 ml-4" />
              <input
                type="text"
                placeholder="Search products, categories, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder-white/50 text-lg"
              />
              <button
                onClick={() =>
                  document
                    .getElementById("products-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full mx-auto px-6 -mt-10 relative z-20 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-slate-900 rounded-3xl p-1 md:p-2 shadow-2xl shadow-blue-900/20 border border-slate-800"
        >
          <div className="flex flex-col lg:flex-row items-stretch rounded-[22px] overflow-hidden bg-gradient-to-br from-slate-900 to-black relative">
            <div className="w-full lg:w-3/5 p-4 lg:p-10 relative overflow-hidden group/img">
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src={
                  typeof allProducts[0].image === "string"
                    ? allProducts[0].image
                    : allProducts[0].image.src
                }
                alt="Featured Product"
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-xl relative z-0 origin-center transition-transform duration-1000 group-hover/img:scale-105"
              />
            </div>
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-12 h-1 bg-blue-600 mb-8" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-[0.9] tracking-tighter">
                {allProducts[0].name}
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Experience unparalleled precision with our flagship CNC machine.
                Designed for high-volume industrial manufacturing, it delivers
                aerospace-grade tolerances 24/7.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-slate-800 text-blue-400 border border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm">
                  <Zap className="w-4 h-4" /> 5-Axis Movement
                </span>
                <span className="bg-slate-800 text-blue-400 border border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm">
                  <Wrench className="w-4 h-4" /> 24k RPM Spindle
                </span>
              </div>
              <div className="flex items-center gap-4"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. SMART FILTER + SEARCH BAR (STICKY) */}
      <div className="sticky top-[72px] lg:top-[88px] z-40 w-full py-4 bg-slate-950/80 backdrop-blur-xl border-y border-white/5 shadow-sm transition-all duration-300">
        <div className="w-full mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center gap-2 min-w-max mx-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                  activeCategory === cat
                    ? "text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRODUCT GALLERY */}
      <div
        id="products-grid"
        className="w-full mb-24 relative bg-black/70 border-y border-white/5 shadow-2xl transition-all duration-500"
        style={{ minHeight: "850px", position: "relative" }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <ChromaGrid
                items={(filteredProducts.length > 0 ? filteredProducts : allProducts).map((product, idx) => {
                  const colors = [
                    { border: "#3B82F6", grad: "linear-gradient(145deg, #3B82F6, #000)" }, // Blue
                    { border: "#10B981", grad: "linear-gradient(180deg, #10B981, #000)" }, // Emerald
                    { border: "#8B5CF6", grad: "linear-gradient(145deg, #8B5CF6, #000)" }, // Violet
                    { border: "#06B6D4", grad: "linear-gradient(220deg, #06B6D4, #000)" }, // Cyan
                  ];
                  const c = colors[idx % colors.length];
                  
                  return {
                    image: typeof product.image === "string" ? product.image : product.image.src,
                    title: product.name,
                    subtitle: product.category,
                    handle: product.specs,
                    borderColor: c.border,
                    gradient: c.grad,
                    url: "#"
                  };
                })}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center text-center p-6"
            >
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No products found
              </h3>
              <p className="text-slate-400">
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 text-blue-500 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle overlay gradients for depth */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* 6. TRUST / STATS STRIP */}
      <div className="w-full bg-black py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

        <div className="w-full mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center w-full max-w-[240px] sm:max-w-none sm:justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-6 shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-vintage font-bold text-white mb-1 flex items-baseline">
                      <AnimatedCounter from={0} to={stat.value} />
                      <span className="text-blue-400 ml-1">{stat.suffix}</span>
                    </div>
                    <div className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;