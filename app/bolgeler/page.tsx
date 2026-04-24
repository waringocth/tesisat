import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const districts = [
  { name: "Kadıköy", slug: "kadikoy" },
  { name: "Beşiktaş", slug: "besiktas" },
  { name: "Şişli", slug: "sisli" },
  { name: "Pendik", slug: "pendik" },
  { name: "Ümraniye", slug: "umraniye" },
  { name: "Maltepe", slug: "maltepe" },
  { name: "Ataşehir", slug: "atasehir" },
  { name: "Sarıyer", slug: "sariyer" },
];

const services = [
  { name: "Su Kaçağı Tespiti", slug: "su-kacagi-tespiti" },
  { name: "Tıkanıklık Açma", slug: "tikaniklik-acma" },
  { name: "Petek Temizleme", slug: "petek-temizleme" }
];

export const metadata = {
  title: "Hizmet Bölgelerimiz | İstanbul Tesisat",
  description: "İstanbul'un tüm ilçelerine 7/24 kesintisiz, hızlı ve garantili tesisat, su kaçağı tespiti ve tıkanıklık açma hizmeti sunuyoruz.",
};

export default function BolgelerPage() {
  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight">
          Hizmet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bölgelerimiz</span>
        </h1>
        <p className="relative z-10 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          İstanbul'un tüm ilçelerine mobil araçlarımızla 2 saat içinde ulaşıyoruz. Size en yakın ekibimiz için bölgenizi seçin.
        </p>
      </section>

      {/* ── DISTRICTS GRID ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((district) => (
            <div key={district.slug} className="glass-card-blue p-6 flex flex-col h-full border border-blue-500/20 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-outfit font-bold text-white">{district.name} Tesisatçı</h2>
              </div>
              
              <div className="flex flex-col gap-3 mt-auto">
                {services.map((service) => {
                  const uppercaseDistrict = district.name.toLocaleUpperCase('tr-TR');
                  const uppercaseService = service.name.toLocaleUpperCase('tr-TR');
                  const buttonText = `${uppercaseDistrict} ${uppercaseService}`;
                  
                  return (
                    <Link
                      key={service.slug}
                      href={`/bolgeler/${district.slug}/${service.slug}`}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl bg-[#0a1128] hover:bg-blue-600 transition-colors duration-300 border border-slate-800 hover:border-transparent"
                    >
                      <span className="font-semibold text-sm text-slate-300 group-hover:text-white transition-colors">
                        {buttonText}
                      </span>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
