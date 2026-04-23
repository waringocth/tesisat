"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Banknote,
  Clock,
  Hammer,
  BadgeCheck,
  Truck,
  Star,
  Headphones,
  Wrench,
  Zap,
  ThumbsUp,
} from "lucide-react";

/* ─────────────────────────────────────────
   Part 1 · Stat data
   (extracted from protesisat.com)
───────────────────────────────────────── */
const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Yıllık Deneyim",
    sub: "2004'ten bu yana hizmetinizdeyiz",
    icon: Award,
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.15)",
  },
  {
    value: 30,
    suffix: "",
    label: "Servis Aracı",
    sub: "İstanbul genelinde aktif ekipler",
    icon: Truck,
    color: "#34d399",
    glow: "rgba(52,211,153,0.12)",
  },
  {
    value: 2800,
    suffix: "+",
    label: "Tamamlanan İş",
    sub: "Başarıyla çözülen tesisat sorunu",
    icon: Wrench,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
  },
  {
    value: 98,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    sub: "Google yorumlarından alınan ortalama",
    icon: ThumbsUp,
    color: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
  },
];

/* ─────────────────────────────────────────
   Part 2 · Infinite card data
───────────────────────────────────────── */
const cards = [
  {
    icon: Banknote,
    title: "Tek Fiyat Garantisi",
    desc: "İstanbul'un tüm ilçelerine fiyat farkı almadan hizmet veriyoruz.",
    color: "#60a5fa",
  },
  {
    icon: Hammer,
    title: "Kırmadan Dökmeden",
    desc: "Son teknoloji cihazlarla tadilatsız, izinsiz çözüm.",
    color: "#34d399",
  },
  {
    icon: ShieldCheck,
    title: "2 Yıl Garanti",
    desc: "Tüm işçilik ve malzeme için 2 yıl tam güvence.",
    color: "#a78bfa",
  },
  {
    icon: Clock,
    title: "2 Saatte Müdahale",
    desc: "Servis kaydı anında, en geç 2 saat içinde ekip kapınızda.",
    color: "#fb923c",
  },
  {
    icon: BadgeCheck,
    title: "Belgeli Uzman Ustalar",
    desc: "Tüm ekibimiz sertifikalı ve deneyimli tesisat uzmanlarından oluşur.",
    color: "#f472b6",
  },
  {
    icon: Headphones,
    title: "7/24 Canlı Destek",
    desc: "Gece ya da gündüz, her zaman bir uzmanla konuşabilirsiniz.",
    color: "#38bdf8",
  },
  {
    icon: Star,
    title: "5 Yıldız Hizmet",
    desc: "Google'da 500'den fazla müşteriden 5 yıldızlı değerlendirme.",
    color: "#fbbf24",
  },
  {
    icon: Zap,
    title: "Acil Servis",
    desc: "Su baskını, patlak boru gibi acil durumlarda öncelikli müdahale.",
    color: "#818cf8",
  },
];

/* ─────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────── */
function useCountUp(target: number, inView: boolean, duration = 1.8) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return display;
}

/* ─────────────────────────────────────────
   Stat Card
───────────────────────────────────────── */
function StatCard({
  stat,
  inView,
  delay,
}: {
  stat: (typeof stats)[0];
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${stat.glow} 0%, transparent 65%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${stat.color}18` }}
      >
        <Icon size={22} style={{ color: stat.color }} />
      </div>

      {/* Number */}
      <div>
        <p
          className="font-outfit font-black leading-none mb-1"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: stat.color }}
        >
          {count.toLocaleString("tr-TR")}
          {stat.suffix}
        </p>
        <p className="font-semibold text-white text-base leading-snug">
          {stat.label}
        </p>
        <p className="text-xs mt-1" style={{ color: "#64748b" }}>
          {stat.sub}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Infinite Moving Cards (Aceternity style)
───────────────────────────────────────── */
function InfiniteCards() {
  // Duplicate for seamless loop
  const doubled = [...cards, ...cards];

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
      <motion.div
        className="flex gap-4"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="flex-shrink-0 w-72 rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${card.color}30`,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}15` }}
                >
                  <Icon size={18} style={{ color: card.color }} />
                </div>
                <p className="font-semibold text-white text-sm leading-tight">
                  {card.title}
                </p>
              </div>
              {/* Desc */}
              <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                {card.desc}
              </p>
              {/* Bottom accent line */}
              <div
                className="h-px rounded-full mt-auto"
                style={{
                  background: `linear-gradient(90deg, ${card.color}60, transparent)`,
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   WhyChooseUs Section
───────────────────────────────────────── */
export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="neden-biz"
      ref={ref}
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#020818" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(99,102,241,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(37,99,235,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
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
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border"
            style={{
              background: "rgba(37,99,235,0.08)",
              borderColor: "rgba(59,130,246,0.2)",
              color: "#60a5fa",
            }}
          >
            <Award size={12} />
            20 Yılı Aşkın Deneyim
          </div>

          <h2
            className="font-outfit font-black text-white mb-4 leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Neden Bizi Tercih{" "}
            <span className="shimmer-text">Etmelisiniz?</span>
          </h2>

          <p
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Rakamlar ve garantilerle konuşuyoruz. Sektörde öne çıkan tek şey
            kalite değil — güven, hız ve şeffaf fiyat politikamızdır.
          </p>
        </motion.div>

        {/* ── Part 1: Animated Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Part 2: Infinite Cards ── */}
        <div>
          <motion.p
            className="text-center text-sm font-medium mb-8"
            style={{ color: "#475569" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ✦ Hizmet Garantilerimiz ✦
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <InfiniteCards />
          </motion.div>
        </div>

        {/* ── Bottom trust bar ── */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { label: "İstanbul'un Tüm İlçeleri", value: "Fiyat Farkı Yok" },
            { label: "Ortalama Yanıt Süresi", value: "45 Dakika" },
            { label: "Hizmet Saatleri", value: "7/24 — 365 Gün" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "rgba(37,99,235,0.06)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <p className="font-outfit font-bold text-white text-lg mb-1">{value}</p>
              <p className="text-xs" style={{ color: "#64748b" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
