import React from "react";
import Link from "next/link";
import { Droplets, Wrench, Zap, Waves, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tüm Tesisat Hizmetlerimiz | İstanbul Tesisat",
  description: "Su kaçağı tespiti, tıkanıklık açma, petek temizleme ve daha birçok profesyonel tesisat hizmetimiz hakkında detaylı bilgi alın.",
};

const servicesList = [
  {
    title: "Su Kaçağı Tespiti",
    slug: "su-kacagi-tespiti",
    description: "Kırmadan, dökmeden son teknoloji akustik dinleme cihazları ve termal kameralarla noktasal su kaçağı tespiti yapıyoruz.",
    icon: Droplets,
  },
  {
    title: "Tıkanıklık Açma",
    slug: "tikaniklik-acma",
    description: "Robot cihazlar ve kameralı sistemlerle tuvalet, lavabo ve pimaş tıkanıklıklarını kırmadan kalıcı olarak açıyoruz.",
    icon: Wrench,
  },
  {
    title: "Petek Temizleme",
    slug: "petek-temizleme",
    description: "Özel makineler ve kimyasallar kullanarak peteklerinizin içindeki tortu ve kireci temizliyor, ısınma verimini artırıyoruz.",
    icon: Zap,
  },
  {
    title: "Kanalizasyon Açma",
    slug: "kanalizasyon-acma",
    description: "Ağır hizmet tipi kanal açma makinelerimiz ile bina ana hatlarındaki ve logar tıkanıklıklarındaki sorunları hızla çözüyoruz.",
    icon: Waves,
  }
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight">
          Tüm Tesisat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hizmetlerimiz</span>
        </h1>
        <p className="relative z-10 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          En zorlu tesisat problemlerinize profesyonel, kırmadan dökmeden ve garantili çözümler sunuyoruz. İhtiyacınız olan hizmeti seçin ve hemen destek alın.
        </p>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div key={service.slug} className="glass-card-blue p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-colors flex flex-col h-full group">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <service.icon size={32} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white font-outfit mb-4">{service.title}</h2>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link 
                href={`/hizmetler/${service.slug}`}
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto w-fit"
              >
                Detaylı Bilgi
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
