import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Workflow Audit",
    desc: "We spend 2 hours mapping your firm's most painful manual processes. You get a ranked list of automation opportunities with time savings and build costs attached.",
    tag: "Free · No commitment",
  },
  {
    num: "02",
    title: "Custom Build",
    desc: "Our engineering team builds your automations against your actual data, systems, and workflows. No templates. Every build is specific to how your firm operates.",
    tag: "2–5 weeks typical",
  },
  {
    num: "03",
    title: "Deploy + Support",
    desc: "We go live, monitor the first 30 days, and train your team. Most clients add a monthly retainer for ongoing builds as they find more workflows to automate.",
    tag: "Ongoing Available",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.15em] uppercase mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#666666" }}
        >
          Our Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[34px] md:text-[42px] leading-[1.2] text-white max-w-[600px] mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          From workflow audit to live automation in weeks, not months.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group border-t border-[#333] hover:border-white transition-colors duration-300 pt-8 pb-10 pr-8 flex flex-col"
              style={{ borderLeftWidth: i > 0 ? "0" : "0" }}
            >
              {/* Decorative number */}
              <span
                className="block text-[64px] leading-none mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "#222222" }}
              >
                {step.num}
              </span>

              <h3
                className="text-[20px] text-white font-bold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {step.title}
              </h3>

              <p
                className="text-[15px] md:text-[16px] leading-[1.8] mb-6 flex-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#999999" }}
              >
                {step.desc}
              </p>

              <div className="flex items-center gap-2">
                <div className="w-[2px] h-4 bg-white" />
                <span
                  className="text-[11px] tracking-[0.1em] uppercase text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to={createPageUrl("Contact")}
            className="inline-block border border-white text-white text-[14px] tracking-[0.05em] px-7 py-4 hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Book your free audit →
          </Link>
        </div>
      </div>
    </section>
  );
}