// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import DestinationCard from '../Card/DestinationCard';

// // Layout wahi hai jo Turmet ka tha: 4 columns (2 + 1 | 2 + 2 cards)
// // Beech wale single column ka card lamba hota hai, isliye wahan portrait photo (Dudhsagar) rakhi hai.
// const IMG = '/assets/img/hero/heroone.jpg';

// const column1 = [
//   { img: `/assets/img/hero/heroone.jpg`, title: 'Calangute Beach', content: 'Water Sports & Beach Shacks', tag: 'Beach', href: '/watersports-in-goa' },
//   { img: `/assets/img/hero/herotwo.jpg`, title: 'Anjuna Beach', content: 'Flea Market & Sunset Cafes', tag: 'Beach', href: '/best-goa-tour-packages' },
// ];

// const column2 = [
//   { img: `/assets/img/hero/herothree.jpg`, title: 'Dudhsagar Waterfalls', content: 'Jeep Safari & Waterfall Trek', tag: 'Adventure', href: '/dudhsagar-waterfall-trip' },
// ];

// const column3 = [
//   { img: `/assets/img/hero/heroone.jpg`, title: 'Baga Beach', content: 'Parasailing & Nightlife', tag: 'Beach', href: '/watersports-in-goa' },
//   { img: `/assets/img/hero/heroone.jpg`, title: 'Old Goa Churches', content: 'Heritage & Basilica Of Bom Jesus', tag: 'Heritage', href: '/best-goa-tour-packages' },
// ];

// const column4 = [
//   { img: `/assets/img/hero/herotwo.jpg`, title: 'Grand Island', content: 'Scuba Diving & Dolphin Trip', tag: 'Adventure', href: '/best-scuba-diving-in-goa' },
//   { img: `/assets/img/hero/heroone.jpg`, title: 'Palolem Beach', content: 'Calm Waters & Kayaking', tag: 'Beach', href: '/best-goa-tour-packages' },
// ];

// const renderCards = (items) =>
//   items.map((item) => (
//     <DestinationCard
//       key={item.title}
//       img={item.img}
//       title={item.title}
//       content={item.content}
//       tag={item.tag}
//       href={item.href}
//     ></DestinationCard>
//   ));

// const Destination3 = () => {
//   return (
//     <section className="top-destination-section section-padding fix">
//       <div className="bag-shape float-bob-x">
//         <Image src="/assets/img/destination/bag-shape.png" alt="img" width={160} height={206} />
//       </div>
//       <div className="watch-shape float-bob-y">
//         <Image src="/assets/img/destination/watch.png" alt="img" width={76} height={76} />
//       </div>
//       <div className="container">
//         <div className="section-title text-center">
//           <span className="sub-title wow fadeInUp">Explore Goa</span>
//           <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
//             Most Popular Places To Visit In Goa
//           </h2>
//         </div>
//         <div className="new-top-destination-wrapper">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="row">
//                 <div className="col-md-6">{renderCards(column1)}</div>
//                 <div className="col-md-6">{renderCards(column2)}</div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="row">
//                 <div className="col-md-6">{renderCards(column3)}</div>
//                 <div className="col-md-6">{renderCards(column4)}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
//           <Link href="/best-goa-tour-packages" className="theme-btn">
//             View Goa Tour Packages<i className="bi bi-arrow-right"></i>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destination3;
















"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import DestinationCard from '../Card/DestinationCard';

// Ab saare cards ek slider mein hain, isliye har photo ek jaisi height mein dikhegi.
const IMG = '/assets/img/destination/goa';

const destinations = [
  { img: `/assets/img/hero/heroone.jpg`, title: 'Baga Beach', content: 'Parasailing & Nightlife', tag: 'Beach', href: '/watersports-in-goa' },
  { img: `/assets/img/hero/herotwo.jpg`, title: 'Calangute Beach', content: 'Water Sports & Beach Shacks', tag: 'Beach', href: '/watersports-in-goa' },
  { img: `/assets/img/hero/herothree.jpg`, title: 'Anjuna Beach', content: 'Flea Market & Sunset Cafes', tag: 'Beach', href: '/best-goa-tour-packages' },
  { img: `/assets/img/hero/heroone.jpg`, title: 'Dudhsagar Waterfalls', content: 'Jeep Safari & Waterfall Trek', tag: 'Adventure', href: '/dudhsagar-waterfall-trip' },
  { img: `/assets/img/hero/herotwo.jpg`, title: 'Grand Island', content: 'Scuba Diving & Dolphin Trip', tag: 'Adventure', href: '/best-scuba-diving-in-goa' },
  { img: `/assets/img/hero/herothree.jpg`, title: 'Old Goa Churches', content: 'Heritage & Basilica Of Bom Jesus', tag: 'Heritage', href: '/best-goa-tour-packages' },
  { img: `/assets/img/hero/heroone.jpg`, title: 'Palolem Beach', content: 'Calm Waters & Kayaking', tag: 'Beach', href: '/best-goa-tour-packages' },
];

const Destination3 = () => {
  const sliderRef = useRef(null);

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
        .goa-desti-slider .slick-list { margin: 0 -12px; }
        .goa-desti-slider .slick-slide > div { padding: 0 12px; }

        /* sab cards ki height barabar */
        .goa-desti-slider .new-top-desti-thumb { margin-bottom: 0; }
        .goa-desti-slider .new-top-desti-thumb img {
          display: block;
          width: 100%;
          height: 420px;
          object-fit: cover;
        }

        /* prev / next buttons */
        .goa-desti-nav {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }
        .goa-desti-nav button {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--theme, #1ca8cb);
          background: #fff;
          border: 1.5px solid var(--theme, #1ca8cb);
          cursor: pointer;
          transition: background .3s, color .3s, transform .3s;
        }
        .goa-desti-nav button:hover {
          color: #fff;
          background: var(--theme, #1ca8cb);
          transform: translateY(-3px);
        }

        @media (max-width: 575px) {
          .goa-desti-slider .new-top-desti-thumb img { height: 360px; }
        }
      `}</style>

      <section className="top-destination-section section-padding fix">
        <div className="bag-shape float-bob-x">
          <Image src="/assets/img/destination/bag-shape.png" alt="img" width={160} height={206} />
        </div>
        <div className="watch-shape float-bob-y">
          <Image src="/assets/img/destination/watch.png" alt="img" width={76} height={76} />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Explore Goa</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
              Most Popular Places To Visit In Goa
            </h2>
          </div>

          <div className="new-top-destination-wrapper goa-desti-slider">
            <Slider ref={sliderRef} {...settings}>
              {destinations.map((item) => (
                <div key={item.title}>
                  <DestinationCard
                    img={item.img}
                    title={item.title}
                    content={item.content}
                    tag={item.tag}
                    href={item.href}
                  ></DestinationCard>
                </div>
              ))}
            </Slider>
          </div>

          <div className="goa-desti-nav">
            <button type="button" aria-label="Previous" onClick={() => sliderRef.current?.slickPrev()}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <button type="button" aria-label="Next" onClick={() => sliderRef.current?.slickNext()}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
            <Link href="/best-goa-tour-packages" className="theme-btn">
              View Goa Tour Packages<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination3;