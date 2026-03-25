"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Cpu,
  Wrench,
  Hammer,
  Factory,
  Truck,
  Zap,
  ShieldCheck,
  Cog,
  Sprout
} from 'lucide-react';
import workshopImg from "../assets/Workshop Equipment.jpg";
import GradientText from "./TextGradient";

const categories = [
  {
    title: "Industrial Machines",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    desc: "Heavy-duty CNC, lathes, and milling systems."
  },
  {
    title: "Automation",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    desc: "Robotic arms and smart control systems."
  },
  {
    title: "Power Tools",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    desc: "Professional grade drills, saws, and grinders."
  },
  {
    title: "Hand Tools",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    desc: "Precision wrenches, hammers, and toolkits."
  },
  {
    title: "Workshop Equipment",
    icon: Wrench,
    image: workshopImg,
    desc: "Lifts, compressors, and storage solutions."
  },
  {
    title: "Agricultural",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800",
    desc: "Modern farming machinery and equipment."
  },
  {
    title: "Safety Gear",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=800",
    desc: "PPE, helmets, and industrial safety kits."
  },
  {
    title: "Spare Parts",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    desc: "Genuine components for all machinery."
  },
  {
    title: "Electrical",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800",
    desc: "Switchgears, cables, and power units."
  }
];

export const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-black backdrop-blur-[1px] transition-colors duration-300">
      <div className="w-full mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            <GradientText
              colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
              animationSpeed={8}
              showBorder={false}
            >
              Product Categories
            </GradientText>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive range of industrial equipment designed for maximum efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.title} {...cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string | typeof workshopImg;
  desc: string;
  index: number;
}

const CategoryCard = ({ title, icon: Icon, image, desc, index }: CategoryCardProps) => {
  const imageSrc = typeof image === 'string' ? image : image.src;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-72 md:h-80 rounded-[2rem] overflow-hidden cursor-pointer bg-slate-800"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity group-hover:opacity-90" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2 border-white/20">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
