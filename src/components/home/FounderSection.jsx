import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Years in Investment Banking and Leveraged Finance" },
  { value: "50+", label: "PE/VC Workflows Mapped and Built" },
  { value: "$10M+", label: "In PE/VC Automation Value Delivered" },
];

export default function FounderSection() {
  return (
    <section className="bg-black py-24 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 md:gap-24">
        {/* Left - Text */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.15em] uppercase mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
          >
            Why This Exists
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[40px] leading-[1.2] text-white max-w-[520px] mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Built by people who've lived these workflows
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-10"
          >
            <p
              className="text-[16px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#999999" }}
            >
              We spent years in investment banking and leveraged finance watching analysts do work that should take seconds take hours: copying pitch deck data into CRMs, rebuilding the same LP report every quarter, reading entire data rooms document by document before every IC meeting.
            </p>
            <p
              className="text-[16px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#999999" }}
            >
              We started Meridian AI because PE and VC firms don't need a generic automation agency. They need a team that already understands the deal cycle, the LP relationship, and the diligence workflow, and can build AI that fits exactly how funds operate. That's where we come from.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {["Investment Banking", "Leveraged Finance"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-[0.1em] uppercase text-white border border-white/30 px-4 py-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right - Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-center divide-y divide-white/10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="py-8 first:pt-0 last:pb-0">
              <p
                className="text-[52px] md:text-[60px] leading-none text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                {stat.value}
              </p>
              <p
                className="text-[13px] leading-[1.5]"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}