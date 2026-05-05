import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", firm: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await base44.entities.Lead.create({
      name: form.name,
      email: form.email,
      firm_name: form.firm || "",
      role: form.role || "",
      workflow_description: form.message || "",
      submitted_at: new Date().toISOString(),
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <section className="bg-black pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] tracking-[0.15em] uppercase mb-5"
            style={{ color: "#666666" }}
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[52px] leading-[1.15] text-white max-w-[600px] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book your free workflow audit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] md:text-[18px] leading-[1.7] max-w-[500px]"
            style={{ color: "#999999" }}
          >
            2 hours. No commitment. You'll get a ranked list of automation opportunities with time savings and costs attached.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24">
          {/* Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <h2
                  className="text-[32px] md:text-[38px] text-black mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  We'll be in touch.
                </h2>
                <p className="text-[16px]" style={{ color: "#888" }}>
                  Expect a response within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#888" }}>
                      Your name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none pb-3 text-[16px] text-black transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#888" }}>
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none pb-3 text-[16px] text-black transition-colors"
                      placeholder="you@firm.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#888" }}>
                      Firm name
                    </label>
                    <input
                      value={form.firm}
                      onChange={(e) => setForm({ ...form, firm: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none pb-3 text-[16px] text-black transition-colors"
                      placeholder="Your fund or firm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#888" }}>
                      Your role
                    </label>
                    <input
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none pb-3 text-[16px] text-black transition-colors"
                      placeholder="e.g., COO, Head of Ops, Partner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#888" }}>
                    Tell us about your workflows
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none pb-3 text-[16px] text-black transition-colors resize-none"
                    placeholder="What manual processes are costing your team the most time?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white text-[14px] tracking-[0.05em] px-8 py-4 hover:bg-black/80 transition-colors mt-4"
                  style={{ fontWeight: 500 }}
                >
                  Submit Request →
                </button>
                {showSuccess && (
                  <p className="flex items-center gap-2 text-[15px] mt-4" style={{ color: "#2a7a2a", fontFamily: "'DM Sans', sans-serif" }}>
                    <span>✓</span>
                    <span>Your request has been sent. We will be in touch within 24 hours.</span>
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3
                className="text-[22px] text-black mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What happens next
              </h3>
              <div className="space-y-4">
                {[
                  { step: "01", text: "We'll respond within 24 hours to schedule your audit call" },
                  { step: "02", text: "2-hour deep dive into your firm's manual workflows" },
                  { step: "03", text: "You receive a ranked automation roadmap with costs and time savings" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="text-[14px] font-bold shrink-0" style={{ color: "#CCC" }}>
                      {item.step}
                    </span>
                    <p className="text-[15px] leading-[1.6]" style={{ color: "#555" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E0E0E0] pt-8">
              <p className="text-[11px] tracking-[0.1em] uppercase mb-3" style={{ color: "#888" }}>
                Prefer email?
              </p>
              <p className="text-[16px] text-black">info@meridianailab.com</p>
            </div>

            <div className="border-t border-[#E0E0E0] pt-8">
              <div className="flex flex-wrap gap-3">
                {["No commitment", "100% confidential", "PE/VC specialists only"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-[0.1em] uppercase border border-black/20 text-black/50 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}