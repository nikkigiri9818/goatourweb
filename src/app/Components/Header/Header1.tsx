
// "use client"
// import { useEffect, useState } from 'react';
// import Nav from './Nav';
// import Link from 'next/link';
// import Image from 'next/image';


// const LOGO_SRC = '/assets/img/logo/logo-stacked-light.png';

// export default function Header1({ variant } : any ) {
//   const [mobileToggle, setMobileToggle] = useState(false);
//   const [isSticky, setIsSticky] = useState<string>("");
//   const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
//   const [searchToggle, setSearchToggle] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       if (currentScrollPos > prevScrollPos) {
//         setIsSticky('cs-gescout_sticky'); // Scrolling down
//       } else if (currentScrollPos !== 0) {
//         setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
//       } else {
//         setIsSticky('');
//       }
//       setPrevScrollPos(currentScrollPos); // Update previous scroll position
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
//     };
//   }, [prevScrollPos]);

//   return (
//     <div>
//    <style>{`
//       /* ---------- Goa Holiday Tours header theme ---------- */
//       .cs_site_header{
//         --gh-navy:#06243A;
//         --gh-teal:#0FA3B1;
//         --gh-orange:#F88828;
//         --gh-orange-d:#E07414;
//       }

//       /* logo (stacked): no template filter, fixed height, auto width */
//       .cs_site_branding{display:inline-block;max-width:none !important;line-height:0}
//       .cs_site_branding img,
//       .cs_site_header .cs_site_branding img,
//       .header_style_2 .cs_site_branding img{
//         filter:none !important;-webkit-filter:none !important;opacity:1 !important;
//         height:95px !important;width:auto !important;max-width:none !important;max-height:none !important;
//         transition:height .3s ease;
//       }
//       .cs_site_header.cs-gescout_sticky .cs_site_branding img{height:72px !important}

//       /* sticky bar: solid navy so the logo and menu are always readable */
//       .cs_site_header .cs_main_header{transition:background .3s ease,box-shadow .3s ease}
//       .cs_site_header.cs-gescout_sticky .cs_main_header{
//         background:var(--gh-navy) !important;
//         box-shadow:0 10px 30px rgba(6,36,58,.35);
//       }

//       /* top-level menu links */
//       .cs_site_header .cs_nav .cs_nav_list > li > a{color:#fff !important;transition:color .25s}
//       .cs_site_header .cs_nav .cs_nav_list > li > a:hover,
//       .cs_site_header .cs_nav .cs_nav_list > li.current-menu-item > a{color:var(--gh-orange) !important}

//       /* search icon */
//       .cs_site_header .search-trigger{
//         color:#fff;border:1px solid rgba(255,255,255,.85);transition:background .25s,border-color .25s,color .25s;
//       }
//       .cs_site_header .search-trigger:hover{background:var(--gh-orange);border-color:var(--gh-orange);color:#fff}

//       /* Request A Quote button: logo-sunset orange */
//       .cs_site_header .theme-btn{
//         background:var(--gh-orange) !important;color:#fff !important;
//         box-shadow:0 8px 22px rgba(248,136,40,.35);
//         transition:background .25s,transform .25s,box-shadow .25s;
//       }
//       .cs_site_header .theme-btn:hover{
//         background:var(--gh-orange-d) !important;transform:translateY(-2px);
//         box-shadow:0 12px 26px rgba(248,136,40,.5);
//       }
//       .cs_site_header .theme-btn i{transition:transform .25s}
//       .cs_site_header .theme-btn:hover i{transform:translateX(4px)}

//       @media (max-width: 991px) {
//         .cs_site_branding img,
//         .cs_site_header .cs_site_branding img,
//         .cs_site_header.cs-gescout_sticky .cs_site_branding img{height:64px !important}
//       }
//     `}</style>

//     <header
//       className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
//         variant ? variant : ''
//       } cs_sticky_header cs_site_header_full_width ${
//         mobileToggle ? 'cs_mobile_toggle_active' : ''
//       } ${isSticky ? isSticky : ''}`}
//     >
//       <div className="cs_main_header">
//         <div className="container-fluid">
//           <div className="cs_main_header_in">
//             <div className="cs_main_header_left">
//               <Link className="cs_site_branding" href="/">
//                 <Image src={LOGO_SRC} alt="Goa Holiday Tours" width={96} height={95} priority />
//               </Link>
//             </div>
//             <div className="cs_main_header_center">
//               <div className="cs_nav cs_primary_font fw-medium">
//                 <span
//                   className={
//                     mobileToggle
//                       ? 'cs-munu_toggle cs_teggle_active'
//                       : 'cs-munu_toggle'
//                   }
//                   onClick={() => setMobileToggle(!mobileToggle)}
//                 >
//                   <span></span>
//                 </span>
//                 <Nav setMobileToggle={setMobileToggle} />
//               </div>
//             </div>
//             <div className="cs_main_header_right">
//               <div className="header-btn d-flex align-items-center">
//                 <div className="main-button header-btn-1">
//                   {/* <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon"><i className="bi bi-search"></i></a>

