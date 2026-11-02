"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { blogPosts } from '../../Components/Blog/Blogdata';

// One card. Each card reveals itself once, when it scrolls into view.
const BlogCard = ({ post, index }) => {
    const ref = useRef(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setSeen(true); io.disconnect(); }
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            className={`gb-card ${seen ? 'in' : ''}`}
style={{ '--d': `${(index % 3) * 0.12}s` } as React.CSSProperties}


        >
            <div className="gb-img">
                <Image src={post.img} alt={post.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            </div>
            <div className="gb-body">
                <h3>
                    {/* stretched link: the whole card is clickable */}
                    <Link href={`/blog/${post.slug}`} className="gb-link">{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <span className="gb-more">
                    Read the guide
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
            </div>
            <div className="gb-foot">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
                <time dateTime={post.date}>{post.dateLabel}</time>
            </div>
        </article>
    );
};

const Blog4 = () => {
    return (
        <section className="gb-section">
            <style>{`
                .gb-section{--ink:#0e1e24;--muted:#6b7882;--cyan:#1aa7ca;--cyan-d:#1389a8;
                    position:relative;overflow:hidden;background:#f3f8fb;padding:90px 0}
                .gb-section::before{content:"";position:absolute;right:-12%;top:-10%;width:50%;height:55%;
                    background:radial-gradient(closest-side,rgba(246,213,218,.85),rgba(246,213,218,0));pointer-events:none}
                .gb-wrap{position:relative;max-width:1240px;margin:0 auto;padding:0 20px}
                .gb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px 28px}

                .gb-card{position:relative;display:flex;flex-direction:column;background:#fff;border-radius:22px;
                    overflow:hidden;box-shadow:0 10px 32px rgba(14,58,74,.10);
                    opacity:0;transform:translateY(46px);
                    transition:opacity .8s ease var(--d),transform .8s cubic-bezier(.2,.7,.2,1) var(--d),box-shadow .4s}
                .gb-card.in{opacity:1;transform:none}
                .gb-card.in:hover{transform:translateY(-10px);box-shadow:0 26px 52px rgba(14,58,74,.2);
                    transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s}

                .gb-img{position:relative;height:230px;overflow:hidden;background:linear-gradient(160deg,var(--cyan),#0e3a4a)}
                .gb-img img{object-fit:cover;transition:transform .9s cubic-bezier(.2,.7,.2,1)}
                .gb-card:hover .gb-img img{transform:scale(1.1)}
                .gb-img::after{content:"";position:absolute;top:0;left:-80%;width:50%;height:100%;
                    background:linear-gradient(100deg,transparent,rgba(255,255,255,.38),transparent);transform:skewX(-20deg)}
                .gb-card:hover .gb-img::after{left:130%;transition:left .9s ease}

                .gb-body{flex:1;display:flex;flex-direction:column;padding:26px 26px 22px;position:relative}
                .gb-body::before{content:"";position:absolute;left:0;top:0;height:4px;width:0;background:var(--cyan);
                    transition:width .5s ease}
                .gb-card:hover .gb-body::before{width:100%}
                .gb-body h3{font-size:21px;line-height:1.35;font-weight:700;margin:0 0 12px;color:var(--ink);transition:color .3s}
                .gb-link{color:inherit;text-decoration:none}
                .gb-link::after{content:"";position:absolute;inset:0;z-index:1}
                .gb-link:focus-visible{outline:3px solid var(--cyan);outline-offset:4px;border-radius:6px}
                .gb-card:hover .gb-body h3{color:var(--cyan-d)}
                .gb-body p{flex:1;margin:0 0 20px;font-size:15.5px;line-height:1.7;color:var(--muted);
                    display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
                .gb-more{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:14.5px;color:var(--ink);
                    transition:color .3s,gap .3s}
                .gb-more svg{transition:transform .3s}
                .gb-card:hover .gb-more{color:var(--cyan-d);gap:12px}
                .gb-card:hover .gb-more svg{transform:translateX(4px)}

                .gb-foot{display:flex;align-items:center;gap:8px;padding:15px 26px;border-top:1px solid #e3edf1;
                    font-size:13.5px;color:var(--muted)}
                .gb-foot svg{color:var(--cyan)}

                @media (max-width:1100px){.gb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
                @media (max-width:700px){
                    .gb-section{padding:64px 0}
                    .gb-grid{grid-template-columns:1fr}
                    .gb-img{height:210px}
                }
                @media (prefers-reduced-motion:reduce){
                    .gb-card,.gb-card *,.gb-card *::before,.gb-card *::after{transition:none !important;animation:none !important}
                    .gb-card{opacity:1;transform:none}
                }
            `}</style>

            <div className="gb-wrap">
                <div className="gb-grid">
                    {blogPosts.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog4;