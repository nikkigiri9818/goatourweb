"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// Put your photos in /public/assets/img/goa/ and update the paths and links below.
const things = [
  {
    title: "Scuba Diving Adventure",
    image: "/assets/img/goa/scuba.jpg",
    text: "Scuba Diving in Goa is gaining popularity in recent years among tourists. Scuba Diving at Grand Island is one of the best locations to do Scuba Diving in India. There are also other locations Like Rock Island and Biana Beach Jetty where you can Experience Scuba Diving.",
    button: "Scuba Diving",
    href: "/contact",
  },
  {
    title: "Thrilling Beach Water Sports",
    image: "/assets/img/goa/sportsbeach.jpg",
    text: "The beaches in Goa are a haven for thrill-seekers. You can unleash the adventurer in you by indulging in a variety of water sports across various beaches. The most Famous Watersports are Parasailing, Banana Ride, Bumper Ride, Jetski rides, Flyboarding, Kayaking.",
    button: "Goa Watersports",
    href: "/contact",
  },
  {
    title: "Visit Old Churches",
    image: "/assets/img/goa/oldchurch.jpg",
    text: "Goa is full of Old Churches, Portuguese Forts and amazing Temples. The most Famous Forts are Fort Aguada, Chapora Fort, and Cabo de Rama Fort. Famous Churches are Sé Catedral de Santa Catarina, Saint Catherine's Chapel, Church of St. Francis of Assisi.",
    button: "South Goa Sightseeing",
    href: "/contact",
  },
  {
    title: "Explore Beautiful Beaches & Markets",
    image: "/assets/img/goa/oldbeachmarket.jpg",
    text: "The best Beaches in Goa are Candolim, Ashwem, Anjuna, Palolem, Arambol, Calangute, Baga, Butterfly Beach and more. Visit Anjuna flea market, Calangute Market and more. The list is big so it's good to plan your trip before you leave.",
    button: "North Goa Sightseeing",
    href: "/contact",
  },
  {
    title: "Jungle Safari, Waterfalls & Wildlife Sanctuary",
    image: "/assets/img/goa/waterfallimges.jpg",
    text: "There are many Waterfall in Goa the most famous is Dudhsagar Waterfall. You Can visit Mahaveer Wildlife Sanctuary and UNESCO World Heritage Site. Go on a Jungle Safari at the Mollen National Park and explore the tropical Forest.",
    button: "Dudhsagar Waterfall Trip",
    href: "/contact",
  },
  {
    title: "Enjoy Goa Nightlife, Clubbing & Casinos",
    image: "/assets/img/goa/nightlightinggoa.jpg",
    text: "Goa is famous for its Nightlife a lot of tourists came to enjoy parties and go to Casinos in Panjim. Some of the Famous Places are SinQ Night Club, Deltin Royal, Cantare, Café Lilliput and Edge. North Goa where all famous Clubs and Casinos are there.",
    button: "Dinner Cruise",
    href: "/contact",
  },
];

