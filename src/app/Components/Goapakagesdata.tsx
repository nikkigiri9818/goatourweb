// // Saare Goa packages ka data ek hi jagah. Card, listing aur details page yahin se padhte hain.
// // Source: goatourpackages.in (client ki site). Launch se pehle client se prices/inclusions verify karwa lena.

// export const BASE_PATH = '/goa-tour-package';
// export const WHATSAPP_NUMBER = '918287682602';
// export const PHONE_TEL = '+918287682602';
// export const PHONE_DISPLAY = '+91 82876 82602';

// export const whatsappLink = (text) =>
//   `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

// export const formatINR = (n) => '₹' + Number(n).toLocaleString('en-IN');

// const IMG = '/assets/img/packages';

// export const goaPackages = [
//   {
//     slug: '3-day-goa-tour-package',
//     title: '3 Days Goa Trip Package',
//     badge: 'Weekend Getaway',
//     days: 3,
//     nights: 2,
//     rating: 4.5,
//     reviews: 462,
//     categories: ['couple', 'family', 'friends'],
//     image: `${IMG}/3-day-goa-tour-package.jpg`,
//     oldPrice: 12000,
//     price: 7500,
//     priceNoTransfer: 6500,
//     groupPrice: 5900,
//     highlights: ['Beach resort with pool', 'Daily breakfast', 'North Goa sightseeing', 'Dinner cruise party'],
//     overview:
//       'A short, adventure-packed Goa break for anyone who wants a weekend away from city life. Stay at a beach resort with a swimming pool, explore the famous beaches of North Goa in a private vehicle and finish with a dinner cruise.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Stay with swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       "Visit to Goa's famous beaches",
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your beach resort', 'Check-in and relax by the pool', "Evening at Calangute, Baga and the Tito's Lane market"] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour: Candolim, Anjuna, Vagator, Chapora Fort, Aguada Fort and Reis Magos Fort', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'Island Trip & Departure', points: ['Grand Island boat trip with dolphin sighting', 'Scuba diving and popular water sports, as per your plan', 'Drop at the airport / railway station'] },
//     ],
//   },
//   {
//     slug: '4-days-adventure-goa-tour-package',
//     title: '4 Days Goa Tour Package',
//     badge: 'Adventure',
//     days: 4,
//     nights: 3,
//     rating: 4.5,
//     reviews: 402,
//     categories: ['couple', 'family', 'friends'],
//     image: `${IMG}/4-days-adventure-goa-tour-package.jpg`,
//     oldPrice: 15000,
//     price: 12000,
//     priceNoTransfer: 10000,
//     groupPrice: 8500,
//     highlights: ['Beach resort with pool', 'North & South Goa tours', 'Dinner cruise party', 'Famous beaches & UNESCO church'],
//     overview:
//       'Four relaxed days to see both sides of Goa. Spend time on the lively beaches of North Goa, then slow down with the quieter beaches and sights of South Goa, with a private vehicle and a dinner cruise included.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Stay with swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'South Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       "Visit to Goa's famous beaches",
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your beach resort', 'Check-in and relax by the pool', 'Evening walk at the nearby beach'] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of famous North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'South Goa Sightseeing', points: ['Private-vehicle tour of South Goa', 'Time at the white sandy beaches', 'Free evening at leisure'] },
//       { title: 'Leisure & Departure', points: ['Relaxed morning and breakfast', 'Drop at the airport / railway station'] },
//     ],
//   },
//   {
//     slug: '5-days-summer-gateway-goa-tour-package',
//     title: '5 Days Goa Tour Package',
//     badge: 'Most Popular',
//     days: 5,
//     nights: 4,
//     rating: 4.5,
//     reviews: 783,
//     categories: ['couple', 'family', 'friends'],
//     image: `${IMG}/5-days-summer-gateway-goa-tour-package.jpg`,
//     oldPrice: 17500,
//     price: 14500,
//     priceNoTransfer: 12500,
//     groupPrice: 10500,
//     highlights: ['North & South Goa tours', 'Island trip + scuba diving', 'Dinner cruise party', 'Beach resort with pool'],
//     overview:
//       'Our most booked plan. Five days that cover North and South Goa, an island trip with scuba diving and water sports, and an evening dinner cruise, all with a comfortable beach resort stay.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Stay with swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'South Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       'Island trip + scuba diving & water sports',
//       "Visit to Goa's famous beaches",
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your beach resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
//       { title: 'South Goa Sightseeing', points: ['Private-vehicle tour of South Goa', 'Time at the white sandy beaches', 'Free evening'] },
//       { title: 'Departure', points: ['Breakfast and check-out', 'Drop at the airport / railway station'] },
//     ],
//   },
//   {
//     slug: 'honeymoon-goa-tour-package',
//     title: 'Goa Honeymoon Tour Package',
//     badge: 'Honeymoon Special',
//     days: 5,
//     nights: 4,
//     rating: 4.5,
//     reviews: 276,
//     categories: ['couple', 'honeymoon'],
//     image: `${IMG}/honeymoon-goa-tour-package.jpg`,
//     oldPrice: 20000,
//     price: 15500,
//     priceNoTransfer: 14000,
//     groupPrice: null,
//     highlights: ['Beach-side candlelight dinner', 'Island trip + scuba diving', 'North & South Goa tours', 'Dinner cruise party'],
//     overview:
//       'Made for newlyweds. Five days of beach time, sightseeing and adventure, with a private beach-side candlelight dinner and a dinner cruise to make the trip feel special.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Hotel stay with swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'South Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       'Island trip + scuba diving & water sports',
//       "Visit to Goa's famous beaches",
//       'Beach-side candlelight dinner',
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Sunset walk on the beach'] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
//       { title: 'South Goa & Candlelight Dinner', points: ['Private-vehicle tour of South Goa', 'Quiet time at the white sandy beaches', 'Beach-side candlelight dinner'] },
//       { title: 'Departure', points: ['Breakfast and check-out', 'Drop at the airport / railway station'] },
//     ],
//   },
//   {
//     slug: '4-day-premium-goa-tour-package',
//     title: '4 Day Premium Goa Tour Package',
//     badge: 'Premium',
//     days: 4,
//     nights: 3,
//     rating: 4.5,
//     reviews: 183,
//     categories: ['premium', 'family', 'couple'],
//     image: `${IMG}/4-day-premium-goa-tour-package.jpg`,
//     oldPrice: 16000,
//     price: 14000,
//     priceNoTransfer: 12000,
//     groupPrice: 10500,
//     highlights: ['Dudhsagar waterfall trip', 'North & South Goa tours', 'Dinner cruise party', 'Beach resort with pool'],
//     overview:
//       'A four-day premium plan that adds the Dudhsagar waterfall trip to North and South Goa sightseeing and a dinner cruise, with a beach resort stay and private transfers throughout.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'South Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       'Dudhsagar waterfall trip',
//       "Visit to Goa's famous beaches",
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'Dudhsagar Waterfall Trip', points: ['Day trip to Dudhsagar waterfall', 'Return to the resort in the evening'] },
//       { title: 'South Goa Sightseeing & Departure', points: ['Private-vehicle tour of South Goa', 'Drop at the airport / railway station'] },
//     ],
//   },
//   {
//     slug: 'premium-5-days-goa-tour-package',
//     title: '5 Day Goa Premium Tour Package',
//     badge: 'Premium',
//     days: 5,
//     nights: 4,
//     rating: 4.5,
//     reviews: 247,
//     categories: ['premium', 'family', 'couple'],
//     image: `${IMG}/premium-5-days-goa-tour-package.jpg`,
//     oldPrice: 19500,
//     price: 16500,
//     priceNoTransfer: 14500,
//     groupPrice: 12500,
//     highlights: ['Dudhsagar waterfall trip', 'Island trip + scuba diving', 'North & South Goa tours', 'Dinner cruise party'],
//     overview:
//       'Our fullest Goa plan. Five days that bring together North and South Goa, the Dudhsagar waterfall, an island trip with scuba diving and water sports, and a dinner cruise.',
//     inclusions: [
//       'Airport / station pickup & drop',
//       'Stay at top locations near the beach',
//       'Daily breakfast',
//       'Swimming pool',
//       'North Goa sightseeing via private vehicle',
//       'South Goa sightseeing via private vehicle',
//       'Dinner cruise party in Goa',
//       'Dudhsagar waterfall trip',
//       'Island trip + scuba diving & water sports',
//       "Visit to Goa's famous beaches",
//       "Visit to Goa's oldest church (UNESCO heritage)",
//     ],
//     itinerary: [
//       { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
//       { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
//       { title: 'Dudhsagar Waterfall Trip', points: ['Day trip to Dudhsagar waterfall', 'Return to the resort in the evening'] },
//       { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
//       { title: 'South Goa Sightseeing & Departure', points: ['Private-vehicle tour of South Goa', 'Drop at the airport / railway station'] },
//     ],
//   },
// ];

// export const getPackage = (slug) => goaPackages.find((p) => p.slug === slug);

// export const exclusions = [
//   'Flights or train tickets (can be arranged on request)',
//   'Monument and attraction entrance fees',
//   'Anything not listed under inclusions',
// ];

// export const packageFaqs = [
//   { q: 'What is included in the package?', a: 'Stay, daily breakfast, airport or station transfers, a driver, tolls and parking are included. Each package page lists its exact inclusions.' },
//   { q: 'Can I customise the package?', a: 'Yes. Message us to change hotels, adjust the plan or add activities such as scuba diving, water sports or a dinner cruise.' },
//   { q: 'Are flights and entrance fees included?', a: 'No. Flights can be arranged on request, and entrance fees are kept separate so you can choose which attractions to visit.' },
//   { q: 'How do I book, and can I pay later?', a: 'Book on WhatsApp, by phone or by email. A book now, pay later option is available, and you receive a confirmation and invoice after booking.' },
//   { q: 'What if I need to cancel or change my dates?', a: 'Cancellation terms depend on the package and how close the travel date is. Date changes depend on availability. Please ask us before you book.' },
//   { q: 'Will I get support during the trip?', a: 'Yes. You get 24/7 support and contact details, including driver details in advance, with your booking confirmation.' },
// ];

