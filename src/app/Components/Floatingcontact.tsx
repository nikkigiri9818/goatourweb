"use client"
import React from "react";

const PHONE = "917678464517"; // country code 91 ke saath, bina + ya space ke
const WHATSAPP_TEXT = "Hello, I want to know about your Goa tour packages.";

const callLink = `tel:+${PHONE}`;
const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const FloatingContact = () => {
  return (
    <>
      <div className="float-contact">
        <a href={callLink} className="float-btn call" aria-label="Call us">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
          </svg>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn wa"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      <style>{`
        .float-contact {
          position: fixed;
          right: 20px;
          bottom: 50px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .float-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25c561;
          display: grid;
          place-items: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .float-btn:hover { transform: scale(1.08); background: #1fae54; }
        .float-btn:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
        .float-btn svg { width: 30px; height: 30px; fill: #fff; }
        .float-btn.wa svg { width: 32px; height: 32px; }

        /* halki pulse ring, dhyaan kheenchne ke liye */
        .float-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #25c561;
          animation: floatPulse 2s ease-out infinite;
        }
        .float-btn.wa::after { animation-delay: 1s; }
        @keyframes floatPulse {
          from { transform: scale(1); opacity: 0.7; }
          to   { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 575px) {
          .float-contact { right: 14px; bottom: 18px; gap: 12px; }
          .float-btn { width: 52px; height: 52px; }
          .float-btn svg { width: 26px; height: 26px; }
          .float-btn.wa svg { width: 28px; height: 28px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .float-btn::after { animation: none; display: none; }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;