const Arrow = ({ flip }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={flip ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ThingsToDoSlider = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [seen, setSeen] = useState(false);

  // Play the entrance once, when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 680, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section ref={sectionRef} className={`tdg ${seen ? "in" : ""}`} aria-labelledby="tdg-title">
      <style>{`
        .tdg{--ink:#0e1e24;--muted:#6b7882;--cyan:#1aa7ca;--cyan-d:#1389a8;
          background:#f3f8fb;color:var(--ink);padding:100px 0 90px;position:relative;overflow:hidden}
        .tdg::before{content:"";position:absolute;right:-12%;bottom:-20%;width:55%;height:75%;
          background:radial-gradient(closest-side,rgba(246,213,218,.9),rgba(246,213,218,0));pointer-events:none}
        .tdg-in{position:relative;max-width:1280px;margin:0 auto;padding:0 20px}
        .tdg-head{text-align:center;max-width:820px;margin:0 auto 54px}
        .tdg-eyebrow{display:block;color:var(--cyan);font-size:19px;font-style:italic;margin-bottom:10px}
        .tdg-head h2{font-size:clamp(30px,4.4vw,52px);line-height:1.15;font-weight:800;margin:0 0 18px}
        .tdg-head p{color:var(--muted);font-size:17px;line-height:1.75;margin:0}
        .tdg-eyebrow,.tdg-head h2,.tdg-head p,.tdg-slider{opacity:0;transform:translateY(34px);
          transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
        .tdg.in .tdg-eyebrow,.tdg.in .tdg-head h2,.tdg.in .tdg-head p,.tdg.in .tdg-slider{opacity:1;transform:none}
        .tdg.in .tdg-head h2{transition-delay:.15s}
        .tdg.in .tdg-head p{transition-delay:.3s}
        .tdg.in .tdg-slider{transition-delay:.45s}
        .tdg-head h2::after{content:"";display:block;width:0;height:4px;border-radius:4px;background:var(--cyan);
          margin:16px auto 0;transition:width .9s .7s ease}
        .tdg.in .tdg-head h2::after{width:70px}

        .tdg-slider{position:relative;padding:0 38px}
        .tdg-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:56px;height:56px;border-radius:50%;
          border:0;background:var(--cyan);color:#fff;display:grid;place-items:center;cursor:pointer;
          box-shadow:0 8px 22px rgba(26,167,202,.45);transition:background .2s,transform .2s}
        .tdg-arrow:hover{background:var(--ink);transform:translateY(-50%) scale(1.07)}
        .tdg-arrow:focus-visible,.tdg-btn:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
        .tdg-arrow::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--cyan);
          animation:tdgPulse 2.4s ease-out infinite;pointer-events:none}
        @keyframes tdgPulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}
        .tdg-prev{left:-6px}
        .tdg-next{right:-6px}

        .tdg .slick-list{margin:0 -14px;padding:18px 0 28px}
        .tdg .slick-track{display:flex}
        .tdg .slick-slide{height:auto;padding:0 14px}
        .tdg .slick-slide>div{height:100%}
        .tdg-card{height:100%;display:flex;flex-direction:column;background:#fff;border-radius:28px;
          overflow:hidden;box-shadow:0 14px 40px rgba(14,58,74,.12);
          transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s}
        .tdg-card:hover{transform:translateY(-12px);box-shadow:0 26px 55px rgba(14,58,74,.22)}
        .tdg-img{position:relative;height:250px;background:linear-gradient(160deg,var(--cyan),#0e3a4a)}
        .tdg-img{overflow:hidden}
        .tdg-img img{object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
        .tdg-card:hover .tdg-img img{transform:scale(1.12)}
        .tdg-img::after{content:"";position:absolute;top:0;left:-80%;width:50%;height:100%;
          background:linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent);transform:skewX(-20deg)}
        .tdg-card:hover .tdg-img::after{left:130%;transition:left .9s ease}
        .tdg-body{position:relative;flex:1;display:flex;flex-direction:column;margin-top:-34px;background:#fff;
          border-radius:30px 30px 0 0;padding:30px 28px 30px}
        .tdg-body h3{font-size:23px;line-height:1.3;font-weight:700;margin:0 0 16px;color:var(--ink)}
        .tdg-body h3::after{content:"";display:block;width:46px;height:4px;border-radius:4px;background:var(--cyan);margin-top:12px;
          transition:width .4s ease}
        .tdg-card:hover .tdg-body h3::after{width:96px}
        .tdg-body h3{transition:color .3s}
        .tdg-card:hover .tdg-body h3{color:var(--cyan-d)}
        .tdg-body p{flex:1;margin:0 0 24px;font-size:15.5px;line-height:1.75;color:var(--muted)}
        .tdg-btn{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;background:#1aa7ca;
          color:#fff;padding:13px 24px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;
          transition:background .25s,transform .25s,box-shadow .25s}
        .tdg-btn svg{transition:transform .3s}
        .tdg-btn:hover svg{transform:translateX(6px)}
        .tdg-btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(26,167,202,.4)}
        .tdg-btn:hover{background:black;color:#fff}

        .tdg .slick-dots{position:static;display:flex !important;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;gap:8px;list-style:none;margin:28px 0 0;padding:0}
        .tdg .slick-dots li{display:block;width:auto;height:auto;margin:0;padding:0}
        .tdg .slick-dots li button{width:10px;height:10px;padding:0;border:0;border-radius:99px;background:#c3d8e0;
          font-size:0;line-height:0;cursor:pointer;transition:width .25s,background .25s}
        .tdg .slick-dots li button::before{display:none}
        .tdg .slick-dots li.slick-active button{width:30px;background:var(--cyan)}

        @media (prefers-reduced-motion:reduce){
          .tdg *,.tdg *::before,.tdg *::after{transition:none !important;animation:none !important}
          .tdg .tdg-eyebrow,.tdg .tdg-head h2,.tdg .tdg-head p,.tdg .tdg-slider{opacity:1;transform:none}
          .tdg .tdg-head h2::after{width:70px}
        }
        @media (max-width:767px){
          .tdg{padding:70px 0}
          .tdg-slider{padding:0}
          .tdg-arrow{top:140px;width:44px;height:44px}
          .tdg-prev{left:6px}
          .tdg-next{right:6px}
          .tdg-img{height:230px}
        }
      `}</style>

      <div className="tdg-in">
        <div className="tdg-head">
          <span className="tdg-eyebrow">Things To Do</span>
          <h2 id="tdg-title">Goa Is More Than Just Beaches</h2>
          <p>
            Goa is one of the best travel destinations in India. It is full of
            the best Sunny beaches, Eventful nightlife, Amazing Waterfalls and
            Old Forts &amp; churches. Goa is not only limited to its beauty
            there are several adventure activities that you can do to add some
            thrill to your Goa Trip Plan. We are able to bring both adventure
            Activities and Luxury stays in the Goa tour package. Here are the
            things that you can do in Goa.
          </p>
        </div>

        <div className="tdg-slider">
       <button
  type="button"
  className="tdg-arrow tdg-prev"
  aria-label="Previous"
  onClick={() => sliderRef.current?.slickPrev()}
>
  <Arrow flip={true} />
</button>

<button
  type="button"
  className="tdg-arrow tdg-next"
  aria-label="Next"
  onClick={() => sliderRef.current?.slickNext()}
>
  <Arrow flip={false} />
</button>

          <Slider ref={sliderRef} {...settings}>
            {things.map((t) => (
              <div key={t.title}>
                <article className="tdg-card">
                  <div className="tdg-img">
                    <Image src={t.image} alt={t.title} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  </div>
                  <div className="tdg-body">
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                    <Link href={t.href} className="tdg-btn">
                    {t.button} <Arrow flip={false} />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSlider;