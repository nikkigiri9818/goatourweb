'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { formatINR, whatsappLink } from '../Components/Goapakagesdata';
import { goaAdventures, ADVENTURE_BASE_PATH } from '../Components/Goaadventuresdata';
import { goaAdventureInfo, HOW_TO_BOOK } from '../Components/Goaadventureinfo';

const GoaAdventureDetails = ({ item }) => {
  const [f, setF] = useState({ name: '', phone: '', persons: '2', email: '', date: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Hello, I want to book ${item.title}.\n` +
      `Name: ${f.name}\nPhone: ${f.phone}\nPersons: ${f.persons}\n` +
      (f.email ? `Email: ${f.email}\n` : '') +
      `Date: ${f.date}\n` +
      (f.message ? `Message: ${f.message}\n` : '') +
      `Please share the best price and available slots.`;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  const goToForm = () => document.getElementById('gad-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const info = goaAdventureInfo[item.slug] || {};
  const others = goaAdventures.filter((a) => a.slug !== item.slug).slice(0, 3);

  return (
    <>
      <style>{`
        .gad { font-family: inherit; }
        .gad button, .gad input, .gad select, .gad textarea { font-family: inherit; }
        .gad-strip { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px; margin-bottom: 36px; padding: 18px 24px; border-radius: 20px; background: rgba(28,168,203,.08); }
        .gad-badge { padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; color: #fff; background: var(--theme, #1ca8cb); }
        .gad-strip span { color: #55656c; font-size: 15px; }
        .gad-strip b { color: #1b1b1b; font-size: 20px; }
        .gad-hero { width: 100%; height: 420px; object-fit: cover; border-radius: 24px; display: block; margin-bottom: 28px; background: #e8f4f8; }
        .gad h2 { font-size: 28px; margin: 0 0 14px; }
        .gad h3 { font-size: 22px; margin: 32px 0 14px; }
        .gad p { color: #55656c; line-height: 1.75; }
        .gad-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
        .gad-list li { padding: 12px 16px; border-radius: 14px; background: #f4f9fb; color: #1b1b1b; font-weight: 600; }
        .gad-list i { margin-right: 10px; color: var(--theme, #1ca8cb); }
        .gad-price { width: 100%; border-collapse: collapse; }
        .gad-price td { padding: 14px 16px; border-bottom: 1px dashed #dfe7ea; color: #55656c; }
        .gad-price td:last-child { text-align: right; font-weight: 700; color: #1b1b1b; }
        .gad-form { padding: 28px; border-radius: 24px; background: #fff; box-shadow: 0 8px 30px rgba(20,40,60,.1); position: sticky; top: 100px; }
        .gad-form h3 { margin: 0 0 18px; }
        .gad-form label { display: block; margin-bottom: 6px; font-size: 14px; font-weight: 600; color: #1b1b1b; }
        .gad-form input, .gad-form select, .gad-form textarea { width: 100%; margin-bottom: 14px; padding: 12px 14px; border: 1px solid #dfe7ea; border-radius: 12px; font-size: 15px; }
        .gad-form input:focus, .gad-form select:focus, .gad-form textarea:focus { outline: 2px solid var(--theme, #1ca8cb); border-color: transparent; }
        .gad-form input[readonly] { background: #f4f9fb; }
        .gad-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .gad-submit { width: 100%; height: 52px; border: 0; border-radius: 100px; font-size: 16px; font-weight: 700; color: #fff; background: #25d366; cursor: pointer; }
        .gad-submit:hover { filter: brightness(.93); }
        .gad-more { display: grid; gap: 12px; }
        .gad-more a { display: flex; justify-content: space-between; padding: 14px 18px; border-radius: 14px; background: #f4f9fb; color: #1b1b1b; font-weight: 600; }
        .gad-more a:hover { color: var(--theme, #1ca8cb); }
        .gad-facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .gad-facts div { padding: 14px 16px; border-radius: 14px; border: 1px solid #dfe7ea; }
        .gad-facts small { display: block; margin-bottom: 4px; color: #6b7a82; font-size: 13px; }
        .gad-facts b { color: #1b1b1b; }
        .gad-two { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .gad-steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; counter-reset: s; }
        .gad-steps li { position: relative; padding: 4px 0 4px 52px; counter-increment: s; }
        .gad-steps li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #fff; font-weight: 700; background: var(--theme, #1ca8cb); }
        .gad-steps b { display: block; color: #1b1b1b; }
        .gad-steps span { color: #55656c; }
        .gad-warn i { color: #e0a100; }
        .gad-help { margin-top: 32px; padding: 22px 24px; border-radius: 20px; background: rgba(37,211,102,.1); }
        .gad-help p { margin: 0 0 14px; color: #1b1b1b; font-weight: 600; }
        .gad-help a { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 100px; color: #fff; font-weight: 700; background: #25d366; }
        .gad-bar { display: none; }
        @media (max-width: 575px) { .gad-facts, .gad-two { grid-template-columns: 1fr; } }
        @media (max-width: 991px) {
          .gad-form { position: static; margin-top: 32px; }
          .gad-hero { height: 280px; }
          .gad-bar { display: block; position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; padding: 10px 16px; background: #fff; box-shadow: 0 -6px 20px rgba(0,0,0,.1); }
          .gad-bar button { width: 100%; height: 48px; border: 0; border-radius: 100px; font-weight: 700; color: #fff; background: var(--theme, #1ca8cb); }
          .gad { padding-bottom: 70px; }
        }
      `}</style>

      <section className="section-padding fix gad">
        <div className="container">
          <div className="gad-strip">
            <span className="gad-badge">{item.tag}</span>
            {item.duration && <span><i className="fa-regular fa-clock"></i> {item.duration}</span>}
            <span>
              {item.price ? <><b>{formatINR(item.price)}</b> per person</> : <b>Best price on WhatsApp</b>}
            </span>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <img className="gad-hero" src={item.image} alt={item.title} decoding="async" />

              <h2>{item.title}</h2>
              <p>{info.overview || item.short}</p>

              {info.facts && (
                <>
                  <h3>Quick facts</h3>
                  <div className="gad-facts">
                    {info.facts.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}
                  </div>
                </>
              )}

              <h3>What you get</h3>
              <ul className="gad-list">
                {item.highlights.map((h) => (
                  <li key={h}><i className="fa-solid fa-circle-check"></i>{h}</li>
                ))}
              </ul>

              <h3>Price</h3>
              <table className="gad-price">
                <tbody>
                  <tr>
                    <td>Price per person</td>
                    <td>{item.price ? formatINR(item.price) : 'Ask on WhatsApp'}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>{item.duration || 'Shared on enquiry'}</td>
                  </tr>
                  <tr>
                    <td>Booking</td>
                    <td>Pre-book your slot</td>
                  </tr>
                </tbody>
              </table>

              {info.included && (
                <div className="gad-two">
                  <div>
                    <h3>Included</h3>
                    <ul className="gad-list">
                      {info.included.map((x) => <li key={x}><i className="fa-solid fa-check"></i>{x}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3>What to carry</h3>
                    <ul className="gad-list">
                      {(info.carry || []).map((x) => <li key={x}><i className="fa-solid fa-suitcase"></i>{x}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {info.rules && (
                <>
                  <h3>Good to know</h3>
                  <ul className="gad-list gad-warn">
                    {info.rules.map((x) => <li key={x}><i className="fa-solid fa-circle-info"></i>{x}</li>)}
                  </ul>
                </>
              )}

              <h3>How to book</h3>
              <ol className="gad-steps">
                {HOW_TO_BOOK.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
              </ol>

              <div className="gad-help">
                <p>Not sure which activity or slot suits you? Ask us before you book.</p>
                <a href={whatsappLink(`Hello, I have a question about ${item.title}.`)} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>

              <h3>More adventures</h3>
              <div className="gad-more">
                {others.map((o) => (
                  <Link key={o.slug} href={`${ADVENTURE_BASE_PATH}/${o.slug}`}>
                    {o.title}<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <form className="gad-form" id="gad-form" onSubmit={submit}>
                <h3>Send Your Enquiry</h3>
                <label htmlFor="gad-act">Activity</label>
                <input id="gad-act" value={item.title} readOnly />
                <label htmlFor="gad-name">Full Name</label>
                <input id="gad-name" required value={f.name} onChange={set('name')} />
                <label htmlFor="gad-phone">Phone</label>
                <input id="gad-phone" type="tel" required value={f.phone} onChange={set('phone')} />
                <div className="gad-row">
                  <div>
                    <label htmlFor="gad-p">Persons</label>
                    <input id="gad-p" type="number" min="1" required value={f.persons} onChange={set('persons')} />
                  </div>
                  <div>
                    <label htmlFor="gad-d">Date</label>
                    <input id="gad-d" type="date" required value={f.date} onChange={set('date')} />
                  </div>
                </div>
                <label htmlFor="gad-e">Email (optional)</label>
                <input id="gad-e" type="email" value={f.email} onChange={set('email')} />
                <label htmlFor="gad-m">Message (optional)</label>
<textarea
  id="gad-m"
  rows={3}
  value={f.message}
  onChange={set('message')}
/>                
                <button type="submit" className="gad-submit">
                  <i className="fa-brands fa-whatsapp"></i> Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="gad-bar">
          <button type="button" onClick={goToForm}>Enquire Now</button>
        </div>
      </section>
    </>
  );
};

export default GoaAdventureDetails;