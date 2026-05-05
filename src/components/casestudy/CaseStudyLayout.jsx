import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function CaseStudyLayout({
  breadcrumb,
  categoryTag,
  headline,
  stats,
  problemLabel = "THE PROBLEM",
  problemHeadline,
  problemParagraphs,
  pullQuote,
  solutionLabel = "THE SOLUTION",
  solutionHeadline,
  solutionSteps,
  techStack,
  resultHeadline = "The outcome",
  resultBigStat,
  resultBigLabel,
  resultCards,
  buildTime,
  projectValue,
}) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero */}
      <section className="bg-black pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[12px] mb-4"
            style={{ color: "#666666" }}
          >
            {breadcrumb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block border border-white/30 text-white text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 mb-8"
          >
            {categoryTag}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] text-white max-w-[700px] mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/20"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-6 md:flex md:flex-col md:items-center md:justify-center ${i < 2 ? "sm:border-r sm:border-white/20" : ""}`}
              >
                <p className="text-[28px] md:text-[32px] text-white font-bold md:text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </p>
                <p className="text-[12px] tracking-[0.1em] uppercase mt-1 md:text-center" style={{ color: "#888" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.15em] uppercase mb-5" style={{ color: "#888" }}>
            {problemLabel}
          </p>
          <h2
            className="text-[30px] md:text-[38px] leading-[1.25] text-black mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {problemHeadline}
          </h2>
          <div className="space-y-5 mb-12">
            {problemParagraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.8]" style={{ color: "#555" }}>
                {p}
              </p>
            ))}
          </div>
          {pullQuote && (
            <blockquote className="border-l-2 border-black pl-6 py-2">
              <p
                className="text-[22px] md:text-[26px] leading-[1.5] italic text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{pullQuote}"
              </p>
            </blockquote>
          )}
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.15em] uppercase mb-5" style={{ color: "#666" }}>
            {solutionLabel}
          </p>
          <h2
            className="text-[30px] md:text-[38px] leading-[1.25] text-white mb-16 max-w-[600px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {solutionHeadline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {solutionSteps.map((step, i) => (
              <div key={i} className="border-t border-[#333] pt-6 pb-10 pr-6">
                <span className="text-[11px] tracking-[0.1em] uppercase block mb-4" style={{ color: "#666" }}>
                  Step {i + 1}
                </span>
                <p className="text-[15px] leading-[1.8] text-white/80">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] tracking-[0.1em] uppercase border border-white/20 text-white/60 px-3 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2
            className="text-[30px] md:text-[38px] leading-[1.25] text-black mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {resultHeadline}
          </h2>

          <div className="mb-14">
            <p className="text-[72px] md:text-[96px] leading-none text-black font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {resultBigStat}
            </p>
            <p className="text-[16px] mt-3" style={{ color: "#888" }}>{resultBigLabel}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {resultCards.map((card, i) => (
              <div key={i} className="border border-[#E0E0E0] p-6 md:p-8">
                <p className="text-[15px] leading-[1.7] text-black">{card}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 text-[12px] tracking-[0.1em] uppercase" style={{ color: "#888" }}>
            <span>Build time: {buildTime}</span>
            <span>·</span>
            <span>Stack: {techStack.join(" · ")}</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-[500px] mx-auto text-center px-6">
          <h2
            className="text-[28px] md:text-[34px] leading-[1.3] text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a workflow like this?
          </h2>
          <Link
            to={createPageUrl("Contact")}
            className="inline-block bg-white text-black text-[14px] px-8 py-4 hover:bg-white/90 transition-colors"
          >
            Book Free Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}