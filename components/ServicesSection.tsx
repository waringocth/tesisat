"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Waves,
  Pipette,
  Thermometer,
  Container,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock3,
} from "lucide-react";

/* ─── Service data (from protesisat.com) ─── */
const services = [
  {
    id: "su-kacagi",
    icon: Waves,
    tag: "En Çok Talep Edilen",
    title: "Su Kaçağı Tespiti",
    description:
      "Duvarlardaki nemlenmeler, alt komşuya damlayan sular ve görünmez boru arızalarını kırmadan, dökmeden son teknoloji dedektörler ve termal kameralarla 2 saat içinde tespit ediyoruz. Eviniz inşaat alanına dönmüyor.",
    bullets: ["Termal Kamera", "Akustik Dedektör", "Kameralı Keşif"],
    accent: "from-blue-600/20 to-blue-900/10",
    accentBorder: "rgba(59,130,246,0.25)",
    accentGlow: "rgba(59,130,246,0.12)",
    iconColor: "text-blue-400",
    iconBg: "rgba(37,99,235,0.15)",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    linkColor: "#60a5fa",
    size: "large",
  },
  {
    id: "tikaniklik",
    icon: Pipette,
    tag: "Hızlı Çözüm",
    title: "Tıkanıklık Açma",
    description:
      "Tuvalet, lavabo, pimaş ve kanalizasyon tıkanıklıklarını robot kameralarla görüntüleyerek, kırmadan ve tadilatsız açıyoruz. 2 yıl garanti.",
    bullets: ["Robot Kamera", "Pimaş & Logar", "Garantili"],
    accent: "from-cyan-600/20 to-cyan-900/10",
    accentBorder: "rgba(6,182,212,0.25)",
    accentGlow: "rgba(6,182,212,0.10)",
    iconColor: "text-cyan-400",
    iconBg: "rgba(6,182,212,0.12)",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    linkColor: "#22d3ee",
    size: "normal",
  },
  {
    id: "kombi-petek",
    icon: Thermometer,
    tag: "Kış Öncesi",
    title: "Kombi & Petek Temizliği",
    description:
      "Isınmayan petekler, basınç düşen kombiler ve ısı kayıplarını profesyonel ekipmanlarla çözüyoruz. Petek havalama, kimyasal temizlik ve kombi bakım hizmetleri.",
    bullets: ["Petek Havalama", "Kimyasal Yıkama", "Kombi Bakım"],
    accent: "from-orange-600/20 to-orange-900/10",
    accentBorder: "rgba(249,115,22,0.25)",
    accentGlow: "rgba(249,115,22,0.10)",
    iconColor: "text-orange-400",
    iconBg: "rgba(249,115,22,0.12)",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    linkColor: "#fb923c",
    size: "normal",
  },
  {
    id: "kanalizasyon",
    icon: Container,
    tag: "Ağır Hizmet",
    title: "Kanalizasyon & Pimaş Açma",
    description:
      "Robotik açma makineleri ve yüksek basınçlı hidrojet sistemiyle kanalizasyon, logar ve pimaş tıkanıklıklarını çevreye zarar vermeden temizliyoruz.",
    bullets: ["Hidrojet", "Rögar Temizleme", "Logar Açma"],
    accent: "from-violet-600/20 to-violet-900/10",
    accentBorder: "rgba(139,92,246,0.25)",
    accentGlow: "rgba(139,92,246,0.10)",
    iconColor: "text-violet-400",
    iconBg: "rgba(139,92,246,0.12)",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    linkColor: "#a78bfa",
    size: "large",
  },
];

/* ─── Animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Services Section ─── */
export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="hizmetler"
      ref={ref}
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#020c1b" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border"
            style={{
              background: "rgba(37,99,235,0.08)",
              borderColor: "rgba(59,130,246,0.2)",
              color: "#60a5fa",
            }}
          >
            <Zap size={12} />
            7/24 Acil Servis Mevcut
          </div>

          <h2
            className="font-outfit font-black text-white mb-4 leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Tüm Tesisat Sorunlarınıza{" "}
            <span className="shimmer-text">Garantili Çözüm</span>
          </h2>

          <p
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Son teknoloji ekipmanlar ve deneyimli kadromuzla her türlü tesisat
            arızasını kırmadan, dökmeden ve en kısa sürede çözüyoruz.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            const isLarge = svc.size === "large";

            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl flex flex-col${
                  isLarge ? " md:col-span-2" : " md:col-span-1"
                }`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${svc.accentBorder}`,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                {/* Card inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${svc.accentGlow} 0%, transparent 60%)`,
                  }}
                />

                {/* Top gradient strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${svc.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className={`relative z-10 flex flex-col h-full p-6 ${isLarge ? "lg:p-8" : ""}`}>
                  {/* Tag + Icon row */}
                  <div className="flex items-start justify-between mb-5 gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: svc.iconBg }}
                    >
                      <Icon size={24} className={svc.iconColor} />
                    </div>

                    {/* Tag */}
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border flex-shrink-0 ${svc.tagColor}`}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-outfit font-bold text-white mb-3 leading-tight"
                    style={{ fontSize: isLarge ? "1.5rem" : "1.2rem" }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: "#94a3b8" }}
                  >
                    {svc.description}
                  </p>

                  {/* Bullets */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.bullets.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: "#64748b" }}
                      >
                        <CheckCircle size={12} className={svc.iconColor} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-4"
                    style={{ borderTop: `1px solid ${svc.accentBorder}` }}
                  >
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#475569" }}>
                      <Clock3 size={12} />
                      <span>2 saat içinde müdahale</span>
                    </div>
                    <a
                      href="#iletisim"
                      className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3"
                      style={{ color: svc.linkColor }}
                    >
                      <span className="text-sm font-medium" style={{ color: svc.linkColor }}>
                        Servis İste
                      </span>
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: svc.linkColor }}
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          className="mt-12 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(37,99,235,0.07)",
            border: "1px solid rgba(59,130,246,0.18)",
          }}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div>
            <p className="font-outfit font-bold text-white text-lg mb-1">
              Sorunun adı ne olursa olsun, çözeriz.
            </p>
            <p className="text-sm" style={{ color: "#64748b" }}>
              Listede görmediğiniz bir sorun mu var? Bizi arayın, değerlendirelim.
            </p>
          </div>

          <a
            href="tel:+905001234567"
            id="services-cta"
            className="btn-glow flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap"
          >
            <Zap size={16} />
            Hemen Ara — Ücretsiz
          </a>
        </motion.div>
      </div>
    </section>
  );
}
