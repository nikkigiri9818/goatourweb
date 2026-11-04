"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const WHATSAPP_NUMBER = '918287682602';
const wa = (text) =>
    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

// Offers client ki site se aur hamare packages ke prices se liye hain.
// Launch se pehle client se confirm kar lena (30% offer, group aur no-pickup prices).
// badge: bade gol badge mein chhota text; icon: text na ho to icon dikhega.
const offers = [
    {
        badge: '30%', badgeSub: 'OFF',
        title: 'Early Bird Offer',
        text: 'Flat 30% off on your first Goa trip when you book early. Share your dates and we will confirm the best price.',
        note: 'For first trip bookings',
        cta: 'Claim Offer',
        href: wa('Hello, I want to claim the early bird offer on my first Goa trip.'),
    },
    {
        badge: '4+', badgeSub: 'GROUP',
        title: 'Group Offer',
        text: 'Travelling with 4 or more people? Get special group rates, with 3 Days packages from ₹5,900 per person.',
        note: 'Price per person, group of 4+',
        cta: 'Get Group Price',
        href: wa('Hello, we are a group of 4 or more. Please share the best group price for a Goa trip.'),
    },
    {
        icon: 'fa-wallet',
        title: 'Book Now, Pay Later',
        text: 'Lock your dates today and pay later. Ask us on WhatsApp how it works for the package you like.',
        note: 'Available on tour packages',
        cta: 'Ask On WhatsApp',
        href: wa('Hello, I want to book a Goa package with the book now, pay later option.'),
    },
    {
        icon: 'fa-calendar-check',
        title: 'Pre-Book Adventures',
        text: 'Book scuba diving, water sports and cruise parties in advance for pre-booking rates and no waiting in queues.',
        note: 'Scuba, water sports, cruise',
        cta: 'See Adventures',
        link: '/goa-adventure',
    },
    {
        icon: 'fa-heart',
        title: 'Honeymoon Special',
        text: 'Beach-side candlelight dinner, island trip with scuba and a dinner cruise, from ₹15,500 per person.',
        note: '5 Days / 4 Nights',
        cta: 'View Package',
        link: '/goa-tour-package/honeymoon-goa-tour-package',
    },
    {
        icon: 'fa-car-side',
        title: 'Own Vehicle? Pay Less',
        text: 'Choose a package without pickup and drop and pay less. 3 Days packages from ₹6,500 per person.',
        note: 'Without pickup / drop',
        cta: 'Get Details',
        href: wa('Hello, I want a Goa package without pickup and drop. Please share the price.'),
    },
];

