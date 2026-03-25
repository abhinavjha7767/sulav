"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Globe,
  Clock,
  MessageCircle,
  CheckCircle,
  Home,
} from "lucide-react";
import GradientText from "./TextGradient";

export const Contact = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("+977");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "9779857058950";
    const fullPhone = formData.phone ? `${countryCode} ${formData.phone}` : "Not provided";
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Phone:* ${fullPhone}%0A*Company:* ${formData.company || "Not provided"}%0A*Subject:* ${formData.subject || "Not selected"}%0A*Message:*%0A${formData.message || "No message provided"}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    setIsSubmitted(true);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleSendAnother = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    setCountryCode("+977");
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-transparent backdrop-blur-[2px] transition-colors duration-300"
    >
      <div className="w-full mx-auto px-6">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center min-h-[60vh]"
            >
              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
              </motion.div>

              {/* Thank You Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Thank You!
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
              </motion.div>

              {/* Animated Particles/Decorations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3 mb-10"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={handleBackToHome}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-105"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </button>
                <button
                  onClick={handleSendAnother}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 hover:bg-blue-400 hover:text-slate-900"
                >
                  <Send className="w-5 h-5" />
                  Send Another Message
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-12 gap-12"
            >
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-none"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Send us a Message
              </GradientText>
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                    className="w-full bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-slate-900 border border-white/10 rounded-xl px-3 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none cursor-pointer min-w-[100px]"
                    >
                      <option value="+977">🇳🇵 +977</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+973">🇧🇭 +973</option>
                      <option value="+965">🇰🇼 +965</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="XXXXXXXXXX"
                      className="flex-1 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                    className="w-full bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">
                  Subject
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Request Quote">Request Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/20 active:scale-95">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              <GradientText
                colors={["#1A6FFF", "#00C2FF", "#FFFFFF", "#00C2FF", "#1A6FFF"]}
                animationSpeed={8}
                showBorder={false}
              >
                Contact Information
              </GradientText>
            </h2>

            <div className="grid gap-6">
              <InfoCard
                icon={MapPin}
                title="Our Location"
                lines={["Tilottama-9, Rupandehi", "Lumbini Province, Nepal"]}
              />
              <InfoCard
                icon={Mail}
                iconColor="bg-blue-500"
                title="Email Addresses"
                lines={[
                  "durluv.bhandari@sulavmachinery.com",
                  "info@sulavmachinery.com",
                ]}
              />
              <InfoCard
                icon={Phone}
                iconColor="bg-blue-600"
                title="Contact Details"
                lines={[
                  "Phone Number: +977-985-7058950",
                  "WhatsApp: +977-985-7058950",
                ]}
                isContact
              />
              <InfoCard
                icon={Globe}
                iconColor="bg-blue-700"
                title="Website"
                lines={["www.sulavmachinery.com"]}
              />
              <InfoCard
                icon={Clock}
                iconColor="bg-blue-800"
                title="Business Hours"
                lines={[
                  "Monday - Friday: 9:00 AM - 6:00 PM",
                  "Saturday: 9:00 AM - 4:00 PM",
                  "Sunday: Closed",
                ]}
              />
            </div>
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon: Icon,
  title,
  lines,
  iconColor = "bg-blue-600",
  isContact = false,
}: any) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-start gap-6 shadow-none hover:shadow-md transition-all group"
  >
    <div
      className={`w-14 h-14 rounded-2xl ${iconColor} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
    >
      <Icon className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-white text-lg">
        {title}
      </h4>
      <div className="space-y-1">
        {lines.map((line: string, i: number) => (
          <p
            key={i}
            className={`text-slate-400 text-sm md:text-base leading-tight ${line.includes("@") ? "text-blue-400 font-medium" : ""}`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);
