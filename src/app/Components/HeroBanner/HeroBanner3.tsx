"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import Link from 'next/link';

const HeroBanner3 = () => {

   const heroContent = [
  {
    img: '/assets/img/hero/herodesgine.png',
    subtitle: 'Goa Tour Packages From ₹7,500',
    title: 'Your Perfect Goa Trip <br>Starts Right Here',
    content:
      'Beach-side resort stay, private cab for sightseeing and daily breakfast, all planned for you. Pick a package, pack your bags and leave the rest to us.',
  },
  {
    img: '/assets/img/hero/herodesinetwo.png',
    subtitle: 'Goa Adventure Activities',
    title: 'Scuba, Water Sports <br>And Sunset Cruises',
    content:
      'From scuba diving at Grand Island to a dinner cruise party and the Dudhsagar waterfall trip, add the thrill to your Goa holiday at pre-booking prices.',
  },
  {
    img: '/assets/img/hero/herothreedesine.png',
    subtitle: 'Flat 30% Off On Early Booking',
    title: 'Couples, Families <br>And Friends, All Welcome',
    content:
      'Honeymoon, family or group trip, we customise the plan to fit your budget. Book now, pay later, and get special rates for 4 or more people.',
  },
];    

       useEffect(() => {
         loadBackgroudImages();
     }, []);
 
     const settings = {
         dots: false,
         infinite: true,
         fade: true,
         speed: 2000,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,        
         responsive: [
           {
             breakpoint: 1399,
             settings: {
               slidesToShow: 1,
             }
           },
           {
             breakpoint: 1199,
             settings: {
               slidesToShow: 1,
             }
           },{
             breakpoint: 575,
             settings: {
               slidesToShow: 1,
             }
           }
         ]
       };       

    return (
<section className="hero-section hero-3">
            <div className="swiper hero-slider-3">
                <div className="swiper-wrapper">
                <Slider {...settings}>
                {heroContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="hero-image bg-cover" data-background={item.img} style={{height:"850px"}}></div>
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
                                                <Link href="/tour/tour-details" className="theme-btn">Explore Flight<i className="bi bi-arrow-right"></i></Link>
                                                <Link href="/tour/tour-details" className="theme-btn style-2">Book A Stay<i className="bi bi-arrow-right"></i></Link>
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
    );
};



export default HeroBanner3;