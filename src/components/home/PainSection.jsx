import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const pains = [
  "Analysts copying pitch deck data into your CRM by hand",
  "One ops person dreading LP report season every quarter",
  "Associates reading 400-document data rooms for 3 days",
  "KPI collection spreadsheets sent to 20 portcos, chased for 2 weeks",
  "IR team answering the same DDQ questions they've answered 40 times",
  "Compliance deadlines tracked in a spreadsheet with email reminders",
];

export default function PainSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.15em] uppercase mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#888888" }}
        >
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-[48px] leading-[1.15] text-black max-w-[600px] mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The work destroying your team's time
        </motion.h2>

        <div className="mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cursor-default transition-all duration-200 border-t"
              style={{
                backgroundColor: hoveredIndex === i ? "#000" : "transparent",
                borderColor: "#E0E0E0",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between py-6 px-2 md:px-4">
                <p
                  className="text-[17px] md:text-[20px] transition-colors duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: hoveredIndex === i ? "#FFF" : "#000",
                  }}
                >
                  {pain}
                </p>
                <span
                  className="text-[14px] transition-colors duration-200 ml-4 shrink-0"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: hoveredIndex === i ? "#666" : "#CCCCCC",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#E0E0E0]" />
        </div>

        <div className="border-t-2 border-black pt-8">
          <p
            className="text-[20px] md:text-[22px] text-black max-w-[600px] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We've mapped every one of these. We know exactly how to fix them.
          </p>
          <Link
            to={createPageUrl("Services")}
            className="inline-block bg-black text-white text-[14px] px-7 py-4 hover:bg-black/80 transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            See the workflows →
          </Link>
        </div>
      </div>
    </section>
  );
}