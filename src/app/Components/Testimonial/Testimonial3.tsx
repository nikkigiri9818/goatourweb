"use client"
import React, { useEffect, useRef } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import Image from 'next/image';

const Testimonial3 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
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

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

   const testimonialContent = [
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Family Traveller, India',
        title: 'Rahul Sharma',
        content: 'Our Goa trip was absolutely amazing! The tour was well organized, and we enjoyed visiting beautiful beaches, exploring local attractions, and experiencing Goan culture. Highly recommended for a memorable holiday!'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Honeymoon Couple, India',
        title: 'Priya Mehta',
        content: 'We had a wonderful honeymoon in Goa. The hotel arrangements, sightseeing, and romantic beach experiences were fantastic. Everything was perfectly planned, making our trip stress-free and unforgettable.'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Adventure Traveller, USA',
        title: 'Michael Anderson',
        content: 'Goa was an incredible destination! We enjoyed scuba diving, exciting water sports, and beautiful sunset views. The tour team was friendly and professional. I would definitely visit Goa again!'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Weekend Traveller, India',
        title: 'Sneha Patel',
        content: 'The North Goa sightseeing tour was fantastic. We visited Baga Beach, Fort Aguada, and some beautiful local spots. The arrangements were excellent, and the entire experience was worth every penny.'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'International Tourist, UK',
        title: 'James Wilson',
        content: 'I absolutely loved exploring Goa! The stunning beaches, delicious food, and vibrant culture made this holiday special. The Dudhsagar waterfall trip was the highlight of our entire vacation.'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Group Traveller, India',
        title: 'Amit Verma',
        content: 'We booked a Goa tour package for our group of friends, and it was an amazing experience. From beach hopping to the dinner cruise, everything was enjoyable. Great service and wonderful memories!'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Solo Traveller, Australia',
        title: 'Emily Thompson',
        content: 'Goa is a perfect destination for solo travellers. The beaches were beautiful, the sightseeing was enjoyable, and the local experiences were amazing. The tour arrangements made everything easy and comfortable.'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Corporate Traveller, India',
        title: 'Vikram Singh',
        content: 'Our Goa corporate trip was beautifully organized. The transportation, hotel accommodation, and sightseeing arrangements were excellent. We enjoyed every moment and would recommend this travel service.'
    },
    {
        img: '/assets/img/testimonial/client-4.png',
        subtitle: 'Holiday Traveller, Canada',
        title: 'Daniel Roberts',
        content: 'Goa exceeded all our expectations! From relaxing on beautiful beaches to enjoying exciting cruises and local sightseeing, every day was special. A fantastic destination for anyone looking for a memorable holiday.'
    }
];

    return (
        <section className="testimonial-section section-padding fix bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg" >
        <div className="container">
            <div className="testimonial-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                        <div className="testimonial-image">
                            <Image src="/assets/img/goa/flyboardingimges.webp" alt="img" width={636} height={657}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title">
                                <span className="sub-title wow fadeInUp">
                                    Testimonial
                                </span>
                                <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                    Travelers Love Our locals
                                </h2>
                            </div>
                            <div className="swiper testimonial-slider3">
                                <div className="swiper-wrapper">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-card-items">
                                            <div className="client-info-items">
                                                <div className="client-info">
                                                    {/* <div className="client-image">
                                                        <Image src={item.img} alt="img" width={60} height={60}   />
                                                    </div> */}
                                                    <div className="content">
                                                        <h4>
                                                        {item.title}
                                                        </h4>
                                                        <p>
                                                        {item.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" fill="none">
                                                        <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#1CA8CB"/>
                                                   </svg>
                                                </div>
                                            </div>
                                            <p>
                                            {item.content}
                                            </p>
                                        </div>
                                    </div>
                        ))}
                        </Slider>

                                </div>
                            </div>
                            <div className="array-button">
                                <button onClick={previous} className="array-prev">
                                <i className="bi bi-arrow-up"></i>
                                </button>
                                <button onClick={next} className="array-next">
                                <i className="bi bi-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial3;