// // "use client"
// // import React, { useEffect } from 'react';
// // import loadBackgroudImages from '../Common/loadBackgroudImages';
// // import Slider from 'react-slick';
// // import parse from 'html-react-parser';
// // import Link from 'next/link';

// // const HeroBanner3 = () => {

// //    const heroContent = [
// //   {
// //     img: '/assets/img/hero/herodesgine.png',
// //     subtitle: 'Goa Tour Packages From ₹7,500',
// //     title: 'Your Perfect Goa Trip <br>Starts Right Here',
// //     content:
// //       'Beach-side resort stay, private cab for sightseeing and daily breakfast, all planned for you. Pick a package, pack your bags and leave the rest to us.',
// //   },
// //   {
// //     img: '/assets/img/hero/herodesinetwo.png',
// //     subtitle: 'Goa Adventure Activities',
// //     title: 'Scuba, Water Sports <br>And Sunset Cruises',
// //     content:
// //       'From scuba diving at Grand Island to a dinner cruise party and the Dudhsagar waterfall trip, add the thrill to your Goa holiday at pre-booking prices.',
// //   },
// //   {
// //     img: '/assets/img/hero/beach.png',
// //     subtitle: 'Flat 30% Off On Early Booking',
// //     title: 'Couples, Families <br>And Friends, All Welcome',
// //     content:
// //       'Honeymoon, family or group trip, we customise the plan to fit your budget. Book now, pay later, and get special rates for 4 or more people.',
// //   },
// // ];    

// //        useEffect(() => {
// //          loadBackgroudImages();
// //      }, []);
 
// //      const settings = {
// //          dots: false,
// //          infinite: true,
// //          fade: true,
// //          speed: 2000,
// //          slidesToShow: 1,
// //          slidesToScroll: 1,
// //          arrows: false,
// //          autoplay: true,
// //          autoplaySpeed: 2000,        
// //          responsive: [
// //            {
// //              breakpoint: 1399,
// //              settings: {
// //                slidesToShow: 1,
// //              }
// //            },
// //            {
// //              breakpoint: 1199,
// //              settings: {
// //                slidesToShow: 1,
// //              }
// //            },{
// //              breakpoint: 575,
// //              settings: {
// //                slidesToShow: 1,
// //              }
// //            }
// //          ]
// //        };       

// //     return (
// // <section className="hero-section hero-3">
// //             <div className="swiper hero-slider-3">
// //                 <div className="swiper-wrapper">
// //                 <Slider {...settings}>
// //                 {heroContent.map((item, i) => (
// //                     <div key={i} className="swiper-slide">
// //                         <div className="hero-image bg-cover" data-background={item.img} style={{height:"850px"}}></div>
// //                         <div className="container">
// //                                 <div className="row justify-content-center">
// //                                     <div className="col-lg-8">
// //                                         <div className="hero-content">
// //                                             <div className="sub-title" data-animation="fadeInUp" data-delay="1.2s">
// //                                             {item.subtitle}
// //                                             </div>
// //                                             <h1 data-animation="fadeInUp" data-delay="1.4s">
// //                                                 {parse(item.title)}
// //                                             </h1>
// //                                             <p data-animation="fadeInUp" data-delay="1.6s">
// //                                             {item.content}
// //                                             </p>
// //                                             <div className="about-button" data-animation="fadeInUp" data-delay="1.8s">
// //                                                 <Link href="/tour/tour-details" className="theme-btn">Explore Flight<i className="bi bi-arrow-right"></i></Link>
// //                                                 <Link href="/tour/tour-details" className="theme-btn style-2">Book A Stay<i className="bi bi-arrow-right"></i></Link>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                         </div>
// //                      </div>
// //                 ))}
// //                  </Slider>

// //                    </div>
// //                    <div className="swiper-dot">
// //                       <div className="dot2"></div>
// //                    </div>
// //             </div>
// //         </section>
// //     );
// // };



// // export default HeroBanner3;








"use client";

import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Link from 'next/link';

