import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
        <>
            <style>{`
                /* left side mein ek hi badi photo, badge photo ke kone par */
                .goa-about-photo {
                    position: relative;
                    max-width: 560px;
                    margin: 0 auto;
                }
                .goa-about-photo img {
                    display: block;
                    width: 100%;
                    height: auto;
                    border-radius: 28px;
                }
                .goa-about-badge {
                    position: absolute;
                    left: -18px;
                    bottom: 44px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 24px;
                    border-radius: 100px;
                    font-size: 16px;
                    font-weight: 700;
                    white-space: nowrap;
                    color: #fff;
                    background: var(--theme, #1ca8cb);
                    box-shadow: 0 14px 30px rgba(28, 168, 203, 0.38);
                }
                @media (max-width: 575px) {
                    .goa-about-badge { left: 12px; bottom: 18px; padding: 10px 18px; font-size: 14px; }
                }
            `}</style>

            <section className="about-section section-padding fix">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="goa-about-photo">
                                    <Image
                                        src="/assets/img/about/goa-about.jpg"
                                        className="wow img-custom-anim-left"
                                        alt="Beach holiday in Goa"
                                        width={560}
                                        height={640}
                                    />
                                    <span className="goa-about-badge float-bob-x">
                                        <i className="bi bi-patch-check-fill"></i>10+ Years In Goa Travel
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="sub-title wow fadeInUp">
                                            About Us
                                        </span>
                                        <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                            Local Goa Experts Who Plan Your Trip From Start To Finish
                                        </h2>
                                    </div>
                                    <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                        We are a Goa-focused travel team with over 10 years of experience in planning
                                        beach holidays, honeymoon trips and adventure tours. Every package comes with a
                                        beach stay, airport or station pickup and drop, daily breakfast and sightseeing
                                        in a private vehicle, so you can enjoy Goa without worrying about the details.
                                    </p>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <div className="about-icon-items">
                                            <div className="icon">
                                                <Image src="/assets/img/check.png" alt="img" width={34} height={30} />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    Easy Booking On WhatsApp
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Share your dates and budget, get a clear quote, and confirm your trip in a few messages.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <div className="about-icon-items">
                                            <div className="icon">
                                                <Image src="/assets/img/check.png" alt="img" width={34} height={30} />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    Support During Your Trip
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>
                                                You get our contact details and your driver&apos;s details in advance, with 24/7 support during your stay.
                                            </p>
                                        </div>
                                    </div>
                                    <Link href="/goa-tour-package" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">View Goa Packages<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About2;