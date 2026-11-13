// "use client"
// import React, { useRef } from 'react';
// import Link from 'next/link';
// import Slider from 'react-slick';
// // Packages ka data wahi hai jo listing aur details page mein hai (ek hi jagah se badlega).
// // Agar ye file Components ke kisi folder ke andar hai to path "../goaPackagesData" hai; apne folder ke hisaab se badlein.
// import { goaPackages, BASE_PATH, formatINR } from '../Components/Goapakagesdata';

// // Package ki asli photo (/assets/img/packages/<slug>.jpg) na mile to pehle ye placeholder dikhegi, phir default.
// // Asli photo rakhte hi wo apne aap dikhne lagegi.
// const PLACEHOLDER: Record<string, string> = {
//   '3-day-goa-tour-package': '/assets/img/hero/bagabeach.jpg',
//   '4-days-adventure-goa-tour-package': '/assets/img/hero/calangutebeach.jpg',
//   '5-days-summer-gateway-goa-tour-package': '/assets/img/hero/calangutebeach.jpg',
//   'honeymoon-goa-tour-package': '/assets/img/goa/honmoonpakg.jpg',
//   '4-day-premium-goa-tour-package': '/assets/img/hero/grandisland.jpg',
//   'premium-5-days-goa-tour-package': '/assets/img/goa/dudhsagarimages.jpg',
// };
// const FALLBACK_PHOTO = '/assets/img/hero/herotwo.jpg';

// const TourPackagesSlider = () => {
//   // agar ye file .jsx hai to "<any>" hata dein
//   const sliderRef = useRef<any>(null);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 1399, settings: { slidesToShow: 3 } },
//       { breakpoint: 991, settings: { slidesToShow: 2 } },
//       { breakpoint: 575, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <>
//       <style>{`
//         /* slides ke beech gap */
//         .goa-pkg-slider .slick-list { margin: 0 -12px; padding: 14px 0 22px; }
//         .goa-pkg-slider .slick-slide > div { padding: 0 12px; }

//         /* ---- poora card ek link hai, click karne par package ka details page khulta hai ---- */
//         .gpk {
//           position: relative;
//           display: block;
//           height: 440px;
//           overflow: hidden;
//           border-radius: 26px;
//           color: #fff;
//           background: #0a2f4a;
//           box-shadow: 0 10px 28px rgba(10, 47, 74, 0.16);
//           transition: transform .45s ease, box-shadow .45s ease;
//         }
//         .gpk:hover {
//           color: #fff;
//           transform: translateY(-8px);
//           box-shadow: 0 14px 28px rgba(var(--theme-rgb, 10, 156, 180), 0.18);
//         }

//         .gpk-img {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 1s ease;
//         }
//         .gpk:hover .gpk-img { transform: scale(1.12); }

//         /* neeche ka dark gradient: text hamesha saaf padhega */
//         .gpk::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           background: linear-gradient(to top, rgba(8, 36, 61, 0.94) 0%, rgba(8, 36, 61, 0.5) 50%, rgba(8, 36, 61, 0) 75%);
//         }
//         /* hover par neeche se teal chamak */
//         .gpk::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           background: linear-gradient(to top, rgba(var(--theme-rgb, 10, 156, 180), 0.55), rgba(var(--theme-rgb, 10, 156, 180), 0) 70%);
//           opacity: 0;
//           transition: opacity .45s ease;
//         }
//         .gpk:hover::after { opacity: 1; }

//         .gpk-tag {
//           position: absolute;
//           top: 18px;
//           left: 18px;
//           z-index: 3;
//           padding: 8px 16px;
//           border-radius: 100px;
//           font-size: 13px;
//           font-weight: 600;
//           line-height: 1;
//           color: #fff;
//           background: var(--theme, #0a9cb4);
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
//         }

//         .gpk-go {
//           position: absolute;
//           top: 16px;
//           right: 16px;
//           z-index: 3;
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 16px;
//           color: var(--theme, #0a9cb4);
//           background: #fff;
//           box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
//           transition: transform .45s ease, background .45s ease, color .45s ease;
//         }
//         .gpk:hover .gpk-go { transform: rotate(45deg) scale(1.08); background: var(--theme, #0a9cb4); color: #fff; }

