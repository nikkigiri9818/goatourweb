"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

// ---- Yahan sirf ye values badalni hain. Khali ('') chhodne par wo hissa footer mein dikhega hi nahi. ----
const BRAND = 'Goa Holiday Tours';
const WHATSAPP_NUMBER = '918287682602';
const CONTACT = {
    address: '',   // client ke footer wala address yahan likhein
    email: '',     // client ka email yahan likhein
    phones: [{ label: '+91 82876 82602', tel: '+918287682602' }],
};
const SOCIAL = {
    facebook: '',  // Facebook page ka poora link
    instagram: '', // Instagram page ka poora link
};
// -----------------------------------------------------------------------------------------------------

const Footer1 = () => {
    const [phone, setPhone] = useState('');

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const handleQuote = (e) => {
        e.preventDefault();
        const text = `Hello, I want a Goa trip quote. Please contact me on ${phone}.`;
        window.open(
            `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`,
            '_blank'
        );
    };

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <Link href="/">
                                        {/* width auto + height auto: logo apni asli ratio mein dikhega, kheench ya dab nahi sakta */}
                                        <img
                                            src="/assets/img/logo/goaholidaytours-logo-transparent.png"
                                            alt={`${BRAND} logo`}
                                            style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '220px', height: 'auto' }}
                                        />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <h3>Plan Your Goa Trip</h3>
                                    <p>Share your number and we will message you the best package.</p>
                                    <form className="footer-input" onSubmit={handleQuote}>
                                        <input
                                            type="tel"
                                            id="email2"
                                            placeholder="Your phone number"
                                            pattern="[0-9]{10}"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        <button className="newsletter-btn theme-btn" type="submit">
                                            Get Quote <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </form>
                                    {(SOCIAL.facebook || SOCIAL.instagram) && (
                                        <div className="social-icon d-flex align-items-center justify-content-center">
                                            {SOCIAL.facebook && (
                                                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            )}
                                            {SOCIAL.instagram && (
                                                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                    <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/goa-tour-package">Goa Tour Packages</Link></li>
                                    <li><Link href="/goa-adventure">Goa Adventure</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                    <h4>Popular Packages</h4>
                                </div>
                                <ul className="list-items">
                                    <li><Link href="/goa-tour-package/3-day-goa-tour-package">3 Days Goa Trip Package</Link></li>
                                    <li><Link href="/goa-tour-package/4-days-adventure-goa-tour-package">4 Days Goa Tour Package</Link></li>
                                    <li><Link href="/goa-tour-package/5-days-summer-gateway-goa-tour-package">5 Days Goa Tour Package</Link></li>
                                    <li><Link href="/goa-tour-package/honeymoon-goa-tour-package">Goa Honeymoon Package</Link></li>
                                    <li><Link href="/goa-tour-package/premium-5-days-goa-tour-package">Premium 5 Days Package</Link></li>
                                </ul>
                            </div>
                        </div>





                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    {CONTACT.address && (
                                        <div className="contact-items">
                                            <div className="icon">
                                                <i className="bi bi-geo-alt-fill"></i>
                                            </div>
                                            <div className="content">
                                                <h6>{CONTACT.address}</h6>
                                            </div>
                                        </div>
                                    )}
                                    {CONTACT.email && (
                                        <div className="contact-items">
                                            <div className="icon">
                                                <i className="bi bi-envelope-fill"></i>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                                                </h6>
                                            </div>
                                        </div>
                                    )}
                                    {CONTACT.phones.length > 0 && (
                                        <div className="contact-items">
                                            <div className="icon">
                                                <i className="bi bi-telephone-fill"></i>
                                            </div>
                                            <div className="content">
                                                <h6>
                                                    {CONTACT.phones.map((p, i) => (
                                                        <React.Fragment key={p.tel}>
                                                            {i > 0 && <br />}
                                                            <a href={`tel:${p.tel}`}>{p.label}</a>
                                                        </React.Fragment>
                                                    ))}
                                                </h6>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright © <span>{BRAND},</span> All Rights Reserved.
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>Terms &amp; Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;