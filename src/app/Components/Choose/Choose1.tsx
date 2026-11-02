"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const WHATSAPP_URL =
    'https://api.whatsapp.com/send?phone=918287682602&text=' +
    encodeURIComponent('Hello, I want to plan a Goa trip. Please help me with the details.');

const Choose1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="travel-feature-section section-padding fix" data-background="/assets/img/travel-bg.jpg" >
            <div className="shape-1 float-bob-y">
                <Image src="/assets/img/plane-shape1.png" alt="img" width={218} height={244} />
            </div>
            <div className="shape-2 float-bob-x">
                <Image src="/assets/img/plane-shape2.png" alt="img" width={310} height={459} />
            </div>
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Why Choose Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        Goa Holidays Planned By Local Experts
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    Planning a Goa trip usually means juggling hotels, cabs, activities and timings.
                                    We bring it all together in one clear package, with a beach stay, pickup and drop,
                                    daily breakfast and sightseeing, so you know exactly what you are paying for.
                                </p>
                                <div className="feature-area">
                                    <div className="line-shape">
                                        <Image src="/assets/img/line-shape.png" alt="img" width={1} height={174} />
                                    </div>
                                    <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <div className="feature-icon-item">
                                            <div className="icon">
                                                <Image src="/assets/img/icon/08.svg" alt="img" width={40} height={40} />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    Everything In <br />
                                                    One Package
                                                </h5>
                                            </div>
                                        </div>
                                        <ul className="circle-icon">
                                            <li>
                                                <i className="fa-solid fa-circle-check"></i>
                                            </li>
                                            <li>
                                                <span>
                                                    Resort stay, pickup and drop, breakfast and sightseeing, all planned together.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="feature-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <div className="feature-icon-item">
                                            <div className="icon">
                                                <Image src="/assets/img/icon/09.svg" alt="img" width={29} height={40} />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    Adventure You <br />
                                                    Can Pre-Book
                                                </h5>
                                            </div>
                                        </div>
                                        <ul className="circle-icon">
                                            <li>
                                                <i className="fa-solid fa-circle-check"></i>
                                            </li>
                                            <li>
                                                <span>
                                                    Scuba diving, water sports and cruise parties at pre-booking rates.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Plan My Goa Trip<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-image wow img-custom-anim-left">
                                <Image src="/assets/img/goa-choose.png" alt="Travellers enjoying a Goa beach holiday" width={636} height={577} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;