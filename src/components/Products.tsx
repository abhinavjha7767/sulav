"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench, Cpu, PenTool, Archive, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Factory, Cog, Drill, CircleDot, Disc3, Target, Printer,
  Bot, Monitor, Radio, Settings, Repeat,
  Hammer, Scissors, Ruler, GripHorizontal, FileText,
  Grid3X3, Package, Wind, Flame, Lightbulb, Fan, Thermometer, ArrowUpFromDot, Maximize
} from "lucide-react";
import Link from "next/link";
import PrecisionMeasuring from "../assets/Precision Measuring Tools.jpg";
import CircularGallery from "./CircularGallery";

const categoriesData = [
  {
    id: "industrial",
    title: "Industrial Machines",
    icon: Factory,
    description: "Heavy-duty CNC machines, lathes, milling systems, plasma cutters, drilling and grinding machines, press brakes, and 3D printers for industrial manufacturing.",
    items: [
      { name: "CNC Lathe Machine", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" },
      { name: "CNC Milling Machine", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
      { name: "Industrial Plasma Cutter", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" }
    ],
    subCategories: [
      { name: "CNC Lathe Machines", desc: "Precision turning operations", icon: Cog },
      { name: "CNC Milling Machines", desc: "Complex machining operations", icon: Settings },
      { name: "CNC Routers", desc: "Material cutting & shaping", icon: Scissors },
      { name: "Plasma Cutters", desc: "Metal cutting technology", icon: CircleDot },
      { name: "Drilling Machines", desc: "Precision hole making", icon: Drill },
      { name: "Grinding Machines", desc: "Surface finishing", icon: Disc3 },
      { name: "Press Brakes", desc: "Sheet metal bending", icon: Target },
      { name: "3D Printers", desc: "Additive manufacturing", icon: Printer }
    ],
    buttonText: "View All Industrial Products",
    toggleText: ["Show Industrial Products", "Hide Industrial Products"],
    href: "/products"
  },
  {
    id: "automation",
    title: "Mechatronics & Automation",
    icon: Cpu,
    description: "Cutting-edge automation solutions including PLC systems, HMI panels, sensors, actuators, servo motors, frequency drives, and complete automation packages for smart manufacturing.",
    items: [
      { name: "Advanced PLC Control System", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
      { name: "Servo Motor Drive", image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=1200" },
      { name: "Industrial HMI Interface", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" }
    ],
    subCategories: [
      { name: "Robotic Arms", desc: "Industrial automation", icon: Bot },
      { name: "PLC Systems", desc: "Process control", icon: Cpu },
      { name: "HMI Panels", desc: "Human-machine interface", icon: Monitor },
      { name: "Sensors", desc: "Industrial sensing", icon: Radio },
      { name: "Servo Motors", desc: "Precision motion control", icon: Settings },
      { name: "VFDs", desc: "Variable frequency drives", icon: Repeat }
    ],
    buttonText: "View All Automation Products",
    toggleText: ["Show Automation Products", "Hide Automation Products"],
    href: "/products"
  },
  {
    id: "power-tools",
    title: "Power Tools",
    icon: Wrench,
    description: "Professional-grade power tools including drills, grinders, sanders, saws, impact wrenches, and specialized equipment for construction, manufacturing, and maintenance applications.",
    items: [
      { name: "Professional Power Drill", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200" },
      { name: "Industrial Angle Grinder", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=1200" },
      { name: "Heavy Duty Impact Wrench", image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200" }
    ],
    subCategories: [
      { name: "Cordless Drills", desc: "Battery-powered drilling", icon: Drill },
      { name: "Impact Wrenches", desc: "High-torque fastening", icon: Wrench },
      { name: "Angle Grinders", desc: "Cutting and grinding", icon: Disc3 },
      { name: "Power Saws", desc: "Cutting applications", icon: Scissors },
      { name: "Rotary Hammers", desc: "Heavy-duty drilling", icon: Hammer },
      { name: "Sanders", desc: "Surface finishing", icon: PenTool }
    ],
    buttonText: "View All Power Tools",
    toggleText: ["Show Power Tools", "Hide Power Tools"],
    href: "/products"
  },
  {
    id: "hand-tools",
    title: "Hand Tools",
    icon: PenTool,
    description: "Comprehensive range of precision hand tools including wrenches, screwdrivers, pliers, measuring instruments, cutting tools, and specialized maintenance tools for professional use.",
    items: [
      { name: "Precision Measuring Tools", image: PrecisionMeasuring },
      { name: "Professional Wrench Set", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1200" },
      { name: "Insulated Screwdrivers", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200" }
    ],
    subCategories: [
      { name: "Wrench Sets", desc: "Combination & adjustable wrenches", icon: Wrench },
      { name: "Screwdriver Sets", desc: "Phillips, flathead & precision drivers", icon: PenTool },
      { name: "Pliers & Grips", desc: "Needle nose, cutting & locking pliers", icon: GripHorizontal },
      { name: "Measuring Tools", desc: "Calipers, micrometers & gauges", icon: Ruler },
      { name: "Cutting Tools", desc: "Knives, chisels & cutting implements", icon: Scissors },
      { name: "Hammers & Mallets", desc: "Ball peen, claw & specialty hammers", icon: Hammer },
      { name: "Files & Rasps", desc: "Metal & wood working files", icon: FileText },
      { name: "Clamps & Vises", desc: "C-clamps, bar clamps & bench vises", icon: Maximize }
    ],
    buttonText: "View All Hand Tools",
    toggleText: ["Show Hand Tools", "Hide Hand Tools"],
    href: "/products"
  },
  {
    id: "workshop",
    title: "Workshop Equipment",
    icon: Archive,
    description: "Complete workshop solutions including workbenches, tool storage systems, lifting equipment, compressors, welding equipment, and maintenance tools for efficient operations.",
    items: [
      { name: "Industrial Air Compressor", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1200" },
      { name: "Heavy Duty Workbench", image: "https://images.unsplash.com/photo-1502012177020-00bddf5387d8?auto=format&fit=crop&q=80&w=1200" },
      { name: "Tool Storage System", image: "https://images.unsplash.com/photo-1627448839088-348ebbb46bc3?auto=format&fit=crop&q=80&w=1200" }
    ],
    subCategories: [
      { name: "Workbenches", desc: "Heavy-duty & adjustable workbenches", icon: Grid3X3 },
      { name: "Tool Storage", desc: "Cabinets, chests & rolling toolboxes", icon: Package },
      { name: "Air Compressors", desc: "Portable & stationary compressors", icon: Wind },
      { name: "Welding Equipment", desc: "MIG, TIG & arc welding machines", icon: Flame },
      { name: "Lifting Equipment", desc: "Hoists, jacks & lifting devices", icon: ArrowUpFromDot },
      { name: "Workshop Lighting", desc: "LED work lights & shop lighting", icon: Lightbulb },
      { name: "Ventilation Systems", desc: "Exhaust fans & air filtration", icon: Fan },
      { name: "Climate Control", desc: "Heaters & cooling systems", icon: Thermometer }
    ],
    buttonText: "View All Workshop Equipment",
    toggleText: ["Show Workshop Equipment", "Hide Workshop Equipment"],
    href: "/products"
  }
];

const CategorySection = ({ category, index }: { category: any; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubCategories, setShowSubCategories] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === category.items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? category.items.length - 1 : prev - 1));
  };

  return (
    <motion.div
      id={category.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-20 w-full flex flex-col max-w-[900px] mx-auto scroll-mt-24"
    >
      {/* 1. Header & Description */}
      <div className="flex flex-col mb-4">
        <div className="flex items-center gap-2 mb-2">
          <category.icon className="w-5 h-5 text-blue-500" />
          <h3 className="text-[17px] font-semibold text-white">
            {category.title}
          </h3>
        </div>
        <p className="text-slate-400 text-[14px] leading-snug">
          {category.description}
        </p>
      </div>

      {/* 2. Photo carousel with CircularGallery */}
      <div className="w-full h-[400px] md:h-[500px] relative rounded-[14px] overflow-hidden bg-black border border-white/5 mb-6 group cursor-grab active:cursor-grabbing">
        <CircularGallery
          items={[...category.items, ...category.items, ...category.items].map((item: any) => ({
            image: typeof item.image === 'string' ? item.image : item.image.src,
            text: item.name
          }))}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          font="bold 24px var(--font-space-grotesk)"
        />
        {/* Subtle overlay gradients for depth */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* 3. Toggle button - Dark Blue styling like screenshot */}
      <div className="mt-4 flex justify-start">
        <button
          onClick={() => setShowSubCategories(!showSubCategories)}
          className="bg-[#1e3a8a] hover:bg-[#172e6d] text-white font-semibold py-[8px] px-5 rounded-md text-[13px] transition-all duration-200 flex items-center gap-2 shadow-sm"
        >
          {showSubCategories ? category.toggleText[1] : category.toggleText[0]}
        </button>
      </div>

      {/* 4. Expandable sub-categories grid - Matching card style in screenshots */}
      <AnimatePresence>
        {showSubCategories && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-none"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {category.subCategories.map((sub: any, idx: number) => {
                const SubIcon = sub.icon;
                return (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    className="group/sub bg-slate-800/40 rounded-xl p-6 flex flex-col items-center text-center 
                               border border-slate-700/30
                               hover:border-blue-200 hover:bg-slate-800 hover:shadow-md
                               transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-3">
                      <SubIcon className="w-7 h-7 text-blue-500" />
                    </div>
                    <h4 className="text-[14px] font-bold text-slate-900 dark:text-slate-100 mb-1 leading-tight group-hover/sub:text-blue-600 transition-colors">
                      {sub.name}
                    </h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      {sub.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Products = () => {
  return (
    <section id="divisions" className="py-24 relative bg-transparent backdrop-blur-[1px]">
      <div className="w-full mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            Our <span className="text-blue-500 uppercase">Divisions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8">
          {categoriesData.map((category, idx) => (
            <CategorySection key={category.id} category={category} index={idx} />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 text-center py-20 px-8 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Help Choosing the Right Product?
              </h2>
              <p className="text-blue-100 text-lg mb-10">
                Our team of industrial experts is ready to consult with you and find the perfect machinery for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 text-center inline-block">
                  Contact Us Now
                </Link>
                <Link href="/#contact" className="w-full sm:w-auto bg-blue-800/50 hover:bg-blue-800 text-white border border-blue-400/30 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all hover:-translate-y-1 text-center inline-block">
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
