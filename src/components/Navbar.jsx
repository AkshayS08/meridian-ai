import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link to={createPageUrl("Home")} className="text-white text-[13px] tracking-[0.25em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            MERIDIAN AI
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", path: "/OurServices" },
              { label: "About", path: "/About" },
              { label: "Case Studies", path: "/CaseStudies" },
              { label: "Contact", path: "/Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white/60 hover:text-white text-[13px] tracking-[0.1em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={createPageUrl("Contact")}
              className="text-[13px] tracking-[0.1em] uppercase px-5 py-2 transition-all duration-300 text-black font-medium"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "linear-gradient(135deg, #C9A84C, #e8c96a, #C9A84C)",
                boxShadow: "0 0 16px rgba(201,168,76,0.55), 0 0 4px rgba(201,168,76,0.3)",
              }}
            >
              Book Audit →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
            {[
              { label: "Services", path: "/OurServices" },
              { label: "About", path: "/About" },
              { label: "Case Studies", path: "/CaseStudies" },
              { label: "Contact", path: "/Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-white/70 text-[14px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={createPageUrl("Contact")}
              onClick={() => setOpen(false)}
              className="text-[13px] tracking-[0.1em] uppercase px-5 py-2 text-center mt-2 text-black font-medium"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "linear-gradient(135deg, #C9A84C, #e8c96a, #C9A84C)",
                boxShadow: "0 0 16px rgba(201,168,76,0.55), 0 0 4px rgba(201,168,76,0.3)",
              }}
            >
              Book Audit →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}