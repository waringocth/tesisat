import React from "react";
import { Phone, CheckCircle2, ShieldCheck, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock database
const servicesData: Record<string, { title: string; description: string; benefits: string[] }> = {
  "su-kacagi-tespiti": {
    title: "Su Kaçağı Tespiti",
    description: "Kırmadan, dökmeden son teknoloji akustik dinleme cihazları ve termal kameralarla su kaçağı tespiti yapıyoruz. Nokta atışı tespit ile evinizde gereksiz tadilat masraflarının önüne geçiyoruz. Profesyonel ekibimiz hızlı müdahale ile sorunu en kısa sürede çözer.",
    benefits: [
      "Kırmadan dökmeden noktasal tespit",
      "Termal kamera ve akustik dinleme",
      "Hızlı müdahale ve kalıcı çözüm",
      "Gereksiz tadilat masrafından kurtulma"
    ]
  },
  "tikaniklik-acma": {
    title: "Tıkanıklık Açma",
    description: "Robot cihazlar ve kameralı sistemlerle tuvalet, lavabo, pimaş ve kanalizasyon tıkanıklıklarını kırmadan açıyoruz. Görüntülü sistemlerimizle tıkanıklığın sebebini buluyor ve kalıcı çözümler üretiyoruz. 7/24 acil servisimizle her zaman yanınızdayız.",
    benefits: [
      "Robot cihazlarla kırmadan açma",
      "Kameralı sistemle görüntüleme",
      "Kalıcı ve garantili çözüm",
      "7/24 acil tıkanıklık servisi"
    ]
  },
  "petek-temizleme": {
    title: "Petek Temizleme",
    description: "Özel makineler ve kimyasallar kullanarak peteklerinizin içindeki tortu, kireç ve çamuru temizliyoruz. Bu sayede ısınma veriminiz artar, doğalgaz faturalarınız düşer. Kış gelmeden petek temizliğinizi yaptırarak daha verimli ve ekonomik ısının.",
    benefits: [
      "Özel makineli ve ilaçlı temizlik",
      "Doğalgaz faturasında tasarruf",
      "Daha yüksek ısınma verimi",
      "Kombi ömrünü uzatma"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

// Ensure compatibility with Next.js 15 param promises
export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 glass-card-blue p-8 md:p-12 rounded-3xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* ── CONTENT & BENEFITS ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-outfit font-bold text-white mb-4">Neden Bizi Seçmelisiniz?</h2>
              <p className="text-slate-400">
                {service.title} konusunda uzman ekibimiz, en son teknoloji cihazlarla hizmet vererek sorunu kökünden çözer. Müşteri memnuniyeti ve garantili işçilik temel prensibimizdir.
              </p>
            </div>
            
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Hızlı Müdahale</h3>
              <p className="text-sm text-slate-400">Talebinizden sonra en geç 2 saat içinde adresinizdeyiz.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Garantili İşçilik</h3>
              <p className="text-sm text-slate-400">Yaptığımız tüm onarımlar firmamızın 2 yıl garantisi altındadır.</p>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 col-span-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">7/24 Kesintisiz Hizmet</h3>
              <p className="text-sm text-slate-400">Gecenin bir yarısı bile olsa acil durumlar için her zaman hazırız. Bizi dilediğiniz saatte arayabilirsiniz.</p>
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
              Hemen Profesyonel Destek Alın
            </h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              {service.title} hizmetimizden yararlanmak ve fiyat teklifi almak için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
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
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors w-full sm:w-auto"
              >
                Mesaj Gönder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