//         .gpk-body {
//           position: absolute;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           z-index: 3;
//           padding: 26px 24px 24px;
//         }
//         .gpk-title {
//           margin: 0 0 8px;
//           font-size: 24px;
//           font-weight: 700;
//           line-height: 1.25;
//           color: #fff;
//           text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
//         }
//         .gpk-dur {
//           margin: 0 0 10px;
//           font-size: 15px;
//           color: rgba(255, 255, 255, 0.92);
//         }
//         .gpk-dur i { margin-right: 8px; }
//         .gpk-price { margin: 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); }
//         .gpk-price del { margin-right: 8px; opacity: 0.65; }
//         .gpk-price strong { font-size: 24px; font-weight: 800; color: #fff; }

//         /* hover par "View Details" neeche se upar aata hai */
//         .gpk-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           max-height: 0;
//           margin-top: 0;
//           overflow: hidden;
//           font-size: 15px;
//           font-weight: 700;
//           color: #fff;
//           opacity: 0;
//           transform: translateY(12px);
//           transition: opacity .4s ease, transform .4s ease, max-height .4s ease, margin-top .4s ease;
//         }
//         .gpk-cta i { transition: transform .3s ease; }
//         .gpk:hover .gpk-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: translateY(0); }
//         .gpk:hover .gpk-cta i { transform: translateX(5px); }

//         /* touch screen (phone) par hover nahi hota, isliye "View Details" hamesha dikhta hai */
//         @media (hover: none) {
//           .gpk-cta { max-height: 30px; margin-top: 14px; opacity: 1; transform: none; }
//         }

//         .gpk:focus-visible {
//           outline: 3px solid rgba(var(--theme-rgb, 10, 156, 180), 0.55);
//           outline-offset: 3px;
//         }

//         /* prev / next buttons */
//         .goa-pkg-nav {
//           display: flex;
//           justify-content: center;
//           gap: 14px;
//           margin-top: 20px;
//         }
//         .goa-pkg-nav button {
//           width: 54px;
//           height: 54px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           color: var(--theme, #0a9cb4);
//           background: #fff;
//           border: 1.5px solid var(--theme, #0a9cb4);
//           cursor: pointer;
//           transition: background .3s, color .3s, transform .3s;
//         }
//         .goa-pkg-nav button:hover {
//           color: #fff;
//           background: var(--theme, #0a9cb4);
//           transform: translateY(-3px);
//         }

//         @media (max-width: 575px) {
//           .gpk { height: 400px; }
//           .gpk-title { font-size: 22px; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .gpk, .gpk-img, .gpk-go, .gpk-cta { transition: none; }
//         }
//       `}</style>

//       <section className="section-padding fix">
//         <div className="container">
//           <div className="section-title text-center">
//             <span className="sub-title wow fadeInUp">Goa Tour Packages</span>
//             <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
//                Choose your luxury goa holiday packages
//             </h2>
//           </div>

//           <div className="goa-pkg-slider">
//             <Slider ref={sliderRef} {...settings}>
//               {goaPackages.map((pkg: any) => (
//                 <div key={pkg.slug}>
//                   <Link
//                     href={`${BASE_PATH}/${pkg.slug}`}
//                     className="gpk"
//                     aria-label={`View details of ${pkg.title}`}
//                   >
//                     <img
//                       className="gpk-img"
//                       src={pkg.image}
//                       alt={pkg.title}
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//                         const img = e.currentTarget;
//                         if (!img.dataset.tried) {
//                           img.dataset.tried = '1';
//                           img.src = PLACEHOLDER[pkg.slug] || FALLBACK_PHOTO;
//                         } else {
//                           img.onerror = null;
//                           img.src = FALLBACK_PHOTO;
//                         }
//                       }}
//                     />
//                     <span className="gpk-tag">{pkg.badge}</span>
//                     <span className="gpk-go"><i className="bi bi-arrow-up-right"></i></span>
//                     <div className="gpk-body">
//                       <h4 className="gpk-title">{pkg.title}</h4>
//                       <p className="gpk-dur"><i className="bi bi-clock"></i>{pkg.days} Days / {pkg.nights} Nights</p>
//                       <p className="gpk-price">
//                         <del>{formatINR(pkg.oldPrice)}</del>
//                         <strong>{formatINR(pkg.price)}</strong> per person
//                       </p>
//                       <span className="gpk-cta">View Details <i className="bi bi-arrow-right"></i></span>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           <div className="goa-pkg-nav">
//             <button type="button" aria-label="Previous" onClick={() => sliderRef.current?.slickPrev()}>
//               <i className="bi bi-arrow-left"></i>
//             </button>
//             <button type="button" aria-label="Next" onClick={() => sliderRef.current?.slickNext()}>
//               <i className="bi bi-arrow-right"></i>
//             </button>
//           </div>

