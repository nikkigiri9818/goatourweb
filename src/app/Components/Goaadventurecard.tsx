import React from 'react';
import Link from 'next/link';
import { formatINR, whatsappLink } from '../Components/Goapakagesdata';
import { ADVENTURE_BASE_PATH } from '../Components/Goaadventuresdata';

// Card par kahin bhi click karo to details page khulta hai. WhatsApp button alag se kaam karta hai.
const GoaAdventureCard = ({ item, index = 0 }) => {
  const href = `${ADVENTURE_BASE_PATH}/${item.slug}`;
  const wa = whatsappLink(`Hello, I want to book ${item.title}. Please share the best price and available slots.`);

  return (
    <>
      <style>{`
        .gac {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 8px 30px rgba(20, 40, 60, 0.08);
          transition: transform .4s ease, box-shadow .4s ease;
          animation: gacUp .7s ease both;
        }
        .gac::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 4px;
          background: var(--theme, #1ca8cb);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .5s ease;
        }
        .gac:hover { transform: translateY(-8px); box-shadow: 0 26px 55px rgba(28, 168, 203, 0.22); }
        .gac:hover::after { transform: scaleX(1); }

        .gac-media { position: relative; height: 250px; overflow: hidden; background: #e8f4f8; }
        .gac-media img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .9s ease; }
        .gac:hover .gac-media img { transform: scale(1.1); }
        .gac-media::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,0) 55%);
          pointer-events: none;
        }
        .gac-tag, .gac-time {
          position: absolute;
          z-index: 2;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
        }
        .gac-tag {
          top: 16px; left: 16px;
          padding: 8px 16px;
          border-radius: 100px;
          color: #fff;
          background: var(--theme, #1ca8cb);
          box-shadow: 0 6px 16px rgba(0,0,0,.2);
        }
        .gac-time { left: 16px; bottom: 16px; font-size: 15px; color: #fff; }
        .gac-time i { margin-right: 6px; }

        .gac-body { display: flex; flex-direction: column; flex: 1; padding: 24px; }
        .gac-title { margin: 0 0 10px; font-size: 22px; line-height: 1.3; }
        .gac-title a { color: #1b1b1b; transition: color .3s; }
        .gac-title a::after { content: ""; position: absolute; inset: 0; z-index: 1; }
        .gac:hover .gac-title a { color: var(--theme, #1ca8cb); }
        .gac-short { margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #55656c; }

        .gac-list { list-style: none; margin: 0 0 20px; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
        .gac-list li {
          padding: 7px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #1b1b1b;
          background: rgba(28, 168, 203, 0.1);
        }

        .gac-bottom { margin-top: auto; padding-top: 18px; border-top: 1px dashed #dfe7ea; }
        .gac-price { margin-bottom: 16px; color: #6b7a82; font-size: 14px; }
        .gac-price strong { font-size: 28px; line-height: 1; color: #1b1b1b; }
        .gac-price b { color: #1b1b1b; font-size: 17px; }

        .gac-actions { display: flex; gap: 12px; }
        .gac-btn {
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
        .gac-btn:hover { color: #fff; filter: brightness(.93); box-shadow: 0 10px 22px rgba(28,168,203,.35); }
        .gac-btn i { transition: transform .3s; }
        .gac:hover .gac-btn i, .gac-btn:hover i { transform: translateX(6px); }
        .gac-wa {
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
        .gac-wa:hover { color: #fff; transform: scale(1.1) rotate(-6deg); box-shadow: 0 10px 22px rgba(37,211,102,.4); }

        @keyframes gacUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .gac, .gac-media img, .gac-btn i { animation: none; transition: none; }
        }
      `}</style>

      <article className="gac" style={{ animationDelay: `${index * 0.12}s` }}>
        <div className="gac-media">
          <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
          <span className="gac-tag">{item.tag}</span>
          {item.duration && (
            <span className="gac-time"><i className="fa-regular fa-clock"></i>{item.duration}</span>
          )}
        </div>

        <div className="gac-body">
          <h3 className="gac-title"><Link href={href}>{item.title}</Link></h3>
          <p className="gac-short">{item.short}</p>

          <ul className="gac-list">
            {item.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <div className="gac-bottom">
            <div className="gac-price">
              {item.price ? (
                <>From <strong>{formatINR(item.price)}</strong> per person</>
              ) : (
                <><b>Best price on WhatsApp</b> · pre-book for offers</>
              )}
            </div>
            <div className="gac-actions">
              <Link href={href} className="gac-btn">
                View Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="gac-wa" aria-label={`Book ${item.title} on WhatsApp`}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default GoaAdventureCard;