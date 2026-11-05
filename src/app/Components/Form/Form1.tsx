

"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type Form1Props = {
  onSelect?: (key: string) => void;
};

// Har tab ke circle mein icon ya photo dikha sakte hain:
//  - img: "" (khali)  -> icon dikhega (icon: Bootstrap Icons ka naam, ye aapke project mein pehle se load hai)
//  - img: "/assets/img/tabs/couple.jpg" -> icon ki jagah ye photo circle mein dikhegi
// href mein ?type= se packages page par us category ka filter khul jata hai.
const TABS = [
  { key: "Couple", label: "Couple", sub: "Romantic getaways", icon: "bi-heart-fill", img: "", href: "/goa-tour-package?type=couple" },
  { key: "Family", label: "Family", sub: "Fun for everyone", icon: "bi-people-fill", img: "", href: "/goa-tour-package?type=family" },
  { key: "Friends", label: "Friends Group", sub: "Trips with your gang", icon: "bi-emoji-smile-fill", img: "", href: "/goa-tour-package?type=friends" },
  { key: "Honeymoon", label: "Honeymoon", sub: "Special couple plans", icon: "bi-gem", img: "", href: "/goa-tour-package?type=honeymoon" },
];

// Tabs hero image ke safed curve ke andar kitna upar aayein (px). Upar-neeche karna ho to ye numbers badlein.
const TABS_OVERLAP = (screenWidth: number) =>
  screenWidth >= 992
    ? Math.min(140, Math.max(90, screenWidth * 0.062))
    : 50;

