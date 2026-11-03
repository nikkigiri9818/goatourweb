


import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/home2" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      {/* GOA TOUR PACKAGES */}
      <li className="menu-item-has-children">
        <Link href="/goa-tour-package" onClick={() => setMobileToggle(false)}>
          Goa Tour Packages
        </Link>
        <DropDown>   
          <ul>
            <li>
              <Link href="/goa-tour-package/3-day-goa-tour-package" onClick={() => setMobileToggle(false)}>
                3 Day Goa Trip Package
              </Link>
            </li>
            <li>
              <Link href="/goa-tour-package/4-days-adventure-goa-tour-package" onClick={() => setMobileToggle(false)}>
                4 Days Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/goa-tour-package/5-days-summer-gateway-goa-tour-package" onClick={() => setMobileToggle(false)}>
                5 Days Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/goa-tour-package/honeymoon-goa-tour-package" onClick={() => setMobileToggle(false)}>
                Honeymoon Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/goa-tour-package/premium-5-days-goa-tour-package" onClick={() => setMobileToggle(false)}>
                Premium 5 Days Goa Package
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* GOA ADVENTURE */}
      <li className="menu-item-has-children">
        <Link href="/goa-adventures">Goa Adventure</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="goa-adventures/best-scuba-diving-in-goa" onClick={() => setMobileToggle(false)}>
                Scuba Diving in Goa
              </Link>
            </li>
            <li>
              <Link href="goa-adventures/watersports-in-goa" onClick={() => setMobileToggle(false)}>
                Watersports in Goa
              </Link>
            </li>
            <li>
              <Link href="goa-adventures/cruise-party-in-goa" onClick={() => setMobileToggle(false)}>
                Cruise Party in Goa
              </Link>
            </li>
            <li>
              <Link href="goa-adventures/dudhsagar-waterfall-trip" onClick={() => setMobileToggle(false)}>
                Dudhsagar Waterfall Trip
              </Link>
            </li>
            <li>
              <Link href="goa-adventures/flyboarding-in-goa" onClick={() => setMobileToggle(false)}>
                Flyboarding in Goa
              </Link>
            </li>
            <li>
              <Link href="/goa-adventures/bungee-jumping-in-goa" onClick={() => setMobileToggle(false)}>
                Bungee Jumping in Goa
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

     
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      {/* <li>
        <Link href="/travel-guides" onClick={() => setMobileToggle(false)}>
          Travel Guides
        </Link>
      </li> */}

      {/* BLOG (Turmet original, kept) */}
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
       
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}