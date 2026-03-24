"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5",
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
          : "bg-transparent",
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1A6FFF] flex items-center justify-center font-sans font-black text-2xl sm:text-3xl text-white transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(26,111,255,0.4)]">
              S
            </div>
            <div className="flex flex-col justify-center leading-none -space-y-0.5">
              <span className="font-vintage font-black text-xl sm:text-2xl md:text-3xl tracking-[0.08em] text-white uppercase">
                SULAV
              </span>
              <span className="font-vintage text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.2em] text-blue-400 uppercase font-bold">
                MECHATRONICS
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/#home">HOME</NavLink>
          <NavLink href="/products">PRODUCTS</NavLink>
          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/#contact">CONTACT</NavLink>
        </div>

        <div className="flex items-center gap-6">
          
          <Link 
            href="/#contact" 
            onClick={(e) => {
              if (pathname === '/' || pathname === '') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:flex items-center gap-2 px-8 py-3 bg-[#1A6FFF] hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest transition-all"
          >
            GET QUOTE
          </Link>
          <button
            className="md:hidden p-2 text-white/70 hover:text-[#1A6FFF]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/5 mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <a
                href="/#home"
                className="text-lg font-bold text-white uppercase tracking-widest"
              >
                Home
              </a>
              <a
                href="/products"
                className="text-lg font-bold text-white uppercase tracking-widest"
              >
                Products
              </a>
              <a
                href="/about"
                className="text-lg font-bold text-white uppercase tracking-widest"
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-lg font-bold text-white uppercase tracking-widest"
              >
                Contact
              </a>
              <Link 
                href="/#contact" 
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (pathname === '/' || pathname === '') {
                    e.preventDefault();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }} 
                className="w-full py-4 text-center bg-[#1A6FFF] text-white font-bold uppercase tracking-widest block"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-[14px] font-bold text-white/70 hover:text-white uppercase tracking-[0.15em] transition-all relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1A6FFF] transition-all group-hover:w-full" />
  </a>
);