const Form1 = ({ onSelect }: Form1Props) => {
  const [active, setActive] = useState<string | null>(null);
  const [lift, setLift] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  // Hero image ka neeche ka kinara dhoondhkar tabs ko uske safed curve ke andar le aata hai.
  useEffect(() => {
    const place = () => {
      const section = sectionRef.current;
      if (!section) return;

      const heroImages = document.querySelectorAll(".hero-3 .hero-image");
      if (!heroImages.length) {
        setLift(120);
        return;
      }

      let heroBottom = 0;
      heroImages.forEach((el) => {
        const bottom = el.getBoundingClientRect().bottom + window.scrollY;
        if (bottom > heroBottom) heroBottom = bottom;
      });

      const currentMargin = parseFloat(getComputedStyle(section).marginTop) || 0;
      const naturalTop = section.getBoundingClientRect().top + window.scrollY - currentMargin;
      const gap = naturalTop - heroBottom;

      setLift(Math.round(gap + TABS_OVERLAP(window.innerWidth)));
    };

    place();
    const timers = [100, 500, 1500].map((ms) => setTimeout(place, ms));
    window.addEventListener("resize", place);
    window.addEventListener("load", place);

    let observer: ResizeObserver | undefined;
    const hero = document.querySelector(".hero-3");
    if (hero && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(place);
      observer.observe(hero);
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", place);
      window.removeEventListener("load", place);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleClick = (key: string) => {
    setActive(key);
    if (onSelect) onSelect(key);
  };

  return (
    <>
      <style>{`
        /* Slider ki slides ke z-index (998/999) se tabs na dhakein */
        .hero-section.hero-3 {
          position: relative;
          z-index: 1;
        }

        .goa-trip-section {
          position: relative;
          z-index: 10;
          margin-top: -120px;
          padding-bottom: 30px;
          transition: opacity .4s ease;
        }

        .goa-trip-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          list-style: none;
          margin: 0 auto;
          padding: 0;
          max-width: 1240px;
        }

        /* ---- choice card (ab seedha ek link hai) ---- */
        .goa-trip-tab {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px 14px 14px;
          overflow: hidden;
          text-align: left;
          text-decoration: none;
          font-family: inherit;
          color: #08243d;
          background: #fff;
          border: 1.5px solid #dfe8ec;
          border-radius: 24px;
          box-shadow: 0 8px 22px rgba(10, 47, 74, 0.08);
          cursor: pointer;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease, color .35s ease;
          animation: goaTripUp .6s ease both;
        }

        /* hover par neeche se teal parda uthta hai */
        .goa-trip-tab::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--theme, #0a9cb4), #07788c);
          transform: translateY(101%);
          transition: transform .45s ease;
          z-index: 0;
        }

        .goa-trip-tab > * { position: relative; z-index: 1; }

        .goa-trip-ico {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: var(--theme, #0a9cb4);
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.12);
          transition: background .35s ease, color .35s ease, transform .35s ease;
        }
        /* circle mein photo lagi ho to poora circle bharegi */
        .goa-trip-ico img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .goa-trip-text { flex: 1; min-width: 0; }
        .goa-trip-label {
          display: block;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }
        .goa-trip-sub {
          display: block;
          margin-top: 4px;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.2;
          color: #6b7a82;
          transition: color .35s ease;
        }

        .goa-trip-arrow {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: var(--theme, #0a9cb4);
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.1);
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity .35s ease, transform .35s ease, background .35s ease, color .35s ease;
        }

        .goa-trip-tab:hover {
          transform: translateY(-5px);
          border-color: var(--theme, #0a9cb4);
          box-shadow: 0 16px 32px rgba(var(--theme-rgb, 10, 156, 180), 0.28);
          color: #fff;
        }
        .goa-trip-tab:hover::before { transform: translateY(0); }
        .goa-trip-tab:hover .goa-trip-sub { color: rgba(255, 255, 255, 0.85); }
        .goa-trip-tab:hover .goa-trip-ico { background: #fff; transform: rotate(-8deg) scale(1.06); }
        .goa-trip-tab:hover .goa-trip-arrow { opacity: 1; transform: translateX(0); color: #fff; background: rgba(255,255,255,.22); }

        /* ---- chuna hua card ---- */
        .goa-trip-tab.active {
          color: #fff;
          border-color: transparent;
          box-shadow: 0 16px 34px rgba(var(--theme-rgb, 10, 156, 180), 0.38);
        }
        .goa-trip-tab.active::before { transform: translateY(0); }
        .goa-trip-tab.active .goa-trip-sub { color: rgba(255, 255, 255, 0.85); }
        .goa-trip-tab.active .goa-trip-ico { background: #fff; }

        .goa-trip-tab.active .goa-trip-arrow,
        .goa-trip-tab:hover .goa-trip-arrow { display: none; }

        .goa-trip-tab:focus-visible {
          outline: 3px solid rgba(var(--theme-rgb, 10, 156, 180), 0.45);
          outline-offset: 3px;
        }

        @keyframes goaTripUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1199px) {
          .goa-trip-sub { display: none; }
          .goa-trip-arrow { display: none; }
        }

        @media (max-width: 991px) {
          .goa-trip-tabs { grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        @media (max-width: 575px) {
          .goa-trip-tab { gap: 10px; padding: 10px 12px 10px 10px; border-radius: 20px; }
          .goa-trip-ico { width: 40px; height: 40px; font-size: 17px; }
          .goa-trip-label { font-size: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .goa-trip-tab, .goa-trip-tab::before, .goa-trip-ico, .goa-trip-arrow { animation: none; transition: none; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="goa-trip-section"
        style={{
          marginTop: lift === null ? undefined : -lift,
          opacity: lift === null ? 0 : 1,
        }}
      >
        <div className="container">
          <ul className="goa-trip-tabs">
            {TABS.map((tab, i) => (
              <li key={tab.key}>
                <Link
                  href={tab.href}
                  className={`goa-trip-tab ${active === tab.key ? "active" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => handleClick(tab.key)}
                >
                  <span className="goa-trip-ico">
                    {tab.img ? (
                      <img src={tab.img} alt={tab.label} />
                    ) : (
                      <i className={`bi ${tab.icon}`}></i>
                    )}
                  </span>
                  <span className="goa-trip-text">
                    <span className="goa-trip-label">{tab.label}</span>
                    <span className="goa-trip-sub">{tab.sub}</span>
                  </span>
                  <span className="goa-trip-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Form1;