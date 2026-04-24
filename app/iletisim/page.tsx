"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, ShieldCheck } from "lucide-react";

export default function IletisimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#020818] pt-24 pb-16">
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-white mb-6 tracking-tight">
          Bize Ulaşın - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">7/24 Acil Servis</span>
        </h1>
        <p className="relative z-10 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tesisat sorunlarınızı ertelemeyin. Uzman ekibimizle hemen iletişime geçin, sorununuzu aynı gün içinde garantili olarak çözelim.
        </p>
      </section>

      {/* ── TWO COLUMN LAYOUT ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* ── LEFT COLUMN: CONTACT DETAILS ── */}
          <div className="flex flex-col gap-8">
            <div className="glass-card-blue p-8 rounded-3xl border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white font-outfit mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <a href="tel:+905001234567" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Müşteri Hizmetleri 1</p>
                    <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">+90 500 123 45 67</p>
                  </div>
                </a>

                <a href="tel:+905001234568" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Müşteri Hizmetleri 2</p>
                    <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">+90 500 123 45 68</p>
                  </div>
                </a>

                <a href="mailto:info@istanbultesisat.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">E-Posta Adresi</p>
                    <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">info@istanbultesisat.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Merkez Ofis</p>
                    <p className="text-lg font-medium text-white">Barbaros Bulvarı No:123<br/>Beşiktaş / İstanbul</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Google Map */}
            <div className="w-full h-64 rounded-3xl bg-slate-800/50 border border-slate-700 overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                <MapPin size={48} className="mb-2 opacity-50" />
                <p className="font-medium">Google Haritalar Görünümü</p>
                <p className="text-sm opacity-70">Entegrasyon için hazır</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card flex items-center justify-center gap-3 p-4 border border-slate-800">
                <Clock className="text-blue-400" size={20} />
                <span className="text-white font-medium">7/24 Açık</span>
              </div>
              <div className="glass-card flex items-center justify-center gap-3 p-4 border border-slate-800">
                <ShieldCheck className="text-blue-400" size={20} />
                <span className="text-white font-medium">Garantili</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: CONTACT FORM ── */}
          <div className="glass-card-blue p-8 md:p-10 rounded-3xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white font-outfit mb-2">Hızlı Servis Talebi</h2>
            <p className="text-slate-400 mb-8">Formu doldurun, ustamız 5 dakika içinde sizi arasın.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-[#0a1128] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Örn: Ahmet Yılmaz"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full bg-[#0a1128] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="0 (5__) ___ __ __"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-300">İhtiyacınız Olan Hizmet</label>
                <select 
                  id="service" 
                  required
                  className="w-full bg-[#0a1128] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="" disabled selected>Lütfen bir hizmet seçin</option>
                  <option value="su-kacagi">Su Kaçağı Tespiti</option>
                  <option value="tikaniklik">Tıkanıklık Açma</option>
                  <option value="petek">Petek Temizleme</option>
                  <option value="diger">Diğer / Acil Durum</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Mesajınız (Opsiyonel)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#0a1128] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Sorununuzu kısaca anlatabilirsiniz..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-glow flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    Gönder ve Fiyat Al
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
