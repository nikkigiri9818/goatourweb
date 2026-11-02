import Link from 'next/link';
import React from 'react';

// Props:
//  img, title, content : pehle jaise
//  href (optional)     : card kahan khulega (default purana Turmet page)
//  tag  (optional)     : chhota label, jaise "Beach", "Adventure", "Heritage"
const DestinationCard = ({
  img,
  title,
  content,
  href = '/destination/destination-details',
  tag,
}) => {
  return (
    <>
      <style>{`
        .new-top-desti-thumb { overflow: hidden; }

        /* photo par hover karne se halka zoom */
        .new-top-desti-thumb img {
          transition: transform .8s ease;
        }
        .new-top-desti-thumb:hover img {
          transform: scale(1.08);
        }

        /* + icon hover par ghoomta hai */
        .new-top-desti-thumb .icon i {
          display: inline-block;
          transition: transform .4s ease;
        }
        .new-top-desti-thumb:hover .icon i {
          transform: rotate(90deg);
        }

        /* upar-baayein kone ka label */
        .goa-desti-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 3;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: .3px;
          color: #fff;
          background: var(--theme, #1ca8cb);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .new-top-desti-thumb img,
          .new-top-desti-thumb .icon i { transition: none; }
        }
      `}</style>

      <div className="new-top-desti-thumb">
        <img src={img} alt={title} loading="lazy" decoding="async" />
        {tag && <span className="goa-desti-tag">{tag}</span>}
        <Link
          href={href}
          className="icon img-popup2"
          aria-label={`Explore ${title}`}
        >
          <i className="bi bi-plus-lg"></i>
        </Link>
        <div className="content">
          <h4><Link href={href}>{title}</Link></h4>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;