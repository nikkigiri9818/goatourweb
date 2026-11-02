"use client"
import React, { useState } from 'react';
import GoaPackageCard from '../Components/Goapackagecard';
import { goaPackages, whatsappLink } from '../Components/Goapakagesdata';

const FILTERS = [
  { key: 'all', label: 'All Packages' },
  { key: 'couple', label: 'Couple' },
  { key: 'family', label: 'Family' },
  { key: 'friends', label: 'Friends' },
  { key: 'honeymoon', label: 'Honeymoon' },
  { key: 'premium', label: 'Premium' },
];

const GoaPackages = () => {
  const [active, setActive] = useState('all');

  const visible =
    active === 'all' ? goaPackages : goaPackages.filter((p) => p.categories.includes(active));

  const countFor = (key) =>
    key === 'all' ? goaPackages.length : goaPackages.filter((p) => p.categories.includes(key)).length;

  return (
    <>
      <style>{`
        .gpl-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin: 0 0 48px;
          padding: 0;
          list-style: none;
        }
        .gpl-filters button {
          padding: 12px 24px;
          border: 1.5px solid #dbe8ec;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          color: #1b1b1b;
          background: #fff;
          cursor: pointer;
          transition: all .3s;
        }
        .gpl-filters button span { margin-left: 6px; font-size: 12px; opacity: .6; }
        .gpl-filters button:hover { border-color: var(--theme, #1ca8cb); color: var(--theme, #1ca8cb); transform: translateY(-2px); }
        .gpl-filters button.active {
          color: #fff;
          background: var(--theme, #1ca8cb);
          border-color: var(--theme, #1ca8cb);
          box-shadow: 0 10px 22px rgba(28, 168, 203, 0.3);
        }
        .gpl-filters button.active:hover { color: #fff; }

        .gpl-cta {
          margin-top: 56px;
          padding: 36px 32px;
          border-radius: 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(28,168,203,.12), rgba(28,168,203,.04));
        }
        .gpl-cta h3 { margin: 0 0 8px; font-size: 26px; }
        .gpl-cta p { margin: 0 0 22px; color: #55656c; }
      `}</style>

      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Goa Tour Packages</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Choose Your Perfect Goa Holiday</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Every package includes your beach stay, daily breakfast and airport or station transfers.
              Pick a plan, or message us to customise one around your dates and budget.
            </p>
          </div>

          <ul className="gpl-filters">
            {FILTERS.map((f) => (
              <li key={f.key}>
                <button
                  type="button"
                  className={active === f.key ? 'active' : ''}
                  onClick={() => setActive(f.key)}
                >
                  {f.label}<span>{countFor(f.key)}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="row g-4" key={active}>
            {visible.map((pkg, i) => (
              <div className="col-xl-4 col-md-6" key={pkg.slug}>
                <GoaPackageCard pkg={pkg} index={i} />
              </div>
            ))}
          </div>

          <div className="gpl-cta">
            <h3>Want a plan made around you?</h3>
            <p>Tell us your dates, group size and budget, and we will suggest the best Goa package.</p>
            <a
              href={whatsappLink('Hello, I want to customise a Goa tour package. Please help me with the details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn"
            >
              Customise On WhatsApp<i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoaPackages;