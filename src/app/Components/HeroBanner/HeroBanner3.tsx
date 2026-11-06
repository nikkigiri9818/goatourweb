"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Link from 'next/link';

// Client ka WhatsApp number (country code 91 ke saath, bina + ya space ke)
const WHATSAPP_NUMBER = '917678464517';
const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Photo par halka parda (overlay) chahiye to 0 ki jagah 0.1 se 0.25 ke beech koi value likhein. 0 = koi parda nahi.
const OVERLAY = 0;

// Slide timing (milli-second). Zoom ka time inhi se apne aap set hota hai.
const AUTOPLAY_MS = 3500; // ek slide kitni der dikhegi
const TRANSITION_MS = 800; // ek slide se doosri slide mein badalne ka time
const ZOOM_SECONDS = (AUTOPLAY_MS + TRANSITION_MS) / 1000;

const HeroBanner3 = () => {

  // packagesLabel : pehla button, Goa tour packages page par jata hai
  // whatsappLabel : doosra button, WhatsApp kholta hai (whatsappText = pehle se likha message)
  const heroContent = [
    {
      img: '/assets/img/hero/herodesinetwo.png',
      subtitle: 'Your Goa Holiday, Planned For You',
      title: 'Welcome To <br><span class="hero-hl">Goa Holiday</span> Tour Packages',
      content:
        'Choose from 3, 4 and 5 day Goa packages with a beach stay, pickup and drop, daily breakfast and sightseeing. Add scuba diving, water sports or a dinner cruise to make the trip your own.',
      packagesLabel: 'Explore Packages',
      whatsappLabel: 'Chat On WhatsApp',
      whatsappText: 'Hello, I want to know about your Goa tour packages.',
    },
    {
      img: '/assets/img/hero/beach.png',
      subtitle: 'First Booking Offer',
      title: 'Get <span class="hero-hl">30%</span> Extra Discount <br>On First Booking',
      content:
        'Planning your first Goa trip with us? Message us your dates and group size, and we will confirm your extra discount and the best package for your budget.',
      packagesLabel: 'View Packages',
      whatsappLabel: 'Claim Offer On WhatsApp',
      whatsappText: 'Hello, I want to claim the 30% extra discount on my first booking.',
    },
  ];

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    fade: true, // slide jaisa sliding effect chahiye to isse false kar dein
    speed: TRANSITION_MS,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_MS,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <style>{`
        /* ---- photo ka halka zoom (Ken Burns). Text par asar nahi padta ----
           Zoom sirf us slide par chalta hai jo abhi dikh rahi hai, aur har baar
           1x se shuru hota hai. Isliye slide badalte hi nayi photo turant aati hai. */
        .hero-section.hero-3 .swiper-slide { overflow: hidden; }
        .hero-section.hero-3 .hero-image {
          transform-origin: 50% 100%;
          transform: scale(1.1);
          will-change: transform;
          box-shadow: inset 0 0 0 100vmax rgba(0, 25, 45, ${OVERLAY});
        }
        .hero-section.hero-3 .slick-active .hero-image {
          animation: goaHeroZoom ${ZOOM_SECONDS}s linear forwards;
        }
        @keyframes goaHeroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.1); }
        }

        /* ---- bina overlay ke text saaf padhe: shadow + thoda mota text ---- */
        .hero-section.hero-3 .hero-content h1 {
          font-size: clamp(34px, 4.4vw, 70px);
          line-height: 1.12;
          color: #fff;
          text-shadow: 0 3px 6px rgba(0, 30, 55, 0.45), 0 8px 32px rgba(0, 30, 55, 0.5);
        }
        .hero-section.hero-3 .hero-content p {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          text-shadow: 0 2px 4px rgba(0, 25, 45, 0.65), 0 4px 18px rgba(0, 25, 45, 0.55);
        }
        .hero-section.hero-3 .hero-content .sub-title {
          font-weight: 700;
          text-shadow: 0 2px 6px rgba(0, 25, 45, 0.6), 0 4px 18px rgba(0, 25, 45, 0.45);
        }
        /* heading ka khaas shabd (30%, Goa Holiday) sunset ke rang mein */
        .hero-section.hero-3 .hero-content .hero-hl {
          color: var(--accent, #ffb43b);
        }

        /* doosra (translucent) button photo par bhi saaf dikhe */
        .hero-3 .about-button .theme-btn.style-2 {
          background: rgba(8, 36, 61, 0.45);
          backdrop-filter: blur(6px);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-section.hero-3 .hero-image,
          .hero-section.hero-3 .slick-active .hero-image { animation: none; transform: none; }
        }
      `}</style>

      <section className="hero-section hero-3">
        <div className="swiper hero-slider-3">
          <div className="swiper-wrapper">
            <Slider {...settings}>
              {heroContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="hero-image bg-cover" data-background={item.img} style={{ height: "850px" }}></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="hero-content">
                          <div className="sub-title" data-animation="fadeInUp" data-delay="1.2s">
                            {item.subtitle}
                          </div>
                          <h1 data-animation="fadeInUp" data-delay="1.4s">
                            {parse(item.title)}
                          </h1>
                          <p data-animation="fadeInUp" data-delay="1.6s">
                            {item.content}
                          </p>
                          <div className="about-button" data-animation="fadeInUp" data-delay="1.8s">
                            <Link href="/goa-tour-package" className="theme-btn">
                              {item.packagesLabel}<i className="bi bi-arrow-right"></i>
                            </Link>
                            <a
                              href={whatsappLink(item.whatsappText)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-btn style-2"
                            >
                              {item.whatsappLabel}<i className="bi bi-whatsapp"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="swiper-dot">
            <div className="dot2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner3;





// "use client";

// import React, { useEffect } from 'react';
// import loadBackgroudImages from '../Common/loadBackgroudImages';
// import Slider from 'react-slick';
// import parse from 'html-react-parser';
// import Link from 'next/link';

// const HeroBanner3 = () => {

//     // Video wali slide: video mp4 file ka path, poster = video load hone se pehle dikhne wali photo.
//     // Sirf video wala hero chahiye to neeche ki 3 image-slides hata do (sirf pehli slide rakho).
//     const heroContent = [
//         {
//             video: '/assets/img/hero/hero.mp4',
//             videoWebm: '/assets/video/goa-hero.webm', // optional, na ho to is line ko hata do
//             poster: '/assets/img/hero/video-poster.jpg',
//             subtitle: 'Your Goa Holiday Starts Here',
//             title: 'welcome to goa holiday tour packages',
//             content:
//                 'Beaches, water sports and sunsets are waiting. Choose a package and we will take care of the rest.',
//         },

//          {
//             video: '/assets/img/hero/hero.mp4',
//             videoWebm: '/assets/video/goa-hero.webm', // optional, na ho to is line ko hata do
//             poster: '/assets/img/hero/video-poster.jpg',
//             subtitle: 'Your Goa Holiday Starts Here',
//             title: 'Feel The Goa Vibes <br>Before You Arrive',
//             content:
//                 'Beaches, water sports and sunsets are waiting. Choose a package and we will take care of the rest.',
//         },

//     ];

//     // Autoplay ke liye video muted hona zaroori hai. Browser kabhi kabhi autoplay rok deta hai,
//     // isliye yahan se khud play() chalate hain. Reduced-motion wale users ke liye video ruka rehta hai.
//     const playVideos = () => {
//         const reduce =
//             typeof window !== 'undefined' &&
//             window.matchMedia &&
//             window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// document.querySelectorAll<HTMLVideoElement>('.hero-3 video').forEach((v) => {
//             v.muted = true;
//             if (reduce) {
//                 v.pause();
//             } else {
//                 const p = v.play();
//                 if (p && p.catch) p.catch(() => {});
//             }
//         });
//     };

//     useEffect(() => {
//         loadBackgroudImages();
//         playVideos();
//         const t = setTimeout(playVideos, 600);
//         return () => clearTimeout(t);
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         fade: true,
//         speed: 1200,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: heroContent.length > 1,
//         autoplaySpeed: 6000, // pehle 2000 tha, video ko dikhne ka time nahi milta
//         afterChange: playVideos,
//         responsive: [
//             { breakpoint: 1399, settings: { slidesToShow: 1 } },
//             { breakpoint: 1199, settings: { slidesToShow: 1 } },
//             { breakpoint: 575, settings: { slidesToShow: 1 } },
//         ],
//     };

//     return (
//         <>
//             <style>{`
//                 .hero-section.hero-3 .hero-image {
//                     position: relative;
//                     background-size: cover;
//                     background-position: center;
//                     overflow: hidden;
//                 }

//                 /* (pehle yahan // wale comment the, CSS mein wo comment nahi hote aur agle rule bigad dete the) */

//                 .hero-section.hero-3 .container {
//                     position: relative;
//                     z-index: 2;
//                 }

//                 .hero-section.hero-3 .hero-content {
//                     position: relative;
//                     z-index: 3;
//                 }

//                 /* ---- video slide ---- */
//                 .hero-3 .hero-video {
//                     position: absolute;
//                     inset: 0;
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     display: block;
//                 }

//                 /* text padhne ke liye halka dark parda (sirf video par) */
//                 .hero-3 .hero-video-shade {
//                     position: absolute;
//                     inset: 0;
//                     z-index: 1;
//                     background: linear-gradient(to bottom, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.18) 55%, rgba(0, 0, 0, 0.3));
//                     pointer-events: none;
//                 }

//                 /* neeche ka safed curve (image wale slides mein ye image ke andar hi bana hota hai),
//                    isse Form1 ke tabs video par bhi usi jagah baithte hain */
//                 .hero-3 .hero-video-curve {
//                     position: absolute;
//                     left: 0;
//                     right: 0;
//                     bottom: -1px;
//                     z-index: 2;
//                     height: clamp(70px, 8.6vw, 165px);
//                     background: linear-gradient(to bottom, #f2f3f4, #ffffff);
//                     clip-path: polygon(3% 100%, 13% 8%, 14.5% 3%, 17% 0, 83% 0, 85.5% 3%, 87% 8%, 97% 100%);
//                     pointer-events: none;
//                 }
//             `}</style>

//             <section className="hero-section hero-3">

//                 <div className="swiper hero-slider-3">

//                     <div className="swiper-wrapper">

//                         <Slider {...settings}>

//                             {heroContent.map((item, i) => (

//                                 <div key={i} className="swiper-slide">

//                                     {item.video ? (
//                                         <div
//                                             className="hero-image bg-cover"
//                                             style={{
//                                                 height: "850px",
//                                                 backgroundImage: item.poster ? `url(${item.poster})` : undefined,
//                                             }}
//                                         >
//                                             <video
//                                                 className="hero-video"
//                                                 poster={item.poster}
//                                                 autoPlay
//                                                 muted
//                                                 loop
//                                                 playsInline
//                                                 preload="auto"
//                                             >
//                                                 <source src={item.video} type="video/mp4" />
//                                                 {item.videoWebm && <source src={item.videoWebm} type="video/webm" />}
//                                             </video>
//                                             <div className="hero-video-shade"></div>
//                                             <div className="hero-video-curve"></div>
//                                         </div>
//                                     ) : (
//                                        <div
//     className="hero-image bg-cover"
//     data-background={item.poster}
//     style={{ height: "850px" }}
// ></div>
//                                     )}

//                                     <div className="container">

//                                         <div className="row justify-content-center">

//                                             <div className="col-lg-8">

//                                                 <div className="hero-content">

//                                                     <div
//                                                         className="sub-title"
//                                                         data-animation="fadeInUp"
//                                                         data-delay="1.2s"
//                                                     >
//                                                         {item.subtitle}
//                                                     </div>

//                                                     <h1
//                                                         data-animation="fadeInUp"
//                                                         data-delay="1.4s"
//                                                     >
//                                                         {parse(item.title)}
//                                                     </h1>

//                                                     <p
//                                                         data-animation="fadeInUp"
//                                                         data-delay="1.6s"
//                                                     >
//                                                         {item.content}
//                                                     </p>

//                                                     <div
//                                                         className="about-button"
//                                                         data-animation="fadeInUp"
//                                                         data-delay="1.8s"
//                                                     >

//                                                         <Link
//                                                             href="/contact"
//                                                             className="theme-btn"
//                                                         >
//                                                             Book Now
//                                                             <i className="bi bi-arrow-right"></i>
//                                                         </Link>

//                                                         <Link
//                                                             href="/contact"
//                                                             className="theme-btn style-2"
//                                                         >
//                                                             Contact Now
//                                                             <i className="bi bi-arrow-right"></i>
//                                                         </Link>

//                                                     </div>

//                                                 </div>

//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                             ))}

//                         </Slider>

//                     </div>

//                     <div className="swiper-dot">
//                         <div className="dot2"></div>
//                     </div>

//                 </div>

//             </section>
//         </>
//     );
// };

// export default HeroBanner3;