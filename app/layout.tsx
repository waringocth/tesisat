import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Firma Adı] Tesisat | İstanbul 7/24 Acil Tesisatçı",
  description:
    "İstanbul'un tüm ilçelerine 2 saat içinde müdahale eden profesyonel tesisat hizmetleri. Su kaçağı tespiti, tıkanıklık açma, kombi tamiri. Kırmadan dökmeden, 2 yıl garantili.",
  keywords:
    "tesisatçı, su kaçağı, tıkanıklık açma, acil tesisatçı, istanbul tesisatçı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "'Inter', sans-serif" }} suppressHydrationWarning>{children}</body>
    </html>
  );
}
