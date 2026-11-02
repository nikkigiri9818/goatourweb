"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { blogPosts } from '../../Components/Blog/Blogdata'; // same data file as the blog page

// Latest 6 posts, newest first
// Latest 6 posts, newest first
const latest = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);
const Arrow = ({ flip }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const Blog3 = () => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);
    const [seen, setSeen] = useState(false);

    // Entrance plays once when the section scrolls into view
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setSeen(true); io.disconnect(); }
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 680, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section ref={sectionRef} className={`hb ${seen ? 'in' : ''}`} aria-labelledby="hb-title">
            <style>{`
                .hb{--ink:#0e1e24;--muted:#6b7882;--cyan:#1aa7ca;--cyan-d:#1389a8;
                    position:relative;overflow:hidden;background:#fff;padding:100px 0 90px}
                .hb::before{content:"";position:absolute;left:-10%;bottom:-15%;width:50%;height:60%;
                    background:radial-gradient(closest-side,rgba(246,213,218,.8),rgba(246,213,218,0));pointer-events:none}
                .hb-in{position:relative;max-width:1280px;margin:0 auto;padding:0 20px}
                .hb-head{text-align:center;max-width:720px;margin:0 auto 52px}
                .hb-eyebrow{display:block;color:var(--cyan);font-size:19px;font-style:italic;margin-bottom:10px}
                .hb-head h2{font-size:clamp(30px,4.4vw,52px);line-height:1.15;font-weight:800;margin:0 0 16px;color:var(--ink)}
                .hb-head p{color:var(--muted);font-size:17px;line-height:1.75;margin:0}
                .hb-eyebrow,.hb-head h2,.hb-head p,.hb-slider,.hb-cta{opacity:0;transform:translateY(34px);
                    transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
                .hb.in .hb-eyebrow,.hb.in .hb-head h2,.hb.in .hb-head p,.hb.in .hb-slider,.hb.in .hb-cta{opacity:1;transform:none}
                .hb.in .hb-head h2{transition-delay:.15s}
                .hb.in .hb-head p{transition-delay:.3s}
                .hb.in .hb-slider{transition-delay:.45s}
                .hb.in .hb-cta{transition-delay:.7s}
                .hb-head h2::after{content:"";display:block;width:0;height:4px;border-radius:4px;background:var(--cyan);
                    margin:16px auto 0;transition:width .9s .7s ease}
                .hb.in .hb-head h2::after{width:70px}

                .hb-slider{position:relative;padding:0 38px}
                .hb-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:56px;height:56px;border-radius:50%;
                    border:0;background:var(--cyan);color:#fff;display:grid;place-items:center;cursor:pointer;
                    box-shadow:0 8px 22px rgba(26,167,202,.45);transition:background .2s,transform .2s}
                .hb-arrow:hover{background:var(--ink);transform:translateY(-50%) scale(1.07)}
                .hb-arrow:focus-visible,.hb-btn:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
                .hb-arrow::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--cyan);
                    animation:hbPulse 2.4s ease-out infinite;pointer-events:none}
                @keyframes hbPulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}
                .hb-prev{left:-6px}
                .hb-next{right:-6px}

                .hb .slick-list{margin:0 -14px;padding:18px 0 28px}
                .hb .slick-track{display:flex}
                .hb .slick-slide{height:auto;padding:0 14px}
                .hb .slick-slide>div{height:100%}

                .hb-card{position:relative;height:100%;display:flex;flex-direction:column;background:#fff;border-radius:22px;
                    overflow:hidden;box-shadow:0 10px 32px rgba(14,58,74,.12);
                    transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s}
                .hb-card:hover{transform:translateY(-10px);box-shadow:0 26px 52px rgba(14,58,74,.22)}
                .hb-img{position:relative;height:230px;overflow:hidden;background:linear-gradient(160deg,var(--cyan),#0e3a4a)}
                .hb-img img{object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
                .hb-card:hover .hb-img img{transform:scale(1.1)}
                .hb-img::after{content:"";position:absolute;top:0;left:-80%;width:50%;height:100%;
                    background:linear-gradient(100deg,transparent,rgba(255,255,255,.38),transparent);transform:skewX(-20deg)}
                .hb-card:hover .hb-img::after{left:130%;transition:left .9s ease}
                .hb-body{position:relative;flex:1;display:flex;flex-direction:column;padding:26px 26px 22px}
                .hb-body::before{content:"";position:absolute;left:0;top:0;height:4px;width:0;background:var(--cyan);transition:width .5s ease}
                .hb-card:hover .hb-body::before{width:100%}
                .hb-body h3{font-size:21px;line-height:1.35;font-weight:700;margin:0 0 12px;color:var(--ink);transition:color .3s}
                .hb-link{color:inherit;text-decoration:none}
                .hb-link::after{content:"";position:absolute;inset:0;z-index:1}
                .hb-link:focus-visible{outline:3px solid var(--cyan);outline-offset:-4px;border-radius:22px}
                .hb-card:hover .hb-body h3{color:var(--cyan-d)}
                .hb-body p{flex:1;margin:0 0 20px;font-size:15.5px;line-height:1.7;color:var(--muted);
                    display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
                .hb-more{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:14.5px;color:var(--ink);transition:color .3s,gap .3s}
                .hb-more svg{transition:transform .3s}
                .hb-card:hover .hb-more{color:var(--cyan-d);gap:12px}
                .hb-card:hover .hb-more svg{transform:translateX(4px)}
                .hb-foot{display:flex;align-items:center;gap:8px;padding:15px 26px;border-top:1px solid #e3edf1;font-size:13.5px;color:var(--muted)}
                .hb-foot svg{color:var(--cyan)}

                .hb .slick-dots{position:static;display:flex !important;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;
                    gap:8px;list-style:none;margin:26px 0 0;padding:0}
                .hb .slick-dots li{display:block;width:auto;height:auto;margin:0;padding:0}
                .hb .slick-dots li button{width:10px;height:10px;padding:0;border:0;border-radius:99px;background:#c3d8e0;
                    font-size:0;line-height:0;cursor:pointer;transition:width .25s,background .25s}
                .hb .slick-dots li button::before{display:none}
                .hb .slick-dots li.slick-active button{width:30px;background:var(--cyan)}

                .hb-cta{text-align:center;margin-top:14px}
                .hb-btn{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:#fff;padding:15px 32px;
                    border-radius:999px;font-weight:700;font-size:16px;text-decoration:none;
                    transition:background .25s,transform .25s,box-shadow .25s}
                .hb-btn svg{transition:transform .3s}
                .hb-btn:hover{background:var(--cyan);color:#fff;transform:translateY(-3px);box-shadow:0 14px 30px rgba(26,167,202,.4)}
                .hb-btn:hover svg{transform:translateX(6px)}

                @media (max-width:767px){
                    .hb{padding:70px 0}
                    .hb-slider{padding:0}
                    .hb-arrow{top:140px;width:44px;height:44px}
                    .hb-prev{left:6px}
                    .hb-next{right:6px}
                    .hb-img{height:210px}
                }
                @media (prefers-reduced-motion:reduce){
                    .hb *,.hb *::before,.hb *::after{transition:none !important;animation:none !important}
                    .hb .hb-eyebrow,.hb .hb-head h2,.hb .hb-head p,.hb .hb-slider,.hb .hb-cta{opacity:1;transform:none}
                    .hb .hb-head h2::after{width:70px}
                }
            `}</style>

            <div className="hb-in">
                <div className="hb-head">
                    <span className="hb-eyebrow">News &amp; Updates</span>
                    <h2 id="hb-title">Recent Blog Posts</h2>
                    <p>Honest Goa guides on where to stay, what things cost and when to go.</p>
                </div>

                <div className="hb-slider">
                <button
  type="button"
  className="hb-arrow hb-prev"
  aria-label="Previous posts"
  onClick={() => sliderRef.current?.slickPrev()}
>
  <Arrow flip />
</button>

<button
  type="button"
  className="hb-arrow hb-next"
  aria-label="Next posts"
  onClick={() => sliderRef.current?.slickNext()}
>
  <Arrow flip={false} />
</button>

                    <Slider ref={sliderRef} {...settings}>
                        {latest.map((post) => (
                            <div key={post.slug}>
                                <article className="hb-card">
                                    <div className="hb-img">
                                        <Image src={post.img} alt={post.title} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                                    </div>
                                    <div className="hb-body">
                                        <h3>
                                            <Link href={`/blog/${post.slug}`} className="hb-link">{post.title}</Link>
                                        </h3>
                                        <p>{post.excerpt}</p>
                                        <span className="hb-more">
                                            Read the guide
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                        </span>
                                    </div>
                                    <div className="hb-foot">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
                                        <time dateTime={post.date}>{post.dateLabel}</time>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="hb-cta">
                    <Link href="/blog" className="hb-btn">
                        View All Blogs
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog3;