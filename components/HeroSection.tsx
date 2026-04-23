"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Zap,
  Clock,
  Star,
  ChevronRight,
  Wrench,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Timer,
} from "lucide-react";
import AuroraBackground from "./AuroraBackground";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Data ─── */
const stats = [
  { value: "2 Saat", label: "İçinde Müdahale", icon: Clock },
  { value: "7/24",   label: "Acil Servis",      icon: Zap },
  { value: "2 Yıl",  label: "Garanti",           icon: ShieldCheck },
  { value: "500+",   label: "Müşteri",           icon: Star },
];

const trustItems = [
  { icon: CheckCircle2, label: "Kırmadan Dökmeden" },
  { icon: CheckCircle2, label: "Son Teknoloji Cihazlar" },
  { icon: CheckCircle2, label: "Lisanslı Ustalar" },
  { icon: CheckCircle2, label: "Fiyat Garantisi" },
];

const services = [
  { icon: Droplets, label: "Su Kaçağı Tespiti" },
  { icon: Wrench,   label: "Tıkanıklık Açma" },
  { icon: Wrench,   label: "Kombi & Petek" },
  { icon: Droplets, label: "Pimaş & Kanalizasyon" },
];

/* ─── Hero Section ─── */
export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#020818", overflowX: "hidden" }}
      className="relative min-h-screen flex flex-col"
    >
      <AuroraBackground />

      {/* ── NAVBAR ── */}
      <motion.nav
        className="relative z-20 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
             style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem", width: "100%" }}>
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
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
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8">
              {["Hizmetler", "Referanslar", "Hakkımızda", "İletişim"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
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

      {/* ── HERO BODY ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-20"
             style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem", width: "100%" }}>

          {/* 2-column grid */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-6">

              {/* Live badge */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                <div className="live-badge pulse-badge w-fit">
                  <span className="live-dot" />
                  Acil Servis Aktif · 7/24
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-outfit font-black leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <span className="text-white">Evinizde Su Kaçağı mı?</span>
                <br />
                <span className="shimmer-text">Kırmadan, Dökmeden,</span>
                <br />
                <span className="text-white">2 Saatte Çözüm.</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: "#94a3b8" }}
                custom={0.22}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                Son teknoloji dedektörler ve robot kameralarla su kaçaklarını ve
                tıkanıklıkları{" "}
                <strong className="text-slate-300">tadilatsız, izinsiz ve garantili</strong>{" "}
                olarak çözüyoruz. İstanbul&apos;un tüm ilçelerine{" "}
                <strong className="text-slate-300">fiyat farkı olmadan</strong> hizmet veriyoruz.
              </motion.p>

              {/* Trust pills */}
              <motion.div
                className="flex flex-wrap gap-3"
                custom={0.32}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {trustItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="trust-pill">
                    <Icon size={14} className="text-blue-400 flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons — fix 3 */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                custom={0.42}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <a
                  href="tel:+905001234567"
                  id="hero-cta-primary"
                  className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white"
                >
                  <Phone size={18} />
                  Hemen Servis Çağır
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#hizmetler"
                  id="hero-cta-secondary"
                  className="btn-outline inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold"
                >
                  Hizmetlerimizi İncele
                  <ChevronRight size={16} />
                </a>
              </motion.div>

              {/* Quick service links */}
              <motion.div
                className="flex flex-wrap gap-x-5 gap-y-2"
                custom={0.52}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {services.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Icon size={12} />
                    {label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              className="flex flex-col gap-4"
              custom={0.18}
              variants={slideRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Row 1 — Stats 2×2 grid — fix 4 */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    className="glass-card flex flex-col justify-center p-4 gap-2"
                    custom={0.28 + i * 0.08}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(37,99,235,0.15)" }}
                    >
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <p className="text-lg font-bold gradient-text font-outfit leading-tight">
                      {value}
                    </p>
                    <p className="text-sm text-gray-400 leading-snug">{label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Row 2 — Quick-info pills */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="glass-card flex items-center gap-3 p-3"
                  custom={0.58}
                  variants={fadeIn}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.15)" }}
                  >
                    <Timer size={17} className="text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 leading-none mb-1">Ort. Müdahale</p>
                    <p className="text-sm font-semibold text-white leading-none">45 Dakika</p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-card flex items-center gap-3 p-3"
                  custom={0.64}
                  variants={fadeIn}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.15)" }}
                  >
                    <ShieldCheck size={17} className="text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 leading-none mb-1">Garanti</p>
                    <p className="text-sm font-semibold text-white leading-none">2 Yıl</p>
                  </div>
                </motion.div>
              </div>

              {/* Row 3 — Trust card */}
              <motion.div
                className="glass-card-blue p-5"
                custom={0.7}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(99,102,241,0.2))",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}
                  >
                    <ShieldCheck size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base mb-1">Profesyonel Güvence</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Tüm işlemlerimiz belgeli ustalar tarafından yapılır. 2 yıl
                      işçilik garantisi ve fiyat şeffaflığı ile hizmet veriyoruz.
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 pt-4 grid grid-cols-3 gap-3"
                  style={{ borderTop: "1px solid rgba(59,130,246,0.15)" }}
                >
                  {[
                    { label: "Tamamlanan İş",      value: "2.800+" },
                    { label: "Memnuniyet",          value: "98%" },
                    { label: "Yanıt Süresi",        value: "45dk" },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <p className="font-bold text-base text-white">{value}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Row 4 — Reviews badge — fix 5 */}
              <motion.div
                className="glass-card flex items-center gap-3 p-3"
                custom={0.8}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {/* Avatar stack */}
                <div className="flex -space-x-2 flex-shrink-0">
                  {["🧑‍🔧", "👷", "🧑‍💼", "👩‍🏠"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                      style={{
                        background: `hsl(${220 + i * 15}, 70%, 25%)`,
                        border: "2px solid #020818",
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    <span className="text-white font-medium">500+</span> müşteri Google&apos;da 5 yıldız verdi
                  </p>
                </div>
              </motion.div>

            </motion.div>
            {/* ── END RIGHT COLUMN ── */}

          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(0deg, rgba(2,8,24,0.8) 0%, transparent 100%)" }}
      />
    </section>
  );
}
