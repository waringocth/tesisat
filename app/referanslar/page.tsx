import React from "react";
import { Star, CheckCircle2, ThumbsUp, Building2, Users } from "lucide-react";

export const metadata = {
  title: "Referanslar ve Müşteri Yorumları | İstanbul Tesisat",
  description: "Bizi tercih eden yüzlerce mutlu müşterimizin yorumlarını okuyun. Tesisat işlerindeki başarı oranımız ve referanslarımız.",
};

const reviews = [
  {
    name: "Ahmet Yılmaz",
    location: "Kadıköy",
    text: "Gece yarısı alt komşuya su sızdığını fark ettik. Aradığımız gibi 40 dakikada geldiler. Kırmadan dökmeden cihazla kaçağı bulup hemen tamir ettiler. Çok profesyonel bir ekip.",
    rating: 5,
    date: "1 Hafta Önce"
  },
  {
    name: "Ayşe Kaya",
    location: "Şişli",
    text: "Mutfak lavabosu tıkanmıştı ve ne yaptıysak açılmadı. Robot cihazla gelip 15 dakikada sorunu çözdüler. Etrafı hiç kirletmeden çalıştılar, kesinlikle tavsiye ederim.",
    rating: 5,
    date: "2 Hafta Önce"
  },
  {
    name: "Mehmet Demir",
    location: "Beşiktaş",
    text: "Kış gelmeden petekleri temizletmek istedik. Makineli temizlik sonrası petekler ilk günkü gibi ısınmaya başladı. Fiyatları da gayet makul.",
    rating: 5,
    date: "1 Ay Önce"
  },
  {
    name: "Zeynep Çelik",
    location: "Ümraniye",
    text: "Banyodaki su kaçağını bulmak için 3 farklı tesisatçı çağırdım bulamadılar. Bu ekip termal kamerayla 10 dakikada kaçağın yerini nokta atışı buldu.",
    rating: 5,
    date: "2 Ay Önce"
  },
  {
    name: "Can Polat",
    location: "Pendik",
    text: "Ana gider hattındaki tıkanıklık için kamera ile bakıp sorunu gösterdiler. Çok şeffaf çalışıyorlar. İşlerini hakkıyla yapan dürüst esnaflar.",
    rating: 5,
    date: "3 Ay Önce"
  },
  {
    name: "Fatma Şahin",
    location: "Ataşehir",
    text: "Gece 3'te kombi borusu patladı. Acil servisleri gerçekten dedikleri gibi çalışıyor. Çok hızlı müdahale ettiler, yoksa evi su basacaktı.",
    rating: 5,
    date: "4 Ay Önce"
  }
];

const stats = [
  { label: "Mutlu Müşteri", value: "2500+", icon: Users },
  { label: "Tamamlanan İş", value: "3200+", icon: CheckCircle2 },
  { label: "Kurumsal Referans", value: "150+", icon: Building2 },
  { label: "Olumlu Yorum Oranı", value: "%98", icon: ThumbsUp },
];

export default function ReferanslarPage() {
  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight">
          Müşteri Yorumları ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Referanslarımız</span>
        </h1>
        <p className="relative z-10 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Sözümüze değil, müşterilerimizin anlattıklarına güvenin. Yüzlerce başarılı operasyon ve %100 müşteri memnuniyeti hedefiyle çalışıyoruz.
        </p>
      </section>

      {/* ── REVIEWS MASONRY / GRID ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card-blue p-6 rounded-3xl border border-blue-500/20 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg font-outfit">{review.name}</h3>
                  <p className="text-sm text-slate-400">{review.location}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed italic flex-grow">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">G</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">Google Yorumu</span>
                </div>
                <span className="text-xs text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-3xl p-8 md:p-12 border border-blue-500/20 text-center">
          <h2 className="text-3xl font-outfit font-bold text-white mb-10">Başarıyla Tamamlanan İşler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
                  <stat.icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-3xl font-black text-white font-outfit mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
