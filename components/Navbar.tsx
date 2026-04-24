"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Droplets } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="relative z-50 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem", width: "100%" }}>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                boxShadow: "0 0 20px rgba(59,130,246,0.4)",
              }}
            >
              <Droplets size={20} className="text-white" />
            </div>
            <div className="leading-none">
              <span className="font-bold text-white text-lg font-outfit">[Firma Adı]</span>
              <span className="font-light text-blue-400 text-lg font-outfit"> Tesisat</span>
            </div>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/hizmetler"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Hizmetler
            </Link>
            <Link
              href="/bolgeler"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Hizmet Bölgeleri
            </Link>
            <Link
              href="/referanslar"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Referanslar
            </Link>
            <Link
              href="/iletisim"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              İletişim
            </Link>
          </div>

          {/* Nav CTA */}
          <a
            href="tel:+905001234567"
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white btn-glow"
          >
            <Phone size={14} />
            <span>Hemen Ara</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
