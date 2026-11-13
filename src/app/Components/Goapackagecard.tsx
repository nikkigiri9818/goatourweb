import React from 'react';
import Link from 'next/link';
import { BASE_PATH, formatINR, whatsappLink } from '../Components/Goapakagesdata';

const FA_CDN =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';

/* Highlight text ke hisaab se Font Awesome icon choose hota hai */
const getHighlightIcon = (text = '') => {
  const t = text.toLowerCase();
  if (/(pickup|pick-up|drop|transfer|cab|car)/.test(t)) return 'fa-solid fa-car';
  if (/(resort|pool|hotel|stay|beach)/.test(t)) return 'fa-solid fa-water-ladder';
  if (/(breakfast|meal|food|dinner|lunch)/.test(t)) return 'fa-solid fa-mug-hot';
  if (/(sightseeing|tour|visit|trip)/.test(t)) return 'fa-solid fa-location-dot';
  return 'fa-solid fa-circle-check';
};

const GoaPackageCard = ({ pkg, index = 0 }) => {
  const href = `${BASE_PATH}/${pkg.slug}`;
  const wa = whatsappLink(
    `Hello, I want details for the ${pkg.title}. Please share the itinerary and best price.`
  );

  // Optional fields: pkg.tag, pkg.locationLabel, pkg.locations (array)
  const tag = pkg.tag || 'Weekend Getaway';
  const locationLabel = pkg.locationLabel || 'North Goa';
  const locations =
    Array.isArray(pkg.locations) && pkg.locations.length
      ? pkg.locations
      : ['Calangute', 'Baga', 'Candolim', 'Anjuna'];

  return (
    <>
      {/* Font Awesome - agar site par pehle se loaded hai toh bhi koi problem nahi */}
      <link rel="stylesheet" href={FA_CDN} />

      <style>{`
        .gpc {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e0ebef;
          border-radius: 25px;
          box-shadow: 0 8px 28px rgba(16,43,69,.07);
          transition: all .35s ease;
          animation: gpcUp .7s ease both;
        }
        .gpc:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(19,174,200,.16);
        }

        .gpc-media {
          height: 205px;
          position: relative;
          overflow: hidden;
          background: #e5f5f8;
        }
        .gpc-media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .7s ease;
        }
        .gpc:hover .gpc-media img { transform: scale(1.07); }
        .gpc-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,27,42,.75), transparent 55%);
          pointer-events: none;
        }

        /* Discount Ribbon */
        .gpc-badge {
          position: absolute;
          z-index: 3;
          top: 19px;
          left: -36px;
          width: 135px;
          padding: 9px 0;
          text-align: center;
          transform: rotate(-45deg);
          background: #ffb21a;
          color: #102b45;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
          box-shadow: 0 3px 10px rgba(0,0,0,.15);
        }

        /* Tag pill */
        .gpc-premium {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 3;
          padding: 7px 17px;
          border-radius: 30px;
          color: #fff;
          background: #13aec8;
          font-size: 12px;
          font-weight: 700;
        }

        .gpc-duration {
          position: absolute;
          bottom: 15px;
          left: 16px;
          z-index: 3;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
        }
        .gpc-duration i { margin-right: 7px; }

        .gpc-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 20px;
        }

        .gpc-title {
          margin: 0 0 12px;
          text-align: center;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 750;
        }
        .gpc-title a {
          color: #102b45;
          text-decoration: none;
          transition: color .3s;
        }
        .gpc:hover .gpc-title a { color: #13aec8; }
        .gpc-title a::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .gpc-rating {
          text-align: center;
          margin-bottom: 20px;
          color: #102b45;
          font-size: 14px;
          font-weight: 700;
        }
        .gpc-rating i {
          color: #ffb21a;
          margin-right: 2px;
          font-size: 16px;
        }
        .gpc-rating small {
          color: #788994;
          font-size: 11px;
          font-weight: 600;
        }

        .gpc-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 10px;
          list-style: none;
          margin: 0 0 18px;
          padding: 17px 0;
          border-top: 1px dashed #dfe9ed;
          border-bottom: 1px dashed #dfe9ed;
        }
        .gpc-list li {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          color: #344956;
          font-size: 13px;
          line-height: 1.4;
        }
        .gpc-list li i {
          flex-shrink: 0;
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #13aec8;
          background: #e5f5f8;
          font-size: 12px;
        }

        .gpc-note {
          margin: 0 0 19px;
          color: #637782;
          font-size: 13px;
          line-height: 1.5;
        }
        .gpc-note i {
          margin-right: 7px;
          color: #13aec8;
        }
        .gpc-note strong { color: #102b45; }

        .gpc-bottom { margin-top: auto; }

        .gpc-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          flex-wrap: wrap;
          gap: 5px 10px;
          margin-bottom: 17px;
        }
        .gpc-price del { color: #9aaab2; font-size: 13px; }
        .gpc-price strong {
          color: #102b45;
          font-size: 28px;
          line-height: 1;
          font-weight: 800;
        }
        .gpc-price span { color: #71838e; font-size: 13px; }

        .gpc-actions {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          position: relative;
          z-index: 3;
        }

        .gpc-wa {
          flex: 1;
          min-width: 0;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 10px;
          border: 1px solid #103f49;
          border-radius: 50px;
          background: #103f49;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          transition: all .3s ease;
        }
        .gpc-wa i { color: #25d366; font-size: 19px; }
        .gpc-wa:hover {
          background: #0b3038;
          color: #fff;
          box-shadow: 0 7px 18px rgba(16,63,73,.2);
        }

        .gpc-btn {
          flex-shrink: 0;
          min-width: 108px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 17px;
          border: 1px solid #13aec8;
          border-radius: 50px;
          background: #fff;
          color: #13aec8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all .3s ease;
        }
        .gpc-btn i { transition: transform .3s; }
        .gpc-btn:hover {
          background: #13aec8;
          color: #fff;
          box-shadow: 0 7px 18px rgba(19,174,200,.2);
        }
        .gpc-btn:hover i { transform: translateX(4px); }

        @keyframes gpcUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width: 768px) {
          .gpc-media { height: 205px; }
          .gpc-body { padding: 17px; }
          .gpc-title { font-size: 19px; }
          .gpc-list li { font-size: 12px; }
          .gpc-price strong { font-size: 26px; }
          .gpc-wa { font-size: 12px; }
        }

        @media(max-width: 380px) {
          .gpc-actions { gap: 6px; }
          .gpc-wa { font-size: 11px; padding: 0 7px; gap: 5px; }
          .gpc-btn { min-width: 90px; padding: 0 10px; font-size: 12px; }
          .gpc-list { gap: 10px 6px; }
        }

        @media(prefers-reduced-motion: reduce) {
          .gpc, .gpc-media img, .gpc-btn, .gpc-wa {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      <article className="gpc" style={{ animationDelay: `${index * 0.12}s` }}>
        <div className="gpc-media">
          <img src={pkg.image} alt={pkg.title} loading="lazy" decoding="async" />

          <span className="gpc-badge">{pkg.badge || '30% OFF'}</span>

          <span className="gpc-premium">{tag}</span>

          <span className="gpc-duration">
            <i className="fa-regular fa-calendar-check"></i>
            {pkg.days} Days / {pkg.nights} Nights
          </span>
        </div>

        <div className="gpc-body">
          <h3 className="gpc-title">
            <Link href={href}>{pkg.title}</Link>
          </h3>

          <div className="gpc-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            &nbsp; {pkg.rating}
            <small> [{pkg.reviews} REVIEWS]</small>
          </div>

          <ul className="gpc-list">
            {pkg.highlights.map((h) => (
              <li key={h}>
                <i className={getHighlightIcon(h)}></i>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <p className="gpc-note">
            <i className="fa-solid fa-location-dot"></i>
            <strong>{locationLabel}:</strong> {locations.join(' | ')}
          </p>

          <div className="gpc-bottom">
            <div className="gpc-price">
              <del>{formatINR(pkg.oldPrice)}</del>
              <strong>{formatINR(pkg.price)}</strong>
              <span>per person</span>
            </div>

            <div className="gpc-actions">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="gpc-wa"
                aria-label={`Get Photos and Videos for ${pkg.title}`}
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Get Photos & Videos</span>
              </a>

              <Link href={href} className="gpc-btn">
                <span>Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default GoaPackageCard;