//           <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
//             <Link href={BASE_PATH} className="theme-btn">
//               View All Packages<i className="bi bi-arrow-right"></i>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TourPackagesSlider;



"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
// Packages ka data (listing aur details page wala hi). Apne folder ke hisaab se path theek rakhein.
import { goaPackages, BASE_PATH, formatINR } from '../Components/Goapakagesdata';

// Client ka WhatsApp number (country code 91 ke saath, bina + ya space ke)
const WHATSAPP_NUMBER = '917678464517';
const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Card ke kone wale ribbon ka text. Offer na dikhana ho to khali ('') kar dein.
const RIBBON = '30% OFF';

// Package ki asli photo (/assets/img/packages/<slug>.jpg) na mile to pehle ye placeholder dikhegi, phir default.
const PLACEHOLDER: Record<string, string> = {
  '3-day-goa-tour-package': '/assets/img/hero/bagabeach.jpg',
  '4-days-adventure-goa-tour-package': '/assets/img/hero/calangutebeach.jpg',
  '5-days-summer-gateway-goa-tour-package': '/assets/img/hero/calangutebeach.jpg',
  'honeymoon-goa-tour-package': '/assets/img/goa/honmoonpakg.jpg',
  '4-day-premium-goa-tour-package': '/assets/img/hero/grandisland.jpg',
  'premium-5-days-goa-tour-package': '/assets/img/goa/dudhsagarimages.jpg',
};
const FALLBACK_PHOTO = '/assets/img/hero/herotwo.jpg';

// "Covers" wali line: package mein kaun si jagah aati hain (card par sirf zaroori jagahen)
const COVERS: Record<string, { label: string; places: string[] }> = {
  '3-day-goa-tour-package': { label: 'North Goa', places: ['Calangute', 'Baga', 'Candolim', 'Anjuna'] },
  '4-days-adventure-goa-tour-package': { label: 'North & South Goa', places: ['Baga', 'Calangute', 'Old Goa', 'Colva'] },
  '5-days-summer-gateway-goa-tour-package': { label: 'North & South Goa', places: ['Baga', 'Grand Island', 'Old Goa'] },
  'honeymoon-goa-tour-package': { label: 'North & South Goa', places: ['Baga', 'Grand Island', 'Candlelight Dinner'] },
  '4-day-premium-goa-tour-package': { label: 'North & South Goa', places: ['Baga', 'Dudhsagar', 'Old Goa'] },
  'premium-5-days-goa-tour-package': { label: 'North & South Goa', places: ['Dudhsagar', 'Grand Island', 'Baga'] },
};

// Har feature ke saath uske matlab ka icon (Bootstrap Icons, jo aapke project mein pehle se load hai)
const iconFor = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('pickup') || t.includes('drop')) return 'bi-car-front-fill';
  if (t.includes('pool')) return 'bi-water';
  if (t.includes('breakfast') || t.includes('meal')) return 'bi-cup-hot-fill';
  if (t.includes('stay') || t.includes('resort') || t.includes('hotel')) return 'bi-building';
  if (t.includes('cruise')) return 'bi-moon-stars-fill';
  if (t.includes('candlelight')) return 'bi-heart-fill';
  if (t.includes('scuba') || t.includes('water') || t.includes('island')) return 'bi-water';
  if (t.includes('dudhsagar') || t.includes('waterfall')) return 'bi-tree-fill';
  if (t.includes('church') || t.includes('heritage')) return 'bi-bank';
  if (t.includes('beach')) return 'bi-sun-fill';
  if (t.includes('sightseeing') || t.includes('vehicle')) return 'bi-geo-alt-fill';
  return 'bi-check-circle-fill';
};

