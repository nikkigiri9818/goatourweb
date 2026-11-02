// Goa Adventure activities ka data.
// Content client ki site (goatourpackages.in) ke homepage se liya hai. Un 6 activity pages ko main khol nahi paaya,
// isliye price aur duration abhi khali (null) hain. Jab client se mil jaye, bas yahin bhar dena:
//   price: 2000      -> card par "From ₹2,000 per person" dikhega
//   duration: '8 Hours'
// Price null ho to card par "Best price on WhatsApp" dikhta hai.

export const ADVENTURE_BASE_PATH = '/goa-adventures';

const IMG = '/assets/img/adventure';

export const goaAdventures = [
  {
    slug: 'best-scuba-diving-in-goa',
    title: 'Scuba Diving in Goa',
    tag: 'Water Adventure',
    image: `${IMG}/best-scuba-diving-in-goa.jpg`,
    short:
      'Try scuba diving at Grand Island, one of the best places in India for it. Rock Island and Biana Beach Jetty are other popular spots.',
    highlights: ['Grand Island boat trip', 'Dolphin sightseeing', 'Snorkelling & water sports'],
    price: null,
    duration: null,
  },
  {
    slug: 'watersports-in-goa',
    title: 'Watersports in Goa',
    tag: 'Water Adventure',
    image: `${IMG}/watersports-in-goa.jpg`,
    short:
      'Goa\'s beaches are a haven for thrill-seekers. Pick your rides and enjoy a full 2-hour slot, guided by a watersports coordinator.',
    highlights: ['Parasailing with dip', 'Jet ski & speed boat', 'Banana & bumper ride', 'Kayaking, rafting & zorbing ball'],
    price: null,
    duration: '2 Hour Slot',
  },
  {
    slug: 'cruise-party-in-goa',
    title: 'Cruise Party in Goa',
    tag: 'Night Party',
    image: `${IMG}/cruise-party-in-goa.jpg`,
    short:
      'End your day on the water with a dinner party cruise, with good food, music and dancing.',
    highlights: ['Dinner on board', 'Music & dancing', 'An evening out in North Goa'],
    price: null,
    duration: null,
  },
  {
    slug: 'dudhsagar-waterfall-trip',
    title: 'Dudhsagar Waterfall Trip',
    tag: 'Nature & Wildlife',
    image: `${IMG}/dudhsagar-waterfall-trip.jpg`,
    short:
      'Visit Goa\'s most famous waterfall, then go on a jungle safari through the tropical forest of Mollem National Park.',
    highlights: ['Dudhsagar waterfall', 'Jungle safari', 'Mollem National Park', 'Mahaveer Wildlife Sanctuary'],
    price: null,
    duration: null,
  },
  {
    slug: 'flyboarding-in-goa',
    title: 'Flyboarding in Goa',
    tag: 'Water Adventure',
    image: `${IMG}/flyboarding-in-goa.jpg`,
    short:
      'Rise above the water on a jet-powered board. One of the most exciting water sports you can add to your Goa trip.',
    highlights: ['Jet-powered thrill', 'Slot timings by coordinator', 'Pre-book your slot'],
    price: null,
    duration: null,
  },
  {
    slug: 'bungee-jumping-in-goa',
    title: 'Bungee Jumping in Goa',
    tag: 'Extreme Thrill',
    image: `${IMG}/bungee-jumping-in-goa.jpg`,
    short:
      'Feel the adrenaline rush of a bungee jump during your Goa holiday. Message us for the latest details and slots.',
    highlights: ['Adrenaline rush', 'Pre-book your slot', 'Ask us for details'],
    price: null,
    duration: null,
  },
];

export const getAdventure = (slug) => goaAdventures.find((a) => a.slug === slug);