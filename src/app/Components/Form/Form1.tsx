"use client";

import React, { useState, useEffect, useRef } from "react";

type Form1Props = {
  onSelect?: (key: string) => void;
};

const TABS = [
  { key: "Couple", label: "Couple", icon: "fa-heart" },
  { key: "Family", label: "Family", icon: "fa-users" },
  { key: "Friends", label: "Friends Group", icon: "fa-umbrella-beach" },
  { key: "Honeymoon", label: "Honeymoon", icon: "fa-champagne-glasses" },
];

const TABS_OVERLAP = (screenWidth: number) =>
  screenWidth >= 992
    ? Math.min(140, Math.max(90, screenWidth * 0.062))
    : 50;

const Form1 = ({ onSelect }: Form1Props) => {
  const [active, setActive] = useState("Couple");
  const [lift, setLift] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const place = () => {
      const section = sectionRef.current;

      if (!section) return;

      const heroImages = document.querySelectorAll(
        ".hero-3 .hero-image"
      );

      if (!heroImages.length) {
        setLift(120);
        return;
      }

      let heroBottom = 0;

      heroImages.forEach((el) => {
        const bottom =
          el.getBoundingClientRect().bottom + window.scrollY;

        if (bottom > heroBottom) {
          heroBottom = bottom;
        }
      });

      const currentMargin =
        parseFloat(getComputedStyle(section).marginTop) || 0;

      const naturalTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        currentMargin;

      const gap = naturalTop - heroBottom;

      setLift(
        Math.round(gap + TABS_OVERLAP(window.innerWidth))
      );
    };

    place();

    const timers = [100, 500, 1500].map((ms) =>
      setTimeout(place, ms)
    );

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

      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleClick = (key: string) => {
    setActive(key);

    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <>
      <style>{`
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
          gap: 20px;
          list-style: none;
          margin: 0 auto;
          padding: 0;
          max-width: 1240px;
        }

        .goa-trip-tab {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 14px 20px;
          background: #fff;
          border: 1.5px solid #e3eef1;
          border-radius: 100px;
          box-shadow: 0 6px 16px rgba(20, 40, 60, 0.06);
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          color: #1b1b1b;
          cursor: pointer;
          transition: transform .3s, box-shadow .3s, background .3s, color .3s, border-color .3s;
          animation: goaTripUp .6s ease both;
        }

        .goa-trip-ico {
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--theme, #1ca8cb);
          background: rgba(28, 168, 203, 0.14);
          transition: background .3s, color .3s;
        }

        .goa-trip-tab:hover {
          transform: translateY(-4px);
          border-color: var(--theme, #1ca8cb);
          box-shadow: 0 10px 24px rgba(28, 168, 203, 0.18);
        }

        .goa-trip-tab.active {
          background: var(--theme, #1ca8cb);
          border-color: var(--theme, #1ca8cb);
          color: #fff;
          box-shadow: 0 12px 26px rgba(28, 168, 203, 0.35);
        }

        .goa-trip-tab.active .goa-trip-ico {
          color: #fff;
          background: rgba(255, 255, 255, 0.22);
        }

        @keyframes goaTripUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .goa-trip-tabs {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
        }

        @media (max-width: 575px) {
          .goa-trip-tab {
            font-size: 15px;
            padding: 10px 12px;
            gap: 10px;
          }

          .goa-trip-ico {
            width: 38px;
            height: 38px;
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .goa-trip-tab {
            animation: none;
            transition: none;
          }
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
                <button
                  type="button"
                  className={`goa-trip-tab ${
                    active === tab.key ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                  onClick={() => handleClick(tab.key)}
                  aria-pressed={active === tab.key}
                >
                  <span className="goa-trip-ico">
                    <i className={`fa-solid ${tab.icon}`}></i>
                  </span>

                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Form1;