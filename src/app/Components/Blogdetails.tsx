"use client";

import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import { blogPosts } from "../Components/Blog/Blogdata";
import { articles } from "../Components/blogArticles";
import Link from "next/link";
import { useParams } from "next/navigation";

// ---- Yahan sirf ye 2 cheezein badalni hain ----
// 1. Client ka asli WhatsApp number (country code ke saath, bina + ya space ke). Abhi nakli number hai.
const WHATSAPP_NUMBER = "+917678464517";

// 2. Agar kisi blog ka slug article ki key se alag hai, to yahan jodein:  "listing-ka-slug": "articles-ki-key"
const SLUG_ALIASES: Record<string, string> = {
  "north-goa-or-south-goa-where-to-stay": "north-goa-or-south-goa",
};
// -----------------------------------------------

const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Pehle seedha slug, phir alias, phir shuruaat ke mel se article dhoondhta hai.
const getArticle = (slug: string) => {
  const map = articles as Record<string, any>;
  if (map[slug]) return map[slug];
  if (SLUG_ALIASES[slug] && map[SLUG_ALIASES[slug]]) return map[SLUG_ALIASES[slug]];

  const key = Object.keys(map).find(
    (k) => slug.startsWith(k) || k.startsWith(slug)
  );
  return key ? map[key] : undefined;
};

