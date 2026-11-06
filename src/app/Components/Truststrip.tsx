"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Instant Slot Booking",
    text: "You don't have to wait in line. Book your Slot at amazing prices from this website or on WhatsApp. Get Pre-booking offers on the Website.",
    icon: "M3 6h18v12H3zM3 10h18M7 15h4",
  },
  {
    title: "Activity Time",
    text: "Our Watersports Coordinator will help you with activities and slot timings. You will be able to enjoy your 2-hour slot fully.",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  },
  {
    title: "Thrilling Water Sports",
    text: "Parasailing with dip, Banana Ride, Bumper Ride, Jetski and Speed Boat. We also provide kayaking, rafting, Zorbing Ball ride.",
    icon: "M16 8a2 2 0 100-4 2 2 0 000 4zM4 13l5-4 4 2 2-3M2 17c2 0 2-1.5 4-1.5S8 17 10 17s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M2 21c2 0 2-1.5 4-1.5S8 21 10 21s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5",
  },
];

const TrustStrip = ({
  href = "https://wa.me/917678464517", // set to your WhatsApp link, e.g. https://wa.me/91XXXXXXXXXX
  buttonText = "Get Details & Videos",
}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`ts ${seen ? "in" : ""}`}
      aria-label="Why book water sports with us"
    >
      <style>{`
        .ts{--ink:#0e1e24;--navy:#0e3a4a;--cyan:#1aa7ca;--cyan-d:#1389a8;
          position:relative;overflow:hidden;color:#fff;padding:80px 0 76px; margin-bottom:71px;
          background:linear-gradient(135deg,var(--navy) 0%,var(--ink) 100%)}
        .ts::before{content:"";position:absolute;left:-8%;top:-40%;width:45%;height:130%;
          background:radial-gradient(closest-side,rgba(26,167,202,.35),rgba(26,167,202,0));pointer-events:none}
        .ts::after{content:"";position:absolute;right:-6%;bottom:-50%;width:40%;height:120%;
          background:radial-gradient(closest-side,rgba(246,213,218,.16),rgba(246,213,218,0));pointer-events:none}
        .ts-in{position:relative;max-width:1180px;margin:0 auto;padding:0 20px}
        .ts-grid{display:grid;grid-template-columns:repeat(3,1fr)}

        .ts-item{position:relative;text-align:center;padding:34px 30px 38px;border-radius:24px;
          opacity:0;transform:translateY(40px);
          transition:opacity .8s ease,transform .45s cubic-bezier(.2,.7,.2,1),background .35s;
          transition-delay:calc(var(--i) * .15s),0s,0s}
        .ts.in .ts-item{opacity:1;transform:none}
        .ts-item + .ts-item::before{content:"";position:absolute;left:0;top:18%;height:64%;width:1px;
          background:linear-gradient(transparent,rgba(255,255,255,.28),transparent)}
        .ts.in .ts-item:hover{transform:translateY(-10px);background:rgba(255,255,255,.07);transition-delay:0s}

        .ts-ico{position:relative;width:84px;height:84px;margin:0 auto 22px;border-radius:50%;
          background:rgba(26,167,202,.16);display:grid;place-items:center;transition:background .35s,transform .35s}
        .ts-ico::before{content:"";position:absolute;inset:-7px;border-radius:50%;border:2px dashed rgba(255,255,255,.35);
          transition:border-color .35s}
        .ts-ico svg{width:38px;height:38px;fill:none;stroke:#fff;stroke-width:1.7;stroke-linecap:round;
          stroke-linejoin:round;transition:transform .45s cubic-bezier(.2,.7,.2,1)}
        .ts-item:hover .ts-ico{background:var(--cyan);transform:scale(1.06)}
        .ts-item:hover .ts-ico::before{border-color:var(--cyan);animation:tsSpin 6s linear infinite}
        .ts-item:hover .ts-ico svg{transform:scale(1.14) rotate(-6deg)}
        @keyframes tsSpin{to{transform:rotate(360deg)}}

        .ts-item h3{font-size:23px;line-height:1.3;font-weight:700;margin:0 0 14px;color:#fff;transition:color .3s}
        .ts-item h3::after{content:"";display:block;width:34px;height:3px;border-radius:3px;background:var(--cyan);
          margin:12px auto 0;transition:width .4s ease}
        .ts-item:hover h3{color:#7fd8ef}
        .ts-item:hover h3::after{width:80px}
        .ts-item p{margin:0 auto;max-width:34ch;font-size:15.5px;line-height:1.75;color:rgba(255,255,255,.78)}

        .ts-cta{text-align:center;margin-top:30px;opacity:0;transform:translateY(24px);
          transition:opacity .8s .6s ease,transform .8s .6s ease}
        .ts.in .ts-cta{opacity:1;transform:none}
        .ts-btn{display:inline-flex;align-items:center;gap:12px;background:var(--cyan);color:#fff;
          padding:16px 34px;border-radius:999px;font-weight:700;font-size:16px;text-decoration:none;
          transition:background .25s,transform .25s,box-shadow .25s}
        .ts-btn svg{width:22px;height:22px;fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round;
          stroke-linejoin:round;transition:transform .3s}
        .ts-btn:hover{background:#fff;color:var(--ink);transform:translateY(-3px);box-shadow:0 14px 30px rgba(26,167,202,.4)}
        .ts-btn:hover svg{stroke:var(--cyan-d);transform:rotate(-12deg) scale(1.12)}
        .ts-btn:focus-visible{outline:3px solid #fff;outline-offset:4px}

        @media (max-width:860px){
          .ts{padding:60px 0}
          .ts-grid{grid-template-columns:1fr;gap:10px}
          .ts-item + .ts-item::before{left:15%;top:0;width:70%;height:1px;
            background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent)}
        }
        @media (prefers-reduced-motion:reduce){
          .ts *,.ts *::before,.ts *::after{transition:none !important;animation:none !important}
          .ts .ts-item,.ts .ts-cta{opacity:1;transform:none}
        }
      `}</style>

      <div className="ts-in">
        <div className="ts-grid">
          {items.map((it, i) => (
         <div
  className="ts-item"
  key={it.title}
  style={{ "--i": i } as React.CSSProperties}
>

              <div className="ts-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={it.icon} />
                </svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>

        <div className="ts-cta">
          <Link href={href} className="ts-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />
              <path d="M9 9c0 3 3 6 6 6l1.5-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 9z" />
            </svg>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
