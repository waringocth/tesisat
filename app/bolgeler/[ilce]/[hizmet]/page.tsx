import React from "react";
import { Phone, MapPin, CheckCircle2, ShieldCheck, Clock, Zap, MessageCircle } from "lucide-react";
import Link from "next/link";

const slugToNameMap: Record<string, string> = {
  // İlçeler
  "kadikoy": "Kadıköy",
  "besiktas": "Beşiktaş",
  "sisli": "Şişli",
  "pendik": "Pendik",
  "umraniye": "Ümraniye",
  "maltepe": "Maltepe",
  "atasehir": "Ataşehir",
  "sariyer": "Sarıyer",
  // Hizmetler
  "su-kacagi-tespiti": "Su Kaçağı Tespiti",
  "tikaniklik-acma": "Tıkanıklık Açma",
  "petek-temizleme": "Petek Temizleme",
};

function formatName(slug: string) {
  if (slugToNameMap[slug]) return slugToNameMap[slug];
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export async function generateMetadata(props: { params: Promise<{ ilce: string; hizmet: string }> }) {
  const params = await props.params;
  const ilceName = formatName(params.ilce);
  const hizmetName = formatName(params.hizmet);

  return {
    title: `${ilceName} ${hizmetName} | 7/24 Acil Tesisatçı`,
    description: `${ilceName} bölgesinde profesyonel ${hizmetName.toLowerCase()} hizmeti. Kırmadan, dökmeden, garantili ve hızlı çözüm için hemen arayın.`,
    keywords: `${ilceName} tesisatçı, ${ilceName} ${hizmetName.toLowerCase()}, acil tesisatçı ${ilceName}`,
  };
}

export default async function LocalServicePage(props: { params: Promise<{ ilce: string; hizmet: string }> }) {
  const params = await props.params;
  const { ilce, hizmet } = params;
  
  const ilceName = formatName(ilce);
  const hizmetName = formatName(hizmet);

  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 glass-card-blue p-8 md:p-12 rounded-3xl text-center flex flex-col items-center border border-blue-500/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-medium mb-6 text-sm">
            <MapPin size={16} />
            {ilceName} Bölgesinde Aktif Servis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{ilceName}</span> {hizmetName} Servisi
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            {ilceName} bölgesinde 7/24 hızlı müdahale ve kırmadan dökmeden garantili çözüm.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="tel:+905001234567"
              className="btn-glow flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors w-full sm:w-auto"
            >
              <Phone size={24} />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold text-white transition-all hover:scale-[1.02] w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #16a34a, #22c55e)",
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
              }}
            >
              <MessageCircle size={24} />
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTENT & BENEFITS ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-outfit font-bold text-white mb-4">{ilceName} Tesisat Hizmetleri</h2>
              <p className="text-slate-400">
                Bölgenizi iyi tanıyoruz. {ilceName} bölgesindeki tüm mahallelere hakim olan gezici servis araçlarımız sayesinde, aramanızdan kısa süre sonra kapınızdayız. {hizmetName} konusunda uzman ustalarımız, son teknoloji cihazlarla sorunun kaynağını hızla tespit edip onarımı gerçekleştirir.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                `${ilceName} içine 45 dakikada servis imkanı`,
                "Son teknoloji cihazlarla noktasal tespit",
                "Kırmadan, dökmeden garantili işlem",
                "Sürpriz maliyetler olmadan net fiyat"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Hızlı Ulaşım</h3>
              <p className="text-sm text-slate-400">{ilceName} bölgesindeki mobil ekibimizle anında müdahale.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Garantili Çözüm</h3>
              <p className="text-sm text-slate-400">Tüm işçiliğimiz 2 yıl firma garantisi altındadır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center border border-blue-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-outfit font-black text-white mb-4">
              {ilceName} İçin Hemen Usta Çağırın
            </h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Zaman kaybetmeyin. Profesyonel ekibimiz {ilceName} bölgesinde şu an aktif. Size en yakın ustamızı hemen yönlendirelim.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905001234567"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors w-full sm:w-auto"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
              <Link
                href="/bolgeler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors w-full sm:w-auto"
              >
                Diğer Bölgeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
