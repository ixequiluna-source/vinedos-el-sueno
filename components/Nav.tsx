"use client";

import { useEffect, useState } from "react";
import { WHATSAPP } from "@/lib/data";

const links = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#vinos", label: "Vinos" },
  { href: "#vendimia", label: "La Vendimia" },
  { href: "#visita", label: "Visítanos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-5">
      <nav
        className={`liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? "bg-black/50" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden>
            <defs>
              <linearGradient id="navg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8d6f35" />
                <stop offset="0.5" stopColor="#e8d5a3" />
                <stop offset="1" stopColor="#c9a45c" />
              </linearGradient>
            </defs>
            <path d="M32 6 L54 17 V40 L32 58 L10 40 V17 Z" fill="none" stroke="url(#navg)" strokeWidth="3" />
            <text x="32" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontSize="30" fontWeight="600" fill="url(#navg)">
              S
            </text>
          </svg>
          <span className="font-display text-lg font-semibold tracking-[0.14em] text-gold-gradient">
            EL SUEÑO
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-goldlight"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Hola, quiero reservar en Viñedos El Sueño 🍷"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-goldlight md:inline-block"
          >
            Reservar
          </a>
          <button aria-label="Menú" className="md:hidden text-goldlight p-1" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="liquid-glass mx-auto mt-2 flex max-w-5xl flex-col gap-4 rounded-3xl bg-black/70 px-7 py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.25em] text-cream/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black"
          >
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