const DealOffers2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 1 } },
        ],
    };

    const sliderRef = useRef(null);
    const next = () => sliderRef.current.slickNext();
    const previous = () => sliderRef.current.slickPrev();

    return (
        <>
            <style>{`
                /* slides ke beech gap aur sab cards ki height barabar */
                .dof-slider .slick-list { margin: 0 -12px; padding: 20px 0 30px;margin-bottom:45px; }
                .dof-slider .slick-slide { height: auto; }
                .dof-slider .slick-slide > div { padding: 0 12px; height: 100%; }
                .dof-slider .slick-track { display: flex; }

                /* shadow alag wrapper par, kyunki card par kate hue (notch) kone mask se bante hain */
                .dof-item {
                    height: 100%;
                    filter: drop-shadow(0 14px 22px rgba(20, 60, 80, 0.16));
                    transition: transform .4s ease, filter .4s ease;
                }
                .dof-item:hover {
                    transform: translateY(-8px);
                    filter: drop-shadow(0 22px 30px rgba(28, 168, 203, 0.3));
                }

                .dof-card {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border-radius: 22px;
                    overflow: hidden;
                    background: #fff;
                    /* coupon jaise kate hue gol kone, beech ki dashed line par */
                    -webkit-mask:
                        radial-gradient(circle 13px at 0 calc(100% - 78px), #0000 98%, #000) left / 51% 100% no-repeat,
                        radial-gradient(circle 13px at 100% calc(100% - 78px), #0000 98%, #000) right / 51% 100% no-repeat;
                            mask:
                        radial-gradient(circle 13px at 0 calc(100% - 78px), #0000 98%, #000) left / 51% 100% no-repeat,
                        radial-gradient(circle 13px at 100% calc(100% - 78px), #0000 98%, #000) right / 51% 100% no-repeat;
                }

                .dof-top {
                    position: relative;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 22px;
                    padding: 30px 30px 34px;
                    overflow: hidden;
                    color: #fff;
                }
                .dof-v0 .dof-top { background: linear-gradient(135deg, var(--theme, #1ca8cb), #0e7f9c); }
                .dof-v1 .dof-top { background: linear-gradient(135deg, #0f4c5c, var(--theme, #1ca8cb)); }
                .dof-top::before,
                .dof-top::after {
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    pointer-events: none;
                }
                .dof-top::before { width: 200px; height: 200px; top: -80px; right: -60px; }
                .dof-top::after { width: 120px; height: 120px; bottom: -50px; left: 30%; }

                .dof-badge {
                    position: relative;
                    flex-shrink: 0;
                    width: 92px;
                    height: 92px;
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: var(--theme, #1ca8cb);
                    background: #fff;
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
                }
                .dof-badge::after {
                    content: "";
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    border: 2px dashed rgba(255, 255, 255, 0.7);
                    animation: dofSpin 14s linear infinite;
                }
                .dof-badge strong { font-size: 30px; line-height: 1; font-weight: 800; }
                .dof-badge small { font-size: 11px; font-weight: 700; letter-spacing: 1px; }
                .dof-badge i { font-size: 34px; }

                .dof-text { position: relative; }
                .dof-text h4 { margin: 0 0 8px; font-size: 24px; line-height: 1.25; color: #fff; }
                .dof-text p { margin: 0; font-size: 15px; line-height: 1.65; color: rgba(255, 255, 255, 0.92); }

                .dof-bottom {
                    height: 78px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 0 30px;
                    background: #fff;
                    border-top: 2px dashed #d7e6ea;
                }
                .dof-note {
                    min-width: 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: #55656c;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .dof-note i { margin-right: 8px; color: var(--theme, #1ca8cb); }

                .dof-cta {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    height: 46px;
                    padding: 0 24px;
                    border-radius: 100px;
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                    background: var(--theme, #1ca8cb);
                    transition: filter .3s, box-shadow .3s;
                }
                .dof-cta:hover { color: #fff; filter: brightness(.93); box-shadow: 0 8px 18px rgba(28, 168, 203, 0.4); }
                .dof-cta i { transition: transform .3s; }
                .dof-item:hover .dof-cta i { transform: translateX(5px); }

                @keyframes dofSpin { to { transform: rotate(360deg); } }

                @media (max-width: 575px) {
                    .dof-top { flex-direction: column; text-align: center; gap: 18px; padding: 28px 22px 30px; }
                    .dof-bottom { justify-content: center; padding: 0 22px; }
                    .dof-note { display: none; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .dof-badge::after { animation: none; }
                    .dof-item { transition: none; }
                }
            `}</style>

            <section className="deals-offer-section section-padding pb-0 fix">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="sub-title wow fadeInUp">
                                Deals & Offers
                            </span>
                            <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                Special Offers For Your Goa Trip
                            </h2>
                        </div>
                        <div className="array-button justify-content-center wow fadeInUp wow" data-wow-delay=".5s">
                            <button onClick={previous} className="array-prev" aria-label="Previous offer"><i className="bi bi-arrow-left"></i></button>
                            <button onClick={next} className="array-next" aria-label="Next offer"><i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>

                    <div className="dof-slider">
                        <Slider ref={sliderRef} {...settings}>
                            {offers.map((item, i) => (
                                <div key={item.title}>
                                    <div className="dof-item">
                                        <div className={`dof-card dof-v${i % 2}`}>
                                            <div className="dof-top">
                                                <div className="dof-badge">
                                                    {item.badge ? (
                                                        <>
                                                            <strong>{item.badge}</strong>
                                                            <small>{item.badgeSub}</small>
                                                        </>
                                                    ) : (
                                                        <i className={`fa-solid ${item.icon}`}></i>
                                                    )}
                                                </div>
                                                <div className="dof-text">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                            <div className="dof-bottom">
                                                <span className="dof-note"><i className="fa-solid fa-circle-check"></i>{item.note}</span>
                                                {item.link ? (
                                                    <Link href={item.link} className="dof-cta">
                                                        {item.cta} <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                ) : (
                                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="dof-cta">
                                                        {item.cta} <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DealOffers2;