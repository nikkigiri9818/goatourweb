'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

/* ---------- Content: edit text, links and image paths here ---------- */
const LINK = "/goa-adventures";

const TOURS = [
  { title: "Mandovi Sunset Cruise", sub: "Live music, dinner and dance on board", img: "/assets/img/goa/sunsetview.jpg" },
  { title: "Scuba Diving, Grande Island", sub: "Beginner friendly, certified instructors", img: "/assets/img/goa/scuba.jpg" },
  { title: "Parasailing, Calangute", sub: "Boat ride plus a 10-minute flight", img: "/assets/img/goa/parasailing.jpg" },
  { title: "Dolphin Spotting Trip", sub: "Early morning boat from Sinquerim", img: "/assets/img/goa/flyboardingimges.webp" },
];

const Arrow = ({ dir, label, onClick }) => (
  <button type="button" className={`goa-arrow ${dir}`} aria-label={label} onClick={onClick}>
    <svg viewBox="0 0 24 24">
      {dir === "prev" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  </button>
);

const hideBroken = (e) => (e.currentTarget.style.display = "none");

export default function GoaSections() {
  /* ----- Highlights slider ----- */
  const n = TOURS.length;
  const [cur, setCur] = useState(0);
  const [tick, setTick] = useState(0); // restarts autoplay after a manual click
  const go = (i) => { setCur((i + n) % n); setTick((t) => t + 1); };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCur((c) => (c + 1) % n), 4000);
    return () => clearInterval(id);
  }, [tick, n]);

  const pos = (k) => {
    const half = Math.floor(n / 2);
    const o = ((k - cur + n + half) % n) - half;
    return o === 0 ? "c" : o === -1 ? "l" : o === 1 ? "r" : "";
  };

  return (
    <>
      {/* ===== Section 1: Top 4 Goa Tours Highlights ===== */}
      <section className="goa-sec">
        <div className="container">
          <div className="goa-head">
            <h2>Top 4 Goa Tours Highlights</h2>
            <hr />
            <p>We host 4,000+ guests every season. Pick from our most-booked Goa experiences, at fair prices with trusted local crews.</p>
          </div>

          <div className="goa-flow" aria-roledescription="carousel" aria-label="Top Goa tours">
            <Arrow dir="prev" label="Previous tour" onClick={() => go(cur - 1)} />
            {TOURS.map((t, k) => {
              const p = pos(k);
              return (
                <Link
                  key={t.title}
                  href={LINK}
                  className={`goa-slide ${p}`}
                  aria-label={t.title}
                  aria-hidden={p ? undefined : true}
                  tabIndex={p ? 0 : -1}
                >
                  <img src={t.img} alt={t.title} onError={hideBroken} />
                  <span className="goa-cap">{t.title}<small>{t.sub}</small></span>
                </Link>
              );
            })}
            <Arrow dir="next" label="Next tour" onClick={() => go(cur + 1)} />
          </div>

          <div className="goa-dots">
            {TOURS.map((t, i) => (
              <button key={t.title} type="button" aria-label={`Go to ${t.title}`} className={i === cur ? "on" : ""} onClick={() => go(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== All CSS ===== */}
      <style jsx global>{`
        .goa-sec{--teal:#1a9bc0;--teal-dark:#0f7a99;--ink:#13232b;--muted:#6b7780;--line:#e6edf0;
          padding:72px 0;overflow:hidden;color:var(--ink)}
        .goa-head{max-width:680px;margin:0 auto 44px;text-align:center}
        .goa-head small{display:block;color:var(--teal);font-style:italic;font-size:18px;margin-bottom:6px}
        .goa-head h2{font-weight:800;font-size:clamp(30px,4.5vw,48px);line-height:1.1}
        .goa-head hr{width:56px;height:4px;opacity:1;border:0;background:var(--teal);border-radius:4px;margin:18px auto}
        .goa-head p{color:var(--muted);line-height:1.6;margin:0}

        .goa-arrow{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;border:0;
          background:var(--teal);box-shadow:0 0 0 6px rgba(26,155,192,.18);display:grid;place-items:center;transition:background .2s;z-index:5}
        .goa-arrow:hover{background:var(--teal-dark)}
        .goa-arrow:focus-visible,.goa-dots button:focus-visible,.goa-slide:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
        .goa-arrow svg{width:20px;height:20px;stroke:#fff;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
        .goa-arrow.prev{left:0}.goa-arrow.next{right:0}

        /* Highlights */
        .goa-flow{position:relative;height:340px;perspective:1100px}
        .goa-slide{display:block;position:absolute;left:50%;top:0;width:min(62%,560px);height:300px;margin:0 0 0 calc(min(62%,560px)/-2);
          border-radius:16px;overflow:hidden;opacity:0;pointer-events:none;cursor:pointer;color:#fff;text-decoration:none;
          transition:transform .6s ease,opacity .6s ease;background:linear-gradient(135deg,#0b5f7a,#1a9bc0 60%,#7fd3e6)}
        .goa-slide img{width:100%;height:100%;object-fit:cover;display:block}
        .goa-cap{position:absolute;inset:auto 0 0;padding:40px 20px 16px;color:#fff;font-weight:700;font-size:18px;
          background:linear-gradient(transparent,rgba(0,0,0,.7))}
        .goa-cap small{display:block;font-weight:500;font-size:13px;opacity:.9}
        .goa-slide.c{transform:none;opacity:1;z-index:3;pointer-events:auto}
        .goa-slide.l{transform:translateX(-62%) rotateY(32deg) scale(.82);opacity:.9;z-index:2;pointer-events:auto}
        .goa-slide.r{transform:translateX(62%) rotateY(-32deg) scale(.82);opacity:.9;z-index:2;pointer-events:auto}
        .goa-dots{display:flex;gap:8px;justify-content:center;margin-top:8px}
        .goa-dots button{width:10px;height:10px;border-radius:50%;border:0;padding:0;background:#cfd8dc}
        .goa-dots button.on{background:var(--teal);width:26px;border-radius:6px}

        /* Blog */
        .goa-blog{background:linear-gradient(180deg,#fff,#fff4ec 160%)}
        .goa-car{position:relative}
        .goa-car .goa-arrow{top:34%}
        .goa-car .goa-arrow.prev{left:-24px}.goa-car .goa-arrow.next{right:-24px}
        .goa-track{display:flex;gap:28px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:14px;scrollbar-width:none}
        .goa-track::-webkit-scrollbar{display:none}
        .goa-post{flex:0 0 calc((100% - 56px)/3);scroll-snap-align:start;background:#fff;border-radius:22px;
          box-shadow:0 10px 30px rgba(19,35,43,.08);overflow:hidden}
        .goa-img{aspect-ratio:16/9;background:linear-gradient(135deg,#1a9bc0,#7fd3e6)}
        .goa-img img{width:100%;height:100%;object-fit:cover;display:block}
        .goa-post h3{font-weight:700;font-size:21px;line-height:1.3;margin-bottom:10px}
        .goa-post p{color:var(--muted);line-height:1.65;font-size:15px}
        .goa-more{color:var(--ink);font-weight:600;text-decoration:none}
        .goa-more:hover{color:var(--teal)}
        .goa-post time{display:block;padding:16px 24px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}

        @media(max-width:991px){
          .goa-post{flex-basis:calc((100% - 28px)/2)}
          .goa-car .goa-arrow.prev{left:-6px}.goa-car .goa-arrow.next{right:-6px}
        }
        @media(max-width:575px){
          .goa-post{flex-basis:100%}
          .goa-flow{height:260px}
          .goa-slide{height:220px;width:70%;margin-left:-35%}
          .goa-slide.l{transform:translateX(-58%) rotateY(32deg) scale(.8)}
          .goa-slide.r{transform:translateX(58%) rotateY(-32deg) scale(.8)}
          /* arrows now visible on mobile (smaller, tucked at the edges) */
          .goa-flow .goa-arrow{width:38px;height:38px;box-shadow:0 0 0 4px rgba(26,155,192,.18)}
          .goa-flow .goa-arrow svg{width:16px;height:16px}
          .goa-flow .goa-arrow.prev{left:4px}
          .goa-flow .goa-arrow.next{right:4px}
        }
        @media(prefers-reduced-motion:reduce){.goa-slide,.goa-track{transition:none;scroll-behavior:auto}}
      `}</style>
    </>
  );
}