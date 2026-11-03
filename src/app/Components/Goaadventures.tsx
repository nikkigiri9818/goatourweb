import React from 'react';
import Link from 'next/link';
import GoaAdventureCard from '../Components/Goaadventurecard';
import { goaAdventures } from '../Components/Goaadventuresdata';
import { whatsappLink, BASE_PATH } from '../Components/Goapakagesdata';

const GoaAdventures = () => {
  return (
    <>
      <style>{`
        .gal-cta {
          margin-top: 56px;
          padding: 36px 32px;
          border-radius: 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(28,168,203,.12), rgba(28,168,203,.04));
        }
        .gal-cta h3 { margin: 0 0 8px; font-size: 26px; }
        .gal-cta p { margin: 0 auto 22px; max-width: 620px; color: #55656c; }
        .gal-cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
      `}</style>

      <section className="section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Goa Adventure</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Thrilling Things To Do In Goa</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              From scuba diving and water sports to a waterfall safari and a dinner cruise, add some
              thrill to your Goa trip. Pre-book your slot to get better rates and skip the queues.
            </p>
          </div>

          <div className="row g-4">
            {goaAdventures.map((item, i) => (
              <div className="col-xl-4 col-md-6" key={item.slug} style={{marginBottom:"25px"}}>
                <GoaAdventureCard item={item} index={i} />
              </div>
            ))}
          </div>

          <div className="gal-cta">
            <h3>Want adventure included in your Goa trip?</h3>
            <p>Add scuba, water sports or a cruise to any Goa tour package, or ask us to plan a full trip around the activities you like.</p>
            <div className="gal-cta-actions">
              <a
                href={whatsappLink('Hello, I want to add adventure activities to my Goa trip. Please help me with the details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn"
              >
                Plan On WhatsApp<i className="bi bi-arrow-right"></i>
              </a>
              <Link href={BASE_PATH} className="theme-btn">
                View Goa Packages<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoaAdventures;