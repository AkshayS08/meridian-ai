import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const studies = [
  {
    metric: "90 min → 5 min",
    title: "Deal Flow Intake Automation",
    desc: "Early-stage venture fund, 6 investment professionals, 30-40 pitch decks/week processed by hand into Affinity CRM.",
    tag: "Venture",
    timeline: "2.5 weeks",
    page: "DealFlowCaseStudy",
    dark: false,
  },
  {
    metric: "5 days → 4 hrs",
    title: "LP Quarterly Report Generation",
    desc: "$350MM venture fund, 40 LPs, full reporting cycle automated end-to-end each quarter.",
    tag: "Venture",
    timeline: "4 weeks",
    page: "LPReportCaseStudy",
    dark: true,
  },
  {
    metric: "400 docs → 20 min",
    title: "Due Diligence Summarizer",
    desc: "Lower-middle-market buyout fund, full data room processed into structured memo, associates review not read.",
    tag: "Buyout",
    timeline: "4 weeks",
    page: "DueDiligenceCaseStudy",
    dark: false,
  },
];

export default function CaseStudiesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.15em] uppercase mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#888888" }}
        >
          Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-[42px] leading-[1.2] text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What this looks like in practice
        </motion.h2>
      </div>

      {studies.map((s, i) => {
        const isHovered = hoveredIndex === i;
        const bg = s.dark
          ? isHovered ? "#111111" : "#000000"
          : isHovered ? "#F5F5F5" : "#FFFFFF";
        const textPrimary = s.dark ? "#FFFFFF" : "#000000";
        const textSecondary = s.dark ? "#888888" : "#666666";
        const borderColor = s.dark ? "#333333" : "#E0E0E0";

        return (
          <Link to={createPageUrl(s.page)} key={i} onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cursor-pointer transition-all duration-300 border-b"
              style={{ backgroundColor: bg, borderColor }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.8fr] gap-8 md:gap-12 items-center">
                {/* Metric */}
                <div
                  className="text-[32px] md:text-[64px] lg:text-[72px] leading-none whitespace-nowrap"
                  style={{ fontFamily: "'Playfair Display', serif", color: textPrimary }}
                >
                  {s.metric}
                </div>

                {/* Description */}
                <div>
                  <h3
                    className="text-[20px] md:text-[22px] font-bold mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: textPrimary }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.7] max-w-[360px]"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: textSecondary }}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-4 md:items-end">
                  <span
                    className="text-[11px] tracking-[0.1em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: textSecondary }}
                  >
                    {s.tag}
                  </span>
                  <span
                    className="text-[11px] tracking-[0.1em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: textSecondary }}
                  >
                    {s.timeline}
                  </span>
                  <span
                    className="text-[13px] tracking-[0.05em]"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: textPrimary }}
                  >
                    Read case study →
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </section>
  );
}