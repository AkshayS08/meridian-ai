import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function HeroSection() {
  const stats = [
    "50+ Workflows Mapped",
    "2,000+ Analyst Hours Recovered",
    "Team of Investment and Leveraged Finance Bankers",
  ];

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-between pt-24 md:pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-6 md:mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#888888" }}
        >
          AI Automation for Private Equity & Venture Capital
        </motion.p>

        {/* H1 */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[44px] md:text-[72px] lg:text-[84px] leading-[1.05] text-white font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your analysts
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[44px] md:text-[72px] lg:text-[84px] leading-[1.05] font-normal"
            style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
          >
            shouldn't be doing this.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[16px] md:text-[18px] leading-[1.7] max-w-[540px] mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#AAAAAA" }}
        >
          We build AI agents that eliminate deal flow data entry, LP reporting, portfolio monitoring, and due diligence prep. Your team focuses on decisions, not data entry. Built by former investment bankers who've lived these workflows from the inside.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to={createPageUrl("Contact")}
            className="bg-white text-black text-[14px] tracking-[0.05em] px-7 py-4 hover:bg-white/90 transition-colors duration-200 text-center"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Book a Free Workflow Audit →
          </Link>
          <Link
            to={createPageUrl("CaseStudies")}
            className="border border-white text-white text-[14px] tracking-[0.05em] px-7 py-4 hover:bg-white/10 transition-colors duration-200 text-center"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            See Our Work ↓
          </Link>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="border-t border-white/20 mt-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-6 text-center text-[12px] md:text-[13px] tracking-[0.1em] uppercase text-white/50 flex items-center justify-center ${
                i < 2 ? "md:border-r md:border-white/20" : ""
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {stat}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}