const BlogDetails = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const item = blogPosts.find((blog) => blog.slug === slug);
  const article = getArticle(slug);

  if (process.env.NODE_ENV !== "production" && item && !article) {
    console.warn(
      `[Blog] "${slug}" ke liye article nahi mila. blogArticles mein key ya SLUG_ALIASES mein alias jodein.`
    );
  }

  if (!item) {
    return (
      <div className="blog-not-found">
        <h2>Blog Not Found</h2>
        <Link href="/blog">Back to Blogs</Link>
      </div>
    );
  }

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case "lead":
        return (
          <p className="blog-lead" key={index}>
            {block.text}
          </p>
        );

      case "p":
        return (
          <p className="blog-paragraph" key={index}>
            {block.text}
          </p>
        );

      case "h2":
        return (
          <h2 className="blog-heading" key={index}>
            {block.text}
          </h2>
        );

      case "image":
        return (
          <div className="blog-content-image" key={index}>
            <img src={block.src} alt={block.alt || item.title} />
          </div>
        );

      case "table":
        return (
          <div className="blog-table-wrapper" key={index}>
            <table className="blog-content-table">
              {block.head && (
                <thead>
                  <tr>
                    {block.head.map((heading: string, i: number) => (
                      <th key={i}>{heading}</th>
                    ))}
                  </tr>
                </thead>
              )}

              <tbody>
                {block.rows?.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "choices":
        return (
          <div className="blog-choices" key={index}>
            {block.items?.map((choice: any, i: number) => (
              <div className="blog-choice-item" key={i}>
                <h3>{choice.label}</h3>
                <p>{choice.value}</p>
              </div>
            ))}
          </div>
        );

      case "note":
        return (
          <div className="blog-note" key={index}>
            <p>{block.text}</p>
          </div>
        );

      case "faq":
        return (
          <div className="blog-faq" key={index}>
            <h2>{block.title || "Frequently Asked Questions"}</h2>

            {block.items?.map((faq: any, i: number) => (
              <details className="blog-faq-item" key={i}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        );

      case "cta":
        return (
          <div className="blog-cta" key={index}>
            <h2>{block.title}</h2>
            <p>{block.text}</p>

            <a
              href={whatsappLink(`Hello, I read "${item.title}" and want to plan a Goa trip.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-cta-button"
            >
              {block.button || "Chat on WhatsApp"}
            </a>

            {block.linkText && (
              // linkHref nahi diya to packages page par jayega (pehle hamesha /blog par jata tha)
              <Link href={block.linkHref || "/goa-tour-package"} className="blog-cta-link">
                {block.linkText}
              </Link>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Breadcrumb */}
      <BreadCumb bgimg={item.img} Title={item.title} />

      {/* Blog Details */}
      <section className="blog-details-section">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <article className="blog-details-content">
                <h1 className="blog-main-title">{item.title}</h1>

                {item.img && (
                  <div className="blog-featured-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                )}

                {article?.blocks?.length > 0 ? (
                  article.blocks.map((block: any, index: number) =>
                    renderBlock(block, index)
                  )
                ) : (
                  <p>Article content coming soon.</p>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                <div className="blog-sidebar-widget">
                  <h3>Explore Goa</h3>

                  <ul>
                    <li>
                      <Link href="/blog">All Blogs</Link>
                    </li>
                    <li>
                      <Link href="/goa-tour-package">Goa Tour Packages</Link>
                    </li>
                    <li>
                      <Link href="/goa-adventures">Goa Adventures</Link>
                    </li>
                  </ul>
                </div>

                <div className="blog-sidebar-widget">
                  <h3>Plan Your Goa Trip</h3>

                  <p>
                    Contact us to customize your Goa holiday with
                    sightseeing, adventure activities, and accommodation.
                  </p>

                  <a
                    href={whatsappLink("Hello, I want to plan a Goa trip. Please help me with the details.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-sidebar-button"
                  >
                    Contact Us
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CSS (rang ab site ke theme se aate hain) */}
      <style>{`
        .blog-details-section {
          padding: 70px 0;
        }

        .blog-details-content {
          width: 100%;
        }

        .blog-main-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .blog-lead {
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 25px;
          color: #555;
        }

        .blog-paragraph {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #555;
        }

        .blog-heading {
          font-size: 28px;
          font-weight: 700;
          margin: 35px 0 20px;
          color: #222;
        }

        .blog-content-image,
        .blog-featured-image {
          margin: 30px 0;
        }

        .blog-content-image img,
        .blog-featured-image img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }

        .blog-table-wrapper {
          width: 100%;
          overflow-x: auto;
          margin: 25px 0;
        }

        .blog-content-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 500px;
        }

        .blog-content-table th,
        .blog-content-table td {
          border: 1px solid #dfe8ec;
          padding: 14px;
          text-align: left;
        }

        .blog-content-table th {
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.1);
          font-weight: 700;
        }

        .blog-content-table tr:nth-child(even) {
          background: #f7fbfc;
        }

        .blog-choices {
          margin: 25px 0;
        }

        .blog-choice-item {
          padding: 18px;
          margin-bottom: 15px;
          background: #f5fafb;
          border-left: 4px solid var(--theme, #0a9cb4);
          border-radius: 8px;
        }

        .blog-choice-item h3 {
          font-size: 19px;
          margin-bottom: 8px;
        }

        .blog-choice-item p {
          margin-bottom: 0;
          line-height: 1.7;
        }

        .blog-note {
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.08);
          border-left: 4px solid var(--theme, #0a9cb4);
          padding: 20px;
          margin: 25px 0;
          border-radius: 8px;
        }

        .blog-note p {
          margin-bottom: 0;
          line-height: 1.7;
        }

        .blog-faq {
          margin: 35px 0;
        }

        .blog-faq h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .blog-faq-item {
          border: 1px solid #dfe8ec;
          padding: 15px 20px;
          margin-bottom: 12px;
          border-radius: 10px;
        }

        .blog-faq-item[open] {
          border-color: var(--theme, #0a9cb4);
        }

        .blog-faq-item summary {
          cursor: pointer;
          font-weight: 600;
          font-size: 17px;
        }

        .blog-faq-item p {
          margin-top: 15px;
          line-height: 1.7;
        }

        .blog-cta {
          background: rgba(var(--theme-rgb, 10, 156, 180), 0.08);
          padding: 35px;
          margin-top: 40px;
          border-radius: 14px;
          text-align: center;
        }

        .blog-cta h2 {
          font-size: 28px;
          margin-bottom: 15px;
        }

        .blog-cta p {
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .blog-cta-button,
        .blog-sidebar-button {
          display: inline-block;
          padding: 12px 28px;
          background: var(--theme, #0a9cb4);
          color: #fff;
          text-decoration: none;
          border-radius: 100px;
          font-weight: 600;
          transition: filter .3s, box-shadow .3s;
        }

        .blog-cta-button:hover,
        .blog-sidebar-button:hover {
          filter: brightness(0.92);
          box-shadow: 0 8px 18px rgba(var(--theme-rgb, 10, 156, 180), 0.3);
          color: #fff;
        }

        .blog-cta-link {
          display: block;
          margin-top: 15px;
          color: var(--theme, #0a9cb4);
          font-weight: 600;
        }

        .blog-sidebar {
          position: sticky;
          top: 100px;
        }

        .blog-sidebar-widget {
          padding: 25px;
          border: 1px solid #e6eef1;
          border-radius: 14px;
          margin-bottom: 25px;
        }

        .blog-sidebar-widget h3 {
          font-size: 22px;
          margin-bottom: 20px;
        }

        .blog-sidebar-widget ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .blog-sidebar-widget ul li {
          padding: 10px 0;
          border-bottom: 1px solid #eef3f5;
        }

        .blog-sidebar-widget ul li a {
          text-decoration: none;
          color: #333;
          transition: color .3s;
        }

        .blog-sidebar-widget ul li a:hover {
          color: var(--theme, #0a9cb4);
        }

        .blog-sidebar-widget p {
          line-height: 1.7;
        }

        .blog-not-found {
          text-align: center;
          padding: 100px 20px;
        }

        @media (max-width: 991px) {
          .blog-details-section {
            padding: 40px 0;
          }

          .blog-sidebar {
            position: static;
            margin-top: 40px;
          }

          .blog-main-title {
            font-size: 28px;
          }

          .blog-heading {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default BlogDetails;