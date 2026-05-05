import React from "react";
import FounderSection from "../components/home/FounderSection";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <section className="bg-black pt-28 md:pt-36 pb-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] tracking-[0.15em] uppercase mb-5"
            style={{ color: "#666666" }}
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[52px] leading-[1.15] text-white max-w-[700px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A team built from the inside of these workflows
          </motion.h1>
        </div>
      </section>

      <FounderSection />

      {/* CTA */}
      <section className="bg-black border-t border-white/10 py-24 md:py-32">
        <div className="max-w-[600px] mx-auto text-center px-6">
          <h2
            className="text-[30px] md:text-[38px] leading-[1.25] text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's talk about your workflows
          </h2>
          <Link
            to={createPageUrl("Contact")}
            className="inline-block border border-white text-white text-[14px] tracking-[0.05em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Free Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}