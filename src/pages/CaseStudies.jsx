import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const caseStudies = [
  {
    metric: "90 min → 5 min",
    title: "Deal Flow Intake Automation",
    subtitle: "Venture · 2.5 weeks",
    desc: "Early-stage venture fund with 6 investment professionals processing 30-40 pitch decks/week by hand into Affinity CRM. We built an AI pipeline that auto-parses every inbound deck, extracts 12 fields, scores thesis fit, and alerts the right deal lead.",
    page: "DealFlowCaseStudy",
    dark: false,
  },
  {
    metric: "5 days → 4 hrs",
    title: "LP Quarterly Report Generation",
    subtitle: "Venture · 4 weeks",
    desc: "$350MM venture fund with 40 LPs. One ops analyst spending an entire week every quarter manually pulling data, building presentations, writing commentary, and emailing each LP individually.",
    page: "LPReportCaseStudy",
    dark: true,
  },
  {
    metric: "400 docs → 20 min",
    title: "Due Diligence Document Summarizer",
    subtitle: "Buyout · 4 weeks",
    desc: "Lower-middle-market buyout fund with 8-12 live diligence processes per year. Associates spending 3+ days reading every document in a 400-doc data room: contracts, financials, customer agreements.",
    page: "DueDiligenceCaseStudy",
    dark: false,
  },
];

export default function CaseStudies() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <section className="bg-black pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] tracking-[0.15em] uppercase mb-5"
            style={{ color: "#666666" }}
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[52px] leading-[1.15] text-white max-w-[700px] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real workflows. Real results. Real funds.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] md:text-[18px] leading-[1.7] max-w-[550px]"
            style={{ color: "#999999" }}
          >
            Every case study represents a workflow we mapped, built, and deployed for a real PE or VC firm. All client details anonymized.
          </motion.p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-white">
        {caseStudies.map((cs, i) => {
          const bg = cs.dark ? "#000" : "#FFF";
          const textPrimary = cs.dark ? "#FFF" : "#000";
          const textSecondary = cs.dark ? "#888" : "#666";
          const borderColor = cs.dark ? "#333" : "#E0E0E0";

          return (
            <Link to={createPageUrl(cs.page)} key={i} onClick={() => window.scrollTo(0, 0)}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b transition-all duration-300 hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: bg, borderColor }}
              >
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
                    <div>
                      <div
                        className="text-[60px] md:text-[80px] leading-none mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", color: textPrimary }}
                      >
                        {cs.metric}
                      </div>
                      <p className="text-[12px] tracking-[0.1em] uppercase" style={{ color: textSecondary }}>
                        {cs.subtitle}
                      </p>
                    </div>
                    <div>
                      <h2
                        className="text-[26px] md:text-[32px] leading-[1.3] mb-5"
                        style={{ fontFamily: "'Playfair Display', serif", color: textPrimary }}
                      >
                        {cs.title}
                      </h2>
                      <p className="text-[15px] md:text-[16px] leading-[1.8] mb-6" style={{ color: textSecondary }}>
                        {cs.desc}
                      </p>
                      <span className="text-[14px]" style={{ color: textPrimary }}>
                        Read full case study →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[600px] mx-auto text-center px-6">
          <h2
            className="text-[30px] md:text-[38px] leading-[1.25] text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a workflow like these?
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