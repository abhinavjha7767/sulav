"use client";

import React from "react";
import { Facebook, Globe } from "lucide-react";

export const Footer = () => {


  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center max-w-5xl mx-auto">
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/#home">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg tracking-wide uppercase">
              PRODUCTS
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/products#industrial">Industrial Machines</FooterLink>
              <FooterLink href="/products#automation">Mechatronics Solutions</FooterLink>
              <FooterLink href="/products#power-tools">Power Tools</FooterLink>
              <FooterLink href="/products#workshop">Workshop Equipment</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>
                <a
                  href="mailto:info@sulavmachinery.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@sulavmachinery.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:durluv.bhandari@sulavmachinery.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  durluv.bhandari@sulavmachinery.com
                </a>
              </li>
              <li>Tilottama-9, Rupandehi, Nepal</li>
              
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center relative">
          <p className="text-slate-500 text-sm text-center">
            © 2025 Sulav Mechatronics & Machinery. All rights reserved. Managed
            by{" "}
            <a
              href="https://www.wegrowconsultancyandsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9fcd25] dark:text-[#9fcd25] hover:underline transition-colors"
            >
              WeGrow Consultancy and Solution
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <a
      href={href}
      className="text-slate-400 text-sm hover:text-blue-400 transition-colors block"
    >
      {children}
    </a>
  </li>
);
