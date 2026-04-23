"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Phone,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  ChevronRight,
  Send,
} from "lucide-react";

/* Custom Facebook SVG (not available in current lucide-react version) */
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#020818" />
    </svg>
  );
}

/* ─── Quick links (extracted from protesisat.com) ─── */
const quickLinks = [
  { label: "Su Kaçağı Tespiti",        href: "#" },
  { label: "Tıkanıklık Açma",          href: "#" },
  { label: "Kombi & Petek Temizliği",  href: "#" },
  { label: "Kanalizasyon Açma",        href: "#" },
  { label: "Pimaş Açma",              href: "#" },
  { label: "Logar Açma",              href: "#" },
  { label: "Su Tesisatı Kurulumu",     href: "#" },
];

const companyLinks = [
  { label: "Hakkımızda",  href: "#" },
  { label: "Referanslar", href: "#" },
  { label: "Blog",        href: "#" },
  { label: "SSS",         href: "#" },
  { label: "İletişim",    href: "#" },
];

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon,  href: "#", label: "Facebook" },
  { icon: YoutubeIcon,   href: "#", label: "YouTube" },
];

/* ─── Footer ─── */
export default function Footer() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
    setPhone("");
  }

  return (
    <footer
      style={{ backgroundColor: "#010b18", borderTop: "1px solid rgba(59,130,246,0.1)" }}
    >
      {/* ── Main grid ── */}
      <div
        className="w-full py-16"
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  boxShadow: "0 0 18px rgba(59,130,246,0.35)",
                }}
              >
                <Droplets size={20} className="text-white" />
              </div>
              <div className="leading-none">
                <span className="font-bold text-white text-lg font-outfit">[Firma Adı]</span>
                <span className="font-light text-blue-400 text-lg font-outfit"> Tesisat</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
              İstanbul genelinde 20 yılı aşkın deneyimle, son teknoloji
              cihazlarla kırmadan dökmeden tesisat hizmeti.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {["7/24 Acil", "2 Yıl Garanti", "Tek Fiyat"].map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    color: "#60a5fa",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#475569",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#60a5fa";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#475569";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <p className="font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span
                className="w-1 h-4 rounded-full inline-block"
                style={{ background: "linear-gradient(#3b82f6,#818cf8)" }}
              />
              Hizmetlerimiz
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                  >
                    <ChevronRight
                      size={13}
                      className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-semibold text-white text-sm mt-8 mb-4 flex items-center gap-2">
              <span
                className="w-1 h-4 rounded-full inline-block"
                style={{ background: "linear-gradient(#3b82f6,#818cf8)" }}
              />
              Kurumsal
            </p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                  >
                    <ChevronRight size={13} className="text-blue-600" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <p className="font-semibold text-white text-sm mb-5 flex items-center gap-2">
              <span
                className="w-1 h-4 rounded-full inline-block"
                style={{ background: "linear-gradient(#3b82f6,#818cf8)" }}
              />
              İletişim
            </p>

            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: Phone,
                  label: "Avrupa Yakası",
                  value: "0212 XXX XX XX",
                  href: "tel:02120000000",
                },
                {
                  icon: Phone,
                  label: "Anadolu Yakası",
                  value: "0216 XXX XX XX",
                  href: "tel:02160000000",
                },
                {
                  icon: Clock,
                  label: "Çalışma Saatleri",
                  value: "7/24 — 365 Gün",
                  href: null,
                },
                {
                  icon: MapPin,
                  label: "Hizmet Bölgesi",
                  value: "İstanbul'un Tüm İlçeleri",
                  href: null,
                },
                {
                  icon: Mail,
                  label: "E-Posta",
                  value: "info@firmaadi.com",
                  href: "mailto:info@firmaadi.com",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(37,99,235,0.12)" }}
                  >
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "#475569" }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Lead capture form ── */}
          <div>
            <p className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
              <span
                className="w-1 h-4 rounded-full inline-block"
                style={{ background: "linear-gradient(#3b82f6,#818cf8)" }}
              />
              Sizi Arayalım!
            </p>
            <p className="text-xs mb-5" style={{ color: "#475569" }}>
              Numaranızı bırakın, uzmanımız sizi ücretsiz arasın.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl p-5 text-center"
                style={{
                  background: "rgba(34,197,94,0.07)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                <p className="text-sm font-semibold text-green-400 mb-1">✓ Kaydedildi!</p>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  En kısa sürede sizi arayacağız.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e2e8f0",
                  }}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(59,130,246,0.4)"; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                />

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e2e8f0",
                  }}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(59,130,246,0.4)"; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                />

                {/* Service select */}
                <select
                  className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200 appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                  }}
                  onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "rgba(59,130,246,0.4)"; }}
                  onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <option value="" style={{ background: "#020818" }}>Hizmet Seçin</option>
                  <option value="su-kacagi" style={{ background: "#020818" }}>Su Kaçağı Tespiti</option>
                  <option value="tikaniklik" style={{ background: "#020818" }}>Tıkanıklık Açma</option>
                  <option value="kombi" style={{ background: "#020818" }}>Kombi & Petek</option>
                  <option value="diger" style={{ background: "#020818" }}>Diğer</option>
                </select>

                {/* Submit */}
                <motion.button
                  type="submit"
                  id="footer-lead-submit"
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={15} />
                  Gönder — Ücretsiz Ara
                  <ArrowRight size={14} />
                </motion.button>
              </form>
            )}

            {/* KVKK note */}
            <p className="text-xs mt-4" style={{ color: "#334155" }}>
              Bilgileriniz 3. şahıslarla paylaşılmaz. KVKK kapsamında işlenir.
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            maxWidth: "80rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "#334155" }}>
            © {new Date().getFullYear()} [Firma Adı] Tesisat. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            {["Gizlilik Politikası", "Kullanım Şartları", "KVKK"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "#334155" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#334155"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
