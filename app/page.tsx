import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  wines,
  experiences,
  schedule,
  WHATSAPP,
  WHATSAPP_DISPLAY,
  MAPS_URL,
  COORDS,
  INSTAGRAM,
  THREADS,
} from "@/lib/data";

const VIDEO_HERO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_135315_5f9e8a4c-09bc-4a97-9f75-8a387d4258ee.mp4";
const VIDEO_VENDIMIA =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_102933_4e8f73b5-775a-4179-b2fb-472f59063dcd.mp4";
const VIDEO_ATARDECER =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260327_053348_d1b3e997-e822-44eb-9056-718270060d72.mp4";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-gold">
        {kicker}
      </p>
      <h2 className="font-display text-4xl font-medium leading-tight text-cream md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{sub}</p>}
      <div className="gold-line mx-auto mt-8 w-40" />
    </Reveal>
  );
}

const marqueeItems = [
  "Vino Premium",
  "Catas & Maridajes",
  "Música en Vivo",
  "Hotel Boutique",
  "Atardeceres Únicos",
  "El Único Champagne Mexicano",
  "Abierto de Día y de Noche",
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Nav />

      {/* ══════════ HERO — video cinematográfico ══════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center supports-[height:100svh]:min-h-[100svh]">
        <video
          src={VIDEO_HERO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#0b0a08]" />
        <div className="relative z-10">
          <p className="fade-rise mb-6 text-[11px] uppercase tracking-[0.5em] text-goldlight/90 md:text-xs" style={{ animationDelay: "150ms" }}>
            Viñedo · Hotel Boutique · Residencial
          </p>
          <h1 className="font-display text-6xl font-semibold leading-[0.95] drop-shadow-lg md:text-[7.5rem]">
            <span className="fade-rise block text-gold-gradient" style={{ animationDelay: "300ms" }}>
              Viñedos
            </span>
            <span className="fade-rise block text-cream" style={{ animationDelay: "450ms" }}>
              El Sueño
            </span>
          </h1>
          <p className="fade-rise mx-auto mt-8 max-w-xl font-display text-2xl italic text-cream/90 md:text-3xl" style={{ animationDelay: "600ms" }}>
            El único viñedo que abre <span className="text-goldlight">de día y de noche</span>
          </p>
          <p className="fade-rise mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/70" style={{ animationDelay: "720ms" }}>
            Viñedo queretano exclusivo. Música, vino premium y la mejor atmósfera
            hasta las 12 de la noche, en Ezequiel Montes, Querétaro.
          </p>
          <div className="fade-rise mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "860ms" }}>
            <a
              href={waLink("Hola, quiero reservar una experiencia en Viñedos El Sueño 🍷")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-all hover:bg-goldlight hover:shadow-[0_0_40px_-8px_rgba(201,164,92,0.8)]"
            >
              Reserva tu experiencia
            </a>
            <a
              href="#experiencias"
              className="liquid-glass rounded-full px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-cream/90 transition-transform hover:scale-[1.03]"
            >
              Descubre más
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold/70">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section className="overflow-hidden border-y border-gold/15 bg-bg2 py-5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-[10px] uppercase tracking-[0.35em] text-muted">
              {item} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ EXPERIENCIAS ══════════ */}
      <section id="experiencias" className="section-fade px-6 py-28">
        <SectionTitle
          kicker="Catas y Recorridos"
          title={<>Experiencias <span className="italic text-goldlight">que se beben</span></>}
          sub="Entrada general $250 — incluye 1 copa de tinto de verano o refresco. Recorridos: 12:00, 14:00 y 16:00 hrs · fines de semana también 18:00 hrs."
        />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e, i) => (
            <Reveal key={e.name} delay={i * 90} className={e.destacado ? "lg:scale-[1.03]" : ""}>
              <div className={`card-glow relative flex h-full flex-col rounded-3xl p-8 ${e.destacado ? "glow-card border-gold/50" : ""}`}>
                {e.destacado && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-black">
                    La favorita
                  </span>
                )}
                <h3 className="font-display text-3xl text-goldlight">{e.name}</h3>
                <p className="mt-1 font-display text-2xl text-cream">{e.price}</p>
                {e.minimo && (
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">{e.minimo}</p>
                )}
                <div className="gold-line my-5" />
                <ul className="flex-1 space-y-3">
                  {e.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-cream/80">
                      <span className="mt-[2px] text-gold">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola, quiero reservar la experiencia "${e.name}" en Viñedos El Sueño 🍷`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 rounded-full border border-gold/50 py-3 text-center text-[10px] uppercase tracking-[0.3em] text-goldlight transition-all hover:bg-gold hover:text-black"
                >
                  Reservar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="border-y border-gold/10 bg-bg2/60 px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 text-center md:grid-cols-4">
          {[
            { v: "40K+", l: "Comunidad que nos sigue" },
            { v: "9", l: "Etiquetas de la casa" },
            { v: "5", l: "Experiencias de cata" },
            { v: "Nº1", l: "Champagne mexicano" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <p className="font-display text-5xl text-gold-gradient md:text-6xl">{s.v}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ VINOS ══════════ */}
      <section id="vinos" className="px-6 py-28">
        <SectionTitle
          kicker="Etiquetas de la casa"
          title={<>Nuestros <span className="italic text-goldlight">vinos</span></>}
          sub="Barricas de roble francés de primer uso, uvas de altura queretanas y el único champagne mexicano elaborado por método champenoise."
        />
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
          {wines.map((w, i) => (
            <Reveal key={w.name} delay={(i % 3) * 80}>
              <div className="group border-b border-gold/12 py-7 transition-colors hover:border-gold/40">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-wide text-cream transition-colors group-hover:text-goldlight">
                    {w.name}
                  </h3>
                  <span className="font-display text-xl text-gold">
                    ${w.price.toLocaleString("es-MX")}
                  </span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold/70">{w.tipo}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <a
            href={waLink("Hola, me interesan los vinos de Viñedos El Sueño 🍷")}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-block rounded-full px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-goldlight transition-transform hover:scale-[1.03]"
          >
            Pregunta por nuestras etiquetas
          </a>
        </Reveal>
      </section>

      {/* ══════════ VENDIMIA — video de fondo ══════════ */}
      <section id="vendimia" className="relative overflow-hidden px-6 py-28">
        <video
          src={VIDEO_VENDIMIA}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a08] via-black/75 to-[#0b0a08]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-gold">
              Evento estelar · Sábado 25 de julio 2026 · 4:00 pm
            </p>
            <h2 className="font-display text-5xl font-medium leading-none text-cream md:text-7xl">
              La Real Vendimia
              <br />
              <span className="text-gold-gradient italic">Flamenco Ibérica</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/70 md:text-base">
              Tradición que inspira, sabor que une. Una noche irrepetible con lo
              mejor de España y México en el viñedo más disruptivo del mundo.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
            {[
              {
                t: "Raúl Olivar",
                d: "El mejor guitarrista flamenco de España, en concierto bajo las estrellas.",
              },
              {
                t: "Emilio García Ortigosa",
                d: "El mejor cortador de jamón ibérico del mundo, en vivo.",
              },
              {
                t: "Concurso Internacional de Paella Valenciana de Sueca",
                d: "Semifinal clasificatoria oficial con 25 equipos — la paella nos une.",
              },
              {
                t: "Espectáculo Ecuestre",
                d: "Arte, música y caballos en una puesta en escena de otro nivel.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 90}>
                <div className="liquid-glass h-full rounded-3xl bg-black/40 p-7">
                  <h3 className="font-display text-2xl text-goldlight">{x.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                { z: "Zona Plata", p: "$2,900" },
                { z: "Zona Oro", p: "$3,500" },
                { z: "Zona Platino", p: "$4,500" },
              ].map((t) => (
                <div key={t.z} className="liquid-glass rounded-3xl bg-black/40 p-6 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cream/60">{t.z}</p>
                  <p className="mt-2 font-display text-4xl text-gold">{t.p}</p>
                </div>
              ))}
            </div>
            <a
              href={waLink("Hola, quiero boletos para La Real Vendimia Flamenco Ibérica (25 de julio) 💃🍷")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-gold px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-all hover:bg-goldlight hover:shadow-[0_0_40px_-8px_rgba(201,164,92,0.8)]"
            >
              Quiero mis boletos
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════ VISITA ══════════ */}
      <section id="visita" className="section-fade px-6 py-28">
        <SectionTitle
          kicker="Visítanos"
          title={<>Te esperamos <span className="italic text-goldlight">en el viñedo</span></>}
          sub="Ezequiel Montes, Querétaro. Reserva por WhatsApp y vive el atardecer más hermoso de la región."
        />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card-glow h-full rounded-3xl p-9">
              <h3 className="font-display text-3xl text-goldlight">Horarios</h3>
              <div className="gold-line my-5" />
              <ul className="space-y-3">
                {schedule.map((s) => (
                  <li key={s.day} className="flex items-baseline justify-between text-sm">
                    <span className="uppercase tracking-[0.2em] text-cream/80">{s.day}</span>
                    <span className={s.hours === "Cerrado" ? "text-muted italic" : "text-goldlight"}>
                      {s.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="gold-line my-6" />
              <p className="text-sm text-cream/80">
                Reservaciones:{" "}
                <a
                  href={waLink("Hola, quiero hacer una reservación en Viñedos El Sueño 🍷")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-goldlight underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted">
                No pet friendly · Ambiente exclusivo
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <div className="card-glow h-full overflow-hidden rounded-3xl p-0">
              <iframe
                title="Mapa Viñedos El Sueño"
                src={`https://maps.google.com/maps?q=${COORDS.lat},${COORDS.lng}&z=15&output=embed`}
                className="h-full min-h-[420px] w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[11px] uppercase tracking-[0.3em] text-goldlight underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA ATARDECER ══════════ */}
      <section className="relative overflow-hidden py-32 text-center">
        <video
          src={VIDEO_ATARDECER}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a08] via-black/60 to-[#0b0a08]" />
        <Reveal className="relative z-10 px-6">
          <p className="font-display text-3xl italic text-cream/90 md:text-5xl">
            «El vino no excluye gente»
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-goldlight/80">
            Ven a vivir el sueño
          </p>
          <a
            href={waLink("Hola, quiero visitar Viñedos El Sueño 🍷")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gold px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-all hover:bg-goldlight"
          >
            Reservar ahora
          </a>
        </Reveal>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-gold/15 bg-bg2 px-6 py-16 text-center">
        <p className="font-display text-3xl tracking-[0.15em] text-gold-gradient font-semibold">
          VIÑEDOS EL SUEÑO
        </p>
        <p className="mt-3 font-display text-lg italic text-cream/70">
          El único que abre de día y de noche
        </p>
        <div className="mt-8 flex items-center justify-center gap-8">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/60 transition-colors hover:text-goldlight"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={THREADS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="text-cream/60 transition-colors hover:text-goldlight"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.7 11.1c1.5.1 2.8.5 3.8 1.2 1.2.9 1.9 2.2 1.9 3.7 0 2-1 3.6-2.7 4.6-1.3.8-3 1.2-4.9 1.2-3 0-5.3-1-6.9-3C2.6 17.1 1.9 14.8 1.9 12c0-2.8.7-5.1 2.1-6.8 1.6-2 3.9-3 6.9-3 2.9 0 5.1.9 6.7 2.8.8.9 1.4 2 1.8 3.3l-2.1.6c-.6-2-1.9-3.4-3.7-4-1.9-.7-4.4-.5-6 .7-1.8 1.3-2.6 3.6-2.6 6.4 0 2.8.8 5.1 2.6 6.4 1.6 1.2 4.1 1.4 6 .7 1.5-.5 2.4-1.6 2.4-2.9 0-.9-.4-1.6-1.1-2.1-.5-.4-1.2-.6-2-.7-.1.9-.4 1.7-.8 2.4-.7 1-1.7 1.6-3 1.6-1 0-1.9-.3-2.6-.9-.7-.6-1.1-1.5-1.1-2.4 0-1.9 1.5-3.2 3.9-3.5.8-.1 1.7-.1 2.6 0v-.3c-.1-1.1-.8-1.8-1.9-1.8-1 0-1.7.4-2 1.1l-2-.7c.6-1.5 2.1-2.4 4-2.4 2.4 0 3.9 1.5 4.1 4l-.4.9zm-4.4 4.5c0 .8.7 1.3 1.7 1.3 1.2 0 2-.8 2.2-2.5-.7-.1-1.4-.1-2 0-1.3.2-1.9.6-1.9 1.2z" />
            </svg>
          </a>
          <a
            href={waLink("Hola 🍷")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-cream/60 transition-colors hover:text-goldlight"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.6 3.5.9 2 2.5 3.7 4.5 4.8 1.6.9 2.9 1.1 3.9.8.6-.2 1.3-.7 1.5-1.4.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z" />
            </svg>
          </a>
        </div>
        <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-muted">
          Ezequiel Montes · Querétaro · México
        </p>
        <p className="mt-2 text-[10px] tracking-wide text-muted/60">
          © {new Date().getFullYear()} Viñedos El Sueño. Todos los derechos reservados.
        </p>
      </footer>

      {/* ══════════ WHATSAPP FAB ══════════ */}
      <a
        href={waLink("Hola, quiero información de Viñedos El Sueño 🍷")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 14.1c-.2.6-.9 1.2-1.5 1.4-1 .3-2.3.1-3.9-.8a11.3 11.3 0 0 1-4.5-4.8c-.6-1.4-.3-2.6.6-3.5.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 1.9c.1.2.1.3 0 .5l-.4.5c-.2.2-.5.3-.2.7a6.7 6.7 0 0 0 3.3 2.9c.2.1.4.1.5-.1.2-.2.6-.8.8-1 .2-.2.4-.2.6-.1.2.1 1.5.7 1.7.8.3.1.5.2.5.3.1.1.1.6-.1 1.2z" />
        </svg>
      </a>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Winery",
            name: "Viñedos El Sueño",
            description:
              "Viñedo boutique exclusivo en Ezequiel Montes, Querétaro. El único viñedo que abre de día y de noche.",
            slogan: "El único que abre de día y de noche",
            telephone: "+52 33 4098 3593",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ezequiel Montes",
              addressRegion: "Querétaro",
              addressCountry: "MX",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: COORDS.lat,
              longitude: COORDS.lng,
            },
            url: "https://vinedos-el-sueno.vercel.app",
            sameAs: [INSTAGRAM, THREADS],
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "18:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "12:00", closes: "18:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "12:00", closes: "18:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "12:00", closes: "24:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "24:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "20:00" },
            ],
          }),
        }}
      />
    </main>
  );
}