const Stars = ({ rating }: { rating: number }) => (
  <span className="gpc3-stars" aria-label={`${rating} out of 5`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <i
        key={n}
        className={`bi ${rating >= n ? 'bi-star-fill' : rating >= n - 0.5 ? 'bi-star-half' : 'bi-star'}`}
      ></i>
    ))}
  </span>
);

const TourPackagesSlider = () => {
  // agar ye file .jsx hai to "<any>" hata dein
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <style>{`
        /* slides ke beech gap aur sab cards ki height barabar */
        .goa-pkg-slider .slick-list { margin: 0 -14px; padding: 16px 0 26px; }
        .goa-pkg-slider .slick-track { display: flex; }
        .goa-pkg-slider .slick-slide { height: auto; }
        .goa-pkg-slider .slick-slide > div { height: 100%; padding: 0 14px; }

        .gpc3 {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 26px;
          background: #fff;
          border: 1px solid #e3edf0;
          box-shadow: 0 10px 28px rgba(10, 47, 74, 0.08);
          transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
        }
        .gpc3:hover {
          transform: translateY(-8px);
          border-color: rgba(var(--theme-rgb, 10, 156, 180), 0.5);
          box-shadow: 0 18px 36px rgba(var(--theme-rgb, 10, 156, 180), 0.18);
        }

        /* ---- ek hi photo ---- */
        .gpc3-media { position: relative; height: 220px; overflow: hidden; background: #e8f4f8; }
        .gpc3-media img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 1s ease;
        }
        .gpc3:hover .gpc3-media img { transform: scale(1.08); }
        .gpc3-media::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8, 36, 61, 0.5), rgba(8, 36, 61, 0) 55%);
          pointer-events: none;
        }

        /* kone ka tirchha ribbon (jaise "30% OFF") */
        .gpc3-ribbon {
          position: absolute; top: 24px; left: -42px; z-index: 3;
          width: 150px;
          padding: 6px 0;
          text-align: center;
          transform: rotate(-45deg);
          font-size: 12px; font-weight: 800; letter-spacing: .6px;
          color: #08243d;
          background: var(--accent, #ffb43b);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
        }
        .gpc3-badge {
          position: absolute; top: 16px; right: 16px; z-index: 2;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px; font-weight: 600; line-height: 1;
          color: #fff;
          background: var(--theme, #0a9cb4);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        }
        .gpc3-code {
          position: absolute; left: 18px; bottom: 14px; z-index: 2;
          font-size: 15px; font-weight: 800; letter-spacing: .5px;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        .gpc3-code i { margin-right: 6px; }

        .gpc3-body { display: flex; flex-direction: column; flex: 1; padding: 22px 22px 24px; }
        .gpc3-title { margin: 0 0 8px; font-size: 22px; line-height: 1.3; text-align: center; color: #08243d; }

        .gpc3-rate { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 4px 10px; margin-bottom: 16px; font-size: 14px; color: #55656c; }
        .gpc3-stars { color: #ffb400; letter-spacing: 2px; }
        .gpc3-rate b { font-size: 16px; color: #08243d; }
        .gpc3-rate small { font-size: 12px; font-weight: 600; letter-spacing: .3px; color: #6b7a82; }

        /* ---- zaroori features: 2 column ---- */
        .gpc3-feats {
          list-style: none; margin: 0 0 14px; padding: 14px 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px 14px;
          border-top: 1px dashed #dfe7ea; border-bottom: 1px dashed #dfe7ea;
        }
        .gpc3-feats li { display: flex; align-items: center; gap: 9px; font-size: 14px; line-height: 1.3; color: #2d3f48; }
        .gpc3-feats li i {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          color: var(--theme, #0a9cb4);
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.12);
        }

        .gpc3-covers { display: flex; gap: 10px; margin: 0 0 16px; font-size: 13.5px; line-height: 1.5; color: #55656c; }
        .gpc3-covers i { margin-top: 2px; color: var(--theme, #0a9cb4); }
        .gpc3-covers b { color: #08243d; }

        .gpc3-price { margin-top: auto; margin-bottom: 14px; display: flex; align-items: baseline; justify-content: center; flex-wrap: wrap; gap: 4px 10px; }
        .gpc3-price del { font-size: 15px; color: #98a4aa; }
        .gpc3-price strong { font-size: 30px; line-height: 1; color: #08243d; }
        .gpc3-price span { font-size: 14px; color: #6b7a82; }

        .gpc3-actions { display: flex; gap: 10px; }
        .gpc3-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          height: 50px;
          border-radius: 100px;
          font-size: 15px; font-weight: 700;
          text-decoration: none;
          transition: transform .3s, box-shadow .3s, background .3s, color .3s;
        }
        .gpc3-btn.primary { flex: 1; color: #fff; background: var(--theme-2, #0a2f4a); }
        .gpc3-btn.primary i { font-size: 18px; color: #25d366; }
        .gpc3-btn.primary:hover { color: #fff; transform: translateY(-3px); box-shadow: 0 12px 24px rgba(10, 47, 74, 0.35); }
        .gpc3-btn.ghost { padding: 0 20px; color: var(--theme, #0a9cb4); border: 1.5px solid var(--theme, #0a9cb4); background: #fff; }
        .gpc3-btn.ghost:hover { color: #fff; background: var(--theme, #0a9cb4); }
        .gpc3-btn.ghost i { transition: transform .3s; }
        .gpc3-btn.ghost:hover i { transform: translateX(4px); }

        /* prev / next buttons */
        .goa-pkg-nav { display: flex; justify-content: center; gap: 14px; margin-top: 10px; }
        .goa-pkg-nav button {
          width: 54px; height: 54px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          color: var(--theme, #0a9cb4);
          background: #fff;
          border: 1.5px solid var(--theme, #0a9cb4);
          cursor: pointer;
          transition: background .3s, color .3s, transform .3s;
        }
        .goa-pkg-nav button:hover { color: #fff; background: var(--theme, #0a9cb4); transform: translateY(-3px); }

        @media (max-width: 575px) {
          .gpc3-body { padding: 20px 18px 22px; }
          .gpc3-media { height: 200px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gpc3, .gpc3-media img, .gpc3-btn { transition: none; }
        }
      `}</style>

      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Goa Tour Packages</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
              Choose Your Luxury Goa Holiday Packages
            </h2>
          </div>

          <div className="goa-pkg-slider">
            <Slider ref={sliderRef} {...settings}>
              {goaPackages.map((pkg: any) => {
                // card par sirf zaroori cheezein: pickup/drop + package ke khaas highlights
                const feats: string[] = ['Pickup & Drop', ...pkg.highlights.slice(0, 4)];
                const covers = COVERS[pkg.slug];
                return (
                  <div key={pkg.slug}>
                    <article className="gpc3">
                      <div className="gpc3-media">
                        <img
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
                        {RIBBON && <span className="gpc3-ribbon">{RIBBON}</span>}
                        <span className="gpc3-badge">{pkg.badge}</span>
                        <span className="gpc3-code"><i className="bi bi-calendar-check"></i>{pkg.days} Days / {pkg.nights} Nights</span>
                      </div>

                      <div className="gpc3-body">
                        <h3 className="gpc3-title">{pkg.title}</h3>

                        <div className="gpc3-rate">
                          <Stars rating={pkg.rating} />
                          <span><b>{pkg.rating}</b> <small>[{pkg.reviews} REVIEWS]</small></span>
                        </div>

                        <ul className="gpc3-feats">
                          {feats.map((text) => (
                            <li key={text}>
                              <i className={`bi ${iconFor(text)}`}></i>
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>

                        {covers && (
                          <p className="gpc3-covers">
                            <i className="bi bi-geo-alt-fill"></i>
                            <span><b>{covers.label}:</b> {covers.places.join(' | ')}</span>
                          </p>
                        )}

                        <div className="gpc3-price">
                          <del>{formatINR(pkg.oldPrice)}</del>
                          <strong>{formatINR(pkg.price)}</strong>
                          <span>per person</span>
                        </div>

                        <div className="gpc3-actions">
                          <a
                            className="gpc3-btn primary"
                            href={whatsappLink(`Hello, I want the details and videos for the ${pkg.title}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-whatsapp"></i>Get Photos & Videos
                          </a>
                          <Link className="gpc3-btn ghost" href={`${BASE_PATH}/${pkg.slug}`} aria-label={`View full details of ${pkg.title}`}>
                            Details <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
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