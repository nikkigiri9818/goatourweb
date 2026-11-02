// Har activity ka extra detail (details page ke liye). Key = slug.
// Ye general jaankari hai. Client se asli timing, age limit, inclusions confirm karke yahin badal dena.
const COMMON_CARRY = ['Swimwear and a towel', 'Change of clothes', 'Sunscreen and sunglasses', 'Photo ID'];

export const goaAdventureInfo = {
  'best-scuba-diving-in-goa': {
    overview:
      'Dive with a trained instructor at Grand Island, one of the best places for scuba in India. You do not need to know swimming or have diving experience. A short briefing and practice session comes first, then you explore the underwater world with your instructor beside you.',
    facts: [['Level', 'Beginners welcome'], ['Place', 'Grand Island, by boat'], ['Best season', 'October to May'], ['Age and health', 'Confirmed at booking']],
    included: ['Boat trip to the island', 'Briefing from an instructor', 'Diving equipment', 'Instructor with you underwater'],
    carry: COMMON_CARRY,
    rules: ['Not suitable if you have heart, breathing, ear or sinus problems', 'Avoid alcohol before the dive', 'Sea conditions can change the plan; we will suggest another day'],
  },
  'watersports-in-goa': {
    overview:
      'Goa\'s beaches are made for thrill seekers. Choose your rides and enjoy a full 2-hour slot with a watersports coordinator looking after you from start to finish.',
    facts: [['Slot', '2 hours'], ['Rides', 'Pick your combination'], ['Best season', 'October to May'], ['Good for', 'Friends, couples and families']],
    included: ['Guidance from a watersports coordinator', 'Life jackets for every ride', 'Your chosen rides within the slot'],
    carry: COMMON_CARRY,
    rules: ['Follow the crew\'s instructions on every ride', 'Rides can pause in rough sea or bad weather', 'Tell us before booking if you have any health issue'],
  },
  'cruise-party-in-goa': {
    overview:
      'End your day on the water with a dinner party cruise. Good food, music and dancing make it a good evening for couples, families and groups.',
    facts: [['Timing', 'Evening'], ['Includes', 'Dinner, music and dancing'], ['Area', 'North Goa'], ['Good for', 'Couples, families, groups']],
    included: ['Cruise ride', 'Dinner on board', 'Music and dancing'],
    carry: ['Photo ID', 'Light jacket for the breeze', 'Comfortable clothes and footwear'],
    rules: ['Exact timing and menu are shared when you book', 'Cruise can be rescheduled in bad weather'],
  },
  'dudhsagar-waterfall-trip': {
    overview:
      'Visit Goa\'s most famous waterfall, then go on a jungle safari through the tropical forest of Mollem National Park. A full-day trip for nature lovers and families.',
    facts: [['Place', 'Mollem National Park'], ['Best season', 'After monsoon, October to February'], ['Trip type', 'Full day'], ['Good for', 'Families and nature lovers']],
    included: ['Dudhsagar waterfall visit', 'Jungle safari', 'Mollem National Park and Mahaveer Wildlife Sanctuary'],
    carry: ['Comfortable walking shoes', 'Swimwear and a change of clothes', 'Water bottle and a cap', 'Photo ID'],
    rules: ['Access can close during heavy rain', 'Stay with your guide and keep the forest clean', 'Carry cash for small local expenses'],
  },
  'flyboarding-in-goa': {
    overview:
      'Rise above the water on a jet-powered board. Flyboarding is one of the most exciting water sports you can add to your Goa trip, and a trainer helps you get started.',
    facts: [['Level', 'Beginners with a trainer'], ['Slot', 'Time given by the coordinator'], ['Best season', 'October to May'], ['Booking', 'Pre-book your slot']],
    included: ['Trainer and safety briefing', 'Flyboard equipment', 'Safety gear'],
    carry: COMMON_CARRY,
    rules: ['Not suitable with back, neck, heart or breathing problems', 'Slots depend on sea and weather conditions'],
  },
  'bungee-jumping-in-goa': {
    overview:
      'Feel the adrenaline rush of a bungee jump during your Goa holiday. Message us for the latest details and slots.',
    facts: [['Booking', 'Pre-book your slot'], ['Age and weight limits', 'Confirmed at booking'], ['Best for', 'Thrill seekers'], ['Details', 'Ask us on WhatsApp']],
    included: ['Safety briefing', 'Jump equipment and crew'],
    carry: ['Comfortable clothes and shoes', 'Photo ID'],
    rules: ['Age, weight and health limits apply', 'Not suitable with heart, back or neck problems'],
  },
};

export const HOW_TO_BOOK = [
  ['Send an enquiry', 'Fill the form or message us on WhatsApp with your date and number of people.'],
  ['Get the best price', 'We reply with the price and the slots that are free.'],
  ['Confirm and enjoy', 'Pay to confirm your slot, then meet your guide on the day.'],
];