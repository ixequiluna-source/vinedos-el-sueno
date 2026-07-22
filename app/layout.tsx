import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vinedos-el-sueno.vercel.app"),
  title: "Viñedos El Sueño | El Único Viñedo que Abre de Día y de Noche — Querétaro",
  description:
    "Viñedo boutique exclusivo en Ezequiel Montes, Querétaro. Vino premium, música, catas y recorridos, hotel boutique y experiencias únicas hasta las 12 de la noche. Reserva por WhatsApp.",
  keywords: [
    "viñedo Querétaro",
    "Viñedos El Sueño",
    "catas de vino Querétaro",
    "vino mexicano premium",
    "Ezequiel Montes",
    "hotel boutique viñedo",
    "vendimia Querétaro",
    "recorridos viñedo",
  ],
  openGraph: {
    title: "Viñedos El Sueño — El Único que Abre de Día y de Noche",
    description:
      "Viñedo Queretano exclusivo. Música, vino premium y buena ondita hasta las 12 de la noche. Catas, recorridos, eventos y hotel boutique en Ezequiel Montes, Querétaro.",
    locale: "es_MX",
    type: "website",
    siteName: "Viñedos El Sueño",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viñedos El Sueño — Querétaro",
    description:
      "El único viñedo que abre de día y de noche. Vino premium, catas, eventos y hotel boutique en Querétaro.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Montserrat:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
