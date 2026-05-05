import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function CTAFooter() {
  const navLinks = ["Services", "CaseStudies", "Contact"];
  const navLabels = ["Services", "Case Studies", "Contact"];

  return (
    <>
      {/* CTA Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="border-t border-black pt-16 md:pt-20">
            <div className="max-w-[700px] mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[36px] md:text-[48px] lg:text-[52px] leading-[1.15] text-black mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                You're probably leaving 2,000 analyst hours on the table every year.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[18px] md:text-[20px] mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
              >
                A free workflow audit takes 2 hours and shows you exactly where.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  to={createPageUrl("Contact")}
                  className="bg-black text-white text-[14px] md:text-[15px] px-9 py-4 hover:bg-black/80 transition-colors duration-200 text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Book Free Workflow Audit →
                </Link>
                <Link
                  to={createPageUrl("CaseStudies")}
                  onClick={() => window.scrollTo(0, 0)}
                  className="border border-black text-black text-[14px] md:text-[15px] px-9 py-4 hover:bg-black hover:text-white transition-all duration-200 text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  See Our Work First ↓
                </Link>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[12px] md:text-[13px]" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888888" }}>
                <span>No commitment required</span>
                <span>·</span>
                <span>Results within 2 weeks of kickoff</span>
                <span>·</span>
                <span>Built for funds managing $100M–$5B</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-white text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            MERIDIAN AI
          </span>

          <div className="flex items-center gap-4 md:gap-6">
            {navLinks.map((page, i) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className="text-[13px] hover:text-white transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
              >
                {navLabels[i]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span
              className="text-[12px]"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
            >
              © 2025 Meridian AI. All rights reserved.
            </span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}