//                    */}
//                   <Link href="/contact" className='theme-btn'>
//                     <span> Request A Quote <i className="bi bi-arrow-right"></i></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>

//     <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
//       <div className="search-inner">
//         <i onClick={() => setSearchToggle(!searchToggle)} id="search-close" className="bi bi-x-lg search-close"></i>
//         <div className="search-cell">
//           <form method="get">
//             <div className="search-field-holder">
//               <input type="search" className="main-search-input" placeholder="Search..." />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>

//     </div>
//   );
// }
 


"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

const LOGO_SRC = '/assets/img/logo/logo-stacked-light.png';

export default function Header1({ variant }: any) {
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
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

        /* ================= MOBILE / TABLET (<=1199px, 1024 included) ================= */
        .gh-toggle{display:none}

        @media (max-width: 1199px) {

          html, body{overflow-x:hidden}

          /* header: poori viewport width, koi gap nahi */
          .cs_site_header{
            position:fixed !important;
            top:0 !important; left:0 !important; right:0 !important;
            width:100% !important; max-width:100% !important;
            margin:0 !important; padding:0 !important;
            transform:none !important;
          }

          .cs_site_branding img,
          .cs_site_header .cs_site_branding img,
          .cs_site_header.cs-gescout_sticky .cs_site_branding img{height:64px !important}

          /* bar hamesha navy, logo isi bar ke andar */
          .cs_site_header .cs_main_header{
            position:relative !important;
            background:var(--gh-navy) !important;
            width:100% !important;
          }
          .cs_site_header .container-fluid{padding:0 !important;max-width:100% !important}

          .cs_site_header .cs_main_header_in{
            position:static !important;
            display:flex !important;
            align-items:center;
            justify-content:space-between;
            min-height:80px;
            padding:8px 20px !important;
            margin:0 !important;
          }
          .cs_site_header .cs_main_header_left{position:relative;z-index:12}
          .cs_site_header .cs_main_header_right{display:none !important}

          /* template ka purana toggle band, apna toggle use hoga */
          .cs_site_header .cs-munu_toggle{display:none !important}

          .cs_site_header .cs_main_header_center,
          .cs_site_header .cs_nav{position:static !important;width:auto !important}

          /* menu panel: bar ke neeche, full width, same navy */
          .cs_site_header .cs_nav .cs_nav_list{
            display:none !important;
            position:absolute !important;
            top:100% !important; left:0 !important; right:0 !important;
            width:100% !important; max-width:100% !important;
            margin:0 !important;
            padding:10px 20px 20px !important;
            background:var(--gh-navy) !important;
            max-height:calc(100vh - 80px);
            overflow-y:auto;
            box-shadow:0 20px 30px rgba(6,36,58,.35);
          }
          .cs_site_header.cs_mobile_toggle_active .cs_nav .cs_nav_list{display:block !important}

          /* ---------- Hamburger <-> Cross (apna button) ---------- */
          .cs_site_header .gh-toggle{
            display:block;
            position:absolute;
            right:20px; top:40px;
            width:30px; height:30px;
            margin-top:-15px;
            padding:0; border:0; background:transparent;
            cursor:pointer; z-index:13;
          }
          .cs_site_header .gh-toggle i{
            position:absolute; left:3px;
            width:24px; height:2px;
            background:#fff; border-radius:2px;
            transition:transform .3s ease, opacity .2s ease, top .3s ease;
          }
          .cs_site_header .gh-toggle i:nth-child(1){top:8px}
          .cs_site_header .gh-toggle i:nth-child(2){top:14px}
          .cs_site_header .gh-toggle i:nth-child(3){top:20px}

          .cs_site_header .gh-toggle.is-open i:nth-child(1){top:14px;transform:rotate(45deg)}
          .cs_site_header .gh-toggle.is-open i:nth-child(2){opacity:0}
          .cs_site_header .gh-toggle.is-open i:nth-child(3){top:14px;transform:rotate(-45deg)}
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
                  <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={mobileToggle}
                    className={`gh-toggle ${mobileToggle ? 'is-open' : ''}`}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <i></i><i></i><i></i>
                  </button>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button header-btn-1">
                    <Link href="/contact" className="theme-btn">
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
