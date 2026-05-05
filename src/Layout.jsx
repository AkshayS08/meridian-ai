import React from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "'Playfair Display', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: auto; }
        body { background: #000; font-family: 'DM Sans', sans-serif; }
      `}</style>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}