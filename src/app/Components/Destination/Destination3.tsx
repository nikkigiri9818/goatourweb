"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

// Cards ki photos abhi hero ki placeholder photos hain. Asli photos ye naam se rakhein aur yahan path badal dein:
// /assets/img/destination/goa/baga-beach.jpg, calangute-beach.jpg, anjuna-beach.jpg, dudhsagar-waterfalls.jpg,
// grand-island.jpg, old-goa-churches.jpg, palolem-beach.jpg
const destinations = [
  { img: '/assets/img/hero/bagabeach.jpg', title: 'Baga Beach', content: 'Parasailing & Nightlife', tag: 'Beach', href: '/goa-adventures/watersports-in-goa' },
  { img: '/assets/img/hero/calangutebeach.jpg', title: 'Calangute Beach', content: 'Water Sports & Beach Shacks', tag: 'Beach', href: '/goa-adventures/watersports-in-goa' },
  { img: '/assets/img/hero/herothree.jpg', title: 'Anjuna Beach', content: 'Flea Market & Sunset Cafes', tag: 'Beach', href: '/goa-tour-package' },
  { img: '/assets/img/goa/dudhsagarimages.jpg', title: 'Dudhsagar Waterfalls', content: 'Jeep Safari & Waterfall Trek', tag: 'Adventure', href: '/goa-adventures/dudhsagar-waterfall-trip' },
  { img: '/assets/img/hero/grandisland.jpg', title: 'Grand Island', content: 'Scuba Diving & Dolphin Trip', tag: 'Adventure', href: '/goa-adventures/best-scuba-diving-in-goa' },
  { img: '/assets/img/goa/oldchurch.jpg', title: 'Old Goa Churches', content: 'Heritage & Basilica Of Bom Jesus', tag: 'Heritage', href: '/goa-tour-package' },
  { img: '/assets/img/hero/palolembeach.jpg', title: 'Palolem Beach', content: 'Calm Waters & Kayaking', tag: 'Beach', href: '/goa-tour-package' },
];

const Destination3 = () => {
  // agar ye file .jsx hai to "<any>" hata dein
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <style>{`
        /* slides ke beech gap */
        .goa-desti-slider .slick-list { margin: 0 -12px; padding: 14px 0 22px; }
        .goa-desti-slider .slick-slide > div { padding: 0 12px; }

        /* ---- poora card ek link hai, click karne par page khulta hai ---- */
        .gdc {
          position: relative;
          display: block;
          height: 420px;
          overflow: hidden;
          border-radius: 26px;
          color: #fff;
          background: #0a2f4a;
          box-shadow: 0 10px 28px rgba(10, 47, 74, 0.16);
          transition: transform .45s ease, box-shadow .45s ease;
        }
        .gdc:hover {
          color: #fff;
          transform: translateY(-8px);
          box-shadow: 0 14px 28px rgba(var(--theme-rgb, 10, 156, 180), 0.18);
        }

        .gdc-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .gdc:hover .gdc-img { transform: scale(1.12); }

        /* neeche ka dark gradient: text hamesha saaf padhega */
        .gdc::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to top, rgba(8, 36, 61, 0.92) 0%, rgba(8, 36, 61, 0.45) 45%, rgba(8, 36, 61, 0) 72%);
          transition: opacity .45s ease;
        }
        /* hover par upar se teal chamak */
        .gdc::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to top, rgba(var(--theme-rgb, 10, 156, 180), 0.55), rgba(var(--theme-rgb, 10, 156, 180), 0) 70%);
          opacity: 0;
          transition: opacity .45s ease;
        }
        .gdc:hover::after { opacity: 1; }

        .gdc-tag {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 3;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          color: #fff;
          background: var(--theme, #0a9cb4);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        }

        .gdc-go {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--theme, #0a9cb4);
          background: #fff;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
          transition: transform .45s ease, background .45s ease, color .45s ease;
        }
        .gdc:hover .gdc-go { transform: rotate(45deg) scale(1.08); background: var(--theme, #0a9cb4); color: #fff; }

        .gdc-body {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          padding: 26px 24px 24px;
        }
        .gdc-title {
          margin: 0 0 6px;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.25;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }
        .gdc-text {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.92);
        }

        /* hover par "Explore" button neeche se upar aata hai */
        .gdc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          max-height: 0;
          margin-top: 0;
          overflow: hidden;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity .4s ease, transform .4s ease, max-height .4s ease, margin-top .4s ease;
        }
        .gdc-cta i { transition: transform .3s ease; }
        .gdc:hover .gdc-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: translateY(0); }
        .gdc:hover .gdc-cta i { transform: translateX(5px); }

        /* touch screen (phone) par hover nahi hota, isliye Explore hamesha dikhta hai */
        @media (hover: none) {
          .gdc-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: none; }
        }

        .gdc:focus-visible {
          outline: 3px solid rgba(var(--theme-rgb, 10, 156, 180), 0.55);
          outline-offset: 3px;
        }

        /* prev / next buttons */
        .goa-desti-nav {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 20px;
        }
        .goa-desti-nav button {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--theme, #0a9cb4);
          background: #fff;
          border: 1.5px solid var(--theme, #0a9cb4);
          cursor: pointer;
          transition: background .3s, color .3s, transform .3s;
        }
        .goa-desti-nav button:hover {
          color: #fff;
          background: var(--theme, #0a9cb4);
          transform: translateY(-3px);
        }

        @media (max-width: 575px) {
          .gdc { height: 360px; }
          .gdc-title { font-size: 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gdc, .gdc-img, .gdc-go, .gdc-cta { transition: none; }
        }
      `}</style>

      <section className="top-destination-section section-padding fix">
        <div className="bag-shape float-bob-x">
          <Image src="/assets/img/destination/bag-shape.png" alt="img" width={160} height={206} />
        </div>
        <div className="watch-shape float-bob-y">
          <Image src="/assets/img/destination/watch.png" alt="img" width={76} height={76} />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Explore Goa</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
              Most Popular Places To Visit In Goa
            </h2>
          </div>

          <div className="goa-desti-slider">
            <Slider ref={sliderRef} {...settings}>
              {destinations.map((item) => (
                <div key={item.title}>
                  <Link href={item.href} className="gdc" aria-label={`Explore ${item.title}`}>
                    <img className="gdc-img" src={item.img} alt={item.title} loading="lazy" decoding="async" />
                    <span className="gdc-tag">{item.tag}</span>
                    <span className="gdc-go"><i className="bi bi-arrow-up-right"></i></span>
                    <div className="gdc-body">
                      <h4 className="gdc-title">{item.title}</h4>
                      <p className="gdc-text">{item.content}</p>
                      <span className="gdc-cta">Explore <i className="bi bi-arrow-right"></i></span>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="goa-desti-nav">
            <button type="button" aria-label="Previous" onClick={() => sliderRef.current?.slickPrev()}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <button type="button" aria-label="Next" onClick={() => sliderRef.current?.slickNext()}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
            <Link href="/goa-tour-package" className="theme-btn">
              View Goa Tour Packages<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination3;