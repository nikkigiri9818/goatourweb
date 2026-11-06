"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=917678464517&text=' +
  encodeURIComponent('Hello, I want to plan a Goa trip. Please help me with the details.');

const trustPoints = [
  '10+ years of Goa travel experience',
  'Honeymoon, family & group trips',
  'Beach, adventure & sightseeing in one plan',
  'Direct support on WhatsApp',
];

const About3 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <>
      <style>{`
        .goa-about-points {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
        }
        .goa-about-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-weight: 600;
          line-height: 1.4;
          color: #1b1b1b;
        }
        .goa-about-points i {
          margin-top: 2px;
          color: var(--theme, #1ca8cb);
        }
        .goa-about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 32px;
        }
        @media (max-width: 575px) {
          .goa-about-points { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="about-section section-padding bg-color" data-background="/assets/img/about/about-bg-2.jpg" >
        <div className="container">
          <div className="left-shape float-bob-x">
            <Image src="/assets/img/about/bag-shape.png" alt="img" width={204} height={195} />
          </div>
          <div className="about-wrapper-3">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image wow fadeInUp wow" data-wow-delay=".3s">
                  <Image src="/assets/img/hero/heroone.jpg" alt="Tourists enjoying a beach holiday in Goa" width={450} height={449} />
                  <div className="about-image-2 wow fadeInUp wow" data-wow-delay=".5s">
                    <Image src="/assets/img/hero/herotwo.jpg" alt="Water sports and adventure activities in Goa" width={350} height={350} />
                    <div className="plane-shape float-bob-y">
                      <Image src="/assets/img/about/plane-shape3.png" alt="img" width={335} height={357} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-title wow fadeInUp">About Us</span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                      Your Trusted Partner For <br />
                      A Perfect Goa Holiday
                    </h2>
                  </div>
                  <p className="wow fadeInUp wow" data-wow-delay=".5s">
                    We are a Goa-focused travel team with over 10 years of experience in planning
                    beach holidays, honeymoon trips and adventure tours. From your resort and cab
                    to scuba diving and sunset cruises, we handle the planning so you can simply
                    enjoy Goa, without the stress of juggling bookings.
                  </p>

                  <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                    <div className="about-icon-items">
                      <div className="icon">
                        <Image src="/assets/img/icon/13.svg" alt="img" width={37} height={41} />
                      </div>
                      <div className="content">
                        <h4>Clear Packages, Clear Inclusions</h4>
                        <p>
                          Every package shows exactly what you get, including your resort stay,
                          cab and daily breakfast. Plans start from ₹7,500.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                    <div className="about-icon-items">
                      <div className="icon">
                        <Image src="/assets/img/icon/14.svg" alt="img" width={40} height={41} />
                      </div>
                      <div className="content">
                        <h4>Plans Made Around You</h4>
                        <p>
                          Tell us your dates and budget on WhatsApp, and we will shape the trip
                          for your honeymoon, family holiday or group of friends.
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="goa-about-points wow fadeInUp wow" data-wow-delay=".6s">
                    {trustPoints.map((point) => (
                      <li key={point}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="goa-about-actions wow fadeInUp wow" data-wow-delay=".7s">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="theme-btn">
                      Chat On WhatsApp<i className="bi bi-arrow-right"></i>
                    </a>
                    <Link href="/best-goa-tour-packages" className="theme-btn">
                      View Goa Packages<i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About3;