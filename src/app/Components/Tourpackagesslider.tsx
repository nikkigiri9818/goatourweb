"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
// Packages ka data wahi hai jo listing aur details page mein hai (ek hi jagah se badlega).
// Agar ye file Components ke kisi folder ke andar hai to path "../goaPackagesData" hai; apne folder ke hisaab se badlein.
import { goaPackages, BASE_PATH, formatINR } from '../Components/Goapakagesdata';

// Package ki asli photo (/assets/img/packages/<slug>.jpg) na mile to pehle ye placeholder dikhegi, phir default.
// Asli photo rakhte hi wo apne aap dikhne lagegi.
const PLACEHOLDER: Record<string, string> = {
  '3-day-goa-tour-package': '/assets/img/hero/bagabeach.jpg',
  '4-days-adventure-goa-tour-package': '/assets/img/hero/calangutebeach.jpg',
  '5-days-summer-gateway-goa-tour-package': '/assets/img/hero/herotwo.jpg',
  'honeymoon-goa-tour-package': '/assets/img/hero/herothree.jpg',
  '4-day-premium-goa-tour-package': '/assets/img/hero/grandisland.jpg',
  'premium-5-days-goa-tour-package': '/assets/img/goa/dudhsagarimages.jpg',
};
const FALLBACK_PHOTO = '/assets/img/hero/herotwo.jpg';

const TourPackagesSlider = () => {
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
        .goa-pkg-slider .slick-list { margin: 0 -12px; padding: 14px 0 22px; }
        .goa-pkg-slider .slick-slide > div { padding: 0 12px; }

        /* ---- poora card ek link hai, click karne par package ka details page khulta hai ---- */
        .gpk {
          position: relative;
          display: block;
          height: 440px;
          overflow: hidden;
          border-radius: 26px;
          color: #fff;
          background: #0a2f4a;
          box-shadow: 0 10px 28px rgba(10, 47, 74, 0.16);
          transition: transform .45s ease, box-shadow .45s ease;
        }
        .gpk:hover {
          color: #fff;
          transform: translateY(-8px);
          box-shadow: 0 14px 28px rgba(var(--theme-rgb, 10, 156, 180), 0.18);
        }

        .gpk-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .gpk:hover .gpk-img { transform: scale(1.12); }

        /* neeche ka dark gradient: text hamesha saaf padhega */
        .gpk::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to top, rgba(8, 36, 61, 0.94) 0%, rgba(8, 36, 61, 0.5) 50%, rgba(8, 36, 61, 0) 75%);
        }
        /* hover par neeche se teal chamak */
        .gpk::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to top, rgba(var(--theme-rgb, 10, 156, 180), 0.55), rgba(var(--theme-rgb, 10, 156, 180), 0) 70%);
          opacity: 0;
          transition: opacity .45s ease;
        }
        .gpk:hover::after { opacity: 1; }

        .gpk-tag {
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

        .gpk-go {
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
        .gpk:hover .gpk-go { transform: rotate(45deg) scale(1.08); background: var(--theme, #0a9cb4); color: #fff; }

        .gpk-body {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          padding: 26px 24px 24px;
        }
        .gpk-title {
          margin: 0 0 8px;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.25;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }
        .gpk-dur {
          margin: 0 0 10px;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.92);
        }
        .gpk-dur i { margin-right: 8px; }
        .gpk-price { margin: 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); }
        .gpk-price del { margin-right: 8px; opacity: 0.65; }
        .gpk-price strong { font-size: 24px; font-weight: 800; color: #fff; }

        /* hover par "View Details" neeche se upar aata hai */
        .gpk-cta {
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
        .gpk-cta i { transition: transform .3s ease; }
        .gpk:hover .gpk-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: translateY(0); }
        .gpk:hover .gpk-cta i { transform: translateX(5px); }

        /* touch screen (phone) par hover nahi hota, isliye "View Details" hamesha dikhta hai */
        @media (hover: none) {
          .gpk-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: none; }
        }

        .gpk:focus-visible {
          outline: 3px solid rgba(var(--theme-rgb, 10, 156, 180), 0.55);
          outline-offset: 3px;
        }

        /* prev / next buttons */
        .goa-pkg-nav {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 20px;
        }
        .goa-pkg-nav button {
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
        .goa-pkg-nav button:hover {
          color: #fff;
          background: var(--theme, #0a9cb4);
          transform: translateY(-3px);
        }

        @media (max-width: 575px) {
          .gpk { height: 400px; }
          .gpk-title { font-size: 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gpk, .gpk-img, .gpk-go, .gpk-cta { transition: none; }
        }
      `}</style>

      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Goa Tour Packages</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
              Choose Your Perfect Goa Holiday
            </h2>
          </div>

          <div className="goa-pkg-slider">
            <Slider ref={sliderRef} {...settings}>
              {goaPackages.map((pkg: any) => (
                <div key={pkg.slug}>
                  <Link
                    href={`${BASE_PATH}/${pkg.slug}`}
                    className="gpk"
                    aria-label={`View details of ${pkg.title}`}
                  >
                    <img
                      className="gpk-img"
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const img = e.currentTarget;
                        if (!img.dataset.tried) {
                          img.dataset.tried = '1';
                          img.src = PLACEHOLDER[pkg.slug] || FALLBACK_PHOTO;
                        } else {
                          img.onerror = null;
                          img.src = FALLBACK_PHOTO;
                        }
                      }}
                    />
                    <span className="gpk-tag">{pkg.badge}</span>
                    <span className="gpk-go"><i className="bi bi-arrow-up-right"></i></span>
                    <div className="gpk-body">
                      <h4 className="gpk-title">{pkg.title}</h4>
                      <p className="gpk-dur"><i className="bi bi-clock"></i>{pkg.days} Days / {pkg.nights} Nights</p>
                      <p className="gpk-price">
                        <del>{formatINR(pkg.oldPrice)}</del>
                        <strong>{formatINR(pkg.price)}</strong> per person
                      </p>
                      <span className="gpk-cta">View Details <i className="bi bi-arrow-right"></i></span>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="goa-pkg-nav">
            <button type="button" aria-label="Previous" onClick={() => sliderRef.current?.slickPrev()}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <button type="button" aria-label="Next" onClick={() => sliderRef.current?.slickNext()}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
            <Link href={BASE_PATH} className="theme-btn">
              View All Packages<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackagesSlider;