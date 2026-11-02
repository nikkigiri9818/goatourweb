// import Link from 'next/link';
// import DropDown from './DropDown';

// export default function Nav({ setMobileToggle }) {
//   return (
//     <ul className="cs_nav_list fw-medium">
//       <li className="menu-item-has-children">
//         <Link href="/home2">Home</Link>
//         {/* <DropDown>
//           <ul>
//             <li>
//               <Link href="/" onClick={() => setMobileToggle(false)}>
//               Home Version 1
//               </Link>
//             </li>
//             <li>
//               <Link href="/home2" onClick={() => setMobileToggle(false)}>
//               Home Version 2
//               </Link>
//             </li>
//             <li>
//               <Link href="/home3" onClick={() => setMobileToggle(false)}>
//                 Home Version 3
//               </Link>
//             </li>            
//           </ul>
//         </DropDown> */}
//       </li>

//       <li>
//         <Link href="/about" onClick={() => setMobileToggle(false)}>
//         About Us
//         </Link>
//       </li>

//       <li className="menu-item-has-children">
//         <Link href="/destination" onClick={() => setMobileToggle(false)}>
//         Destination
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/destination" onClick={() => setMobileToggle(false)}>
//               Destination
//               </Link>
//             </li>
//             <li>
//               <Link href="/destination/destination-details" onClick={() => setMobileToggle(false)}>
//               Destination Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li>

//       <li className="menu-item-has-children">
//         <Link href="/tour" onClick={() => setMobileToggle(false)}>
//         Tour
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/tour" onClick={() => setMobileToggle(false)}>
//               Tour
//               </Link>
//             </li>          
//             <li>
//               <Link href="/tour/tour-details" onClick={() => setMobileToggle(false)}>
//               Tour Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li> 
      
//       <li className="menu-item-has-children">
//         <Link href="#">Pages</Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/activities" onClick={() => setMobileToggle(false)}>
//               Activities
//               </Link>
//             </li> 
//             <li>
//               <Link href="/activities/activities-details" onClick={() => setMobileToggle(false)}>
//               Activities Details
//               </Link>
//             </li>             
//             <li>
//               <Link href="/team" onClick={() => setMobileToggle(false)}>
//                Our Team
//               </Link>
//             </li>            
//             <li>
//               <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
//                 Team Details
//               </Link>
//             </li>                                      
//           </ul>
//         </DropDown>
//       </li>        

//       <li className="menu-item-has-children">
//         <Link href="/blog" onClick={() => setMobileToggle(false)}>
//           Blog
//         </Link>
//         <DropDown>
//           <ul>
//             <li>
//               <Link href="/blog" onClick={() => setMobileToggle(false)}>
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
//                 Blog With Sidebar
//               </Link>
//             </li>                         
//             <li>
//               <Link
//                 href="/blog/blog-details"
//                 onClick={() => setMobileToggle(false)}
//               >
//                 Blog Details
//               </Link>
//             </li>
//           </ul>
//         </DropDown>
//       </li>
//       <li>
//         <Link href="/contact" onClick={() => setMobileToggle(false)}>
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }



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
              <Link href="/3-day-goa-tour-package" onClick={() => setMobileToggle(false)}>
                3 Day Goa Trip Package
              </Link>
            </li>
            <li>
              <Link href="/4-days-adventure-goa-tour-package" onClick={() => setMobileToggle(false)}>
                4 Days Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/5-days-summer-gateway-goa-tour-package" onClick={() => setMobileToggle(false)}>
                5 Days Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/honeymoon-goa-tour-package" onClick={() => setMobileToggle(false)}>
                Honeymoon Goa Tour Package
              </Link>
            </li>
            <li>
              <Link href="/premium-5-days-goa-tour-package" onClick={() => setMobileToggle(false)}>
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
              <Link href="/best-scuba-diving-in-goa" onClick={() => setMobileToggle(false)}>
                Scuba Diving in Goa
              </Link>
            </li>
            <li>
              <Link href="/watersports-in-goa" onClick={() => setMobileToggle(false)}>
                Watersports in Goa
              </Link>
            </li>
            <li>
              <Link href="/cruise-party-in-goa" onClick={() => setMobileToggle(false)}>
                Cruise Party in Goa
              </Link>
            </li>
            <li>
              <Link href="/dudhsagar-waterfall-trip" onClick={() => setMobileToggle(false)}>
                Dudhsagar Waterfall Trip
              </Link>
            </li>
            <li>
              <Link href="/flyboarding-in-goa" onClick={() => setMobileToggle(false)}>
                Flyboarding in Goa
              </Link>
            </li>
            <li>
              <Link href="/bungee-jumping-in-goa" onClick={() => setMobileToggle(false)}>
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