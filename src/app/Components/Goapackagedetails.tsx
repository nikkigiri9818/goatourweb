"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GoaPackageCard from '../Components/Goapackagecard';
import {
  BASE_PATH, PHONE_TEL, PHONE_DISPLAY, formatINR, whatsappLink,
  goaPackages, exclusions,
} from '../Components/Goapakagesdata';

// Breadcrumb banner is component ke bahar (page.tsx mein) lagta hai.
// Yahan breadcrumb ke neeche ka poora page hai: details strip, content, enquiry form, related packages.
const GoaPackageDetails = ({ pkg }) => {
  const [openDay, setOpenDay] = useState(0);
  const [today, setToday] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', persons: '2', message: '' });

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
  }, []);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const save = pkg.oldPrice - pkg.price;
  const related = goaPackages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  // Form submit hone par WhatsApp khulta hai, sab details bhari hui.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hello, I want to enquire about the ${pkg.title}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Trip Date: ${form.date}`,
      `Persons: ${form.persons}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean).join('\n');
    window.open(whatsappLink(text), '_blank');
  };

  const facts = [
    { icon: 'fa-regular fa-clock', label: 'Duration', value: `${pkg.days} Days / ${pkg.nights} Nights` },
    { icon: 'fa-solid fa-hotel', label: 'Stay', value: 'Beach resort with pool' },
    { icon: 'fa-solid fa-utensils', label: 'Meals', value: 'Daily breakfast' },
    { icon: 'fa-solid fa-car-side', label: 'Transfers', value: 'Pickup & drop' },
  ];

  return (
    <div className="gpd-root">
      <style>{`
        /* poore page ka font hi use hoga, buttons aur form fields mein bhi */
        .gpd-root button,
        .gpd-root input,
        .gpd-root select,
        .gpd-root textarea { font-family: inherit; }

        /* breadcrumb ke neeche details strip */
        .gpd-strip { padding: 26px 0; background: #fff; border-bottom: 1px solid #e8f0f2; }
        .gpd-strip .container { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px 30px; }
        .gpd-strip-left { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 26px; }
        .gpd-badge {
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px; font-weight: 700;
          color: #fff;
          background: var(--theme, #1ca8cb);
        }
        .gpd-chip { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; color: #1b1b1b; }
        .gpd-chip i { color: var(--theme, #1ca8cb); }
        .gpd-chip i.fa-star { color: #ffb400; }
        .gpd-strip-price { display: flex; align-items: baseline; gap: 10px; }
        .gpd-strip-price del { color: #98a4aa; }
        .gpd-strip-price strong { font-size: 30px; line-height: 1; color: #1b1b1b; }
        .gpd-strip-price span { color: #6b7a82; font-size: 14px; }
        .gpd-strip-price em { padding: 5px 12px; border-radius: 100px; font-size: 12px; font-weight: 700; font-style: normal; color: #12805c; background: #e3f6ee; }

        .gpd-main { padding: 60px 0 40px; }
        .gpd-block { margin-bottom: 44px; }
        .gpd-block h2 { margin: 0 0 20px; font-size: 30px; }
        .gpd-block p { margin: 0; line-height: 1.8; color: #4a5b63; }

        .gpd-facts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 44px; }
        .gpd-fact {
          padding: 20px 16px;
          border-radius: 18px;
          text-align: center;
          background: rgba(28,168,203,.08);
          transition: transform .3s, box-shadow .3s;
        }
        .gpd-fact:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(28,168,203,.18); }
        .gpd-fact i { display: block; margin-bottom: 10px; font-size: 24px; color: var(--theme, #1ca8cb); }
        .gpd-fact small { display: block; font-size: 13px; color: #6b7a82; }
        .gpd-fact strong { display: block; margin-top: 2px; font-size: 15px; color: #1b1b1b; }

        .gpd-prices { margin: 0; padding: 0; list-style: none; border: 1.5px solid #e3edf0; border-radius: 18px; overflow: hidden; }
        .gpd-prices li { display: flex; justify-content: space-between; gap: 12px; padding: 16px 22px; font-size: 16px; color: #4a5b63; }
        .gpd-prices li + li { border-top: 1px dashed #dfe7ea; }
        .gpd-prices li b { color: #1b1b1b; }
        .gpd-prices li:first-child { background: rgba(28,168,203,.07); }

        .gpd-inc { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin: 0; padding: 0; list-style: none; }
        .gpd-inc li { display: flex; gap: 12px; line-height: 1.5; color: #333; }
        .gpd-inc i { margin-top: 4px; color: var(--theme, #1ca8cb); }
        .gpd-exc li i { color: #e0524d; }

        .gpd-day { margin-bottom: 14px; border: 1.5px solid #e3edf0; border-radius: 18px; overflow: hidden; transition: border-color .3s, box-shadow .3s; }
        .gpd-day.open { border-color: var(--theme, #1ca8cb); box-shadow: 0 12px 28px rgba(28,168,203,.14); }
        .gpd-day-head {
          width: 100%;
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px;
          border: 0; background: #fff;
          text-align: left; cursor: pointer;
          font-size: 18px; font-weight: 700; color: #1b1b1b;
        }
        .gpd-day-no {
          flex-shrink: 0;
          min-width: 64px;
          padding: 8px 12px;
          border-radius: 100px;
          font-size: 13px; font-weight: 700; text-align: center;
          color: #fff;
          background: var(--theme, #1ca8cb);
        }
        .gpd-chev { margin-left: auto; transition: transform .3s; }
        .gpd-day.open .gpd-chev { transform: rotate(180deg); }
        .gpd-day-body { display: none; padding: 0 22px 22px 102px; }
        .gpd-day.open .gpd-day-body { display: block; animation: gpdFade .4s ease; }
        .gpd-day-body ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
        .gpd-day-body li { position: relative; padding-left: 20px; color: #4a5b63; line-height: 1.6; }
        .gpd-day-body li::before { content: ""; position: absolute; left: 0; top: 10px; width: 8px; height: 8px; border-radius: 50%; background: var(--theme, #1ca8cb); }
        .gpd-note { margin-top: 14px; font-size: 13px; color: #8a979d; }

        /* enquiry form */
        .gpd-side {
          position: sticky; top: 110px;
          max-height: calc(100vh - 130px);
          overflow-y: auto;
          padding: 28px;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(20,40,60,.14);
          border-top: 5px solid var(--theme, #1ca8cb);
        }
        .gpd-side h3 { margin: 0 0 6px; font-size: 26px; }
        .gpd-side > p { margin: 0 0 20px; font-size: 14px; color: #6b7a82; }
        .gpd-field { margin-bottom: 14px; }
        .gpd-field label { display: block; margin-bottom: 6px; font-size: 14px; font-weight: 600; color: #1b1b1b; }
        .gpd-field input,
        .gpd-field select,
        .gpd-field textarea {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #e1ebee;
          border-radius: 14px;
          outline: 0;
          font-size: 15px;
          color: #1b1b1b;
          background: #f7fafb;
          transition: border-color .3s, box-shadow .3s, background .3s;
        }
        .gpd-field input[readonly] { color: var(--theme, #1ca8cb); font-weight: 600; background: rgba(28,168,203,.08); }
        .gpd-field textarea { resize: vertical; min-height: 84px; }
        .gpd-field input:focus,
        .gpd-field select:focus,
        .gpd-field textarea:focus {
          border-color: var(--theme, #1ca8cb);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(28,168,203,.14);
        }
        .gpd-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .gpd-submit {
          width: 100%;
          height: 54px;
          margin-top: 6px;
          border: 0;
          border-radius: 100px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-size: 16px; font-weight: 700;
          color: #fff;
          background: var(--theme, #1ca8cb);
          cursor: pointer;
          transition: transform .3s, box-shadow .3s, filter .3s;
        }
        .gpd-submit:hover { transform: translateY(-3px); filter: brightness(.95); box-shadow: 0 12px 24px rgba(28,168,203,.38); }
        .gpd-submit i { transition: transform .3s; }
        .gpd-submit:hover i { transform: translateX(5px); }
        .gpd-or { margin: 16px 0 0; padding-top: 16px; border-top: 1px dashed #dfe7ea; display: grid; gap: 10px; font-size: 14px; color: #55656c; }
        .gpd-or a { display: flex; align-items: center; gap: 10px; font-weight: 600; color: #1b1b1b; }
        .gpd-or a i { width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; color: #fff; background: var(--theme, #1ca8cb); }
        .gpd-or a.wa i { background: #25d366; }

        .gpd-related { padding: 60px 0 90px; background: #f6fafb; }
        .gpd-related h2 { margin: 0 0 30px; text-align: center; font-size: 32px; }

        .gpd-bar { display: none; }

        @keyframes gpdFade { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 991px) {
          .gpd-side { position: static; max-height: none; overflow: visible; margin-top: 10px; }
          .gpd-facts { grid-template-columns: repeat(2, 1fr); }
          .gpd-main { padding-bottom: 90px; }
          .gpd-bar {
            position: fixed; left: 0; right: 0; bottom: 0; z-index: 99;
            display: flex; align-items: center; justify-content: space-between; gap: 14px;
            padding: 12px 16px;
            background: #fff;
            box-shadow: 0 -8px 24px rgba(0,0,0,.12);
          }
          .gpd-bar small { display: block; font-size: 12px; color: #6b7a82; }
          .gpd-bar strong { font-size: 20px; }
          .gpd-bar a { padding: 12px 22px; border-radius: 100px; font-weight: 700; color: #fff; background: var(--theme, #1ca8cb); }
        }
        @media (max-width: 575px) {
          .gpd-inc { grid-template-columns: 1fr; }
          .gpd-day-body { padding-left: 22px; }
          .gpd-two { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gpd-day.open .gpd-day-body { animation: none; }
        }
      `}</style>

      {/* DETAILS STRIP (breadcrumb ke neeche) */}
      <section className="gpd-strip">
        <div className="container">
          <div className="gpd-strip-left">
            <span className="gpd-badge">{pkg.badge}</span>
            <span className="gpd-chip"><i className="fa-regular fa-clock"></i>{pkg.days} Days / {pkg.nights} Nights</span>
            <span className="gpd-chip"><i className="fa-solid fa-star"></i>{pkg.rating} ({pkg.reviews} reviews)</span>
            <span className="gpd-chip"><i className="fa-solid fa-car-side"></i>Pickup & drop included</span>
          </div>
          <div className="gpd-strip-price">
            <del>{formatINR(pkg.oldPrice)}</del>
            <strong>{formatINR(pkg.price)}</strong>
            <span>per person</span>
            <em>Save {formatINR(save)}</em>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="gpd-main">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">

              <div className="gpd-facts">
                {facts.map((f) => (
                  <div className="gpd-fact" key={f.label}>
                    <i className={f.icon}></i>
                    <small>{f.label}</small>
                    <strong>{f.value}</strong>
                  </div>
                ))}
              </div>

              <div className="gpd-block">
                <h2>Package Overview</h2>
                <p>{pkg.overview}</p>
              </div>

              <div className="gpd-block">
                <h2>Package Price</h2>
                <ul className="gpd-prices">
                  <li><span>Per person, with pickup & drop</span><b>{formatINR(pkg.price)}</b></li>
                  <li><span>Per person, without pickup / drop</span><b>{formatINR(pkg.priceNoTransfer)}</b></li>
                  {pkg.groupPrice && <li><span>Per person, group of 4 or more (all inclusive)</span><b>{formatINR(pkg.groupPrice)}</b></li>}
                </ul>
              </div>

              <div className="gpd-block">
                <h2>What&apos;s Included</h2>
                <ul className="gpd-inc">
                  {pkg.inclusions.map((item) => (
                    <li key={item}><i className="fa-solid fa-circle-check"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="gpd-block">
                <h2>Not Included</h2>
                <ul className="gpd-inc gpd-exc">
                  {exclusions.map((item) => (
                    <li key={item}><i className="fa-solid fa-circle-xmark"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="gpd-block">
                <h2>Day-wise Itinerary</h2>
                {pkg.itinerary.map((d, i) => (
                  <div className={`gpd-day ${openDay === i ? 'open' : ''}`} key={d.title}>
                    <button type="button" className="gpd-day-head" onClick={() => setOpenDay(openDay === i ? -1 : i)}>
                      <span className="gpd-day-no">Day {i + 1}</span>
                      {d.title}
                      <i className="fa-solid fa-chevron-down gpd-chev"></i>
                    </button>
                    <div className="gpd-day-body">
                      <ul>{d.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                  </div>
                ))}
                <p className="gpd-note">The order of activities can be adjusted to your arrival time and weather. Send an enquiry for the final plan.</p>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="col-lg-4">
              <aside className="gpd-side" id="gpd-enquiry">
                <h3>Send Your Enquiry</h3>
                <p>Share your details and we will reply on WhatsApp with the best price for your dates.</p>

                <form onSubmit={handleSubmit}>
                  <div className="gpd-field">
                    <label htmlFor="gpd-package">Package</label>
                    <input id="gpd-package" type="text" value={pkg.title} readOnly />
                  </div>

                  <div className="gpd-field">
                    <label htmlFor="gpd-name">Full Name</label>
                    <input id="gpd-name" type="text" placeholder="Your name" value={form.name} onChange={set('name')} required />
                  </div>

                  <div className="gpd-two">
                    <div className="gpd-field">
                      <label htmlFor="gpd-phone">Phone</label>
                      <input id="gpd-phone" type="tel" placeholder="10 digit number" pattern="[0-9]{10}" value={form.phone} onChange={set('phone')} required />
                    </div>
                    <div className="gpd-field">
                      <label htmlFor="gpd-persons">Persons</label>
                      <select id="gpd-persons" value={form.persons} onChange={set('persons')}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                        <option value="10+">10+</option>
                      </select>
                    </div>
                  </div>

                  <div className="gpd-field">
                    <label htmlFor="gpd-email">Email (optional)</label>
                    <input id="gpd-email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
                  </div>

                  <div className="gpd-field">
                    <label htmlFor="gpd-date">Trip Date</label>
                    <input id="gpd-date" type="date" min={today} value={form.date} onChange={set('date')} required />
                  </div>

                  <div className="gpd-field">
                    <label htmlFor="gpd-message">Message (optional)</label>
                    <textarea id="gpd-message" placeholder="Hotel preference, activities, budget..." value={form.message} onChange={set('message')} />
                  </div>

                  <button type="submit" className="gpd-submit">
                    Send Enquiry <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>

                <div className="gpd-or">
                  <span>Prefer to talk? Reach us directly:</span>
                  <a href={`tel:${PHONE_TEL}`}><i className="fa-solid fa-phone"></i>{PHONE_DISPLAY}</a>
                  <a className="wa" href={whatsappLink(`Hello, I want details for the ${pkg.title}.`)} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>Chat on WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="gpd-related">
        <div className="container">
          <h2>You May Also Like</h2>
          <div className="row g-4">
            {related.map((p, i) => (
              <div className="col-lg-4 col-md-6" key={p.slug}>
                <GoaPackageCard pkg={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE BAR */}
      <div className="gpd-bar">
        <div><small>From</small><strong>{formatINR(pkg.price)}</strong> <small>per person</small></div>
        <a href="#gpd-enquiry">Enquire Now</a>
      </div>
    </div>
  );
};

export default GoaPackageDetails;