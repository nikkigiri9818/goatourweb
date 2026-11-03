
"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

/*
  Put logo-header-light.png in: public/assets/img/logo/logo-header-light.png
  (white text version: reads well on the hero image AND on the navy sticky bar)
*/
const LOGO_SRC = '/assets/img/logo/logo-stacked-light.png';

export default function Header1({ variant } : any ) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
   <style>{`
      /* ---------- Goa Holiday Tours header theme ---------- */
      .cs_site_header{
        --gh-navy:#06243A;
        --gh-teal:#0FA3B1;
        --gh-orange:#F88828;
        --gh-orange-d:#E07414;
      }

      /* logo (stacked): no template filter, fixed height, auto width */
      .cs_site_branding{display:inline-block;max-width:none !important;line-height:0}
      .cs_site_branding img,
      .cs_site_header .cs_site_branding img,
      .header_style_2 .cs_site_branding img{
        filter:none !important;-webkit-filter:none !important;opacity:1 !important;
        height:95px !important;width:auto !important;max-width:none !important;max-height:none !important;
        transition:height .3s ease;
      }
      .cs_site_header.cs-gescout_sticky .cs_site_branding img{height:72px !important}

      /* sticky bar: solid navy so the logo and menu are always readable */
      .cs_site_header .cs_main_header{transition:background .3s ease,box-shadow .3s ease}
      .cs_site_header.cs-gescout_sticky .cs_main_header{
        background:var(--gh-navy) !important;
        box-shadow:0 10px 30px rgba(6,36,58,.35);
      }

      /* top-level menu links */
      .cs_site_header .cs_nav .cs_nav_list > li > a{color:#fff !important;transition:color .25s}
      .cs_site_header .cs_nav .cs_nav_list > li > a:hover,
      .cs_site_header .cs_nav .cs_nav_list > li.current-menu-item > a{color:var(--gh-orange) !important}

      /* search icon */
      .cs_site_header .search-trigger{
        color:#fff;border:1px solid rgba(255,255,255,.85);transition:background .25s,border-color .25s,color .25s;
      }
      .cs_site_header .search-trigger:hover{background:var(--gh-orange);border-color:var(--gh-orange);color:#fff}

      /* Request A Quote button: logo-sunset orange */
      .cs_site_header .theme-btn{
        background:var(--gh-orange) !important;color:#fff !important;
        box-shadow:0 8px 22px rgba(248,136,40,.35);
        transition:background .25s,transform .25s,box-shadow .25s;
      }
      .cs_site_header .theme-btn:hover{
        background:var(--gh-orange-d) !important;transform:translateY(-2px);
        box-shadow:0 12px 26px rgba(248,136,40,.5);
      }
      .cs_site_header .theme-btn i{transition:transform .25s}
      .cs_site_header .theme-btn:hover i{transform:translateX(4px)}

      @media (max-width: 991px) {
        .cs_site_branding img,
        .cs_site_header .cs_site_branding img,
        .cs_site_header.cs-gescout_sticky .cs_site_branding img{height:64px !important}
      }
    `}</style>

    <header
      className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href="/">
                <Image src={LOGO_SRC} alt="Goa Holiday Tours" width={96} height={95} priority />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">
                <div className="main-button header-btn-1">
                  {/* <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon"><i className="bi bi-search"></i></a>

                   */}
                  <Link href="/contact" className='theme-btn'>
                    <span> Request A Quote <i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
      <div className="search-inner">
        <i onClick={() => setSearchToggle(!searchToggle)} id="search-close" className="bi bi-x-lg search-close"></i>
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input type="search" className="main-search-input" placeholder="Search..." />
            </div>
          </form>
        </div>
      </div>
    </div>

    </div>
  );
}