// export const guestReviews = [
//   { name: 'Anil Desai', text: 'We had an amazing time in Goa, all thanks to GoaTourPackages.in. The trip was well-organized, and we loved every activity, especially the thrilling water sports.' },
//   { name: 'Sujeet Singh', text: 'GoaTourPackages.in did a fantastic job with our vacation. The accommodations were great, and the sightseeing tours were very informative.' },
//   { name: 'Rekha Jain', text: 'Our Goa tour with GoaTourPackages.in was well-organized and enjoyable. Great value for money!' },
// ];




// Saare Goa packages ka data ek hi jagah. Card, listing aur details page yahin se padhte hain.
// Source: goatourpackages.in (client ki site). Launch se pehle client se prices/inclusions verify karwa lena.

export const BASE_PATH = '/goa-tour-package';
export const WHATSAPP_NUMBER = '917678464517';
export const PHONE_TEL = '+917678464517';
export const PHONE_DISPLAY = '+91 7678464517';

export const whatsappLink = (text) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

export const formatINR = (n) => '₹' + Number(n).toLocaleString('en-IN');

const IMG = '/assets/img/goa';

export const goaPackages = [
  {
    slug: '3-day-goa-tour-package',
    title: '3 Days Goa Trip Package',
    badge: 'Weekend Getaway',
    days: 3,
    nights: 2,
    rating: 4.5,
    reviews: 462,
    categories: ['couple', 'family', 'friends'],
    image: `${IMG}/sportsbeach.jpg`,
    // ---- CARD ke liye (kam details) ----
    oldPrice: 12000,
    price: 7500,
    priceNoTransfer: 6500,
    groupPrice: 5900,
    highlights: ['Beach resort with pool', 'Daily breakfast', 'North Goa sightseeing'],
    // ---- DETAILS PAGE ke liye (poori details) ----
    overview: [
      'A weekend in Goa that mixes beaches, sea activities and sightseeing. You stay at a resort with a swimming pool, travel between beaches in a private vehicle, and spend a day on the water at Grand Island with scuba diving and dolphin spotting.',
      'This plan covers most of the sea activities Goa is known for, along with local sightseeing, so it suits travellers who want a lively, adventure-filled short break. The plan can also be adjusted to match your interests.',
    ],
    detail: {
      minGuests: 2,
      // Details page par ye prices dikhte hain (reference ke package page se). Card par upar wale prices dikhte hain.
      prices: { main: 12000, preBooking: 9000, withoutTransfer: 7000 },
      quickFacts: [
        { icon: 'fa-regular fa-clock', label: 'Duration', value: '3 Days / 2 Nights' },
        { icon: 'fa-solid fa-hotel', label: 'Stay', value: 'Beach resort with pool' },
        { icon: 'fa-solid fa-utensils', label: 'Meals', value: 'Breakfast included' },
        { icon: 'fa-solid fa-car-side', label: 'Sightseeing', value: 'Private vehicle' },
        { icon: 'fa-solid fa-person-swimming', label: 'Activities', value: 'Popular water sports' },
        { icon: 'fa-solid fa-key', label: 'Self drive', value: 'Option available' },
      ],
      experiences: [
        { icon: 'fa-person-swimming', title: 'Grand Island Boat Trip', text: 'Head out to Grand Island by boat, watch for dolphins on the way and try scuba diving in clear water.' },
        { icon: 'fa-water', title: 'Popular Water Sports', text: 'Choose from the most popular rides on Goa\'s beaches, from jet ski to parasailing.' },
        { icon: 'fa-umbrella-beach', title: 'North Goa Beaches', text: 'Visit the best-known beaches of North Goa and watch the sunset at Arambol Beach (Sweet Lake).' },
        { icon: 'fa-sun', title: 'South Goa Beaches', text: 'Spend time on the quieter, white sandy beaches of South Goa.' },
        { icon: 'fa-landmark', title: 'Forts & Viewpoints', text: 'See Aguada Fort, Reis Magos Fort, Chapora Fort and the lighthouse.' },
        { icon: 'fa-bag-shopping', title: "Tito's Lane Market", text: "Stroll through the busy market and lanes around Tito's Lane after a day at the beach." },
      ],
      waterSports: ['Jet ski', 'Banana ride', 'Bumper ride', 'Parasailing with dip', 'Boat ride', 'Snorkelling'],
      stay: {
        title: 'Where You Stay',
        text: 'A 3-star rated resort with a swimming pool and breakfast, only 50 to 100 metres from Calangute and Baga beaches.',
      },
      places: ['Calangute', 'Baga', 'Candolim', 'Anjuna', 'Vagator', 'Snow Park', 'Reis Magos Fort', 'Aguada Fort', 'Chapora Fort', 'Lighthouse', 'Dolphin spotting trip'],
    },
    inclusions: [
      'Airport / railway station pickup & drop',
      '3-star beach resort stay with swimming pool',
      'Breakfast included',
      'Resort only 50 to 100 metres from Calangute and Baga',
      'Private rental vehicle for sightseeing',
      'North Goa sightseeing',
      'Grand Island boat trip with dolphin spotting',
      'Scuba diving and popular water sports rides',
      'Dinner cruise party in Goa',
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival, Resort & Beach Evening', points: ['Airport / station pickup and transfer to your 3-star beach resort near Calangute and Baga', 'Check-in and relax by the pool', "Evening at the beach and around Tito's Lane market"] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour: Candolim, Anjuna, Vagator, Snow Park, Chapora Fort, Aguada Fort, Reis Magos Fort and the lighthouse', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'Grand Island Trip & Departure', points: ['Boat trip to Grand Island with dolphin spotting', 'Scuba diving and popular water sports, as per your plan', 'Drop at the airport / railway station'] },
    ],
  },
  {
    slug: '4-days-adventure-goa-tour-package',
    title: '4 Days Goa Tour Package',
    badge: 'Adventure',
    days: 4,
    nights: 3,
    rating: 4.5,
    reviews: 402,
    categories: ['couple', 'family', 'friends'],
    image: `${IMG}/waterfallimges.jpg`,
    oldPrice: 15000,
    price: 12000,
    priceNoTransfer: 10000,
    groupPrice: 8500,
    highlights: ['Beach resort with pool', 'North & South Goa tours', 'Dinner cruise party', 'Famous beaches & UNESCO church'],
    overview:
      'Four relaxed days to see both sides of Goa. Spend time on the lively beaches of North Goa, then slow down with the quieter beaches and sights of South Goa, with a private vehicle and a dinner cruise included.',
    inclusions: [
      'Airport / station pickup & drop',
      'Stay at top locations near the beach',
      'Daily breakfast',
      'Stay with swimming pool',
      'North Goa sightseeing via private vehicle',
      'South Goa sightseeing via private vehicle',
      'Dinner cruise party in Goa',
      "Visit to Goa's famous beaches",
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your beach resort', 'Check-in and relax by the pool', 'Evening walk at the nearby beach'] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of famous North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'South Goa Sightseeing', points: ['Private-vehicle tour of South Goa', 'Time at the white sandy beaches', 'Free evening at leisure'] },
      { title: 'Leisure & Departure', points: ['Relaxed morning and breakfast', 'Drop at the airport / railway station'] },
    ],
  },
  {
    slug: '5-days-summer-gateway-goa-tour-package',
    title: '5 Days Goa Tour Package',
    badge: 'Most Popular',
    days: 5,
    nights: 4,
    rating: 4.5,
    reviews: 783,
    categories: ['couple', 'family', 'friends'],
    image: `${IMG}/heroone.jpg`,
    oldPrice: 17500,
    price: 14500,
    priceNoTransfer: 12500,
    groupPrice: 10500,
    highlights: ['North & South Goa tours', 'Island trip + scuba diving', 'Dinner cruise party', 'Beach resort with pool'],
    overview:
      'Our most booked plan. Five days that cover North and South Goa, an island trip with scuba diving and water sports, and an evening dinner cruise, all with a comfortable beach resort stay.',
    inclusions: [
      'Airport / station pickup & drop',
      'Stay at top locations near the beach',
      'Daily breakfast',
      'Stay with swimming pool',
      'North Goa sightseeing via private vehicle',
      'South Goa sightseeing via private vehicle',
      'Dinner cruise party in Goa',
      'Island trip + scuba diving & water sports',
      "Visit to Goa's famous beaches",
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your beach resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
      { title: 'South Goa Sightseeing', points: ['Private-vehicle tour of South Goa', 'Time at the white sandy beaches', 'Free evening'] },
      { title: 'Departure', points: ['Breakfast and check-out', 'Drop at the airport / railway station'] },
    ],
  },
  {
    slug: 'honeymoon-goa-tour-package',
    title: 'Goa Honeymoon Tour Package',
    badge: 'Honeymoon Special',
    days: 5,
    nights: 4,
    rating: 4.5,
    reviews: 276,
    categories: ['couple', 'honeymoon'],
    image: `${IMG}/honmoonpakg.jpg`,
    oldPrice: 20000,
    price: 15500,
    priceNoTransfer: 14000,
    groupPrice: null,
    highlights: ['Beach-side candlelight dinner', 'Island trip + scuba diving', 'North & South Goa tours', 'Dinner cruise party'],
    overview:
      'Made for newlyweds. Five days of beach time, sightseeing and adventure, with a private beach-side candlelight dinner and a dinner cruise to make the trip feel special.',
    inclusions: [
      'Airport / station pickup & drop',
      'Stay at top locations near the beach',
      'Daily breakfast',
      'Hotel stay with swimming pool',
      'North Goa sightseeing via private vehicle',
      'South Goa sightseeing via private vehicle',
      'Dinner cruise party in Goa',
      'Island trip + scuba diving & water sports',
      "Visit to Goa's famous beaches",
      'Beach-side candlelight dinner',
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Sunset walk on the beach'] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
      { title: 'South Goa & Candlelight Dinner', points: ['Private-vehicle tour of South Goa', 'Quiet time at the white sandy beaches', 'Beach-side candlelight dinner'] },
      { title: 'Departure', points: ['Breakfast and check-out', 'Drop at the airport / railway station'] },
    ],
  },
  {
    slug: '4-day-premium-goa-tour-package',
    title: '4 Day Premium Goa Tour Package',
    badge: 'Premium',
    days: 4,
    nights: 3,
    rating: 4.5,
    reviews: 183,
    categories: ['premium', 'family', 'couple'],
    image: `${IMG}/nightlightinggoa.jpg`,
    oldPrice: 16000,
    price: 14000,
    priceNoTransfer: 12000,
    groupPrice: 10500,
    highlights: ['Dudhsagar waterfall trip', 'North & South Goa tours', 'Dinner cruise party', 'Beach resort with pool'],
    overview:
      'A four-day premium plan that adds the Dudhsagar waterfall trip to North and South Goa sightseeing and a dinner cruise, with a beach resort stay and private transfers throughout.',
    inclusions: [
      'Airport / station pickup & drop',
      'Stay at top locations near the beach',
      'Daily breakfast',
      'Swimming pool',
      'North Goa sightseeing via private vehicle',
      'South Goa sightseeing via private vehicle',
      'Dinner cruise party in Goa',
      'Dudhsagar waterfall trip',
      "Visit to Goa's famous beaches",
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'Dudhsagar Waterfall Trip', points: ['Day trip to Dudhsagar waterfall', 'Return to the resort in the evening'] },
      { title: 'South Goa Sightseeing & Departure', points: ['Private-vehicle tour of South Goa', 'Drop at the airport / railway station'] },
    ],
  },
  {
    slug: 'premium-5-days-goa-tour-package',
    title: '5 Day Goa Premium Tour Package',
    badge: 'Premium',
    days: 5,
    nights: 4,
    rating: 4.5,
    reviews: 247,
    categories: ['premium', 'family', 'couple'],
    image: `${IMG}/scuba.jpg`,
    oldPrice: 19500,
    price: 16500,
    priceNoTransfer: 14500,
    groupPrice: 12500,
    highlights: ['Dudhsagar waterfall trip', 'Island trip + scuba diving', 'North & South Goa tours', 'Dinner cruise party'],
    overview:
      'Our fullest Goa plan. Five days that bring together North and South Goa, the Dudhsagar waterfall, an island trip with scuba diving and water sports, and a dinner cruise.',
    inclusions: [
      'Airport / station pickup & drop',
      'Stay at top locations near the beach',
      'Daily breakfast',
      'Swimming pool',
      'North Goa sightseeing via private vehicle',
      'South Goa sightseeing via private vehicle',
      'Dinner cruise party in Goa',
      'Dudhsagar waterfall trip',
      'Island trip + scuba diving & water sports',
      "Visit to Goa's famous beaches",
      "Visit to Goa's oldest church (UNESCO heritage)",
    ],
    itinerary: [
      { title: 'Arrival & Beach Evening', points: ['Airport / station pickup and transfer to your resort', 'Check-in and relax by the pool', 'Evening at the nearby beach'] },
      { title: 'North Goa Sightseeing & Dinner Cruise', points: ['Private-vehicle tour of North Goa beaches and forts', "Visit Goa's oldest church (UNESCO heritage)", 'Evening dinner cruise party'] },
      { title: 'Dudhsagar Waterfall Trip', points: ['Day trip to Dudhsagar waterfall', 'Return to the resort in the evening'] },
      { title: 'Island Trip, Scuba & Water Sports', points: ['Boat trip to the island', 'Scuba diving and popular water sports', 'Rest of the day at leisure'] },
      { title: 'South Goa Sightseeing & Departure', points: ['Private-vehicle tour of South Goa', 'Drop at the airport / railway station'] },
    ],
  },
];

export const getPackage = (slug) => goaPackages.find((p) => p.slug === slug);

export const exclusions = [
  'Flights or train tickets (can be arranged on request)',
  'Monument and attraction entrance fees',
  'Anything not listed under inclusions',
];

export const packageFaqs = [
  { q: 'What is included in the package?', a: 'Stay, daily breakfast, airport or station transfers, a driver, tolls and parking are included. Each package page lists its exact inclusions.' },
  { q: 'Can I customise the package?', a: 'Yes. Message us to change hotels, adjust the plan or add activities such as scuba diving, water sports or a dinner cruise.' },
  { q: 'Are flights and entrance fees included?', a: 'No. Flights can be arranged on request, and entrance fees are kept separate so you can choose which attractions to visit.' },
  { q: 'How do I book, and can I pay later?', a: 'Book on WhatsApp, by phone or by email. A book now, pay later option is available, and you receive a confirmation and invoice after booking.' },
  { q: 'What if I need to cancel or change my dates?', a: 'Cancellation terms depend on the package and how close the travel date is. Date changes depend on availability. Please ask us before you book.' },
  { q: 'Will I get support during the trip?', a: 'Yes. You get 24/7 support and contact details, including driver details in advance, with your booking confirmation.' },
];
