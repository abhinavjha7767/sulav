"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The automation systems provided by Sulav Mechatronics have increased our production efficiency by 40%. Their technical support is top-notch.",
    author: "Amit Chauhan",
    role: "Operations Manager, TechFlow Industries",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    text: "Reliable, durable, and precise. Their CNC machines are the backbone of our workshop. Highly recommended for any serious manufacturer.",
    author: "Manisha Vashishth",
    role: "Director, Precision Engineering Ltd.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    text: "Switching to Sulav's smart machinery was the best decision for our factory. The integration was seamless and the results are visible.",
    author: "Priyanshu Singh",
    role: "CTO, Global Manufacturing Corp.",
    avatar: "https://i.pravatar.cc/150?u=robert"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black transition-colors duration-300">
      <div className="w-full mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Client <span className="text-blue-500">Feedback</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hear from the leaders who are transforming their industries with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 rounded-3xl relative shadow-none"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
