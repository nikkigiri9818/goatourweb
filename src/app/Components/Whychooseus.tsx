"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Content: goatourpackages.in (titles from their Why Choose Us block)
// Colors: taken from the About section screenshot of this site.
const reasons = [
  {
    title: "Unbeatable Prices",
    text: "Hotel, sightseeing and activities bundled at budget-friendly rates for couples, families and groups.",
    icon: "M3 7h15a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V7zM3 7l12-3v3M16.5 14h.01",
  },
  {
    title: "Personalized Tours",
    text: "Shape your Goa trip your way: North and South Goa sightseeing, water sports, scuba diving or a cruise party.",
    icon: "M9 11V5a1.5 1.5 0 013 0v5l5 1a2 2 0 011.6 2L18 19a3 3 0 01-3 2.5H11a3 3 0 01-2.3-1L5 16l1.3-1.3L9 16z",
  },
  {
    title: "Hassle-Free Booking",
    text: "Share your dates and we arrange the hotel, cab and tickets. Message us for a free itinerary.",
    icon: "M3 5h18v14H3zM8 11a2 2 0 100-4 2 2 0 000 4zM5 16a3 3 0 016 0M14 9h5M14 13h5",
  },
  {
    title: "Quality and Value",
    text: "Handpicked beachside hotels near Calangute and Baga, private cabs, daily breakfast and entry tickets included.",
    icon: "M6 3h12v18l-6-4-6 4V3z",
  },
  {
    title: "Best Experience",
    text: "Dolphin trips, sunset river cruises, Dudhsagar and beach days, planned so you don't miss the best of Goa.",
    icon: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z",
  },
  {
    title: "24/7 Support",
    text: "Our trip advisor is a call or message away, before your trip and while you are in Goa.",
    icon: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20a6.5 6.5 0 0110.5-5M17.5 21a4 4 0 100-8 4 4 0 000 8zM17.5 15v2.5l1.5 1",
  },
];

const WhyChooseUs = ({
  image = "/assets/img/goa/waterfallimges.jpg", // put your photo here (public folder)
  imageSide = "left", // "left" or "right"
  contactHref = "/contact",
  packagesHref = "/goa-tour-package",
}) => (
  <section className="wcu" aria-labelledby="wcu-title">
    <style>{`
      .wcu{--ink:#0e1e24;--muted:#6b7882;--cyan:#1aa7ca;--cyan-d:#1389a8;--leaf:#5fa845;--chip:#eaf1f8;
        background:#f8f8f8;color:var(--ink);padding:100px 0;position:relative;overflow:hidden}
      .wcu::before{content:"";position:absolute;right:-8%;top:18%;width:55%;height:70%;
        background:radial-gradient(closest-side,rgba(246,213,218,.95),rgba(246,213,218,0));pointer-events:none}
      .wcu-in{position:relative;max-width:1180px;margin:0 auto;padding:0 20px}
      .wcu-head{text-align:center;max-width:760px;margin:0 auto 56px}
      .wcu-eyebrow{display:block;color:var(--cyan);font-size:19px;font-style:italic;margin-bottom:10px}
      .wcu-head h2{font-size:clamp(30px,4.4vw,52px);line-height:1.15;font-weight:800;margin:0 0 18px;color:var(--ink)}
      .wcu-head p{color:var(--muted);font-size:17px;line-height:1.75;margin:0}
      .wcu-body{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:56px;align-items:center}
      .wcu-body.right .wcu-media{order:2}
      .wcu-media{position:relative;min-height:560px}
      .wcu-media::before{content:"";position:absolute;inset:28px -18px -18px 28px;border-radius:28px;background:var(--cyan);opacity:.9}
      .wcu-photo{position:absolute;inset:0;border-radius:28px;overflow:hidden;
        background:linear-gradient(160deg,var(--cyan),#0e3a4a)}
      .wcu-photo img{object-fit:cover}
      .wcu-badge{position:absolute;left:-14px;bottom:36px;background:#fff;border-radius:16px;padding:14px 20px;
        box-shadow:0 10px 30px rgba(14,30,36,.18);z-index:2}
      .wcu-badge b{display:block;font-size:30px;line-height:1.1;color:var(--cyan)}
      .wcu-badge span{font-size:14px;color:var(--muted)}
      .wcu-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px 28px}
      .wcu-item{display:flex;gap:16px;align-items:flex-start}
      .wcu-ico{flex:0 0 58px;height:58px;border-radius:18px;background:var(--chip);display:grid;place-items:center}
      .wcu-ico svg{width:28px;height:28px;fill:none;stroke:var(--leaf);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
      .wcu-item h3{font-size:20px;font-weight:700;margin:2px 0 6px;color:var(--ink)}
      .wcu-item p{margin:0;font-size:15.5px;line-height:1.7;color:var(--muted)}
      .wcu-cta{display:flex;flex-wrap:wrap;gap:16px;margin-top:40px}
      .wcu-btn{display:inline-flex;align-items:center;gap:10px;background:var(--cyan);color:#fff;padding:15px 30px;
        border-radius:999px;font-weight:700;text-decoration:none;transition:background .2s}
      .wcu-btn:hover{background:var(--cyan-d);color:#fff}
      .wcu-btn:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
      @media (max-width:991px){
        .wcu{padding:70px 0}
        .wcu-body{grid-template-columns:1fr;gap:48px}
        .wcu-body.right .wcu-media{order:0}
        .wcu-media{min-height:380px;margin-right:18px}
      }
      @media (max-width:600px){.wcu-grid{grid-template-columns:1fr}}
    `}</style>

    <div className="wcu-in">
      <div className="wcu-head">
        <span className="wcu-eyebrow">Why Choose Us</span>
        <h2 id="wcu-title">Why Travellers Trust Us For Their Goa Holiday</h2>
     <p>
  Hotel, cab, sightseeing and tickets are planned together, so you can
  enjoy Goa&apos;s beaches instead of juggling bookings.
</p>
      </div>

      <div className={`wcu-body ${imageSide === "right" ? "right" : ""}`}>
        <div className="wcu-media">
          <div className="wcu-photo">
            <Image
              src={image}
              alt="Beach holiday in Goa"
              fill
              sizes="(max-width: 991px) 100vw, 40vw"
            />
          </div>
          <div className="wcu-badge">
            <b>500+</b>
            <span>Happy travellers</span>
          </div>
        </div>

        <div>
          <div className="wcu-grid">
            {reasons.map((r) => (
              <div className="wcu-item" key={r.title}>
                <div className="wcu-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d={r.icon} /></svg>
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="wcu-cta">
            <Link href={contactHref} className="wcu-btn">Get a free itinerary</Link>
            <Link href={packagesHref} className="wcu-btn">View Goa Packages</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;