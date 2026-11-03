import React from 'react';
import Link from 'next/link';
import { BASE_PATH, formatINR, whatsappLink } from '../Components/Goapakagesdata';

// Card par kahin bhi click karo to details page khulta hai (title ka link poore card par phailta hai).
// WhatsApp button alag se kaam karta hai.
const GoaPackageCard = ({ pkg, index = 0 }) => {
  const href = `${BASE_PATH}/${pkg.slug}`;
  const save = pkg.oldPrice - pkg.price;
  const wa = whatsappLink(`Hello, I want details for the ${pkg.title}. Please share the itinerary and best price.`);

  return (
    <>
      <style>{`
        .gpc {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 8px 30px rgba(20, 40, 60, 0.08);
          transition: transform .4s ease, box-shadow .4s ease;
          animation: gpcUp .7s ease both;
        }
        .gpc::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 4px;
          background: var(--theme, #1ca8cb);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .5s ease;
        }
        .gpc:hover {
          transform: translateY(-8px);
          box-shadow: 0 26px 55px rgba(28, 168, 203, 0.22);
        }
        .gpc:hover::after { transform: scaleX(1); }

        .gpc-media { position: relative; height: 240px; overflow: hidden; background: #e8f4f8; }
        .gpc-media img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .9s ease;
        }
        .gpc:hover .gpc-media img { transform: scale(1.1); }
        .gpc-media::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0) 55%);
          pointer-events: none;
        }

        .gpc-badge, .gpc-rating, .gpc-duration {
          position: absolute;
          z-index: 2;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
        }
        .gpc-badge {
          top: 16px; left: 16px;
          padding: 8px 16px;
          border-radius: 100px;
          color: #fff;
          background: var(--theme, #1ca8cb);
          box-shadow: 0 6px 16px rgba(0,0,0,.2);
        }
        .gpc-rating {
          top: 16px; right: 16px;
          padding: 8px 12px;
          border-radius: 100px;
          color: #1b1b1b;
          background: rgba(255,255,255,.95);
        }
        .gpc-rating i { color: #ffb400; margin-right: 4px; }
        .gpc-rating small { font-size: 12px; font-weight: 500; color: #666; }
        .gpc-duration {
          left: 16px; bottom: 16px;
          color: #fff;
          font-size: 15px;
        }
        .gpc-duration i { margin-right: 6px; }

        .gpc-body { display: flex; flex-direction: column; flex: 1; padding: 24px; }
        .gpc-title { margin: 0 0 14px; font-size: 22px; line-height: 1.3; }
        .gpc-title a { color: #1b1b1b; transition: color .3s; }
        .gpc-title a::after { content: ""; position: absolute; inset: 0; z-index: 1; }
        .gpc:hover .gpc-title a { color: var(--theme, #1ca8cb); }

        .gpc-list { list-style: none; margin: 0 0 12px; padding: 0; display: grid; gap: 9px; }
        .gpc-list li { display: flex; gap: 10px; font-size: 15px; color: #444; line-height: 1.4; }
        .gpc-list i { margin-top: 3px; color: var(--theme, #1ca8cb); }
        .gpc-note { margin: 0 0 18px; font-size: 13px; color: #6b7a82; }
        .gpc-note i { margin-right: 6px; color: var(--theme, #1ca8cb); }

        .gpc-bottom {
          margin-top: auto;
           padding-top: 4px;
          border-top: 1px dashed #dfe7ea;
        }
        .gpc-price { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 10px; margin-bottom: 16px; }
        .gpc-price del { font-size: 15px; color: #98a4aa; }
        .gpc-price strong { font-size: 30px; line-height: 1; color: #1b1b1b; }
        .gpc-price span { font-size: 14px; color: #6b7a82; }
        .gpc-save {
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          color: #12805c;
          background: #e3f6ee;
        }

        .gpc-actions { display: flex; gap: 12px; }
        .gpc-btn {
          position: relative; z-index: 2;
          flex: 1;
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          height: 52px;
          border-radius: 100px;
          font-size: 16px; font-weight: 700;
          color: #fff;
          background: var(--theme, #1ca8cb);
          transition: filter .3s, box-shadow .3s;
        }
        .gpc-btn:hover { color: #fff; filter: brightness(.93); box-shadow: 0 10px 22px rgba(28,168,203,.35); }
        .gpc-btn i { transition: transform .3s; }
        .gpc:hover .gpc-btn i, .gpc-btn:hover i { transform: translateX(6px); }
        .gpc-wa {
          position: relative; z-index: 2;
          flex-shrink: 0;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          font-size: 24px;
          color: #fff;
          background: #25d366;
          transition: transform .3s, box-shadow .3s;
        }
        .gpc-wa:hover { color: #fff; transform: scale(1.1) rotate(-6deg); box-shadow: 0 10px 22px rgba(37,211,102,.4); }

        @keyframes gpcUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gpc, .gpc-media img, .gpc-btn i { animation: none; transition: none; }
        }
      `}</style>

      <article className="gpc" style={{ animationDelay: `${index * 0.12}s` }}>
        <div className="gpc-media">
          <img src={pkg.image} alt={pkg.title} loading="lazy" decoding="async" />
          <span className="gpc-badge">{pkg.badge}</span>
          <span className="gpc-rating">
            <i className="fa-solid fa-star"></i>{pkg.rating} <small>({pkg.reviews})</small>
          </span>
          <span className="gpc-duration">
            <i className="fa-regular fa-clock"></i>{pkg.days} Days / {pkg.nights} Nights
          </span>
        </div>

        <div className="gpc-body">
          <h3 className="gpc-title"><Link href={href}>{pkg.title}</Link></h3>

          <ul className="gpc-list">
            {pkg.highlights.map((h) => (
              <li key={h}><i className="fa-solid fa-circle-check"></i><span>{h}</span></li>
            ))}
          </ul>
          <p className="gpc-note"><i className="fa-solid fa-car-side"></i>Airport / station pickup & drop included</p>

          <div className="gpc-bottom">
            <div className="gpc-price">
              <del>{formatINR(pkg.oldPrice)}</del>
              <strong>{formatINR(pkg.price)}</strong>
              <span>per person</span>
              <em className="gpc-save">Save {formatINR(save)}</em>
            </div>
            <div className="gpc-actions">
              <Link href={href} className="gpc-btn">
                View Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
              {/* <a href={wa} target="_blank" rel="noopener noreferrer" className="gpc-wa" aria-label={`Ask about ${pkg.title} on WhatsApp`}>
                <i className="fa-brands fa-whatsapp"></i>
              </a> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default GoaPackageCard;