const HeroBanner3 = () => {

    // Video wali slide: video mp4 file ka path, poster = video load hone se pehle dikhne wali photo.
    // Sirf video wala hero chahiye to neeche ki 3 image-slides hata do (sirf pehli slide rakho).
    const heroContent = [
        {
            video: '/assets/img/hero/hero.mp4',
            videoWebm: '/assets/video/goa-hero.webm', // optional, na ho to is line ko hata do
            poster: '/assets/img/hero/video-poster.jpg',
            subtitle: 'Your Goa Holiday Starts Here',
            title: 'Feel The Goa Vibes <br>Before You Arrive',
            content:
                'Beaches, water sports and sunsets are waiting. Choose a package and we will take care of the rest.',
        },

    ];

    // Autoplay ke liye video muted hona zaroori hai. Browser kabhi kabhi autoplay rok deta hai,
    // isliye yahan se khud play() chalate hain. Reduced-motion wale users ke liye video ruka rehta hai.
    const playVideos = () => {
        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll<HTMLVideoElement>('.hero-3 video').forEach((v) => {
            v.muted = true;
            if (reduce) {
                v.pause();
            } else {
                const p = v.play();
                if (p && p.catch) p.catch(() => {});
            }
        });
    };

    useEffect(() => {
        loadBackgroudImages();
        playVideos();
        const t = setTimeout(playVideos, 600);
        return () => clearTimeout(t);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: heroContent.length > 1,
        autoplaySpeed: 6000, // pehle 2000 tha, video ko dikhne ka time nahi milta
        afterChange: playVideos,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 1 } },
            { breakpoint: 1199, settings: { slidesToShow: 1 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <style>{`
                .hero-section.hero-3 .hero-image {
                    position: relative;
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                }

                /* (pehle yahan // wale comment the, CSS mein wo comment nahi hote aur agle rule bigad dete the) */

                .hero-section.hero-3 .container {
                    position: relative;
                    z-index: 2;
                }

                .hero-section.hero-3 .hero-content {
                    position: relative;
                    z-index: 3;
                }

                /* ---- video slide ---- */
                .hero-3 .hero-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                /* text padhne ke liye halka dark parda (sirf video par) */
                .hero-3 .hero-video-shade {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.18) 55%, rgba(0, 0, 0, 0.3));
                    pointer-events: none;
                }

                /* neeche ka safed curve (image wale slides mein ye image ke andar hi bana hota hai),
                   isse Form1 ke tabs video par bhi usi jagah baithte hain */
                .hero-3 .hero-video-curve {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -1px;
                    z-index: 2;
                    height: clamp(70px, 8.6vw, 165px);
                    background: linear-gradient(to bottom, #f2f3f4, #ffffff);
                    clip-path: polygon(3% 100%, 13% 8%, 14.5% 3%, 17% 0, 83% 0, 85.5% 3%, 87% 8%, 97% 100%);
                    pointer-events: none;
                }
            `}</style>

            <section className="hero-section hero-3">

                <div className="swiper hero-slider-3">

                    <div className="swiper-wrapper">

                        <Slider {...settings}>

                            {heroContent.map((item, i) => (

                                <div key={i} className="swiper-slide">

                                    {item.video ? (
                                        <div
                                            className="hero-image bg-cover"
                                            style={{
                                                height: "850px",
                                                backgroundImage: item.poster ? `url(${item.poster})` : undefined,
                                            }}
                                        >
                                            <video
                                                className="hero-video"
                                                poster={item.poster}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                            >
                                                <source src={item.video} type="video/mp4" />
                                                {item.videoWebm && <source src={item.videoWebm} type="video/webm" />}
                                            </video>
                                            <div className="hero-video-shade"></div>
                                            <div className="hero-video-curve"></div>
                                        </div>
                                    ) : (
                                       <div
    className="hero-image bg-cover"
    data-background={item.poster}
    style={{ height: "850px" }}
></div>
                                    )}

                                    <div className="container">

                                        <div className="row justify-content-center">

                                            <div className="col-lg-8">

                                                <div className="hero-content">

                                                    <div
                                                        className="sub-title"
                                                        data-animation="fadeInUp"
                                                        data-delay="1.2s"
                                                    >
                                                        {item.subtitle}
                                                    </div>

                                                    <h1
                                                        data-animation="fadeInUp"
                                                        data-delay="1.4s"
                                                    >
                                                        {parse(item.title)}
                                                    </h1>

                                                    <p
                                                        data-animation="fadeInUp"
                                                        data-delay="1.6s"
                                                    >
                                                        {item.content}
                                                    </p>

                                                    <div
                                                        className="about-button"
                                                        data-animation="fadeInUp"
                                                        data-delay="1.8s"
                                                    >

                                                        <Link
                                                            href="/contact"
                                                            className="theme-btn"
                                                        >
                                                            Book Now
                                                            <i className="bi bi-arrow-right"></i>
                                                        </Link>

                                                        <Link
                                                            href="/contact"
                                                            className="theme-btn style-2"
                                                        >
                                                            Contact Now
                                                            <i className="bi bi-arrow-right"></i>
                                                        </Link>

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